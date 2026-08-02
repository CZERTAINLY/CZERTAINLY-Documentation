---
sidebar_position: 5
---

# Time Quality Monitor

The Time Quality Monitor (TQM) evaluates whether the system clock meets the accuracy requirements for issuing RFC 3161 timestamp tokens. The platform provides the active `Time Quality Configurations` to TQM, which evaluates the configured NTP sources and reports an **OK** or **DEGRADED** result to the platform.

The platform uses the result to determine whether a `Signing Profile` associated with a `Time Quality Configuration` can issue timestamp tokens. To define the evaluation requirements, see [Time Quality Configuration](./time-quality-configuration.md).

---

## NTP evaluation

TQM runs an independent check cycle for each [Time Quality Configuration](./time-quality-configuration.md) active in the platform. Within each cycle it evaluates the NTP servers defined in that configuration in four steps:

1. **Server reachability** — TQM contacts every NTP server in parallel. Any server that does not respond or reports that its own clock is unsynchronized is excluded from further evaluation.

2. **Minimum server count** — If too few servers remain after exclusion, the result is DEGRADED. The required minimum is set in the [Time Quality Configuration](./time-quality-configuration.md).

3. **Clock drift** — TQM computes the median offset of the reachable servers against the local clock. If it exceeds the configured limit, the result is DEGRADED.

4. **Leap second consistency** — If the reachable servers disagree about an upcoming leap second, the result is DEGRADED.

All four checks must pass for the result to be **OK**. The first failure determines the reason reported to the platform.

```plantuml
@startuml
skinparam activity {
    BorderColor #1573B5
    BackgroundColor #E1F5E0
    ArrowColor #1573B5
    DiamondBorderColor #1573B5
    DiamondBackgroundColor #E1F5E0
}
skinparam shadowing false

start

:Query all configured NTP servers;

:Discard servers that do not respond
or are not synchronized;

if (No servers reachable?) then (yes)
  :DEGRADED;
  stop
else (at least one)
  if (Too few servers reachable?) then (yes)
    :DEGRADED;
    stop
  else (enough servers)
    :Compute median clock offset
    across reachable servers;
    if (Offset exceeds allowed drift?) then (yes)
      :DEGRADED;
      stop
    else (within limit)
      :Check leap second indicators;
      if (Servers disagree on leap second?) then (yes)
        :DEGRADED;
        stop
      else (consistent)
        :OK;
        stop
      endif
    endif
  endif
endif
@enduml
```

---

## How the result affects timestamping

The platform applies the latest time quality result to each `Signing Profile` associated with the evaluated `Time Quality Configuration`:

- When the result is **OK**, timestamp issuance proceeds normally.
- When the result is **DEGRADED**, the profile does not issue timestamp tokens.
- When no `Time Quality Configuration` is associated with the profile, time quality enforcement is not applied.

## Related pages

- [Time Quality Configuration](./time-quality-configuration.md) — define NTP sources and evaluation requirements
- [Troubleshooting](./troubleshooting.md) — diagnose timestamp requests rejected because time is unavailable
- [Configurable parameters](../../certificate-key/installation-guide/deployment/deployment-helm/configurable-parameters.md) — deployment and environment configuration of the Time Quality Monitor
