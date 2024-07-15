---
id: deployment-overview
sidebar_label: Deployment Overview
hide_table_of_contents: true

---
# Overview of Bitcoin Staking backend deployment

This guide is structured as follows:

1. Deployment Overview: a high-level overview of the deployment processes,
including the main components and their roles within the system.
It gives a brief introduction to what will be covered
and the overall flow of the deployment steps.
2. [Hardware-requirements](./hardware-requirements.md):
Details the hardware requirements.
3. [Required Infrastructure Services Setup](./infra/overview.md):
This section covers the installation and configuration of essential services
4. [BTC Staking Backend Services Setup](./services/overview.md):
After setting up the required infrastructure,
proceed with the installation and configuration of the BTC staking backend services.
5. [Global System Configuration](./global-system-configuration.md):
Includes system-wide Staking parameters.

The Babylon's Bitcoin Staking system comprises the following components:

- BTC Staking Indexer: Parses BTC blocks for valid staking, unbonding,
and withdrawal transactions, and forwards relevant events to a queueing system,
while also persisting them to an on-disk key-value storage
- RabbitMQ: Houses a set of queues containing BTC Staking transactions
- Staking API Service: Consumes BTC Staking transactions
from the RabbitMQ queues and stores them in a central data store,
additionally accepting unbonding requests
- MongoDB: Stores BTC Staking transaction data
- Staking Expiry Checker: Periodically checks MongoDB
for expired BTC Stake Delegations and Unbondings
- Unbonding Pipeline: Forwards unbonding requests
for signing to a Covenant Emulator committee and submits them to BTC
Staking Dashboard: UI that allows for creating BTC Staking transactions,
connects to the API to retrieve information about the system and historical delegations
- Covenant Signer: Receives unbonding transactions and returns the same
transactions signed by the covenant emulator's key
- Bitcoin Full Node: Operates an emulated regtest Bitcoin network
- Bitcoin Offline Wallet: Stores the Covenant Signer member keys
and signs unbonding transactions forwarded by the Covenant Signer
- A Global Configuration file that contains system-wide parameters pertinent
to the processed Staking transactions
- A Finality Provider config file that contains information
about finality providers participating in the system

![Overview of Bitcoin Staking backend deployment](images/phase-1-overview.png)
