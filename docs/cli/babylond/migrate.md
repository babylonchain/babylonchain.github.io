---
id: migrate
sidebar_label: babylond migrate
hide_table_of_contents: true

---

# babylond migrate
Migrate the source genesis file into the specified target version and print to STDOUT.
## migrate command
```
babylond migrate [target-version] [genesis-file] [flags]
```
### Example Command
```
$ babylond migrate v0.33 /path/to/genesis.json --chain-id=cosmoshub-1 --genesis-time=2016-04-22T18:02:40Z
```
## Options
```
      --chain-id string       override chain_id with this flag
      --genesis-time string   override genesis_time with this flag
  -h, --help                  help for migrate
```
## Options Inherited from Parent Commands
```
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```