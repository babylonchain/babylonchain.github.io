---
id: staking-indexer
sidebar_label: Staking Indexer
hide_table_of_contents: true
---
# Staking Indexer
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

## Step 2: Configuration
### 2.1 Generate the default configuration:

```
sid init
```

This will create a sid.conf file in the default home directory. The default home directories for different operating systems are:
- MacOS:  `~/Users/<username>/Library/Application Support/Sid`
- Linux: `~/.Sid`
- Windows: `C:\Users\<username>\AppData\Local\Sid`

### 2.2 Update default configurations:
- [Bitcoin network](../infra/bitcoind) to run on
```
[Application Options]
; Bitcoin network to run on
BitcoinNetwork = signet
```

- Bitcoin node to connect to
```
[btcconfig]
; The daemon's rpc listening address.
RPCHost = 127.0.0.1:38332

; Username for RPC connections.
RPCUser = user

; Password for RPC connections.
RPCPass = pass
```
- [Rabbitmq cluster](../infra/rabbitmq) to connect to
```
[queueconfig]
; the user name of the queue
User = user

; the password of the queue
Password = password

; the url of the queue
Url = localhost:5672
```

## Step 3: Download global params

Download the [global-params.json](../global-params.md) and put into the default home directory
```
wget https://raw.githubusercontent.com/babylonchain/networks/main/bbn-test-4/parameters/global-params.json -O ~/.sid/global-params.json
```

## Step 4: Start staking-indexer

In case you are using the default home directory, you can start the staking-indexer running:

```
sid start
```

## Step 5: Create systemd service (Optional)

### 5.1 Create systemd service definition
Run the following command, replacing `your_username` with your actual username:
```
cat <<EOF | sudo tee /etc/systemd/system/sid.service
[Unit]
Description=Sid service
After=network.target

[Service]
Type=simple
ExecStart=$(which sid) start
Restart=on-failure
User=your_username

[Install]
WantedBy=multi-user.target
EOF
```

### 5.2 Reload systemd manager configuration

```
sudo systemctl daemon-reload
```

### 5.3 Enable the service to start on boot

```
sudo systemctl enable sid.service
```

### 5.4 Start the service

```
sudo systemctl start sid.service
```

### 6. Verify sid is running

Check sid service status:
```
sudo systemctl status sid
```
Expected log
```
Jul 04 06:49:54 your_username sid[839944]: 2024-07-04T06:49:54.798273Z        info        Starting Prometheus server        {"address": "127.0.0.1:2114"}
Jul 04 06:49:54 your_username sid[839944]: 2024-07-04T06:49:54.805957Z        info        Starting Staking Indexer App        {"module": "staking indexer"}
```