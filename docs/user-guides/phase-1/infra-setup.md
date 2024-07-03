---
id: infra-setup
sidebar_label: Infra Setup
hide_table_of_contents: true
---
## Prerequisites

- A Linux-based server (Ubuntu 23.10 is used in this guide)

## Step 1: Install MongoDB

### 1.1 Import the public key used by the package management system

```
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
```

### 1.2 Create a list file for MongoDB

```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

### 1.3 Reload local package database

```
sudo apt update
```

### 1.4 Install MongoDB packages

```
sudo apt install -y mongodb-org
```

### 1.5 Start and enable MongoDB service

```
sudo systemctl start mongod
sudo systemctl enable mongod
```

## Step 2: Configure MongoDB Replica Set

### 2.1 Edit MongoDB configuration file

```
sudo vi /etc/mongod.conf
```

### 2.2 Add the replica set configuration

Find the `replication` section and add the following:

```
replication:
   replSetName: "rs0"
```

### 2.3 Restart MongoDB to apply changes

```
sudo systemctl restart mongod
```

### 2.4 Initialize the replica set

```
mongosh
```

Inside the MongoDB shell, run:

```
rs.initiate()
```

### 2.5 Verify the replica set configuration

```
rs.status()
```

## Step 3: Install RabbitMQ

### 3.1 Update the package list

```
sudo apt update
```

### 3.2 Install RabbitMQ server

```
sudo apt install -y rabbitmq-server
```

### 3.3 Enable and start RabbitMQ service

```
sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server
```

### 3.4 Enable RabbitMQ Management Dashboard

```
sudo rabbitmq-plugins enable rabbitmq_management
```

### 3.5 Create an admin user for RabbitMQ

```
sudo rabbitmqctl add_user admin password
sudo rabbitmqctl set_user_tags admin administrator
sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
```

### 3.6 Access the RabbitMQ Management Dashboard

Open your web browser and navigate to: `http://localhost:15672/`

Log in with the username `admin` and the password `password`.

## Step 4: Verify Installations

### 4.1 Verify MongoDB Replica Set

```
mongo --eval 'rs.status()'
```

### 4.2 Verify RabbitMQ Installation

Check RabbitMQ service status:

```
sudo systemctl status rabbitmq-server
```

Log in to the RabbitMQ Management Dashboard to ensure it's working correctly.

## Conclusion

You have successfully installed and configured MongoDB with a replica set and RabbitMQ on your server. Both services should be up and running, ready for further configuration and use.
