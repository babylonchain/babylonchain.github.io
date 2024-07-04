---
id: staking-expiry-checker
sidebar_label: Staking Expiry Checker
hide_table_of_contents: true
---
# Staking Expiry Checker
## Step 1: Install staking-expiry-checker

### 1.1 Clone the repository to your local machine from Github:

```
git clone https://github.com/babylonchain/staking-expiry-checker.git
```

### 1.2 Install the binary by running:

```
cd staking-expiry-checker
make install
```

## Step 2: Configuration
### 2.1 Create home directory:
```
mkdir -p ~/.staking-expiry-checker/
```

### 2.2 Download the default configuration:

```
wget https://raw.githubusercontent.com/babylonchain/staking-expiry-checker/main/config/config-local.yml -O ~/.staking-expiry-checker/config.yml
```

### 2.3 Update default configurations:
- [MongoDB](../infra/mongodb.md) cluster to connect to
```
db:
  address: "mongodb://localhost:27017/?directConnection=true"
```

- [Bitcoin node](../infra/bitcoind.md) to connect to
```
btc:
  endpoint: localhost:18332
  disable-tls: false
  net-params: testnet
  rpc-user: rpcuser
  rpc-pass: rpcpass
```

- [Rabbitmq cluster](../infra/rabbitmq.md) to connect to
```
queue:
  queue_user: admin
  queue_password: password
  url: "localhost:5672"
```


## Step 3: Start staking-expiry-checker

You can start the staking-expiry-checker by running:

```
staking-expiry-checker --config ~/.staking-expiry-checker/config.yml
```

## Step 4: Create systemd service (Optional)

### 4.1 Create systemd service definition
Run the following command, replacing your_username with your actual username:
```
cat <<EOF | sudo tee /etc/systemd/system/staking-expiry-checker.service
[Unit]
Description=Staking Expiry Checker service
After=network.target

[Service]
Type=simple
ExecStart=$(which staking-expiry-checker) --config /home/your_username/.staking-expiry-checker/config.yml
Restart=on-failure
User=your_username

[Install]
WantedBy=multi-user.target
EOF
```

### 4.2 Reload systemd manager configuration

```
sudo systemctl daemon-reload
```

### 4.3 Enable the service to start on boot

```
sudo systemctl enable staking-expiry-checker.service
```

### 4.4 Start the service

```
sudo systemctl start staking-expiry-checker.service
```
