---
id: mongodb
sidebar_label: MongoDB
hide_table_of_contents: false
---
# Mongodb Setup

:::info Note

The system requires a MongoDB replica set cluster for data redundancy and high availability. For production deployments, we strongly recommend a multi-node cluster to ensure optimal performance and reliability.

:::


## 1. Install MongoDB

According to your operating system, follow the official instructions to install [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)

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

## 3. Monitoring

The MongoDB server availability can be polled through Prometheus Blackbox Exporter.

MongoDB-specific Prometheus metrics can also be exposed by utilizing any open-source Prometheus MongoDB exporter [example](https://github.com/percona/mongodb_exporter).