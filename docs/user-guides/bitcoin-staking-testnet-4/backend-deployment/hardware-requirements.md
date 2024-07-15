---
id: hardware-requirements
sidebar_label: Hardware Requirements
hide_table_of_contents: true

---
# Hardware requirements

## Required Infrastructure Services

### MongoDB

:::info Note

For the most accurate and up-to-date hardware recommendations,
please refer to the official
[documentation](https://www.mongodb.com/docs/cloud-manager/tutorial/provisioning-prep/#deployment-prerequisites)

:::

A replica set cluster with at least 3 nodes is required
to ensure data redundancy and high availability.

Hardware Requirements:

- CPU: Multi-core processors.
- Memory: Minimum 4GB RAM per node.
- Storage: SSDs recommended for better performance.

The MongoDB Agent must be installed only on 64-bit architectures.

### RabbitMQ

:::info Note

For the most accurate and up-to-date hardware recommendations,
please refer to the official [documentation](https://www.rabbitmq.com/docs/production-checklist)

:::

For RabbitMQ, a multi-node cluster with at least 3 nodes is required
to ensure message durability and high availability.

Hardware Requirements:

- CPU: Multi-core processors.
- Memory: Minimum 4GB RAM per node.
- Storage: SSDs recommended for better performance.
Network: High-speed, low-latency network connection.

### Bitcoind

Hardware Requirements:

- CPU: Multi-core processor.
- Memory: Minimum 8GB RAM.
- Storage: SSDs with at least 800GB of space to accommodate the full Bitcoin blockchain.

## BTC Staking Backend Services

Each of the backend services should be hosted on separate servers
to ensure optimal performance and isolation.
Below are the suggested hardware requirements:

- CPU: Multi-core processor (4 cores minimum)
- Memory: Minimum 4GB RAM, recommended 8GB RAM
