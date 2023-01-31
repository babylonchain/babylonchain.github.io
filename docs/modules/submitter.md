---
id: submitter
sidebar_label: Vigilante Submitter Program
hide_table_of_contents: true
---

# Vigilante Submitter

This page describes the vigilante submitter program.

## Summary

The vigilante submitter is a separate program that is responsible for submitting checkpoints from Babylon to BTC periodically.
To submit a checkpoint to Bitcoin, the Babylon system needs to encode a checkpoint to two transactions and submit them to BTC.
It is a critical piece to ensure the liveness of Babylon.
We need to ensure that at least one submitter is working in the Babylon network.

## Problem Statement

The vigilante submitter needs to convert a raw checkpoint to BTC transactions and send them to BTC.
It also needs to ensure that all the `SEALED` checkpoints will be eventually submitted to BTC.
Further, since submitting checkpoints costs real Bitcoin to pay the miners, the submitter needs to minimize the cost and duplicate submissions.

## Design

The vigilante submitter program makes the following design decisions:

- [Extracting Checkpoints](#extracting-checkpoints)
- [Converting Checkpoints to BTC Transactions](#converting-checkpoints-to-btc-transactions)

### Extracting Checkpoints

In case of any failure, a checkpoint may not be successfully submitted to BTC in one shot.
To ensure a raw checkpoint will be eventually submitted to BTC, the submitter adopts a pull-based approach to repetitively submit checkpoints with the status of `SEALED` even though they have been submitted before.
The submitter uses two configurable items, `pulling-intervals` and `resend-intervals` to control the frequency of the pulling and re-sending checkpoints that have been sent before.

### Converting Checkpoints to BTC Transactions

BTC allows users to store arbitrary data in the Bitcoin blockchain via `OP_RETURN`, which is a transaction output in Bitcoin that is provably unspendable.
To avoid abuse of `OP_RETURN`, the data size carried in `OP_RETURN` is limited to less than 80 bytes.

A raw checkpoint consists of `epoch_num` (8 bytes), `last_commit_hash` (32 bytes), `bitmap` (13 bytes), and `bls_multi_sig` (48 bytes), which is 101 bytes.
Besides a raw checkpoint, we also need to include Babylon identifier (4 bytes) and the submitter's Babylon address (20 bytes) for claiming reward.

Therefore, we need at least two BTC transactions to carry a raw checkpoint.
The structure of the two `OP_RETURN` entries is shown as the following:

```protobuf
// 73 Bytes in total
message CheckpointFirst {
  int32 identifier = 0x62626E00 // 4-Byte identifier (0x62626E = BBN in text, 0x00 signals the first half)
  uint64 epoch_num // 4 Bytes, big endian
  bytes last_commit_hash // 32 Bytes
  bytes bitmap // 13 Bytes
  bytes bbn_addr // 20 bytes (for reward)
}

// 62 Bytes in total
message CheckpointSecond {
  int32 identifier = 0x62626E01 // 4-Byte identifier (0x62626E = BBN in text, 0x01 denotes the second half)
  bytes bls_multi_sig // 48 Bytes
  bytes checksum // first 10 Bytes of the Sha256 hash of CheckpointFirst
}
```
