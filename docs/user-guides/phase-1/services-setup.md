---
id: services-setup
sidebar_label: Services Setup
hide_table_of_contents: true
---

## Prerequisites

- A Linux-based server (Ubuntu 23.10 is used in this guide)

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
