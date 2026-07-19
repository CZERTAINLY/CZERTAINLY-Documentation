---
sidebar_position: 4
---

# Time Quality Configuration

A `Time Quality Configuration` specifies the clock-accuracy requirements for timestamping. ILM evaluates the local clock against those requirements to determine whether timestamp tokens can be issued. Each `Signing Profile` can be associated with at most one `Time Quality Configuration`. When no configuration is associated, time quality enforcement is not applied.

For the entity-relationship diagram showing how `Time Quality Configuration` relates to `Signing Profiles` and other resources, see the [entity-relationship diagram on the Signing Profile page](/docs/signing/signing-profile#relationships).

---

## Regulatory requirements

A qualified electronic timestamp must, under eIDAS Art. 42(1)(b), be based on an accurate time source linked to UTC. ETSI EN 319 421 translates this into concrete calibration and accuracy requirements for the TSP: a miscalibrated or drifted clock produces a timestamp assertion that is meaningless or misleading, regardless of the cryptographic validity of the token itself. The `Time Quality Configuration` lets operators define the policy thresholds that ILM enforces at runtime.

---

## Configuration

`Time Quality Configurations` are managed under **Settings → Time Quality Configuration**. To create or edit one, open the list, click **Add** or select an existing entry, and fill in the fields on the edit page. Each configuration can then be referenced by one or more `Signing Profiles` under the profile's [Workflow Properties tab](./configuration.md).

:::tip
Several fields below control how NTP measurements are collected and how the clock offset is computed. Before configuring them, see [NTP evaluation](./time-quality-monitor.md#ntp-evaluation) for details about how the results are evaluated.
:::

| Field | Required | Description |
|---|---|---|
| **Accuracy** | Yes | Serves two purposes: (1) the `Accuracy` value embedded in issued `TSTInfo` structures — directly affects the precision each token claims; (2) the maximum age of a stored Time Quality result before it is treated as stale — requests are rejected with `timeNotAvailable` when the last stored result is older than this value. Must be set comfortably larger than NTP check interval, or all requests will be rejected as stale. Not a clock-error threshold — permissible drift is governed separately by maximum clock drift. |
| **NTP servers** | Yes | List of NTP servers used to evaluate clock accuracy — each entry can be a hostname, an IP address, or an IP address with a port. Each server is contacted once per cycle using SNTP (RFC 4330). Multiple servers enable cross-validation and guard against a single server being unreachable or returning a bad reference. The system does not enforce server selection, but when issuing qualified timestamps, servers should be traceable to UTC to meet the accuracy requirements of eIDAS Art. 42(1)(b). |
| **NTP check interval** | Yes | Interval between successive NTP measurement cycles. Must be short enough that a fresh result is always available before the previous one goes stale — that is, it must be less than the accuracy value. Setting it to roughly half of accuracy is recommended. |
| **NTP samples per server** | Yes | Number of NTP packets sent to each server per cycle. Multiple samples reduce the effect of network jitter on the computed offset estimate. |
| **NTP check timeout** | Yes | Overall time budget for a complete check cycle. Servers that do not respond before the deadline expire are treated as unreachable for that cycle and excluded from the aggregate, which can push the cycle below minimum reachable NTP servers. |
| **Minimum reachable NTP servers** | Yes | Minimum number of NTP servers that must respond successfully per cycle for the clock to be considered well-anchored. If fewer servers respond, the time quality status is `DEGRADED` regardless of measured drift. |
| **Maximum clock drift** | Yes | Maximum allowable difference between the NTP-derived reference time and the local clock — the operator's expression of the time-source accuracy tolerance required by ETSI EN 319 421. When the measured drift exceeds this value, the time quality status is `DEGRADED` and the `Signing Profile` will not issue new timestamp tokens until the condition clears. |
| **Leap second guard** | No | When enabled, timestamp issuance is paused for the duration of an advertised leap second. During a leap second the clock is non-deterministic, which can produce duplicate or corrupted timestamp assertions. Pausing issuance for this brief window prevents those invalid tokens from being issued. Issuance resumes automatically once the leap second period ends. |

---

## Effect on timestamping

A Signing Profile references at most one Time Quality Configuration. When:

- The Signing Profile has a Time Quality Configuration associated **and** the time quality status is **DEGRADED** — the profile will not issue timestamp tokens.
- The Signing Profile has a Time Quality Configuration associated **and** the time quality status is **OK** — timestamp issuance proceeds normally.
- The Signing Profile has **no** Time Quality Configuration associated — time quality enforcement is not applied.

The [time quality evaluation](./time-quality-monitor.md#ntp-evaluation) documentation describes how each parameter contributes to the resulting status.

---

## Related pages

- [Time quality evaluation](./time-quality-monitor.md#ntp-evaluation) — how these parameters determine the time quality status
- [Signing Profile](/docs/signing/signing-profile) — how a profile associates a Time Quality Configuration

The OpenAPI specification for managing `Time Quality Configurations` can be found here: [Core API - Time Quality Configuration](/api/core-time-quality-configuration/).
