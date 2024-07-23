---
id: staking-api
sidebar_label: Staking API
---
# Staking API

The Staking API Service is a critical component of the Babylon Phase-1 system,
focused on serving information about the state of the network
and receiving unbonding requests for further processing.
The API can be utilised by user facing applications, such as staking dApps.

## 1. Install Staking API

### 1.1 Clone the repository to your local machine from Github

```bash
git clone git@github.com:babylonchain/staking-api-service.git
```

### 1.2 Check out the desired version

You can find the latest release
[here](https://github.com/babylonchain/staking-api-service/releases).

```bash
cd staking-api-service
git checkout tags/{VERSION}
```

### 1.3 Install the binary by running

```bash
make install
```

## 2. Configuration

### 2.1 Create home directory

```bash
mkdir -p ~/.staking-api-service/
```

### 2.2 Copy the default configuration

```bash
cp ~/staking-api-service/config/config-local.yml ~/.staking-api-service/config.yml
```

### 2.3 Update default configurations

- MongoDB cluster to connect to

Set the MongoDB connection address (`address`)
and credentials (`username`, `password`, and `db-name`) to match
the information from the
[installed MongoDB cluster](../infra/mongodb.md).

```yml
db:
  address: "mongodb://localhost:27017/?directConnection=true"
  username: "<username>"
  password: "<password>"
  db-name: "<db-name>"
```

- RabbitMQ cluster to connect to

Set the RabbitMQ connection address (`url`)
and credentials (`queue_user` and `queue_password`)
to match the information from the
[installed RabbitMQ cluster](../infra/rabbitmq.md).

```yml
queue:
  queue_user: admin
  queue_password: password
  url: "localhost:5672"
```

- Prometheus metrics configuration:

Set the `host` and `port` to customize how the metrics are exposed

```yml
metrics:
  host: 0.0.0.0
  port: 2112
```

## 3. Download global params

To run the Staking API, a `global-params.json` file
which defines all the staking parameters is needed.

To download the global parameters,
follow [these](../global-system-configuration.md#staking-parameters) instructions.

## 4. Download finality providers

To run the Staking API, a `finality-provider.json` file
that associates finality provider
BTC public keys with additional information about them such
as their moniker, commission is needed.

To download the finality providers information,
follow [these](../global-system-configuration.md#2-finality-providers)
instructions.

## 5. Start Staking API

You can start the Staking API by running:

```bash
staking-api-service --config ~/.staking-api-service/config.yml \
--params ~/.staking-api-service/global-params.json \
--finality-providers ~/.staking-api-service/finality-providers.json
```

## 6. Create systemd service (Optional)

### 6.1 Create systemd service definition

Run the following command, replacing `your_username` with your actual username:

```bash
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

### 6.2 Reload systemd manager configuration

```bash
sudo systemctl daemon-reload
```

### 6.3 Enable the service to start on boot

```bash
sudo systemctl enable staking-api.service
```

### 6.4 Start the service

```bash
sudo systemctl start staking-api.service
```

### 6.5. Verify Staking API is running

Check staking-api service status:

```bash
sudo systemctl status staking-api
```

Expected log:

```accesslog
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

## 7. Monitoring

The service exposes Prometheus metrics through a Prometheus server.
By default, the server is reachable under `127.0.0.1:2112`.
