---
id: staking-indexer
sidebar_label: Staking Indexer
hide_table_of_contents: true
---
The staking indexer is a tool that extracts BTC staking relevant data from the Bitcoin blockchain, ensures that it follows the pre-requisites for a valid staking transaction, and determines whether the transaction should be active or not. All valid staking transactions are transformed into a structured form, stored in a database, and published as events in a RabbitMQ messaging queue for consumption by consumers. The staking indexer is the enforcer of the Bitcoin Staking protocol and serves as the ground truth for the Bitcoin Staking system.
## Step 1: Install staking-indexer

### 1.1 Clone the repository to your local machine from Github:

```
git clone https://github.com/babylonchain/staking-indexer.git
```

### 1.2 Install the sid daemon binary by running:

```
cd staking-indexer # cd into the project directory
make install
```

### 1.3 Generate the default configuration:

```
sid init
```

This will create a sid.conf file in the default home directory. The default home directories for different operating systems are:
- MacOS:  `~/Users/<username>/Library/Application Support/Sid`
- Linux: `~/.Sid`
- Windows: `C:\Users\<username>\AppData\Local\Sid`

## Step 2: Download global params

In case you are using the default home directory, you can start the staking-indexer running:

## Step 3: Start staking-indexer

In case you are using the default home directory, you can start the staking-indexer running:

```
sid start
```