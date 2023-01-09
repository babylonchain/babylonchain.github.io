---
id: babylonddebugpubkeyraw
sidebar_label: Babylond_debug_pubkey-raw
hide_table_of_contents: true

---

# Babylond_debug_pubkey-raw
Decode an ED25519 or secp256k1 pubkey from hex, base64, or bech32.
## debug pubkey-raw command
```
babylond debug pubkey-raw [pubkey] -t [{ed25519, secp256k1}] [flags]
```
### Example Command
```
$ babylond debug pubkey-raw pubkey '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"ParrauoA7jvfPd1AmmtyOvWM2rJSwipXfRf8yD6pLbA3DD"}'
```
## Options
```
  -h, --help          help for pubkey-raw
  -t, --type string   Pubkey type to decode (oneof secp256k1, ed25519) (default "ed25519")
```
## Options Inherited from Parent Commands
```
--home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
--trace               print out full stack trace on e
```