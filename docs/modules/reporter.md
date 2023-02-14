---
id: reporter
sidebar_label: Vigilante Reporter Program
hide_table_of_contents: true
---

import myImageUrl from './images/reporterprogram.png';

# Vigilante Reporter

Learn what the Babylon Vigilante Reporter program is and how it operates.

---

## Summary

The vigilante reporter is a separate program that is responsible for forwarding headers and checkpoints from BTC to Babylon.
Upon a new BTC block, the reporter extracts the block header and the checkpoint (if there is one) from it, wrap them in transactions and send them to Babylon.
It is a critical piece to ensure the liveness of Babylon as it keeps the BTC header chain of Babylon to grow.
We need to ensure that at least one reporter is working in the Babylon network.

## Problem Statement

The vigilante reporter needs to continuously processes BTC blocks from the BTC height at which the Babylon checkpointing starts.
It needs to forward all the BTC headers on the canonical chain to feed the BTC header chain of Babylon.
The reporter also needs to check every transaction in a BTC block and tries to match raw checkpoints since a raw checkpoint is decoded into two different BTC transactions.

## Design

<div style={{justifyContent: 'center', display: 'flex', marginBottom: '50px'}}>
    <img style={{width: "1000px"}} src={myImageUrl} alt="vigilantereporter" />
</div>

The vigilante reporter program makes the following design decisions:

- [Bootstrapping](#bootstrapping)
- [Forwarding Headers/Checkpoints](#forwarding-headerscheckpoints)

### Bootstrapping

When a vigilant reporter is started, it needs to go through the bootstrapping process, which makes the following design decisions:

- **BTC header synchronisation**: Babylon’s BTC header chain is synchronised with the BTC full node that connects to vigilante.
If the BTC header chain of Babylon falls behind the BTC full node, the bootstrapping helps the header chain catch up.
On the other hand, if the header chain is ahead of the BTC full node, the reporter will wait until the BTC full node to catch up.
- **Header consistency**: Babylon’s `k-deep` BTC headers are consistent with the BTC full node
- **Checkpoint synchronisation**: historical checkpoints on BTC are reported to Babylon.
The reporter sends checkpoints that are not `w-deep` yet in BTC to Babylon.
The reporter also buffers all the checkpoint parts that have not been matched with a checkpoint.

### Forwarding Headers/Checkpoints

After the reporter is bootstrapped, it subscribes new BTC block events via a websocket (btcd backend) or ZeroMQ (bitcoind backend).
Upon a new BTC block, the reporter extracts the header and sends the header to Babylon.
In the meantime, it checks every transaction in a block and extracts checkpoint parts if there are any.
Recall that a raw checkpoint is split into the `OP_RETURN` field of two BTC transactions.
Therefore, once a checkpoint part is extracted from a transaction, it will be first buffered into a `checkpoint segment pool` and a raw checkpoint will be popped if there is a match. 
Once a whole checkpoint is found, the reporter wraps it along with relevant Merkle proof into a transaction and send it to Babylon.
