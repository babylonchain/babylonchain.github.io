---
id: epoching
sidebar_label: Epoching Module
hide_table_of_contents: true
---
import myImageUrl from './images/epoching.png';
import problem from './images/epochingprobstatement.png';
import summary from './images/epochingsum2.png';

# Epoching Module

Learn what the Babylon Epoching Module is and how it operates.

---

## Summary

<div style={{justifyContent: 'center', display: 'flex', marginBottom: '50px'}}>
    <img style={{width: "1000px"}} src={summary} alt="epochingmodule" />
</div>
The epoching module is responsible for reducing and parameterising the frequency of updating the validator set in Babylon.
The Babylon blockchain is divided into epochs, and each epoch contains a fixed number of consecutive blocks.
All staking-related messages (creating validator, delegating, undelegating, and redelegating) are enqueued to the message queue of the current epoch.
At the end of each epoch, the epoching module will execute all staking-related messages, then update the validator set w.r.t. the voting power distribution of validators.
After that, the checkpointing module will generate a checkpoint containing the commitment to the epoch's validator set, then submit the checkpoint to Bitcoin.

## Problem Statement

<div style={{justifyContent: 'center', display: 'flex', marginBottom: '50px'}}>
    <img style={{width: "1000px"}} src={problem} alt="epochingmodule" />
</div>

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

<div style={{justifyContent: 'center', display: 'flex', marginBottom: '50px'}}>
    <img style={{width: "1000px"}} src={myImageUrl} alt="epochingmodule" />
</div>

Babylon implements the epoching module in order to reduce the frequency of validator set updates, and thus the frequency of checkpointing to Bitcoin.
Specifically, the epoching module is responsible for the following tasks:

- Dividing the blockchain into epochs
- Disabling some functionalities of the staking module
- Disabling messages of the staking module
- Delaying staking-related messages (thus validator set updates) till the end of the epoch
- Releasing the unbonding queue until the corresponding epoch has been checkpointed on Bitcoin.


### Dividing the Blockchain into Epochs

The epoching mechanism introduces the concept of epochs.
The blockchain is divided into epochs, each consists of a fixed number of consecutive blocks.
The number of blocks in an epoch is called *epoch interval*, which is a system parameter.
At the moment, Babylon uses the epoch interval of 900 blocks, which take about 30 minutes.

### Disabling Functionalities of the Staking Module

Babylon disables two functionalities of the staking module, namely the validator set update mechanism and the 21-day unbonding mechanism.

In Cosmos SDK, the staking module handles staking-related messages and updates the validator set upon every block.
Consequently, the staking module updates the validator set upon every block.
In order to reduce the frequency of validator set updates to once per epoch, Babylon disables the validator set update mechanism of the staking module.

In addition, the staking module enforces the 21-day unbonding rule: an unbonding validator or delegation will become unbonded after 21 days (called *mature validators**).
Babylon departs from Cosmos SDK by employing Bitcoin-assisted unbonding that leverages Bitcoin security to achieve slashable safety, where a validator has to be slashed if performing a safety attack.
In order to implement Bitcoin-assisted unbonding, Babylon disables the 21-day unbonding mechanism as well.

In order to disable the two functionalities, Babylon disables staking module's `EndBlocker` function that updates validator sets and unbonds mature validators upon a block ends.
Instead, upon an epoch has ended, the epoching module will invoke the staking module's function that updates the validator sets.
In addition, upon an epoch has been checkpointed to Bitcoin, the epoching module will  invoke the staking module's function that unbonds mature validators.


### Disabling Messages of the Staking Module

In order to keep the validator set unchanged in the middle of epochs, the epoching module intercepts and rejects staking-related messages that affect validator sets via AnteHandler, but instead defines wrapped versions of them and forwards their unwrapped forms to the staking module upon an epoch ends.

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

### Delaying Wrapped Messages to the End of Epochs

The epoching module will handle wrapped staking-related messages at the end of each epoch.
To this end, the epoching module maintains a message queue for each epoch.
Upon each wrapped message, the epoching module performs basic sanity checks, then enqueue the message to the message queue.
When the epoch ends, the epoching module will unwrap the queued messages and forward them to the staking module.
Consequently, the staking module receives and handles staking-related messages, thus performs validator set updates, at the end of each epoch.

### Bitcoin-assisted Unbonding

Bitcoin-assisted unbonding is the mechanism that an unbonding validator or delegation becomes unbonded only when the block containing the associated unbonding request is checkpointed by Bitcoin.
The mechanism is necessary for achieving slashable safety where a validator has to be slashed if performing a safety attack.

Babylon implements the Bitcoin-assisted unbonding mechanism by invoking the staking module upon an epoch becomes checkpointed.
Specifically, the staking module's `ApplyMatureUnbondings` is responsible for identifying and unbonding mature validators and delegations that have been unbonding for 21 days, and is invoked upon every block.
Babylon has disabled the invocation of `ApplyMatureUnbondings` per block, and implements the state management for epochs.
Upon an epoch becomes finalized, the epoching module will invoke `ApplyMatureUnbondings` to unbond all unbonding validators and delegations before the end of this epoch.
