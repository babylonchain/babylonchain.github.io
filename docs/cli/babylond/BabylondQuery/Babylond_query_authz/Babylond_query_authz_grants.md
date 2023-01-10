---
id: babylond_query_authz_grants
sidebar_label: Babylond_query_authz_grants
hide_table_of_contents: true

---

# Babylond Query authz grants
Querying grans for a granter-grantee pair and optionally a msg-type-url.
## query authz grants command
```
babylond query authz grants [granter-addr] [grantee-addr] [msg-type-url]? [flags]
```
## Options
```
      --count-total       count total number of records in grants to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for grants
      --limit uint        pagination limit of grants to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of grants to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of grants to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of grants to query for
      --reverse           results are sorted in descending order
```
## Options Inherited from Parent Commands
```
--chain-id string     The network chain ID
--home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
--trace               print out full stack trace on errors
```