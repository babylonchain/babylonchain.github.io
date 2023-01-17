---
id: epoching
sidebar_label: Epoching Module
hide_table_of_contents: true
---

# Epoching Module

This page describes the epoching module in Babylon.

## Summary

The epoching module is responsible for reducing and parameterising the frequency of updating the validator set in Babylon.
The Babylon blockchian is divided into epochs, and each epoch contains a fixed number of consecutive blocks.
All staking-related messages (creating validator, delegating, undelegating, and redelegating) are enqueued to the message queue of the current epoch.
At the end of each epoch, the epoching module will execute all staking-related messages, then update the validator set w.r.t. the voting power distribution of validators.
After that, the checkpointing module will generate a checkpoint containing the commitment to the epoch's validator set, then submit the checkpoint to Bitcoin.

## Problem statement

In Cosmos SDK, the validator set can change upon every block: staking-related messages that affect the validator set’s voting power distribution (e.g., bond/unbond, delegate/undelegate/redegate, slash) can be executed in any block.
Since checkpointing the validator set to Bitcoin is necessary for Babylon to obtain Bitcoin security, the frequency of checkpointing to Bitcoin has to be same as the frequency of validator set updates.
If the validator set changes upon every block, then Babylon has to checkpoint to Bitcoin upon every new block, which is impractical given Bitcoin's block interval of 10 minutes.
In addition, the Cosmos community also observed that frequent validator set updates make it challenging to implement threshold cryptography, light clients, fair leader election, and staking derivatives, as discussed in [ADR-039](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-039-epoched-staking.md).

In order to reduce the frequency of validator set updates, a natural solution is to implement the epoching mechanism (aka epoched staking), which divides the blockchain into epochs and triggers a validator set update per epoch.
The idea of epoching was proposed and formalised in [ADR-039](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-039-epoched-staking.md), and there have been multiple efforts (https://github.com/cosmos/cosmos-sdk/pull/8829, https://github.com/cosmos/cosmos-sdk/pull/10132, https://github.com/cosmos/cosmos-sdk/pull/10173) of implementing it.
Since Babylon has some extra design goals (e.g., checkpointing epochs) and these efforts have discontinued, Babylon implements its own epoching module.

In addition, in order to achieve slashable safety, Babylon has to implement Bitcoin-assisted unbonding, where an unbonding request is finished only when the corresponding block has been checkpointed on Bitcoin.
With the epoching mechanism, all unbonding requests in an epoch will be finished upon this epoch has been checkpointed on Bitcoin.

## Design

Babylon implements the epoching module in order to reduce the frequency of validator set updates, and thus the frequency of checkpointing to Bitcoin.
Specifically, the epoching module is responsible for the following tasks:

- Disabling some parts of the existing staking module
- Dividing the blockchain into epochs
- Wraping the staking transactions
- Delaying staking-related transactions (thus validator set updates) till the end of the epoch
- Releasing the unbonding queue until the corresponding epoch has been checkpointed on Bitcoin.

### Disabling some parts of the existing staking module

TODO

### Dividing the blockchain into epochs

TODO

### Wrapping the staking transactions

In order to keep the validator set unchanged in the middle of epochs, the epoching module intercepts and rejects staking-related messages that affect validator sets via AnteHandler, but instead defines wrapped versions of them and forwards their unwrapped forms to the staking module upon an epoch ends


Recall that a Cosmos SDK module contains protobuf files for messages in transactions.
In the staking module, these messages include 

- `MsgCreateValidator` for creating a new validator
- `MsgEditValidator` for editing an existing validator
- `MsgDelegate` for delegating coins from a delegator to a validator
- `MsgBeginRedelegate` for redelegating coins from a delegator and source validator to a destination validator.
- `MsgUndelegate` for undelegating from a delegator and a validator.
- `MsgCancelUnbondingDelegation` for cancelling unbonding delegation for a delegator

Within these messages, `MsgCreateValidator`, `MsgDelegate`, `MsgBeginRedelegate`, and `MsgUndelegate` affect the validator set.
Since Babylon requires the validator set to be unchanged within an epoch, it has to avoid processing these messages in the middle of epochs.
To this end, the epoching module defines an AnteHandler to reject these messages.
Instead, it defines wrapped versions for them in the epoching module: `MsgWrappedCreateValidator`, `MsgWrappedDelegate`, `MsgWrappedBeginRedelegate`, and `MsgWrappedUndelegate`.
The epoching module receives these messages at any time, but will only process them at the end of each epoch.

### Delaying wrapped messages to the end of epochs

The epoching module will handle wrapped staking-related messages at the end of each epoch.
To this end, the epoching module maintains a message queue for each epoch.
Upon each wrapped message, the epoching module performs basic sanity checks, then enqueue the message to the message queue.
When the epoch ends, the epoching module will unwrap the queued messages and forward them to the staking module.
Consequently, the staking module receives and handles staking-related messages, thus performs validator set updates, at the end of each epoch.