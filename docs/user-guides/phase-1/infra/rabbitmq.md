---
id: rabbitmq
sidebar_label: RabbitMQ
hide_table_of_contents: true
---
# RabbitMQ Setup
## 1. Install RabbitMQ
 
### 1.1 Update the package list

```
sudo apt update
```

### 1.2 Install RabbitMQ server

```
sudo apt install -y rabbitmq-server
```

### 1.3 Enable and start RabbitMQ service

```
sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server
```

## 2. Add RabbitMQ credentials
### 2.1 Enable RabbitMQ Management Dashboard

```
sudo rabbitmq-plugins enable rabbitmq_management
```

### 2.2 Create an admin user for RabbitMQ

```
sudo rabbitmqctl add_user admin password
sudo rabbitmqctl set_user_tags admin administrator
sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
```

### 2.3 Access the RabbitMQ Management Dashboard

Open your web browser and navigate to: `http://localhost:15672/`

Log in with the username `admin` and the password `password`.