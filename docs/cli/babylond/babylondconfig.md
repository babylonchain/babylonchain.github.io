---
id: babylondconfig
sidebar_label: Babylond_config
hide_table_of_contents: true

---

# Babylond_config
Create or query an application CLI configuration file.
## config command
```
babylond config
```
It would return the CLI configuration:
```
{
        "chain-id": "",
        "keyring-backend": "os",
        "output": "text",
        "node": "tcp://localhost:26657",
        "broadcast-mode": "sync"
}
```