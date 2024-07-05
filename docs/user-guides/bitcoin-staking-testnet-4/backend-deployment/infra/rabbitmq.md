---
id: rabbitmq
sidebar_label: RabbitMQ
hide_table_of_contents: true
---
# RabbitMQ Setup

:::info Note

For a production system, we recommend a multi-node RabbitMQ cluster with quorum queues to ensure message durability and high availability. This setup enhances fault tolerance and performance for reliable messaging infrastructure.

:::

## 1. Install RabbitMQ
 
According to your operating system, follow the official instructions to install [RabbitMQ]( https://www.rabbitmq.com/docs/download#installation-guides)

## 2. Add RabbitMQ credentials

### 2.1 Enable RabbitMQ Management Dashboard

```
sudo rabbitmq-plugins enable rabbitmq_management
```

### 2.2 Create an admin user for RabbitMQ

:::info Note

The exact credentials will later be used by the services to connect to the queues.

:::

```
sudo rabbitmqctl add_user admin password
sudo rabbitmqctl set_user_tags admin administrator
sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
```

### 2.3 Access the RabbitMQ Management Dashboard

Open your web browser and navigate to: `http://localhost:15672/`

Log in with the username `admin` and the password `password`.

## 3. Monitoring

The RabbitMQ server availability can be polled through Prometheus Blackbox Exporter.

RabbitMQ-specific Prometheus metrics can also be exposed by utilizing any open-source Prometheus RabbitMQ exporter [example](https://github.com/kbudde/rabbitmq_exporter).