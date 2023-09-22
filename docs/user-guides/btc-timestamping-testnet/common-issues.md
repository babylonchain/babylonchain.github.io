---
id: common-issues
sidebar_label: Common Issues
hide_table_of_contents: true
---

# Common Issues

This article provides an overview of how to handle any errors occurred when installing the Babylon Chain.

- [Common Issues](#common-issues)
  - [When Cloning Repository](#when-cloning-repository)
    - [Too Many Arguments](#too-many-arguments)
      - [Solution:](#solution)
    - [Could Not Set 'core.filemode' to 'false'](#could-not-set-corefilemode-to-false)
      - [Solution:](#solution-1)
  - [When Initializing Babylon Chain](#when-initializing-babylon-chain)
    - [No Such Directory Found](#no-such-directory-found)
      - [Solution:](#solution-2)
    - [Command 'make' Not Found](#command-make-not-found)
      - [Solution:](#solution-3)
    - [Make Build Error 1](#make-build-error-1)
      - [Solution:](#solution-4)
    - [Make Build Error 127](#make-build-error-127)
      - [Solution:](#solution-5)
    - [Genesis File Already Exists](#genesis-file-already-exists)
      - [Solution:](#solution-6)
  - [When Running A Validator](#when-running-a-validator)
    - [Why can't I {create a validator, delegate, undelegate, redelegate}?](#why-cant-i-create-a-validator-delegate-undelegate-redelegate)
    - [Why does my newly created validator/delegation not show up immediately?](#why-does-my-newly-created-validatordelegation-not-show-up-immediately)
    - [It has been many epochs but why does my validator/delegation still not show up?](#it-has-been-many-epochs-but-why-does-my-validatordelegation-still-not-show-up)
    - [Why does running a validator cost gas?](#why-does-running-a-validator-cost-gas)

## When Cloning Repository

### Too Many Arguments

```
fatal: Too many arguments.
```

This error occurs when something is wrong with the git clone syntax on your Ubuntu.

#### Solution:

Please make sure that the syntax is correct. Here is an example of the correct syntax to clone a git repository:

```
git clone https://qa12345678910@github.com/babylonchain/babylon.git
```

:::info Note
Do not forget to create your personal access token to clone a git repository.
:::

### Could Not Set 'core.filemode' to 'false'

```
fatal: could not set 'core.filemode' to 'false'
```

This error occurs when the Windows Linux System permission within the drive is denied.

#### Solution:

Restarting the system will reset the permissions. If this doesn't work, add Sudo to the syntax, as illustrated in the following code:

```
sudo git clone https://qa12345678910@github.com/babylonchain/babylon.git
```

## When Initializing Babylon Chain

### No Such Directory Found

```
No such file or directory
```

This issue happens when a make syntax is executed in the incorrect directory or path.

#### Solution:
Remember to access the cloned repository folder to initialize the Babylon Chain after cloning the repository. Here is an example of a configuration code:

```
cd /mnt/c/Users/<yourusername>/Documents/Babylond/babylon
```

### Command 'make' Not Found

```
Command 'make' not found
```

This occurs while building a chain without first installing the Make language.

#### Solution:

Install the Make language on Ubuntu by inserting the code below:

```
sudo apt install make
```

### Make Build Error 1

```
go build -mod=readonly -tags "netgo ledger" -ldflags '-X github.com/cosmos/cosmos-sdk/version.Name=babylon -X github.com/cosmos/cosmos-sdk/version.AppName=babylond -X github.com/cosmos/cosmos-sdk/version.Version=af24cf3 -X github.com/cosmos/cosmos-sdk/version.Commit=af24cf321f848619739fafa7c1f6173b0284e61f -X "github.com/cosmos/cosmos-sdk/version.BuildTags=netgo,ledger" -w -s' -trimpath -o /mnt/c/Users/kakakepan/Documents/babylon/babylon/build/ ./...
go: updates to go.mod needed, disabled by -mod=readonly
make: *** [Makefile:116: build] Error 1
```

This occurs when a Golang version lower than 1.20 has been installed. Babylon requires Golang version 1.20 or above.

#### Solution:

You need to uninstall Golang by inserting the code below on Ubuntu:

```
sudo apt-get remove golang-go
```

Next, install the latest version of Golang by inserting the code below:

```
sudo wget https://go.dev/dl/go1.20.5.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.20.5.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
source ~/.bashrc
```

### Make Build Error 127

```
make: *** [Makefile:116: build] Error 127
```

This occurs if the cloned repository already contains a Build directory when running Make Install on Ubuntu.

#### Solution:

1. Go to the cloned repository directory.
2. Remove the Build directory permanently.
3. Insert the code below to create a new Build directory:


```
make build
```

### Genesis File Already Exists

```
Error: genesis.json file already exists
```

This occurs when a genesis file already exists when initializing the Babylon Chain.

#### Solution:

Insert the code below to solve the genesis file error on Ubuntu:

```
rm -r ~/.babylond
```

## When Running A Validator

### Why can't I {create a validator, delegate, undelegate, redelegate}?

Babylon has replaced Cosmos SDK's staking module with its own epoching module.
It enables epoched staking where validator set is rotated per epoch (i.e., 900 blocks in BTC timestamping testnet), rather than per block.
Therefore, one needs to use `babylond tx epoching {delegate, undelegate, redelegate}` for delegating/undelegating/redelegating,
and use `babylond tx checkpointing create-validator` for creating a validator.

### Why does my newly created validator/delegation not show up immediately?

Babylon has applied epoched staking, such that creating validator, delegation, undelegation, redelegation requests
will be handled only upon the end of the current epoch, which includes 900 blocks in BTC timestamping testnet.

### It has been many epochs but why does my validator/delegation still not show up?

In this case, the validator/delegation request might have been rejected upon the end of that epoch.
Please try to query the block at the epoch end to see if there exists events saying that a validator/delegation request has been rejected.
One common possibility is that at the epoch end, the 

### Why does running a validator cost gas?

Apart from Tendermint consensus, Babylon validator needs to use the BLS signature to sign a checkpoint for each epoch, and submit the BLS signature to Babylon.
The BLS signature is wrapped as a Cosmos SDK transaction, leading to gas cost.
Therefore, we suggest that when running a Babylon validator, one needs to keep some balance in the validator operator's account.
