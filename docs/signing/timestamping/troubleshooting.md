---
sidebar_position: 13
---

# Troubleshooting

Common startup and request-time failures across timestamping, with their causes and fixes.

| Symptom | Cause | Fix |
|---|---|---|
| Startup fails: `No suitable network address found for instance ID` | `PLATFORM_INSTANCE_ID` is unset and no non-loopback IP is available | Set `PLATFORM_INSTANCE_ID` to any value 0–65,535 |
| Startup fails: `IllegalArgumentException` on `PLATFORM_INSTANCE_ID` | Value is not an integer, or is outside 0–65,535 | Correct the environment variable |
| TSP requests rejected with a time not available error | Clock moved backward by more than 100 ms | Re-synchronize the system clock via NTP; avoid large manual clock adjustments on a running instance |
| TSP requests rejected with a time not available error | System clock is set before `2026-02-01T00:00:00Z` | Correct the system clock |
| TSP requests rejected with a time not available error | The Time Quality Monitor is not reporting results at all, or not reporting them frequently enough, so the stored result has gone stale | Check that the Time Quality Monitor is running and successfully reporting; check that the NTP check interval is shorter than the Accuracy value — recommended at roughly half of Accuracy. See [Time Quality Configuration](./time-quality-configuration.md) |
| Brief latency spikes under burst load | 256 serials consumed in one 10 ms tick; generator spin-waiting for the next tick | Expected at very high throughput; scale horizontally if sustained above ~25,600 tokens/sec per instance |
| Duplicate serial numbers in audit logs | Two replicas share the same instance ID | Assign a distinct `PLATFORM_INSTANCE_ID` to each replica and restart; audit the affected time range for tokens that may need to be reissued |

---

## Related pages

- [Serial number generator](./serial-number-generator.md) — instance ID configuration and serial number generation
- [Time Quality Configuration](./time-quality-configuration.md) — Accuracy and NTP check interval settings
- [Time Quality Monitor](./time-quality-monitor.md) — how NTP check results are produced and reported
