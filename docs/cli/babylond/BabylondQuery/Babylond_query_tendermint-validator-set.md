---
id: babylond_query_tendermint-validator-set
sidebar_label: Babylond_query_tendermint-validator-set
hide_table_of_contents: true

---

# Babylond Query tendermint-validator-set
Get the full tendermint validator set by the specified height.
## query tendermint-validator-set command
```
babylond query tendermint-validator-set [height] [flags]
```
## Options
```
  -h, --help            help for tendermint-validator-set
      --limit int       Query number of results returned per page (default 100)
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
      --page int        Query a specific page of paginated results (default 1)
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```