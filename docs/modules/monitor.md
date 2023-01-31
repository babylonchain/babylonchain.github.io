---
id: monitor
sidebar_label: Vigilante Monitor Program
hide_table_of_contents: true
---

# Vigilante Monitor

This page describes the vigilante monitor program.

## Summary

The Monitor is a separate process running alongside a Babylon node.
The responsibility of the Monitor to constantly check (1) consistency between the Babylon node and BTC,
and (2) whether the blockchain is under liveness attack.
Once a critical issue is found, it raises an alarm to the user who decides whether to stall the blockchain.
Running a Monitor is optional but highly recommended since it ensures a Babylon node is in a healthy state.

## Problem Statement

The Monitor aims to provide the following properties:

- BTC header chain safety and liveness.
It ensures that the BTC header chain maintained by btclightclient is live and consistent with the BTC canonical chain.
- Babylon checkpoint chain safety and liveness.
It ensures that the checkpoint chain of the Babylon node is live and consistent with that submitted to BTC canonical chain.

## Design

The Monitor can be started at any time after the Babylon node is started.
The Monitor initiates by reading some parameters from the genesis file, i.e., validator BLS key set, base BTC height.
Then it goes through a bootstrapping procedure to process checkpoints that have already been submitted to BTC.
After that, it is driven by newly mined BTC blocks.
Note that the monitor only processes a BTC block when it is `k-deep` where `k` is a configurable parameter.

The vigilante monitor program makes the following design decisions:

- [Consistency Check](#consistency-check)
- [Liveness Check](#liveness-check)

In the following description, when we say upon a BTC block, it means the block is already `k-deep`.

### Consistency Check

The workflow of the Monitor checking consistency of the Babylon ledger against BTC upon a new BTC block is described as the following:

1. Compare the BTC header with the header at the same height from Babylon.
If they do not match, the alarm is raised.
If the header does not exist in Babylon, send the alarm.

2. Upon a BTC checkpoint found (ignore checkpoints with higher epochs than the current epoch)
   - the Monitor verifies the checkpoint using the validator BLS key set 
     - if the BLS sig is valid, continue 
     - otherwise, skip this checkpoint 
   - query the checkpoint from Babylon and checks whether the two checkpoints match on LastCommitHash 
     - if matched, extend the checkpoint chain, increase the current epoch, continue 
     - otherwise, or the Babylon node does not have the checkpoint at the same epoch, the alarm is raised 
   - it updates the validator BLS key set by querying the Babylon node 
     - an alarm is raised if the Babylon node does not have the validator BLS key set for the next epoch

### Liveness Check

#### Definition

The Monitor should alarm if any of the unique checkpoints (the same checkpoints can have different submitters) with a valid BLS signature is not reported to Babylon within a period of time,
which is measured by BTC height.
We first define some marks of the lifecycle of a unique checkpoint (measured by BTC height):

- **H1**: the tip height of `btclightclient` when the relevant epoch ends (obtained from Babylon)
- **H2**: the BTC height at which the checkpoint first appears on BTC (obtained from BTC)
- **H3**: the tip height of `btclightclient` when the checkpoint is reported as a submission (obtained from Babylon)
- **H4**: the current tip height of `btclightclient` when asked (obtained from Babylon)

We decide a checkpoint is under liveness attack if:
- Happy case (H3 > H2 > H1)
  - H3 - H1 > X (the checkpoint is received by `btccheckpoint`)
  - H4 - H1 > X (the checkpoint is not received by `btccheckpoint`)
- Unhappy case (H2 < H1, the checkpoint is forked and submitted before epoch ends)
  - H3 - H2 > X (the checkpoint is received by `btccheckpoint`)
  - H4 - H2 > X (the checkpoint is not received by `btccheckpoint`)

For short, we decide a checkpoint is under liveness attack if:
- H3 - min(H1, H2) > X (the checkpoint is received by `btccheckpoint`)
- H4 - min(H1, H2) > X (the checkpoint is not received by `btccheckpoint`)

#### Bookkeeping

The monitor uses the following table for bookkeeping.
For each newly scanned checkpoint with a valid BLS sig, the monitor records its epoch number, H2 and the status of `not_reported`

| Epoch |  Checkpoint id | H2  | Status       |
|-------|---|-----|--------------|
| 1     |   | 10  | reported     |
| 2     |   | 20  | reported     |
| 3     |   | 30  | not_reported |

We implement a new module called `monitor` in Babylon to provide all the data (e.g., H1, H3, H4) that is needed by the vigilante Monitor.

#### Workflow

For every t seconds (a configurable parameter), the Monitor identifies `not_reported` checkpoints and asks btccheckpoint to check whether each checkpoint is reported:
- If so, check the `gap = H3 - min(H1, H2)`; 
  - if `gap > X`, change the status to `censored` and send the alarm. 
  - Otherwise, change the status to `reported` and check the next checkpoint 
- Otherwise, check the `gap = H4 - min(H1, H2)`; 
  - if `gap > X`, change the status to `censored` and send the alarm. 
  - Otherwise, check the next checkpoint
