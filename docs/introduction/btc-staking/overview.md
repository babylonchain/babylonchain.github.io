---
id: overview
sidebar_label: Bitcoin Staking
hide_table_of_contents: true
---

import Paperclip from "/img/paperclip.svg";

# Bitcoin Staking

Babylon's Bitcoin staking protocol allows bitcoin holders to stake their bitcoin for PoS blockchains, without needing any third-party custody/bridge/wrapping.
It provides slashable economic security guarantees to the PoS chains while ensuring efficient stake unbonding to enhance liquidity for Bitcoin holders.
This protocol is designed as a modular plug-in compatible with various PoS consensus protocols and serves as a foundational component for building restaking protocols.

<div class="pdf-file-banner">
  <a class="link" target="_blank" href="/papers/btc_staking_litepaper.pdf">
    <div class="icon-holder">
      <Paperclip class="icon" alt="paper clip" />
    </div>
    <div class="info">
      <p class="title">BTC staking litepaper</p>
      <p class="subtitle">PDF</p>
    </div>
    <p class="size">4.7MB</p>
  </a>
</div>

## Security guarantees

Babylon's Bitcoin staking protocol achieves the following security properties:

- **Fully Slashable PoS Security:** In the event of a safety violation, 1/3 of the Bitcoin stake is guaranteed to be slashed.
- **Staker Security:** Staked bitcoins are guaranteed to be safe and withdrawable, as long as the staker (or the validator it delegates to) follows the protocol honestly.
- **Staker Liquidity:** Unbonding of the staked bitcoin is guaranteed to be secure and fast without the need of social consensus.

## Bitcoin staking workflow

From a Bitcoin staker's perspective, the Bitcoin staking protocol works as follows:

1. **Staking bitcoin:** the staker initiates the process by sending a staking transaction to the Bitcoin chain, locking her bitcoin in a self-custodian vault. More specifically, it creates a UTXO with two spending conditions: 1) timelock after which the staker can use her secret key to withdraw, and 2) burning this UTXO through a special extractable one-time signature (EOTS). In case of delegation, this EOTS belongs to the validator the stake delegates to.
2. **Validation on PoS Chain:** Once the staking transaction is confirmed on the Bitcoin chain, the staker (or the validator the staker delegates to) can start validating the PoS chain and signing votes valid blocks using the EOTS secret key. During her validation duty, there are two possible paths:
   - **Happy Path:** In the honest scenario, the staker follows the protocol and earns yield. The staker can then unbond via two approaches: 1) wait for the existing timeclock to expire and then withdraw; or 2) submit an unbonding transaction to Bitcoin, which will unlock the bitcoin and return it to her after a parameterized unbonding period.
   - **Unhappy Path:** If the staker behaves maliciously, e.g., participates in double-spending attacks on the PoS chain, the staking protocol ensures her EOTS secret key is exposed to the public. Consequently, anyone can impersonate the staker to submit a slashing transaction on the Bitcoin chain and burn her bitcoin. This unhappy path ensures that safety violations are penalized, maintaining the overall integrity of the system.

## Bitcoin staking core design

The [litepaper](/papers/btc_staking_litepaper.pdf) elaborates the core concepts that enable Bitcoin staking. Here we extend the concepts and describe Bitcoin staking from a system perspective.
The Bitcoin staking protocol introduces a mechanism to facilitate slashing in response to safety violations.
This mechanism revolves around the exposure of the staker's secret key whenever a safety violation occurs.
We combine two concepts to achieve this:

- Accountable assertions from cryptography, and
- Finality gadgets from blockchain consensus

We employ extractable one-time signatures (EOTS) to realize accountable assertions, where using the same secret key to sign different blocks at the same height results in secret key leakage.
We introduce an additional signing round after the base consensus protocol, called the finality round. A block is considered finalized only if it receives EOTS signatures from over 2/3 of the bitcoin stake.
All safety violations of the consensus can be reduced to double signing in this round.
If there is a safety violation in this modified protocol, then more than 1/3 of the bitcoin stake has signed two blocks at the same height using EOTS.
This leads to the extraction of the secret keys of those stakers.
The EOTS signature scheme can be implemented by Schnorr signatures, which is natively supported by Bitcoin.
Hence these extracted secret keys can be used to slash the staked bitcoin.

This modular approach can be applied to various BFT consensus protocols without altering the base protocols themselves, making it compatible with different PoS blockchains.
