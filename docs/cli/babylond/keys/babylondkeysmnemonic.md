---
id: babylondkeysmnemonic
sidebar_label: babylond keys mnemonic
hide_table_of_contents: true

---

# babylond keys mnemonic
The system entropy can create the bip39 mnemonic, also known as a seed phrase.
## keys mnemonic command
```
babylond keys mnemonic [flags]
```
## Options
```
  -h, --help             help for mnemonic
      --unsafe-entropy   Prompt the user to supply their own entropy, instead of relying on the system

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