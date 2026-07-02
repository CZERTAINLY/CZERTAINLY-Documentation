---
sidebar_position: 10
---

# Limitations

This page covers the operational limits of timestamping: the throughput, longevity, and instance ID constraints imposed by the serial-number generator, and the cascade behaviour that occurs when dependent resources are deleted while a `Signing Profile` still references them.

---

## Throughput

The serial-number generator imposes a throughput ceiling of **25,600 tokens per second per instance**. This ceiling is per-instance; horizontally scaled deployments multiply it by the number of replicas.

## Longevity

The 40-bit timestamp field used by the serial-number generator overflows around the year **2374**. Requests are rejected once the field would overflow.

## Instance ID configuration

In replicated deployments, each replica must carry a distinct instance ID to prevent duplicate serials. Incorrect configuration causes confirmed non-repudiation failures that require manual audit and token reissuance, and there is no runtime detection of such collisions.

For the full description of the serial-number generator — bit layout, clock-regression handling, instance ID configuration, and deployment setup — see [Serial number generator](./serial-number-generator.md).

---

## Deletion protection

A Signing Profile binds a number of other resources — its TSA signing certificate, Token Profile, RA Profile, delegated-signer and signature-formatting connectors, Time Quality Configuration, and TSP Profile (see the [entity-relationship diagram on the Signing Profile page](/docs/signing/signing-profile#relationships)). While any of these is still referenced, the platform **will not let it be deleted**, so a profile can never be left pointing at something that no longer exists.

To retire one of these resources, first update or delete every Signing Profile (version) that references it, then delete the resource. To delete the Signing Profile itself, first make sure no TSP Profile names it as its default and no signing records exist against any of its versions.
