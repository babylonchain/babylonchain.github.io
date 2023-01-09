---
id: babylondkeysdd
sidebar_label: Babylond_keys_dd
hide_table_of_contents: true

---

# Babylond_keys_dd
Add an encrypted private key (either newly generated or recovered), encrypt it, and save it to your file name.
## keys add command
```
babylond keys add <name> [flags]
```
## Options
```
      --account uint32           Account number for HD derivation (less than equal 2147483647)
      --algo string              Key signing algorithm to generate keys for (default "secp256k1")
      --coin-type uint32         coin type number for HD derivation (default 118)
      --dry-run                  Perform action, but don't add key to local keystore
      --hd-path string           Manual HD Path derivation (overrides BIP44 config)
  -h, --help                     help for add
      --index uint32             Address index number for HD derivation (less than equal 2147483647)
  -i, --interactive              Interactively prompt user for BIP39 passphrase and mnemonic
      --ledger                   Store a local reference to a private key on a Ledger device
      --multisig strings         List of key names stored in keyring to construct a public legacy multisig key
      --multisig-threshold int   K out of N required signatures. For use in conjunction with --multisig (default 1)
      --no-backup                Don't print out seed phrase (if others are watching the terminal)
      --nosort                   Keys passed to --multisig are taken in the order they're supplied
      --pubkey string            Parse a public key in JSON format and saves key info to <name> file.
      --recover                  Provide seed phrase to recover existing key instead of creating
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