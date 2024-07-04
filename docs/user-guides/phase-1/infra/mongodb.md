---
id: mongodb
sidebar_label: MongoDB
hide_table_of_contents: true
---
# Mongodb Setup

## 1. Install MongoDB
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

## 2. Configure MongoDB Replica Set

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