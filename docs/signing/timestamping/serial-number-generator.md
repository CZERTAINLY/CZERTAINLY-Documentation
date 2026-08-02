---
sidebar_position: 9
---

# Serial number generator

Every RFC 3161 timestamp token must carry a serial number that is unique within the issuing timestamp authority. Uniqueness is a non-repudiation requirement. If two tokens share a serial under the same authority, an auditor or relying party cannot tell them apart, and the integrity guarantee timestamping is designed to provide breaks down. ETSI EN 319 421 requires every TSP to ensure uniqueness across all the timestamp tokens it issues.

The platform generates these serial numbers using a Snowflake-style 64-bit algorithm that produces monotonically increasing, structurally unique identifiers. Serial generation is fast, as it requires no synchronization between nodes when running in a cluster.

---

## How the generator works

### Bit layout

The 64-bit identifier is partitioned into three fields with no sign bit. Bit positions count from the most-significant end (bit 63) to the least-significant end (bit 0).

| Bits | Width | Field | Meaning |
|---|---|---|---|
| 63–24 | 40 | Timestamp | 10 ms ticks elapsed since the custom epoch `2026-02-01T00:00:00Z`; valid until approximately 2374 |
| 23–8 | 16 | Instance ID | Lower 16 bits of the container's private IPv4 address, or an explicit value set via `PLATFORM_INSTANCE_ID` |
| 7–0 | 8 | Sequence counter | Per-tick counter; incremented for each serial issued within the same 10 ms window; resets to 0 on each new tick |
| — | 64 | Total | Hex-aligned; stays well within the 160-bit serial-number limit that RFC 5280 defines for certificates and that timestamping deployments conventionally observe |

### Throughput ceiling

The 8-bit sequence counter allows up to 256 serial numbers per 10 ms tick, giving a throughput ceiling of **25,600 tokens per second per instance** (256 × 100 ticks/second). This ceiling is per-instance; horizontally scaled deployments multiply it by the number of replicas, provided each replica carries a distinct instance ID.

### Clock-regression handling

The generator protects against three failure modes:

- **Sequence overflow** — when the 8-bit counter exhausts within a single 10 ms tick, the generator spin-waits for the next tick (maximum 10 ms). This wait is negligible relative to a typical timestamp request round-trip.
- **Backward clock jump** — if the system clock regresses, the generator spin-waits for the clock to catch up. If the regression exceeds **100 ms**, the request is rejected with a time not available error rather than waiting indefinitely. No serial numbers are issued during the wait period.
- **Timestamp overflow** — the 40-bit tick counter can represent 2^40 − 1 = 1,099,511,627,775 ticks. At 10 ms per tick, this covers approximately 348.6 years; starting from the epoch `2026-02-01T00:00:00Z`, the field overflows around the year **2374**. When it would overflow, the request is rejected with a system failure error.

---

## Configuration

To keep serial numbers unique and non-repudiable, you must configure the generator carefully — especially when deploying in a cluster with multiple nodes. The single configuration property relevant to timestamping is the instance ID: it can either be auto-derived by the generator or set explicitly.

### `PLATFORM_INSTANCE_ID`

`PLATFORM_INSTANCE_ID` is the environment variable that sets the 16-bit instance ID for a running replica.

| Property | Type | Default | Description |
|---|---|---|---|
| `PLATFORM_INSTANCE_ID` | Integer | Unset (auto-derived from container IP) | Instance ID in the range 0–65,535. A non-integer value or a value outside this range causes an error and prevents application startup. |

All other generator parameters — tick size (10 ms), epoch (`2026-02-01T00:00:00Z`), and maximum clock-regression tolerance (100 ms) — are compile-time constants and are not operator-tunable.

### Auto-derivation when `PLATFORM_INSTANCE_ID` is not set

When the variable is absent, the generator derives an instance ID from the container's network address at startup:

1. The generator looks up the container's non-loopback network address, preferring IPv4.
2. For an **IPv4** address, the last two octets are used. For example, `10.1.1.5` produces instance ID `(1 × 256) + 5 = 261`.
3. For an **IPv6** address, the last four bytes are folded into 16 bits.
4. If no usable address is found, startup fails with an error instructing you to set `PLATFORM_INSTANCE_ID`.

Auto-derivation is safe only when no two replicas share the same value in their last two IP octets — that is, when all replicas are assigned addresses from a network with a prefix of `/16` or narrower.

:::warning[Auto-derivation is a best-effort heuristic]
Do not rely on auto-derivation in any environment where IP address uniqueness in the last two octets is not guaranteed by your network design. Set `PLATFORM_INSTANCE_ID` explicitly in all production deployments.
:::

---

## Deployment setup

### Single instance

A single running instance is unique by construction — there is no other replica to collide with. Auto-derivation works correctly as long as the container has a non-loopback IP address.

At startup you will see a warning recommending explicit configuration. To suppress it and make the configuration intentional, set any value in 0–65,535 — the choice is arbitrary for a single instance:

```bash
PLATFORM_INSTANCE_ID=0
```

### Replicated deployment

Every replica must receive a distinct value. Scenarios that require explicit configuration include:

- Container networks using `--network host` (all containers share the host IP)
- Pod CIDRs wider than `/16` — for example, `10.0.0.0/8`, where `10.1.1.5` and `10.2.1.5` both produce instance ID 261
- Multiple clusters whose pods are drawn from separate `/16` ranges but share the same timestamp authority
- Multiple processes launched on the same host

Assign a distinct integer in 0–65,535 to each replica:

```bash
# Replica 1
PLATFORM_INSTANCE_ID=1

# Replica 2
PLATFORM_INSTANCE_ID=2
```

Values do not need to be sequential, but they must not overlap across any replicas sharing a timestamp authority. Keep a record of which replica holds which ID.

### Kubernetes StatefulSet

When deploying on Kubernetes, you can use the StatefulSet pod ordinal as `PLATFORM_INSTANCE_ID` — it provides a convenient unique value per pod.

### Helm chart

The the platform Helm chart handles instance ID assignment automatically when deploying as a StatefulSet. When deploying as a plain `Deployment` (replica count = 1 or manually managed), set `PLATFORM_INSTANCE_ID` explicitly in your chart values.

---

## Instance ID verification

On startup, the generator logs which instance ID it is using. Check these logs to confirm the derived or configured ID, to verify that no two replicas ended up with the same ID, and to catch warnings about auto-derivation that may not be safe.

The messages are logged by `SerialNumberConfiguration`. When `PLATFORM_INSTANCE_ID` is set explicitly:

```text
INFO  ... SerialNumberConfiguration - Instance ID resolved from PLATFORM_INSTANCE_ID environment variable: 5
```

When the instance ID was auto-derived from a network address:

```text
WARN  ... SerialNumberConfiguration - Instance ID derived from IP address (last 16 bits): 261 (/16). Collisions are possible in multi-cluster deployments. Set PLATFORM_INSTANCE_ID explicitly for production use.
```

When the derived ID came from a network prefix wider than `/16`:

```text
WARN  ... SerialNumberConfiguration - Instance ID derived from IP address: 261 (network /14). Pod CIDR wider than /16 — instances in this network can share the same lower 16 bits, risking duplicate certificate serial numbers. Set PLATFORM_INSTANCE_ID explicitly to avoid collisions.
```

A startup warning does not prevent the application from running, but must not be ignored in a replicated production environment.

### Detecting instance ID collisions

There is no runtime detection of instance ID collisions — care must be taken at configuration time to avoid them. Review the instance ID each replica is using in its server log, and follow the recommendations for instance ID verification and deployment setup described above.

### Clock management

The generator requires the system clock to be monotonically non-decreasing within 100 ms tolerances. Small NTP corrections are absorbed by a busy-wait. The generator does not tolerate:

- Manual `date` adjustments that move the clock backward by more than 100 ms on a running instance
- VM snapshot restores or live migrations that replay clock time
- System clocks set before the epoch (`2026-02-01T00:00:00Z`)

Run `chronyd` or `ntpd` on all timestamp-issuing hosts. Configure your hypervisor or container runtime to synchronize the guest clock from a reliable time source.

---

## Related pages

- [Troubleshooting](./troubleshooting.md) — startup failures, rejected requests, and instance ID collisions
- [Limitations](./limitations.md) — cascade deletion behavior for dependent resources
- [Configuration](./configuration.md) — full `Signing Profile` configuration reference for timestamping
- [Timestamping overview](./overview.md) — components and architecture of the timestamping engine
