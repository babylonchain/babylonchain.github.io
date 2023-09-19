---
id: become-vigilante
sidebar_label: Becoming a Vigilante
hide_table_of_contents: true
---

# Becoming a Babylon Vigilante

Learn how to run the Babylon Vigilante program.

---

Vigilante programs are standalone programs that are run along-side with Babylon nodes.
People run a vigilante program in three modes, `reporter`, `submitter`, and `monitor`, each responsible to different aspects to the security of the Babylon network.

![vigilante](./images/vigilante.png#left)

## Prerequisites

First we need to have the access to a synced Babylon full node and a synced BTC full node.
To run a BTC full node, please follow the [instructions of running a `bitcoind` full node](https://bitcoin.org/en/full-node) or the [instructions of running a `btcd` full node](https://github.com/btcsuite/btcd) (an alternative full node bitcoin implementation written in Golang).
We support the connections to both.
To run a Babylon full node, please follow this [guide](./setup-node.md).

We specify the following paths:

```shell
BABYLON_PATH="path_where_babylon_is_built" # example: $HOME/Projects/Babylon/babylon
VIGILANTE_PATH="root_vigilante_dir" # example: $HOME/Projects/Babylon/vigilante
TESTNET_PATH="path_where_the_testnet_files_will_be_stored" # example: $HOME/Projects/Babylon/babylon/.testnet
```

## Configuration

Create a directory which will store the vigilante configuration,
copy the sample vigilante configuration into a `vigilante.yml` file, and
adapt it to the specific requirements.

Currently, the vigilante configuration should be edited manually.
In the future, we will add functionality for generating this file through
a script.
For Docker deployments, we have created the `sample-vigilante-docker.yaml`
file which contains a configuration that will work out of this box for this guide.

```shell
cp sample-vigilante.yml $VIGILANTE_PATH/vigilante.yml
nano $VIGILANTE_PATH/vigilante.yml # edit the config file to replace $TESTNET instances 
```

## Deploy Vigilante Locally

### Reporter

Run the vigilante reporter

```shell
go run $VIGILANTE_PATH/cmd/main.go reporter \
         --config $VIGILANTE_PATH/vigilante.yml \
         --babylon-key $BABYLON_KEY_DIR
```

where `$BABYLON_KEY_DIR` stores the keyring that will be used to submit BTC headers and checkpoints to Babylon.

### Submitter

Similarly, run the vigilante submitter

```shell
go run $VIGILANTE_PATH/cmd/main.go submitter \
         --config $VIGILANTE_PATH/vigilante.yml
```

### Monitor

The monitor mode requires the genesis file of Babylon as an additional parameter, which is stored under `$BABYLON_NODE_PATH/config/genesis.json`.
So, run the vigilante monitor

```shell
go run $VIGILANTE_PATH/cmd/main.go monitor \
         --genesis $BABYLON_NODE_PATH/config/genesis.json
         --config $VIGILANTE_PATH/vigilante.yml
```

## Deploy Vigilante Using Docker

### Reporter

Initially, build a Docker image named `babylonchain/vigilante-reporter`
```shell
cp sample-vigilante-docker.yml $VIGILANTE_PATH/vigilante.yml
make reporter-build
```

Afterwards, run the above image and attach the directories
that contain the configuration for Babylon, Bitcoin, and the vigilante.

```shell
docker run --rm \
         -v $TESTNET_PATH/bitcoin:/bitcoin \
         -v $BABYLON_NODE_PATH:/babylon \
         -v $VIGILANTE_PATH:/vigilante \
         babylonchain/vigilante-reporter
```

### Submitter

Follow the same steps as above, but with the `babylonchain/vigilante-submitter` Docker image.
```shell
docker run --rm \
         -v $TESTNET_PATH/bitcoin:/bitcoin \
         -v $BABYLON_NODE_PATH:/babylon \
         -v $VIGILANTE_PATH:/vigilante \
         babylonchain/vigilante-submitter
```

### Monitor

Follow the same steps as above, but with the `babylonchain/vigilante-monitor` Docker image.
```shell
docker run --rm \
         -v $TESTNET_PATH/bitcoin:/bitcoin \
         -v $BABYLON_NODE_PATH:/babylon \
         -v $VIGILANTE_PATH:/vigilante \
         babylonchain/vigilante-monitor
```

### Buildx

The above `Dockerfile`s are also compatible with Docker's [buildx feature](https://docs.docker.com/desktop/multi-arch/)
that allows multi-architectural builds. To have a multi-architectural build,

```shell
docker buildx create --use
make reporter-buildx  # for the reporter
make submitter-buildx # for the submitter
make monitor-buildx # for the monitor
```
