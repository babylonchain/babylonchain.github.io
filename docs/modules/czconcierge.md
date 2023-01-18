---
id: czconcierge
sidebar_label: Zone Concierge Module
hide_table_of_contents: true
---

# CZ Concierge Module

This page describes the zone concierge module in Babylon.

## Summary

The zone concierge module is responsible for providing BTC timestamps to headers from other Cosmos zones.
These BTC timestamps allow Cosmos zones integrating with Babylon to achieve Bitcoin security, i.e., forking a Cosmos zone is as hard as forking Bitcoin.
To receive Cosmos zones' headers, the zone concierge module leverages the light clients in the IBC protocol.
Specifically, on top of the original [IBC-Go](https://github.com/cosmos/ibc-go) implementation, Babylon adds a hook that forwards headers with a valid quorum certificate to the zone concierge module.
Upon a header from IBC, zone concierge then stores the header's metadata in the KV store.
When the epoch that stores this header's metadata is finalized by Bitcoin, the header is consequently finalized by Bitcoin as well.

## Problem statement

Babylon aims at providing Bitcoin security to other Cosmos zones.
To this end, Babylon needs to checkpoint itself to Bitcoin, and checkpoint other Cosmos zones to itself.
The {epoching, checkpointing, BTCCheckpoint, BTCLightclient} modules jointly provide the functionality of checkpointing Babylon to Bitcoin.
The zone concierge module and the IBC modules jointly provide the functionality of checkpointing Cosmos zones to Babylon.

In order to checkpoint Cosmos zones to Babylon, Babylon needs to receive, verify and index headers of Cosmos zones, including the canonical headers and fork headers.
Checkpointing canonical headers allows Babylon to act as a canonical chain oracle.
Checkpointing fork headers allows Babylon to identify dishonest majority attacks and slash equivocating validators.
This task is delegated to the zone concierge module in Babylon.

Specifically, the zone concierge module aims at providing the following guarantees

- Babylon timestamps all Cosmos zones' headers relayed by the IBC relayer, regardless whether they are on CZ canonical chains or not.
- For any CZ header, Babylon can provide a proof that the CZ header is checkpointed by {Babylon, BTC}, where the proof is verifiable assuming access to Babylon/BTC light clients.

under the following assumptions:

- BTC is always secure with the k-deep confirmation rule
- Babylon might have dishonest majority
- Cosmos zones might have dishonest majority
- There exists >=1 honest IBC relayer and >=1 vigilante {submitter, reporter}
- The network is synchronous (i.e., messages are delivered within a known time bound)



## Design

Babylon implements the zone concierge module in order to checkpoint headers of Cosmos zones.
Specifically, the zone concierge module

- leverages IBC light clients for receiving and verifying headers from Cosmos zones
- intercepts and indexes headers from Cosmos zones
- provides proofs that a header is finalized by Bitcoin



### IBC light client for checkpointing Cosmos zones

Babylon leverages the IBC protocol to receive and verify headers of Cosmos zones.
In a pair of Cosmos zones with an IBC channel, each Cosmos zone maintains the counterparty zone's light client, exchanges IBC packets from each other, and verifies inclusions of IBC packets with assistance of the light client.
While being useful for verifying IBC packets, the light client can also be used for checkpointing Cosmos zones.
TODO

### Intercepting and indexing headers from Cosmos zones

TODO

### Providing proofs that a header is finalized by Bitcoin

TODO

## Further integrations

TODO: phase2/3 zone concierge