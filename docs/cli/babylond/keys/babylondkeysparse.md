---
id: babylondkeysparse
sidebar_label: Babylond_keys_parse
hide_table_of_contents: true

---

# Babylond_keys_parse
Parse key addresses and fingerprints from hexadecimal to bech32 and vice versa.
## keys parse command
```
babylond keys parse <hex-or-bech32-address> [flags]
```
## Options
```
-h, --help   help for parse

```
## Options Inherited from Parent Commands
```
      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --keyring-backend string   Select keyring's backend (os|file|test) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --log_format string        The logging format (json|plain) (default "plain")
      --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --output string            Output format (text|json) (default "text")
      --trace                    print out full stack trace on errors
```