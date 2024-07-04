---
id: bitcoind
sidebar_label: Bitcoind
hide_table_of_contents: true
---
# Bitcoind node Setup

## Update and Upgrade the System

Ensure your system is up to date.

```
sudo apt update
sudo apt upgrade -y
```

## Install Dependencies

Install the required dependencies.

```
sudo apt install -y build-essential libtool autotools-dev automake pkg-config bsdmainutils python3 libevent-dev libboost-system-dev libboost-filesystem-dev libboost-test-dev libboost-thread-dev
```


## Download Bitcoin Core

Download Bitcoin Core from the official repository.

```
wget https://bitcoincore.org/bin/bitcoin-core-26.1/bitcoin-26.1-x86_64-linux-gnu.tar.gz
tar -xvf bitcoin-26.1-x86_64-linux-gnu.tar.gz
sudo cp bitcoin-26.1/bin/* /usr/local/bin/
```

## Configure bitcoind

Create a configuration file for Bitcoin Core.

```
mkdir -p ~/.bitcoin
vi ~/.bitcoin/bitcoin.conf
```

Add the following configuration to the `bitcoin.conf` file:

```
server=1
daemon=1
txindex=1
rpcuser=yourusername
rpcpassword=yourpassword
```

Save and close the file.

## Start bitcoind

Start the Bitcoin daemon.

```
bitcoind
```

## Verify bitcoind is Running

Check the status of bitcoind.

```
bitcoin-cli getblockchaininfo
```

You should see information about the blockchain, indicating that `bitcoind` is running correctly.

## Create a systemd Service for bitcoind (Optional)
Run the following command, replacing your_username with your actual username:
```
cat <<EOF | sudo tee /etc/systemd/system/bitcoind.service
[Unit]
Description=Bitcoin daemon
After=network.target

[Service]
ExecStart=/usr/local/bin/bitcoind -conf=/home/your_username/.bitcoin/bitcoin.conf
ExecStop=/usr/local/bin/bitcoin-cli stop
User=your_username
Restart=always

[Install]
WantedBy=multi-user.target
EOF
```

## Reload systemd manager configuration

```
sudo systemctl daemon-reload
```

## Enable the service to start on boot

```
sudo systemctl enable bitcoind.service
```

## Start the service

```
sudo systemctl start bitcoind.service
```