---
id: btclightclient
sidebar_label: BTC Light Client Module
hide_table_of_contents: true
---

import myImageUrl from './images/BTCLightClient.png';

# BTC Light Client Module

Learn what the Babylon BTC Light Client Module is and how it operates.

---

## Summary

The BTC light client module is responsible for maintaining a chain of Bitcoin headers
and identifying the canonical Bitcoin chain from it, much like a Bitcoin light client.
This header chain can then be used to verify the
inclusion of checkpoints in Bitcoin and to calculate the checkpoint depth. This
module is critical to Babylon, as it provides a consistent view of time
among all Babylon nodes.

## Problem Statement

Babylon nodes need to make decisions based on the state of the Bitcoin chain.
Example decisions are:
- Has a checkpoint been included in Bitcoin?
- Is this checkpoint deep enough in Bitcoin to mark it as finalized? If yes,
  the node will approve the stake unbonding request covered by it.

Each decision must be consistent among all the Babylon nodes
to make sure their application state is the same after the execution of
each Babylon block.
Thus, Babylon nodes must have a consistent view of the Bitcoin chain included as a part of their state.

The BTC light client module accomplishes this by
receiving Bitcoin headers as Tendermint-ordered Babylon transactions,
typically from a [vigilante reporter](./reporter),
and is responsible for their verification.
Once headers are added, the BTC light client module can identify the canonical chain
by calculating the chain that has the most work committed to it.
Since Tendermint guarantees consistency of
transaction orders, the BTC light client module of all Babylon nodes will
maintain the same BTC header chain.
Other modules can then query the BTC light client for checkpoint related
decision making.

## Design

<div style={{justifyContent: 'center', display: 'flex', marginBottom: '50px'}}>
    <img style={{width: "1000px"}} src={myImageUrl} alt="btclightclient" />
</div>

Below we outline the key design decisions for the BTC light client module:
- [Base Bitcoin Header](#base-bitcoin-header)
- [Inserting Bitcoin Blocks](#inserting-bitcoin-blocks)
- [Identifying the Canonical Chain](#identifying-the-canonical-chain)

### Base Bitcoin Header

The base bitcoin header is the first Bitcoin header that Babylon maintains.
This header is specified in Babylon’s genesis block, and
is a header that is sufficiently deep.
For example, for our testnet, we will use a Bitcoin header that is 100-deep inside
Bitcoin's canonical chain at the time of genesis.
Reverting such a header would require immense computational power.
We choose a 100 because Bitcoin itself uses the `100-deep` as the `COINBASE_MATURITY` value
to determine whether a coinbase reward is available to be spent.

### Inserting Bitcoin Blocks

Bitcoin blocks are inserted into the Babylon chain by submitting
a message to the BTC light client module containing the hex representation of the header.
Those headers are verified based on the following rules:
1. The header has the structure of a valid Bitcoin block.
2. The `Bits` field of the header respects the work rules [maintained by the connected Bitcoin chain](https://github.com/bitcoin/bitcoin/blob/a688ff9046a9df58a373086445ab5796cccf9dd3/src/validation.cpp#L3468) (either mainnet or testnet).
3. The hash of the header does not correspond to a hash of a header already maintained by Babylon.
4. The `PrevHash` field corresponds to a hash of a Bitcoin header that is already maintained by Babylon.

The above rules ensure that a Babylon node only accepts Bitcoin headers that would be accepted
by a Bitcoin full node or light client, with the exception of not accepting orphaned headers.
Orphan headers are headers that are not connected with any known Bitcoin block through the `PrevHash` field
which are typically accepted by Bitcoin node implementations in the hopes that the missing header with a hash
equal to `PrevHash` will be propagated at a later point.
To simplify the Babylon node, we made the design decision of not maintaining such a pool of orphan headers.

### Identifying the Canonical Chain

The BTC light client module maintains an entry in its storage corresponding to the tip
of the canonical chain based on the set of headers that it has. Along with the tip,
it stores its cumulative work, i.e. the total work for this chain of headers.

When a new header is inserted, its cumulative work is calculated as the sum of
its work (through the `Bits` field of the header) and the cumulative work of its parent header.
If this sum is more than the cumulative work of the tip of the chain,
then the new header becomes the tip.

One can identify the canonical Bitcoin chain maintained by Babylon and the corresponding depth of headers
by traversing the ancestor list of the tip of the canonical chain.
