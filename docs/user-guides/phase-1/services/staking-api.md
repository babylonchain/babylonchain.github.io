---
id: staking-api
sidebar_label: Staking Api
hide_table_of_contents: true
---
# Staking Api
The Staking API Service is a critical component of the Babylon Phase-1 system, focused on serving information about the state of the network and receiving unbonding requests for further processing. The API can be utilised by user facing applications, such as staking dApps.
## Step 1: Install staking-api

### 1.1 Clone the repository to your local machine from Github:

```
git clone git@github.com:babylonchain/staking-api-service.git
```

### 1.2 Install the binary by running:

```
cd staking-api-service
make install
```

## Step 2: Configuration
### 2.1 Create home directory:
```
mkdir -p ~/.staking-api-service/
```

### 2.2 Download the default configuration:

```
wget https://raw.githubusercontent.com/babylonchain/staking-api-service/dev/config/config-local.yml -O ~/.staking-api-service/config.yml
```

### 2.3 Update default configurations:
- [MongoDB](../infra/mongodb.md) cluster to connect to
```
db:
  address: "mongodb://localhost:27017/?directConnection=true"
```

- [Rabbitmq cluster](../infra/rabbitmq.md) to connect to
```
queue:
  queue_user: admin
  queue_password: password
  url: "localhost:5672"
```

## Step 3: Download global params

Download the [global-params.json](../global-params.md) and put into the default home directory
```
wget https://raw.githubusercontent.com/babylonchain/networks/main/bbn-test-4/parameters/global-params.json -O ~/.staking-api-service/global-params.json
```

## Step 4: Download finality providers

Download the [global-params.json](../global-params.md) and put into the default home directory
```
wget https://raw.githubusercontent.com/babylonchain/networks/main/bbn-test-4/parameters/global-params.json -O ~/.staking-api-service/global-params.json
```

## Step 5: Create systemd service (Optional)

### 5.1 Create systemd service definition
Run the following command, replacing `your_username` with your actual username:
```
cat <<EOF | sudo tee /etc/systemd/system/staking-api.service
[Unit]
Description=Staking API service
After=network.target

[Service]
Type=simple
ExecStart=$(which staking-api-service)  \
          --config /home/your_username/.staking-api-service/config.yml \
          --params /home/your_username/.staking-api-service/global-params.json \
          --finality-providers /home/your_username/.staking-api-service/finality-providers.json
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
sudo systemctl enable staking-api.service
```

### 5.4 Start the service

```
sudo systemctl start staking-api.service
```

### 6. Verify staking-api is running

Check Staking-api service status:
```
sudo systemctl status staking-api
```

Expected log
```
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"debug","time":"2024-07-04T03:36:05Z","message":"Index created successfully on collection: unbonding_queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","time":"2024-07-04T03:36:05Z","message":"Collections and Indexes created successfully."}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","queueName":"active_staking_queue","time":"2024-07-04T03:36:05Z","message":"start receiving messages from queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","queueName":"expired_staking_queue","time":"2024-07-04T03:36:05Z","message":"start receiving messages from queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","queueName":"unbonding_staking_queue","time":"2024-07-04T03:36:05Z","message":"start receiving messages from queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","queueName":"withdraw_staking_queue","time":"2024-07-04T03:36:05Z","message":"start receiving messages from queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","queueName":"staking_stats_queue","time":"2024-07-04T03:36:05Z","message":"start receiving messages from queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","queueName":"btc_info_queue","time":"2024-07-04T03:36:05Z","message":"start receiving messages from queue"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","time":"2024-07-04T03:36:05Z","message":"Initiated Health Check Cron"}
Jul 04 03:36:05 your_username staking-api-service[824224]: {"level":"info","time":"2024-07-04T03:36:05Z","message":"Starting server on 0.0.0.0:8092"}
```