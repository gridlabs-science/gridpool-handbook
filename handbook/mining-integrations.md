---
id: mining-integrations
title: Mining Integrations And Compatibility
status: current
owner: Grid Labs
applies_to: adapters
last_verified: 2026-07-27
---

# Mining Integrations And Compatibility

## DATUM

DATUM was GridPool's first deployed integration because sovereign-minded OCEAN
miners already use it. It remains valuable experimental infrastructure, but it
is deprecated for the initial appliance launch because stock DATUM cannot force
the required coinbase class deterministically. GridPool's DATUM server must
still preserve coinbaser IDs, session behavior, full payout outputs, and
share-response cadence expected by clients. The client builds templates from
its Bitcoin node and submits a found block through local RPC; GridPool receives
the reward-sharing proof but is not the only block-broadcast path.

DATUM fingerprinting can select smaller coinbase classes for legacy firmware.
That is unsafe for a fixed 300-slot GridPool snapshot because truncation changes
the required payouts. The generic upstream proposal adds a forced coinbase
selection mode and explicit incompatible-client handling. An unsafe test
override may deliberately exercise firmware beyond its fingerprinted class, but
operators must warn that some firmware can hard-lock.

## Stratum V2

Header-only SV2 mining avoids sending the full coinbase to capable ASICs and
therefore avoids the central firmware-size constraint. Native SV2 is the only
promised miner transport for the initial appliance beta. The current direction
is a minimal fork of SRI's pool implementation that:

- fetches GridPool payout/snapshot data;
- constructs slot 0 per channel or uses an operator fallback address;
- serves standard or extended SV2 channels as appropriate;
- keeps ordinary vardiff shares local for telemetry;
- forwards pulse and reserve-qualifying proofs to GridPool; and
- reconstructs complete proofs before GridPool submission.

The earlier stock-JDC plus custom JDS/adapter approach was technically useful
but carried Job Declaration overhead that is unnecessary when each sovereign
miner runs its own GridPool node.

The fork currently obtains templates through Bitcoin Core mining IPC. Appliance
packaging must provide a supported template-provider path across Umbrel/StartOS
service boundaries; it must not assume a host IPC socket is exposed or bundle a
second Bitcoin node.

## Hosted Stratum V1

Hydrapool can provide a familiar endpoint for miners without DATUM. A hosted
endpoint changes the trust and operational model: its operator constructs work
and may charge a fee, while the GridPool coinbase still pays the active snapshot
directly. Public endpoints must make slot-0 attribution and fees explicit.

The early CKPool/AtlasPool path uses a small CKPool fork plus a Rust sidecar.
GridPool supplies a versioned work plan and event stream; CKPool retains each
issued job's exact coinbase; the adapter submits full proofs and batches ordinary
vardiff telemetry. GridPool mode is opt-in per connection, and any operator fee
is represented by actual deterministic slot-0 work buckets rather than trusted
metadata.

PublicPool is the next integration candidate, not a deployed adapter. Its
current NestJS/TypeScript Stratum implementation should first be mapped against
the same generic work-plan/proof contract. Ordinary solo mode and local Bitcoin
block submission must remain intact; GridPool consensus must not acquire
PublicPool-specific identity or accounting semantics.

## Direct Firmware

Experimental Bitaxe work shows a miner can fetch RPC templates from a Bitcoin
node, construct its own GridPool-compatible coinbase, and submit proofs over
HTTP without DATUM or an intermediate Stratum pool. This reduces layers but
moves template correctness, networking, and update burden into firmware.

## Compatibility Policy

Consensus does not shrink or reorder payouts to accommodate a client. A
truncated-prefix coinbase is rejected with a firmware-specific diagnostic.
Compatibility claims must name hardware, firmware/version, gateway/version,
coinbase mode, network, duration, and observed result. The public matrix is
community maintained and should distinguish suspected compatibility from tested
compatibility. Untested SV1 firmware, DATUM setups, and rental services are not
part of the initial support promise.
