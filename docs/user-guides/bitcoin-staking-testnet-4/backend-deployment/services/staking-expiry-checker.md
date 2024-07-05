---
id: staking-expiry-checker
sidebar_label: Staking Expiry Checker
---
# Staking Expiry Checker

## 1. Install Staking Expiry Checker

### 1.1 Clone the repository to your local machine from Github:

```
git clone https://github.com/babylonchain/staking-expiry-checker.git
```

### 1.2 Install the binary by running:

```
cd staking-expiry-checker
make install
```

## 2. Configuration

### 2.1 Create home directory:

```
mkdir -p ~/.staking-expiry-checker/
```

### 2.2 Copy the default configuration:

```
cp ~/staking-expiry-checker/config/config-local.yml ~/.staking-expiry-checker/config.yml
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

- [RabbitMQ cluster](../infra/rabbitmq.md) to connect to

```
queue:
  queue_user: admin
  queue_password: password
  url: "localhost:5672"
```


## 3. Start Staking Expiry Checker

You can start the staking-expiry-checker by running:

```
staking-expiry-checker --config ~/.staking-expiry-checker/config.yml
```

## 4. Create systemd service (Optional)

### 4.1 Create systemd service definition

Run the following command, replacing `your_username` with your actual username:

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

## 5. Monitoring

The service exposes Prometheus metrics through a Prometheus server. By default, the server is reachable under `127.0.0.1:2112`.