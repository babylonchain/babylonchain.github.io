---
id: babylondkeysshow
sidebar_label: Babylond_keys_show
hide_table_of_contents: true

---

# Babylond_keys_show
Display the key details by the given key’s name or address. Multisig key will be generated if multiple addresses or names are specified.
## keys show command
```
babylond keys show [name_or_address [name_or_address...]] [flags]
```
## Options
```
  -a, --address                  Output the address only (overrides --output)
      --bech string              The Bech32 prefix encoding for a key (acc|val|cons) (default "acc")
  -d, --device                   Output the address in a ledger device
  -h, --help                     help for show
      --multisig-threshold int   K out of N required signatures (default 1)
  -p, --pubkey                   Output the public key only (overrides --output)

```
## Options Inherited from Parent Commands
```
      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --keyring-backend string   Select keyring's backend (os|file|test) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --log_format string        The logging format (json|plain) (default "plain")
      --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --output string            Output format (text|json) (default "text")
      --trace                    print out full stack trace on e
```