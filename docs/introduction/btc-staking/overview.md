---
id: overview
sidebar_label: Bitcoin Staking
hide_table_of_contents: true
---

# Bitcoin Staking

Babylon's Bitcoin staking protocol allows bitcoin holders to stake their bitcoin for PoS blockchains, without needing any third-party custody/bridge/wrapping.
It provides slashable economic security guarantees to the PoS chains while ensuring efficient stake unbonding to enhance liquidity for Bitcoin holders.
This protocol is designed as a modular plug-in compatible with various PoS consensus protocols and serves as a foundational component for building restaking protocols.

<div class="pdf-banner">
  <a class="pdf-link" target="\_blank" href="/papers/btc_staking_litepaper.pdf">
    <span class="pdf-text">BTC staking litepaper</span>
    <span class="pdf-icon">PDF</span>
  </a>
</div>

## Security guarantees

Babylon's BTC staking protocol achieves the following security properties:

- **Fully Slashable PoS Security:** In the event of a safety violation, 1/3 of the Bitcoin stake is guaranteed to be slashed.
- **Staker Security:** Staked bitcoins are guaranteed to be safe and withdrawable, as long as the staker (or the validator it delegates to) follows the protocol honestly.
- **Staker Liquidity:** Unbonding of the staked bitcoin is guaranteed to be secure and fast without the need of social consensus.

## BTC staking workflow

From a BTC staker's perspective, the BTC staking protocol works as follows:

1. **Staking BTC:** the staker initiates the process by sending a staking transaction to the Bitcoin chain, locking her BTC in a self-custodian vault. More specifically, it creates a UTXO with two spending conditions: 1) timelock after which the staker can use her secret key to withdraw, and 2) burning this UTXO through a special extractable one-time signature (EOTS). In case of delegation, this EOTS belongs to the validator the stake delegates to.
2. **Validation on PoS Chain:** Once the staking transaction is confirmed on the Bitcoin chain, the staker (or validator the staker delegates to) can start validating transactions on the PoS chain by signing blocks using the EOTS secret key. During her validation duty, there are two possible paths:
   - **Happy Path:** In the honest scenario, the staker follows the protocol and earns yield. When she wishes to unbond, she requests unbonding through two possibilities: 1) TODO: timelock expired; or 2) the staker can submit an unbonding transaction on Bitcoin. It unlocks the BTC and returns it to her after a parameterized waiting period.
   - **Unhappy Path:** If the staker behaves maliciously, e.g., participates in double-spending attacks on the PoS chain, the staking protocol ensures her secret key is exposed to the public. Consequently, anyone can impersonate the staker to submit a slashing transaction on the Bitcoin chain and burn her BTC. This unhappy path ensures that safety violations are penalized, maintaining the overall integrity of the system.


## BTC staking core design

TODO: describe minimal version of the protocol with security analysis. e.g., The litepaper describes the core concepts that enable Bitcoin staking with security analysis. Below provides a summary of the working system

<!-- **Staking Contracts via Bitcoin Covenant Emulation.**
Given the absence of a smart contract layer on the Bitcoin network, our protocol leverages the Bitcoin scripting language to establish staking contracts.
These contracts consist of four key transactions:

- a staking transaction, where the input is the address of the staker’s Bitcoin and the output can be spent in one of two ways:
  - an unbonding transaction, which allows the output to be spent by the staker after a relative timelock (measuring the unbonding time) has expired. The relative lock time can be implemented by the opcode OP_CHECKSEQUENCEVERIFY;
  - a slashing transaction, which allows the staker to spend the output immediately to a burn address (unspendable output)
- an unstaking transaction, which can spend the output of the unbonding transaction after the relative timelock has expired

Our approach involves emulating Bitcoin covenants, a technique that restricts how transaction outputs can be spent.
While Bitcoin script will provide native covenant support in a future upgrade, we propose a novel, almost trustless emulation of covenants. -->

The BTC staking protocol introduces a mechanism to facilitate slashing in response to safety violations.
This mechanism revolves around the exposure of the staker's secret key whenever a safety violation occurs.
We combine two concepts to achieve this:

- Accountable assertions from cryptography, and
- Finality gadgets from blockchain consensus

We employ extractable one-time signatures (EOTS) to realize accountable assertions, where using the same secret key to sign different blocks at the same height results in secret key leakage.
By introducing an additional signing round after the base consensus protocol finalizes a block, termed as an EOTS finality gadget, we ensure that a block is considered finalized if it receives EOTS signatures from over 2/3 of the BTC stake.
If there is a safety violation in this modified protocol, then more than 1/3 of the BTC stake has signed two blocks at the same height using EOTS.
This leads to the extraction of the secret keys of those stakers.
The EOTS signature scheme can be implemented by Schnorr signatures, which is natively supported by Bitcoin.
Hence these extracted secret keys can be used to slash the staked bitcoin.

This modular approach can be applied to various BFT consensus protocols without altering the base protocols themselves, making it compatible with different PoS blockchains.

<!-- **Fast Unbonding via Bitcoin Timestamping.**
Our Bitcoin staking protocol aims to achieve fast unbonding without the need for social consensus, a common requirement in PoS blockchains with native staking.
Traditional PoS blockchains often suffer from long unbonding times, vulnerable to long-range attacks.
However, the nature of the Bitcoin chain, where removing transactions is costly, allows for fast unbonding without social consensus.
To address the challenge of synchronizing the PoS chain with the Bitcoin chain, we introduce [Bitcoin timestamping](/docs/introduction/btc-timestamping/overview.md).
This technique involves recording PoS block hashes and validator set on the Bitcoin chain, ensuring tight synchronization between the two chains.
This innovation also enables secure and fast unbonding in PoS blockchains with native staking, making Bitcoin a trusted external resource. -->
