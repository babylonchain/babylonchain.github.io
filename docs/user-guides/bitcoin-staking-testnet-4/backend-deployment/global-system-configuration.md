---
id: global-params
sidebar_label: Global System Configuration
hide_table_of_contents: false
---
# Global System Configuration

## 1. Staking Parameters

The Global Configuration includes a series of versioned governance parameters
that greatly affect the behaviour of the system.

Detailed information can be found
[here](https://github.com/babylonchain/networks/tree/main/bbn-test-4/parameters).

Depending on the network, you can download the corresponding version:

- [testnet](https://github.com/babylonchain/networks/blob/main/bbn-test-4/parameters/global-params.json)

## 2. Finality Providers

Finality providers can accept delegations from BTC stakers.
For more details, please visit
[this link](https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/finality-providers/overview).

Finality provider information registry stores additional information
such as the finality provider's moniker, website, and identity.

To generate concatenated Finality provider information,
we provide the following reference script for Linux.
Depending on the network, you can change the corresponding directory `DIR`:

- testnet: `export DIR="./networks/bbn-test-4/finality-providers/registry"`

```bash
echo '
# Clone the repository
git clone git@github.com:babylonchain/networks.git

# Output files
OUTPUT="temp.json"
FINAL="finality-providers.json"

# Start the JSON object and array
echo "{" > $OUTPUT
echo "\"finality_providers\": [" >> $OUTPUT

# Iterate over JSON files and append them to the output file
for file in "$DIR"/*.json; do
    cat "$file" >> $OUTPUT
    echo "," >> $OUTPUT
done

# Remove the last comma and close the JSON array and object
truncate -s-2 $OUTPUT
echo "]" >> $OUTPUT
echo "}" >> $OUTPUT

# Beautify the final JSON output
cat $OUTPUT | jq . > $FINAL
' > generate_finality_providers.sh && bash generate_finality_providers.sh
```

This process will create a formatted JSON file
that consolidates all Finality provider information.
