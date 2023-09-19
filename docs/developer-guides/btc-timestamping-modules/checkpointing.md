---
id: checkpointing
sidebar_label: Checkpointing Module
hide_table_of_contents: true
---

# Checkpointing Module

Learn what the Babylon Checkpointing Module is and how it operates.

---

## Summary

The Checkpointing module is responsible for generating and maintaining checkpoints for each epoch.
These checkpoints will be submitted to BTC by [vigilante submitters](./submitter) once having accumulated sufficient voting power via BLS signatures.
This module plays a critical role in Babylon's security story as it produces a canonical sequence of epochs.

## Problem Statement

Babylon's checkpointing is to empower Babylon with BTC-level security by perpetuating the Babylon ledger on BTC.
The checkpointing module needs to generate a succinct checkpoint that involves sufficient voting power for each epoch.
For the above purpose, the Checkpointing module adopts the [BLS signature scheme](https://datatracker.ietf.org/doc/html/draft-boneh-bls-signature-00) which aggregates multiple signatures into a single signature.
With the help of BLS signatures, a checkpoint is fixed in size and can be converted into two BTC transactions in the `OP_RETURN` field with a limit of 80 bytes.
Therefore, the checkpointing module needs to handle all the messages related to BLS signatures such as signing, verifying and accumulating BLS signatures.

## Design

The Checkpointing module makes the following design decisions:

- [Validator registration](#bls-key-registration)
- [Sending and processing BLS signatures](#sending-and-processing-bls-signatures)
- [Checkpoint status change](#checkpoint-status-change)
- [Checkpoint verification and panicking](#checkpoint-verification-and-panicking)

### BLS Key Registration

Each validator must register its BLS public key before voting in the Babylon network.
Each validator can only register a unique BLS public key, which can only be registered by a unique validator.
The registration requires the validator to provide its BLS public key as well as proof which proves its ownership of this key (proof-of-possession, or PoP).
The PoP is needed to defend against [rogue key attacks](https://eprint.iacr.org/2021/377.pdf), in which a specially crafted public key (the "rogue" key) is used to forge an aggregated signature.
The purpose of PoP is to prove that one validator owns the corresponding BLS private key and the corresponding Ed25519 private key associated with the public key used in Tendermint consensus.
The PoP is calculated as the following:

`PoP = sign(key = BLS_sk, data = sign(key = Ed25519_sk, data = BLS_pk)].`

### Sending and Processing BLS Signatures

The Checkpointing module is initiated with a BLS signer which signs a BLS signature at each epoch boundary and sends it to Tendermint for consensus.
The signature is signed over `epoch_number` concatenated with `last_commit_hash` obtained from the epoch boundary block's [header](https://github.com/tendermint/spec/blob/8dd2ed4c6fe12459edeb9b783bdaaaeb590ec15c/spec/core/data_structures.md).
Upon receiving a BLS signature transaction, the Checkpointing module accumulates the voting power of the signature for a specific epoch.
Once sufficient signatures are accumulated (e.g., > 1/3 in terms of voting power),
the checkpoint will become `SEALED` and no longer accumulate new signatures.

### Checkpoint Status Change

Checkpoints are maintained by the checkpointing module with five statuses: `ACCUMULATING`, `SEALED`, `SUBMITTED`, `CONFIRMED`, and `FINALIZED`.
We describe the checkpoint status change as below.

At each epoch boundary, the Checkpointing module generates an empty checkpoint of this epoch with `ACCUMULATING`.
Once it accumulates sufficient voting power, the checkpoint changes the status to `SEALED`, waiting for a [vigilante submitter](./submitter) to submit it to BTC.
When a valid checkpoint is reported back to Babylon, meaning that the checkpoint has been submitted to BTC, the status of the checkpoint is changed to `SUBMITTED`.
If a `SUBMITTED` checkpoint is observed on a forked BTC chain (non-canonical chain), the status will be reverted back to `SEALED`.

When a checkpoint receives sufficient confirmations (e.g., k-deep) on the BTC header chain maintained by the `btclightclient` module, its status will be changed to `CONFIRMED`.
Similarly, as the header chain grows, a checkpoint will eventually change its status to `FINALIZED` when more confirmations are received (e.g., up to w-deep).
The last three statuses are controlled by the `btccheckpoint` module and the `btclightclient` as the Checkpointing module requires BTC information from them.

### Checkpoint Verification and Panicking

The Checkpointing module verifies raw checkpoints reported from BTC to Babylon by a [vigilante reporter](./reporter).
Reported checkpoints are first processed by the `btccheckpoint` module for decoding and then sent to the Checkpointing module for verification.
The verification workflow is as the following:
1. check whether the BLS signature of the checkpoint is valid,
2. check whether the BLS signature has accumulated sufficient voting power, and
3. check whether the signed `last_commit_hash` of the checkpoint equals to that of the corresponding checkpoint at the same epoch stored locally.

Step 3 is a critical step to detect forks. If Step 1 and Step 2 pass but Step 3 does not, it means that a fork exists and the validator should panic.
