---
id: architecture
sidebar_label: 3. Architecture
hide_table_of_contents: true
---

# 3. Babylon Architecture <a id="key"></a>

![Key Components](https://drive.google.com/uc?export=view&id=1VxBWID9K9Q1TASa5fdtnHrCHFBEzNUzr)

## Epoching <a id="epoch"></a>
A new Cosmos app module for Babylon. It epoches the Babylon blocks, and within each epoch the validator set does not change. It achieves this by delaying the execution of validator-set-changing transactions to the last block of each epoch. This way, Babylon only needs to checkpoint one block per epoch to BTC, which reduces the checkpointing costs.

## Checkpointing <a id="checkpoint"></a>
A new Cosmos app module for Babylon. It collects the BLS signatures of Babylon validators on each block to be checkpointed and aggregate them into a BLS multiSig, and prepare a checkppoint accordingly. It then maintains the confirmation status of each checkpoint and the associated epoch according to the status provided by the btccheckpoint module.

## Vigilante Submitter <a id="sub"></a>
A standalone program that submits the Babylon checkpoints to BTC as BTC op_return transactions.

## Vigilante Reporter <a id="rep"></a>
A standalone program that scans BTC ledger for Babylon’s BTC checkpoints, and reports them back to Babylon as Babylon transactions. It also reports BTC headers to Babylon as Babylon transactions.

## BTCCheckpoint <a id="check"></a>
A new Cosmos app module for Babylon. It verifies the Babylon’s BTC checkpoints reported by the vigilante reporter, and provides the confirmation status of these checkpoints to the checkpointing module based on their depth according to the on chain BTC light client. 

## BTCLightClient <a id="light"></a>
A new Cosmos app module for Babylon. This module maintains a BTC header chain and validates if a BTC block is part of the canonical BTC chain, its depth, and whether the inclusion evidence for a Bitcoin transaction is valid.

## Vigilante Master Monitor <a id="master"></a>
A standalone program that monitors:

- The consistency between the realworld BTC caononical chain and the BTC header chain maintained by  Babylon’s btclightclient module

- Whether all Babylon’s BTC checkpoints have been included in Babylon the ledger on time so that all Babylon nodes can see them.

## IBC relayer <a id="layer"></a>
A standard Cosmos program that enables interchain communicaton. Its default client update function sends a Cosmos zone (CZ)'s headers to Babylon as Babylon transactions, making it a natural checkpointing mechanism.

## IBC light client <a id="client"></a>
A standard Cosmos app module residing in Babylon. It verifies the CZ headers shared by the IBC relayer and uses the verified CZ headers to further verify CZ transactions.

## CZConcierge <a id="cz"></a>
A new Cosmos app module for Babyon. It extracts verified CZ headers from the IBC light client and maintain their BTC-confirmaton status based on the BTC-confirmation status of the Babylon transactons that carry them.
