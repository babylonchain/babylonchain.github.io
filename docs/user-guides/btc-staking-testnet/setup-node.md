---
id: setup-node
sidebar_label: Setting Up a Full Node
hide_table_of_contents: true
---

# Setting Up a Full Node

Learn how to set up the full node for the Babylon system.

---

:::info Note

This guide requires having Babylon installed on a Linux System.
The instructions can be found on the [Installation page](/docs/user-guides/installation.md)
The version to install is specified at the [bbn-test-3 network info page](https://github.com/babylonchain/networks/tree/main/bbn-test-3).

:::

## 1. Initialize the Node Directory

First, initialize a node configuration directory under `~/.babylond`.
The `$NODENAME` variable specifies the name you aim to give your node.
```console
babylond init $NODENAME --chain-id bbn-test-3
```

Then, retrieve the genesis file and place it in the node directory:
```console
wget https://github.com/babylonchain/networks/raw/main/bbn-test-3/genesis.tar.bz2
tar -xjf genesis.tar.bz2 && rm genesis.tar.bz2
mv genesis.json ~/.babylond/config/genesis.json
```

## 2. Add Peers and Modify Configuration

Edit the configuration file at `~/.babylond/config/config.toml` and modify
the `seeds` and `persistent_peers` attributes to contain appropriate seeds and peers
of your choice. The full list of Babylon approved seeds and peers can be found under
the [bbn-test-3 network info page](https://github.com/babylonchain/networks/tree/main/bbn-test-3).

Edit the configuration file at `~/.babylond/config/app.toml` and modify the
`btc-network` attribute to contain the appropriate BTC network 
parameters as below.

```toml
[btc-config]
network = "signet"
```

On the same file, you can also modify the `minimum-gas-prices` attribute and
set it to a value of your choosing. For example,
```toml
minimum-gas-prices = "0.00001ubbn"
```

## 3. Setup Cosmovisor

To install the latest version of Cosmovisor
```console
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```

Create the necessary directories
```console
mkdir -p ~/.babylond
mkdir -p ~/.babylond/cosmovisor
mkdir -p ~/.babylond/cosmovisor/genesis
mkdir -p ~/.babylond/cosmovisor/genesis/bin
mkdir -p ~/.babylond/cosmovisor/upgrades
```

Copy the `babylond` binary into the `cosmovisor/genesis` folder
```console
cp $GOPATH/bin/babylond ~/.babylond/cosmovisor/genesis/bin/babylond
```

Setup a cosmovisor service:
```console
sudo tee /etc/systemd/system/babylond.service > /dev/null <<EOF
[Unit]
Description=Babylon daemon
After=network-online.target

[Service]
User=$USER
ExecStart=$(which cosmovisor) run start --x-crisis-skip-assert-invariants
Restart=always
RestartSec=3
LimitNOFILE=infinity

Environment="DAEMON_NAME=babylond"
Environment="DAEMON_HOME=${HOME}/.babylond"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"

[Install]
WantedBy=multi-user.target
EOF
```

## 4. Start the Node

```console
sudo -S systemctl daemon-reload
sudo -S systemctl enable babylond
sudo -S systemctl start babylond
```

You can check the status of the node by running
```console
systemctl status babylond
```
