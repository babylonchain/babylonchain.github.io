---
id: intro
sidebar_label: Introduction
sidebar_position: 0
pagination_prev: null
custom_edit_url: null
---

# Introduction
This article provides an overview of what Babylon is and how Babylon works on the Proof of Stake chains.

In this article:
- [1. Babylon Overview](#overview)
- [2. A Primary Usecase: Securing PoS Chains](#usecase)
    - [2.1 Long-Range Attack: A Foundamental Threat to PoS Chains](#long)
    - [2.2 Secure PoS using BTC timestamping](#time)
    - [2.3 Benefits of BTC Timestamping to PoS Chains](#benefit)
- [3. Key Components of Babylon](#key)
    - [Epoching](#epoch)
    - [Checkpointing](#checkpoint)
    - [Vigilante Submitter](#sub)
    - [Vigilante Reporter](#rep)
    - [BTCCheckpoint](#check)
    - [BTCLightClient](#light)
    - [Vigilante Master Monitor](#master)
    - [IBC relayer](#layer)
    - [IBC light client](#client)
    - [CZConcierge](#cz)

## 1. Babylon Overview <a id="overview"></a>
Babylon is a PoS (proof-of-stake) blockchain that provides secure Bitcoin timestamps to its transactions. Babylon is built using the Tendermint consensus engine and Cosmos SDK. It leverages cutting-edge cryptographic technologies and advanced Cosmos SDK features to send succinct, verifiable, and adversary-slashing checkpoints of the Babylon chain to BTC as BTC transactions. The BTC timestamps of Babylon checkpoints provide BTC-level security to all Babylon transactions.

Below is a high-level architecture of the Babylon system. Babylon can be viewed as a checkpoint verifier and aggregator. It verifies and aggregates the checkpoints submitted by its users into ones that BTC can securely timestamp.

![Alt text](https://drive.google.com/uc?export=view&id=1vbtoSy1ytLvchNTNlZ9E_uCpCYX8otwL)

This primitive enables enormous security-related use cases for the decentralized world. One motivating and primary use case is to bring BTC security to PoS chains.
## 2. A Primary Usecase: Securing PoS Chains <a id="usecase"></a>
### 2.1 Long-Range Attack: A Fundanmental Threat to PoS Chains <a id="long"></a>
By PoS chains, we refer to BFT (Byzantine-fault-tolerent) PoS chains that require a 2/3 majority vote from their validators to confirm a block. PoS chains are not supposed to fork, and when forking happens, the chain is attacked: To have 2/3 majority vote for both forks, at least 1/3 of the validators have double-voted by signing both forks, which is a prohibited behavior by the consensus protocol.

The picture below illustrates a forking attack to a hypothetical PoS chain called **“Rugpull“**.

![Forking Attack](https://drive.google.com/uc?export=view&id=1z8SSZHqa5IDmkCiUaM8iNaIlLQjTJPOo)

To deter such attacks, most PoS chains only allow accounts who have bonded their tokens (a.k.a staking) to be validators. This way, if a validator is caught double signing, its bonded stake can be slashed by the consensus protocol in both forks, causing total economical loss to this malicious validator.

This deterrence seems to provide slashable security to PoS chains. However, this requires the remaining validators to perceive both forks while the malicious validators are still bonded. Therefore, to avoid slashing, the malicious validators can first unbond from the first fork and then create the second fork from a block height where they are still validators. This way, the malicious validators will not be slashable in the first fork since they do not have a bonded stake. What’s even worse is that once the attack happens, new users of the PoS chain cannot tell which fork they should follow.

![Long-range Attack](https://drive.google.com/uc?export=view&id=1k5qC4FRSNmMVVyGSstWsN5Gq8db22ah7)

This attack is called the long-range attack, which renders PoS chains not slashable and secure. This attack is fundamental and cannot be solved by modifying the consensus protocol without an extra source of trust. To alleviate this threat, some PoS chains resort to social consensus, where the stakeholders periodically make off-chain decisions on the correct block at the latest height and ignore any other potential forks. However, this approach ties the chain's security to the participating stakeholders' subjective opinions. This approach is also called weak subjectivity, which is against the decentralization principle. In addition, since social consensus takes time, most PoS chains impose a very long stake unbonding time in the order of weeks.

### 2.2 Secure PoS using BTC timestamping <a id="time"></a>

![Secure PoS](https://drive.google.com/uc?export=view&id=1CRKDJS8uv4Ba88BiJObsxI5CViXRyPxx)

To protect the PoS chain from long-range attacks, we can checkpoint the PoS chain blocks to BTC, and implement a fork choice rule for the fork with an earlier BTC timestamp. This way, either

- The attacking fork will have a later BTC timestamp in the BTC canonical chain and will never be chosen by anyone, or

- In order to be chosen, the attacker will have to create a very long fork of BTC in which the attacking PoS fork has an earlier timestamp, which is economically impossible.

Thus, long-range attacks are neutralized by BTC timestamping.

### 2.3 Benefits of BTC Timestamping to PoS Chains <a id="benefit"></a>
Along with solving long-range attacks, the irreversible BTC timestamps of PoS blocks also provide other security benefits to PoS chains:

- **No weak subjectivity**: Bitcoin timestamps are objective. It can thus eliminate the dependency of PoS chains on social consensus and weak subjectivity.

- **Shorter Unbonding Time**: By replacing social consensus, BTC timestamping can reduce the stake unbonding time of PoS chains from weeks to one day.

- **New Chain Bootstrapping**: New PoS chains with low valuation are more vulnerable to forking attacks. BTC timestamping can help safeguard the chain alone its growth.

- **Verification of State Sync and Snapshots**: The objective truth about a PoS chain provided by BTC allows the users of the PoS chain to verify the chain state or snapshot it has downloaded from the P2P network.

- **Protecting Important Transactions**: BTC timestamps can be used to further confirm important PoS transactions at the cost of longer confirmation latency.

- **Censorship Resistance**: BTC timestamping could also be used to fight against transaction censorship in PoS chains via posting censored transactions to BTC.

However, directly checkpointing to BTC is difficult and unscalable due to BTC’s tight space and expensive transaction fees. Moreover, BTC cannot verify the checkpointed data. This motivates the creation of Babylon, which solves all the difficulties with provable security.

:::info Note

Without **Babylon**, it is difficult for any chain to directly checkpoint to **Bitcoin** due to scalability, cost, code modification, and security problems.

:::

## 3. Key Components of Babylon <a id="key"></a>

![Key Components](https://drive.google.com/uc?export=view&id=1VxBWID9K9Q1TASa5fdtnHrCHFBEzNUzr)

### Epoching <a id="epoch"></a>
A new Cosmos app module for Babylon. It epoches the Babylon blocks, and within each epoch the validator set does not change. It achieves this by delaying the execution of validator-set-changing transactions to the last block of each epoch. This way, Babylon only needs to checkpoint one block per epoch to BTC, which reduces the checkpointing costs.

### Checkpointing <a id="checkpoint"></a>
A new Cosmos app module for Babylon. It collects the BLS signatures of Babylon validators on each block to be checkpointed and aggregate them into a BLS multiSig, and prepare a checkppoint accordingly. It then maintains the confirmation status of each checkpoint and the associated epoch according to the status provided by the btccheckpoint module.

### Vigilante Submitter <a id="sub"></a>
A standalone program that submits the Babylon checkpoints to BTC as BTC op_return transactions.

### Vigilante Reporter <a id="rep"></a>
A standalone program that scans BTC ledger for Babylon’s BTC checkpoints, and reports them back to Babylon as Babylon transactions. It also reports BTC headers to Babylon as Babylon transactions.

### BTCCheckpoint <a id="check"></a>
A new Cosmos app module for Babylon. It verifies the Babylon’s BTC checkpoints reported by the vigilante reporter, and provides the confirmation status of these checkpoints to the checkpointing module based on their depth according to the on chain BTC light client. 

### BTCLightClient <a id="light"></a>
A new Cosmos app module for Babylon. This module maintains a BTC header chain and validates if a BTC block is part of the canonical BTC chain, its depth, and whether the inclusion evidence for a Bitcoin transaction is valid.

### Vigilante Master Monitor <a id="master"></a>
A standalone program that monitors:

- The consistency between the realworld BTC caononical chain and the BTC header chain maintained by  Babylon’s btclightclient module

- Whether all Babylon’s BTC checkpoints have been included in Babylon the ledger on time so that all Babylon nodes can see them.

### IBC relayer <a id="layer"></a>
A standard Cosmos program that enables interchain communicaton. Its default client update function sends a Cosmos zone (CZ)'s headers to Babylon as Babylon transactions, making it a natural checkpointing mechanism.

### IBC light client <a id="client"></a>
A standard Cosmos app module residing in Babylon. It verifies the CZ headers shared by the IBC relayer and uses the verified CZ headers to further verify CZ transactions.

### CZConcierge <a id="cz"></a>
A new Cosmos app module for Babyon. It extracts verified CZ headers from the IBC light client and maintain their BTC-confirmaton status based on the BTC-confirmation status of the Babylon transactons that carry them.