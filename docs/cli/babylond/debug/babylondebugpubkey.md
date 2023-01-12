---
id: babylonddebugpubkey
sidebar_label: babylond debug pubkey
hide_table_of_contents: true

---

# babylond debug pubkey
Decode a pubkey from proto JSON.
## debug pubkey command
```
  babylond debug pubkey [pubkey] [flags]
```
### Example Command
```
$ babylond debug pubkey '{"@type":"/cosmos.crypto.secp114k1.PubKey","key":"ParrauoA7jvfPd1AmmtyOvWM2rJSwipXfRf8yD6pLbA3DD"}'
```
## Options
```
  -h, --help   help for pubkey
```
## Options Inherited from Parent Commands
```
--home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
--trace               print out full stack trace on e
```