---
id: cli
sidebar_label: CLI Command Overview
hide_table_of_contents: true

---

# CLI Command Overview

- [babylond](docs/cli/babylond/babylond.md) - Babylon App

    - [add-genesis-account](docs/cli/babylond/babylondaddgenesisaccount.md) -This is a Cosmos Native CLI, it adds a genesis account to genesis.json

    - [add-genesis-bls](docs/cli/babylond/babylondaddgenesisbls.md) -This is a Babylon-specific CLI, it adds a genesis BLS Key to genesis.json

    - [collect-gentxs](docs/cli/babylond/babylondcollectgentxs.md) - This is a Cosmos Native CLI, it collects genesis txs and outputs a genesis.json file

    - [config](docs/cli/babylond/babylondconfig.md) - This is a Cosmos Native CLI, it creates or queries an application CLI configuration file

    - [create-bls-key](docs/cli/babylond/babylondcreatebls.md) - This is a Babylon-specific CLI, it creates a pair of BLS keys for a validator

    - [create-genesis-bls](docs/cli/babylond/babylondcreategenesiskey.md) - This is a Babylon-specific CLI, it creates a genesis BLS key file for the validator

    - [debug](docs/cli/babylond/debug/babylonddebug.md) - This is a Cosmos Native CLI, it is a tool for helping with debugging your application

        - [addr](docs/cli/babylond/debug/babylonddebugaddr.md) - Convert an address between hex and bech32

        - [pubkey](docs/cli/babylond/debug/babylondebugpubkey.md) - Decode a pubkey from proto JSON

        - [pubkey-raw](docs/cli/babylond/debug/babylonddebugpubkeyraw.md) - Decode a ED25519 or secp256k1 pubkey from hex, base64, or bech32

        - [raw-bytes](docs/cli/babylond/debug/babylonddebugrawbytes.md) - Convert raw bytes output (eg. [10 21 13 255]) to hex

    - [export](docs/cli/babylond/babylondexport.md) - This is a Cosmos Native CLI, it exports the state to JSON

    - [gentx](docs/cli/babylond/babylondgentx.md) -  This is a Cosmos Native CLI, it generates a genesis tx carrying a self delegation

    - [help](docs/cli/babylond/babylondhelp.md) - This is a Cosmos Native CLI, it helps with any command

    - [init](docs/cli/babylond/babylondinit.md) - This is a Cosmos Native CLI, it initializes the private validator, p2p, genesis, and application configuration files

    - [keys](docs/cli/babylond/keys/babylondkeys.md) - This is a Cosmos Native CLI, it manages your application’s keys

        - [add](docs/cli/babylond/keys/babylondkeysdd.md) - Add an encrypted private key (either newly generated or recovered), encrypt it, and save to your file name

        - [delete](docs/cli/babylond/keys/babylondkeysdelete.md) - Delete the given keys

        - [export](docs/cli/babylond/keys/babylonkeysexport.md) - Export private keys

        - [import](docs/cli/babylond/keys/babylondkeysimport.md) - Import private keys into the local keybase

        - [list](docs/cli/babylond/keys/babylondkeyslist.md) - List all keys

        - [migrate](docs/cli/babylond/keys/babylondkeysmigrate.md) - Migrate keys from amino to proto serialization format

        - [mnemonic](docs/cli/babylond/keys/babylondkeysmnemonic.md) - Compute the bip39 mnemonic for some input entropy

        - [parse](docs/cli/babylond/keys/babylondkeysparse.md) - Parse address from hex to bech32 and vice versa

        - [rename](docs/cli/babylond/keys/babylondkeysrename.md) - Rename an existing key

        - [show](docs/cli/babylond/keys/babylondkeysshow.md) - Retrieve key information by name or address

    - [migrate](docs/cli/babylond/migrate.md) - This is a Cosmos Native CLI, it migrates genesis to a specified target version

    - [prepare-genesis](docs/cli/babylond/preparegenesis.md) - This is a Babylon-specific CLI, it prepares a genesis file

    - [query](docs/cli/babylond/Babylond_query.md) - Querying subcommand

        - [account](docs/cli/babylond/BabylondQuery/Babylond_query_account.md) - This is a Cosmos Native CLI, it queries for an account by address

        - [auth](docs/cli/babylond/BabylondQuery/Babylond_query_auth.md) - This is a Cosmos Native CLI, it queries commands for the auth module

            - [account](docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_account.md) - Query for account by address

            - [accounts](docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_accounts.md) - Query all the accounts

            - [address-by-acc-num](docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_address_by_acc_num.md) - Query for an address by account number

            - [module-account](docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_account.md) - Query module account info by module name

            - [module-accounts](docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_accounts.md) - Query all the module accounts

            - [params](docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_params.md) - Query the current auth parameters

        - [authz](docs/cli/babylond/BabylondQuery/Babylond_query_authz.md) - This is a Cosmos Native CLI, it queries commands for the authz module

            - [grants](docs/cli/babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants.md) - Query grans for a granter-grantee pair and optionally a msg-type-url

                - [grants-by-grantee](docs/cli/babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/Babylond_query_authz_grants_by_grantee.md) - Query authorization grants granted to a grantee

                - [grants-by-granter](docs/cli/babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/Babylond_query_authz_grants_by_granter.md) - Query authorization grants granted by granter

        - [bank](docs/cli/babylond/BabylondQuery/Babylond_query_bank.md) - This is a Cosmos Native CLI, it queries commands for the bank module

            - [balances](docs/cli/babylond/BabylondQuery/Babylond_query_bank/Babylond_query_bank_balances.md) - Query for account balances by address

            - [denom-metadata](docs/cli/babylond/BabylondQuery/Babylond_query_bank/Babylond_query_bank_denom_metadata.md) - Query the client metadata for coin denominations

            - [total](docs/cli/babylond/BabylondQuery/Babylond_query_bank/Babylond_query_bank_total.md) - Query the total supply of coins of the chain

        - [block](docs/cli/babylond/BabylondQuery/Babylond_query_block.md) - This is a Cosmos Native CLI, it gets the verified data by the given height

        - [btccheckpoint](docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint.md) - This is a Babylon-specific CLI, it queries commands for the btccheckpoint module

            - [btc-height](docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_btc-height.md) - Retrieve the earliest btc height for the given epoch

            - [epoch-submissions](docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_epoch_submissions.md) - All the checkpoint submissions for the given epoch

            - [params](docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_params.md) - Show the parameters of the module

        - [btclightclient](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient.md) - This is a Babylon-specific CLI, it queries commands for the btclightclient module

            - [base-header](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient\babylond_query_btclightclient_base-header.md) - Retrieve the base header of the bitcoin blockchain

            - [contains](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient\babylond_query_btclightclient_contains.md) - Check whether the module maintains a hash

            - [hashes](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient\babylond_query_btclightclient_hashes.md) - Retrieve the hashes maintained by this module

            - [main-chain](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient\babylond_query_btclightclient_main-chain.md) - Retrieve the canonical chain

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient\babylond_query_btclightclient_params.md) - Show the parameters of the module

            - [tip](docs\cli\babylond\BabylondQuery\Babylond_query_btclightclient\babylond_query_btclightclient_tip.md) - Retrieve the tip of the bitcoin blockchain

        - [checkpointing](docs\cli\babylond\BabylondQuery\Babylond_query_checkpointing.md) - This is a Babylon-specific CLI, it queries commands for the checkpointing module

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_checkpointing\Babylond_query_checkpointing_params.md) - Show the parameters of the module

            - [raw-checkpoint](docs\cli\babylond\BabylondQuery\Babylond_query_checkpointing\Babylond_query_checkpointing_raw-checkpoint.md) - Retrieve the checkpoint by epoch number

            - [raw-checkpoint-list](docs\cli\babylond\BabylondQuery\Babylond_query_checkpointing\Babylond_query_checkpointing_raw-checkpoint\Babylond_query_checkpointing_raw-checkpoint_list.md) - Retrieve the checkpoints by status

        - [distribution](docs\cli\babylond\BabylondQuery\Babylond_query_distribution.md) - This is a Cosmos Native CLI, it queries commands for the distribution module

            - [commission](docs\cli\babylond\BabylondQuery\Babylond_query_distribution\Babylond_query_distribution_commission.md) - Query distribution validator commission

            - [community-pool](docs\cli\babylond\BabylondQuery\Babylond_query_distribution\Babylond_query_distribution_community-pool.md) - Query the amount of coins in the community pool

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_distribution\Babylond_query_distribution_params.md) - Query distribution params

            - [rewards](docs\cli\babylond\BabylondQuery\Babylond_query_distribution\Babylond_query_distribution_rewards.md) - Query all distribution delegator rewards or rewards from a particular validator

            - [slashes](docs\cli\babylond\BabylondQuery\Babylond_query_distribution\Babylond_query_distribution_slashes.md) - Query distribution validator slashes

            - [validator-outstanding-rewards](docs\cli\babylond\BabylondQuery\Babylond_query_distribution\Babylond_query_distribution_validator_outstanding_rewards.md) - Query distribution outstanding (un-withdrawn) rewards for validator and all their delegations

        - [epoching](docs\cli\babylond\BabylondQuery\Babylond_query_epoching.md) - This is a Babylon-specific CLI, it queries commands for the epoching module

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_epoching\Babylond_query_epoching_params.md) - shows the parameters of the module

        - [evidence](docs\cli\babylond\BabylondQuery\Babylond_query_evidence.md)  - This is a Cosmos Native CLI, it queries commands for evidence by a hash or for all the paginated submitted evidence

        - [feegrant](docs\cli\babylond\BabylondQuery\Babylon_query_freegrant.md) - This is a Cosmos Native CLI, it queries commands for the feegrant module

            - [grant](docs\cli\babylond\BabylondQuery\Babylond_query_freegrant\Babylond_query_freegrant_grant.md) - Query details of a single grant

            - [grants-by-grantee](docs\cli\babylond\BabylondQuery\Babylond_query_freegrant\Babylond_query_freegrant_grants-by-grantee.md) - Query all grants of a grantee

            - [grants-by-granter](docs\cli\babylond\BabylondQuery\Babylond_query_freegrant\Babylond_query_freegrant_grants-by-granter.md) - Query all grants by a granter

        - [gov](docs\cli\babylond\BabylondQuery\Babylond_query_gov.md) - This is a Cosmos Native CLI, it queries commands for the governance module

            - [deposit](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_deposit.md) - Query details of a deposit

            - [deposits](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_deposits.md) - Query deposits on a proposal

            - [param](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_param.md) - Query the parameters (voting|tallying|deposit) of the governance process

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_params.md) - Query the parameters of the governance process

            - [proposal](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_proposal.md) - Query details of a single proposal

            - [proposals](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_proposals.md) - Query proposals with optional filters

            - [proposer](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_proposer.md) - Query the proposer of a governance proposal

            - [tally](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_tally.md) - Get the tally of a proposal vote

            - [vote](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_vote.md) - Query details of a single vote

            - [votes](docs\cli\babylond\BabylondQuery\Babylond_query_gov\Babylond_query_gov_votes.md) - Query votes on a proposal

        - [ibc](docs\cli\babylond\BabylondQuery\Babylon_query_ibc.md) - This is a Cosmos Native CLI, it queries commands for the IBC module

            - [channel](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel.md) - IBC channel query subcommands

                - [channels](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_channels.md) - Query all channels

                - [client-state](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_client-state.md) - Query the client state associated with a channel

                - [connections](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_connections.md) - Query all channels associated with a connection

                - [end](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_end.md) - Query a channel end

                - [next-sequence-receive](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_next-sequence-receive.md) - Query a next-receive sequence

                - [packet-ack](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_packet-ack.md) - Query a packet acknowledgement

                - [packet-commitment](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_packet-commitment.md) - Query a packet commitment

                - [packet-commitments](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_packet-commitments.md) - Query all packet commitments associated with a channel

                - [packet-receipt](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_packet-receipt.md) - Query a packet receipt

                - [unreceived-acks](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_unreceived-acks.md) - Query all the unreceived acks associated with a channel

                - [unreceived-packets](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_channel\Babylond_query_ibc_channel_unreceived-packets.md) - Query all the unreceived packets associated with a channel

            - [client](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client.md) - IBC client query subcommands

                - [consensus-state](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_consensus-state.md) - Query the consensus state of a client at a given height

                - [consensus-state-heights](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_consensus-state-heights.md) - Query the heights of all consensus states of a client.

                - [consensus-states](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_consensus-states.md) - Query all the consensus states of a client.

                - [header](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_header.md) - Query the latest header of the running chain

                - [params](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_params.md) - Query the current ibc client parameters

                - [self-consensus-state](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_self-consensus-state.md) - Query the self-consensus state for this chain

                - [state](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_state.md) - Query a client state

                - [states](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_states.md) - Query all available light clients

                - [status](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_client\Babylond_query_ibc_client_status.md) - Query client status

            - [connection](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_connection.md) - IBC connection query subcommands

                - [connections](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_connection\Babylond_query_ibc_connection_connections.md) - Query all connections

                - [end](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_connection\Babylond_query_ibc_connection_end.md) - Query stored connection end

                - [path](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_connection\Babylond_query_ibc_connection_path.md) - Query stored client connection paths

        - [ibc-transfer](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_transfer.md) - This is a Cosmos Native CLI, it queries the subcommands for the ibc fungible token transfer module

            - [denom-hash](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_transfer_denom-hash.md) - Query the denom hash info from a given denom trace

            - [denom-trace](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_transfer_denom-trace.md) - Query the denom trace info from a given trace hash or ibc denom

            - [denom-traces](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_transfer_denom-traces.md) - Query the trace info for all token denominations

            - [escrow-address](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_transfer_escrow-address.md) - Get the escrow address for a channel

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_ibc\Babylond_query_ibc_transfer_params.md) - Query the current ibc-transfer parameters

        - [mint](docs\cli\babylond\BabylondQuery\Babylond_query_mint.md) - This is a Cosmos Native CLI, it queries commands for the minting module

            - [annual-provisions](docs\cli\babylond\BabylondQuery\Babylond_query_mint\Babylond_query_mint_annual-provisions.md) - Query the current minting annual provisions value

            - [inflation](docs\cli\babylond\BabylondQuery\Babylond_query_mint\Babylond_query_mint_inflation.md) - Query the current minting inflation value

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_mint\Babylond_query_mint_params.md) - Query the current minting parameters

        - [params](docs\cli\babylond\BabylondQuery\Babylond_query_params.md) - This is a Cosmos Native CLI, it queries commands for the params module

            - [subspace](docs\cli\babylond\BabylondQuery\Babylond_query_params\Babylond_query_params_subspace.md) - Query for raw parameters by subspace and key

        - [slashing](docs\cli\babylond\BabylondQuery\Babylond_query_slashing.md) - This is a Cosmos Native CLI, it queries commands for the slashing module

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_slashing\Babylond_query_slashing_params.md) - Query the current slashing parameters

            - [signing-info](docs\cli\babylond\BabylondQuery\Babylond_query_slashing\Babylond_query_slashing_signing-info.md) - Query a validator's signing information

            - [signing-infos](docs\cli\babylond\BabylondQuery\Babylond_query_slashing\Babylond_query_slashing_signing-infos.md) - Query signing information of all validators

        - [staking](docs\cli\babylond\BabylondQuery\Babylond_query_staking.md) - This is a Cosmos Native CLI, it queries commands for the staking module

            - [delegation](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_delegation.md) - Query a delegation based on address and validator address

            - [delegations](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_delegations.md) - Query all delegations made by one delegator

            - [delegations-to](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_delegations-to.md) - Query all delegations made to one validator

            - [historical-info](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_historical-info.md) - Query historical info at a given height

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_params.md) - Query the current staking parameters information

            - [pool](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_pool.md) - Query the current staking pool values

            - [redelegation](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_redelegation.md) - Query a redelegation record based on the delegator and a source and destination validator address

            - [redelegations](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_redelegations.md) - Query all redelegations records for one delegator

            - [redelegations-from](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_redelegation-from.md) - Query all outgoing redelegations from a validator

            - [unbonding-delegation](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_unbounding-delegation.md) - Query an unbonding-delegation record based on the delegator and validator address

            - [unbonding-delegations](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_unbounding-delegations.md) - Query all unbonding-delegations records for one delegator

            - [unbonding-delegations-from](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_unbounding-delegations-from.md) - Query all unbonding delegations from a validator

            - [validator](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_validator.md) - Query a validator

            - [validators](docs\cli\babylond\BabylondQuery\Babylond_query_staking\Babylond_query_staking_validators.md) - Query for all validators

        - [tendermint-validator-set](docs\cli\babylond\BabylondQuery\Babylond_query_tendermint-validator-set.md) - Get the full tendermint validator set at a given height

        - [tx](docs\cli\babylond\BabylondQuery\Babylond_query_tx.md)  - This is a Cosmos Native CLI, it queries  a transaction by hash 

        - [txs](docs\cli\babylond\BabylondQuery\Babylond_query_txs.md) - This is a Cosmos Native CLI, it queries paginated transactions that match a set of events

        - [upgrade](docs\cli\babylond\BabylondQuery\Babylond_query_upgrade.md) - This is a Cosmos Native CLI, it queries commands for the upgrade module

            - [applied](docs\cli\babylond\BabylondQuery\Babylond_query_upgrade\Babylond_query_upgrade_applied.md) - Block header for height at which a completed upgrade was applied

            - [module_versions](docs\cli\babylond\BabylondQuery\Babylond_query_upgrade\Babylond_query_upgrade_module_versions.md) - Get the list of module versions

            - [plan](docs\cli\babylond\BabylondQuery\Babylond_query_upgrade\Babylond_query_upgrade_plan.md) - Get upgrade plan (if one exists)

        - [zoneconcierge](docs\cli\babylond\BabylondQuery\Babylond_query_zoneconcierge.md) - This is a Babylon-specific CLI, it queries commands for the zoneconcierge module

            - [params](docs\cli\babylond\BabylondQuery\Babylond_query_zoneconcierge\Babylond_query_zoneconcierge_params.md) - Show the parameters of the module

    - [rollback](docs\cli\babylond\Babylond_rollback.md) - This is a Cosmos Native CLI, it rolls back cosmos-sdk and tendermint state by one height

    - [rosetta](docs\cli\babylond\Babylond_rosetta.md) - This is a Cosmos Native CLI, it spins up a rosetta server

    - [start](docs\cli\babylond\Babylond_start.md) - This is a Cosmos Native CLI, it runs the full node

    - [status](docs\cli\babylond\Babylond_status.md) - This is a Cosmos Native CLI, it queries the remote node for status

    - [tendermint](docs\cli\babylond\Babylond_tendermint.md) -This is a Cosmos Native CLI, it queries the subcommands for tendermint module

        - [reset-state](docs\cli\babylond\Babylond_tendermint\Babylond_tendermint_reset-state.md) - Remove all the data and WAL

        - [show-address](docs\cli\babylond\Babylond_tendermint\Babylond_tendermint_show-address.md) - Shows this node's tendermint validator consensus address

        - [show-node-id](docs\cli\babylond\Babylond_tendermint\Babylond_tendermint_show-node-id.md) - Show this node's ID

        - [show-validator](docs\cli\babylond\Babylond_tendermint\Babylond_tendermint_show-validator.md) - Show this node's tendermint validator info

        - [unsafe-reset-all unsafe](docs\cli\babylond\Babylond_tendermint\Babylond_tendermint_unsafe-reset-all.md) - Remove all the data and WAL, reset this node's validator to the genesis state

        - [version](docs\cli\babylond\Babylond_tendermint\Babylond_tendermint_version.md) - Print tendermint libraries' version

    - [testnet](docs\cli\babylond\Babylond_testnet.md) - This is a Babylon-specific CLI, it initialize files for a Babylon testnet

    - [tx](docs\cli\babylond\Babylond_tx.md) - Transactions subcommand

        - [authz](docs\cli\babylond\Babylond_tx\Babylon_tx_authz.md) - This is a Cosmos Native CLI, it queries the subcommands for authorization transactions 

            - [exec](docs\cli\babylond\Babylond_tx\Babylond_tx_authz\Babylond_tx_authz_exec.md) - execute tx on behalf of granter account

            - [grant](docs\cli\babylond\Babylond_tx\Babylond_tx_authz\Babylond_tx_authz_grant.md) - Grant authorization to an address

            - [revoke](docs\cli\babylond\Babylond_tx\Babylond_tx_authz\Babylond_tx_authz_revoke.md) - revoke authorization

        - [bank](docs\cli\babylond\Babylond_tx\Babylond_tx_bank.md) - This is a Cosmos Native CLI, it queries subcommand for Bank module 

            - [multi-send](docs\cli\babylond\Babylond_tx\Babylond_tx_bank\Babylond_tx_bank_multi-send.md) - Send funds from one account to two or more accounts.

            - [send](docs\cli\babylond\Babylond_tx\Babylond_tx_bank\Babylond_tx_bank_send.md) - Send funds from one account to another.

        - [broadcast](docs\cli\babylond\Babylond_tx\Babylond_tx_broadcast.md) - This is a Cosmos Native CLI, it broadcast transactions generated offline

        - [btccheckpoint](docs\cli\babylond\Babylond_tx\Babylond_tx_btccheckpoint.md) - This is a Babylon-specific CLI, it queries subcommands for btccheckpoint transactions

        - [btclightclient](docs\cli\babylond\Babylond_tx\Babylond_tx_btclightclient.md) - This is a Babylon-specific CLI, it queries subcommands for btclightclient transactions

            - [insert-header](docs\cli\babylond\Babylond_tx\Babylond_tx_btclightclient\Babylond_tx_btclightclient_insert-header.md) - Submit BTC header bytes

        - [checkpointing](docs\cli\babylond\Babylond_tx\Babylond_tx_checkpointing.md) - This is a Babylon-specific CLI, it queries subcommands for checkpointing transactions

            - [create-validator](docs\cli\babylond\Babylond_tx\Babylond_tx_checkpointing\Babylond_tx_checkpointing_create-validator.md) - Create a new validator initialized with a self-delegation to it

            - [submit](docs\cli\babylond\Babylond_tx\Babylond_tx_checkpointing\Babylond_tx_checkpointing_submit.md) - submit a BLS signature

        - [crisis](docs\cli\babylond\Babylond_tx\Babylond_tx_crisis.md) - This is a Cosmos Native CLI, it queries subcommand for crisis transactions 

            - [invariant-broken](docs\cli\babylond\Babylond_tx\Babylond_tx_crisis\Babylond_tx_crisis_invariant-broken.md) - Submit proof that an invariant broken to halt the chain

        - [decode](docs\cli\babylond\Babylond_tx\Babylon_tx_decode.md) - This is a Cosmos Native CLI, it decodes a binary encoded transaction string 

        - [distribution](docs\cli\babylond\Babylond_tx\Babylond_tx_distribution.md) - This is a Cosmos Native CLI, it queries subcommand for Distribution transactions 

            - [fund-community-pool](docs\cli\babylond\Babylond_tx\Babylond_tx_distribution\Babylond_tx_distribution_fund-community-pool.md) - Funds the community pool with the specified amount

            - [set-withdraw-addr](docs\cli\babylond\Babylond_tx\Babylond_tx_distribution\Babylond_tx_distribution_set-withdraw-addr.md) - Change the default withdraw address for rewards associated with an address

            - [withdraw-all-rewards](docs\cli\babylond\Babylond_tx\Babylond_tx_distribution\Babylond_tx_distribution_withdraw-all-rewards.md) - Withdraw all delegations rewards for a delegator

            - [withdraw-rewards](docs\cli\babylond\Babylond_tx\Babylond_tx_distribution\Babylond_tx_distribution_withdraw-rewards.md) - Withdraw rewards from a given delegation address and optionally withdraw validator commission if the delegation address given is a validator operator

        - [encode](docs\cli\babylond\Babylond_tx\Babylond_tx_encode.md) - This is a Cosmos Native CLI, it encodes transactions generated offline 

        - [epoching](docs\cli\babylond\Babylond_tx\Babylond_tx_epoching.md) - This is a Babylon-specific CLI, it queries the subcommands for epoching transactions 

            - [delegate](docs\cli\babylond\Babylond_tx\Babylond_tx_epoching\Babylond_tx_epoching-delegate.md) - Delegate liquid tokens to a validator

            - [redelegate](docs\cli\babylond\Babylond_tx\Babylond_tx_epoching\Babylond_tx_epoching_redelegate.md) - Redelegate illiquid tokens from one validator to another

            - [unbond](docs\cli\babylond\Babylond_tx\Babylond_tx_epoching\Babylond_tx_epoching_unbond.md) - Unbond shares from a validator

        - [evidence](docs\cli\babylond\Babylond_tx\Babylond_tx_evidence.md) - This is a Cosmos Native CLI, it queries the subcommands for Evidence transactions 

        - [feegrant](docs\cli\babylond\Babylond_tx\Babylond_tx_feegrant.md) - This is a Cosmos Native CLI, it queries the subcommands for Feegrant transactions 

            - [grant](docs\cli\babylond\Babylond_tx\Babylond_tx_feegrant\Babylond_tx_feegrant_grant.md) - Grant Fee allowance to an address

            - [revoke](docs\cli\babylond\Babylond_tx\Babylond_tx_feegrant\Babylond_tx_feegrant_revoke.md) - Revoke fee-grant

        - [gov](docs\cli\babylond\Babylond_tx\Babylond_tx_gov.md) - This is a Cosmos Native CLI, it queries subcommand for governance transactions 

            - [deposit](docs\cli\babylond\Babylond_tx\Babylond_tx_gov\Babylond_tx_gov_deposit.md) - Deposit tokens for an active proposal

            - [draft-proposal](docs\cli\babylond\Babylond_tx\Babylond_tx_gov\Babylond_tx_gov_draft-proposal.md) - Generate a draft proposal JSON file. The generated proposal JSON contains only one message (skeleton).

            - [submit-legacy-proposal](docs\cli\babylond\Babylond_tx\Babylond_tx_gov\Babylond_tx_gov_submit-legacy-proposal.md) - Submit a legacy proposal along with an initial deposit

            - [submit-proposal](docs\cli\babylond\Babylond_tx\Babylond_tx_gov\Babylond_tx_gov_submit-proposal.md) - Submit a proposal along with some messages, metadata and deposit

            - [vote](docs\cli\babylond\Babylond_tx\Babylond_tx_gov\Babylond_tx_gov_vote.md) - Vote for an active proposal, options: yes/no/no_with_veto/abstain

            - [weighted-vote](docs\cli\babylond\Babylond_tx\Babylond_tx_gov\Babylond_tx_gov_weighted-vote.md) - Vote for an active proposal, options: yes/no/no_with_veto/abstain

        - [ibc](docs\cli\babylond\Babylond_tx\Babylond_tx_ibc.md) - This is a Cosmos Native CLI, it queries subcommands for IBC transactions

            - [channel](docs\cli\babylond\Babylond_tx\Babylond_tx_ibc\Babylond_tx_ibc_channel.md) - IBC channel transaction subcommands

            - [client](docs\cli\babylond\Babylond_tx\Babylond_tx_ibc\Babylond_tx_ibc_client.md) - IBC client transaction subcommands

        - [ibc-transfer](docs\cli\babylond\Babylond_tx\Babylond_tx_ibc-transfer.md) - This is a Cosmos Native CLI, it queries the subcommands for IBC fungible token transfer 

            - [transfer](docs\cli\babylond\Babylond_tx\Babylond_tx_ibc-transfer\Babylond_tx_ibc-transfer_transfer.md) - Transfer a fungible token through IBC

        - [multi-sign](docs\cli\babylond\Babylond_tx\Babylond_tx_multi-sign.md) - This is a Cosmos Native CLI, it generates multisig signatures for transactions generated offline

            - [multisign-batch](docs\cli\babylond\Babylond_tx\Babylond_tx_multi-sign\Babylond_tx_multi-sign-batch.md) - This is a Cosmos Native CLI, it assembles multisig transactions in batch from batch signatures

        - [sign](docs\cli\babylond\Babylond_tx\Babylond_tx_sign.md) - This is a Cosmos Native CLI, it signs a transaction generated offline

            - [sign-batch](docs\cli\babylond\Babylond_tx\Babylond_tx_sign\Babylond_tx_sign-batch.md) - This is a Cosmos Native CLI, it signs transaction batch files

        - [slashing](docs\cli\babylond\Babylond_tx\Babylond_tx_slashing.md) - This is a Cosmos Native CLI, it queries subcommand for slashing transaction

            - [unjail](docs\cli\babylond\Babylond_tx\Babylond_tx_slashing\Babylond_tx_slashing_unjail.md) - Unjail validator previously jailed for downtime

        - [staking](docs\cli\babylond\Babylond_tx\Babylond_tx_staking.md) - This is a Cosmos Native CLI, it queries subcommand for Staking transaction

            - [cancel-unbond](docs\cli\babylond\Babylond_tx\Babylond_tx_staking\Babylond_tx_staking_cancel-unbond.md) - Cancel unbonding delegation and delegate back to the validator

            - [create-validator](docs\cli\babylond\Babylond_tx\Babylond_tx_staking\Babylond_tx_staking_create-validator.md) - Create new validator initialized with a self-delegation to it

            - [delegate](docs\cli\babylond\Babylond_tx\Babylond_tx_staking\Babylond_tx_staking_delegate.md) - Delegate liquid tokens to a validator

            - [edit-validator](docs\cli\babylond\Babylond_tx\Babylond_tx_staking\Babylond_tx_staking_edit-validator.md) - Edit an existing validator account

            - [redelegate](docs\cli\babylond\Babylond_tx\Babylond_tx_staking\Babylond_tx_staking_redelegate.md) - Redelegate illiquid tokens from one validator to another

            - [unbond](docs\cli\babylond\Babylond_tx\Babylond_tx_staking\Babylond_tx_staking_unbond.md) - Unbond shares from a validator

        - [validate-signatures](docs\cli\babylond\Babylond_tx\Babylond_tx_validate-signatures.md) - This is a Cosmos Native CLI, it validates transactions signatures

        - [vesting](docs\cli\babylond\Babylond_tx\Babylond_tx_vesting.md) - This is a Cosmos Native CLI, it queries the subcommands for Vesting transaction 

            - [create-periodic-vesting-account](docs\cli\babylond\Babylond_tx\Babylond_tx_vesting\Babylond_tx_vesting_create-periodic-vesting-account.md) - Create a new vesting account funded with an allocation of tokens

            - [create-permanent-locked-account](docs\cli\babylond\Babylond_tx\Babylond_tx_vesting\Babylond_tx_vesting_create-permanent-locked-account.md) - Create a new permanently locked account funded with an allocation of tokens

            - [create-vesting-account](docs\cli\babylond\Babylond_tx\Babylond_tx_vesting\Babylond_tx_vesting_create-vesting-account.md) - Create a new vesting account funded with an allocation of tokens

        - [zoneconcierge](docs\cli\babylond\Babylond_tx\Babylond_tx_zoneconcierge.md) - This is a Babylon-specific CLI, it queries the subcommands for zoneconcierge transactions

    - [validate-genesis](docs\cli\babylond\Babylond_validate-genesis.md) - This is a Cosmos Native CLI, it validates the genesis file at the default location or at the location passed as an arg
    
    - [version](docs\cli\babylond\Babylond_version.md) - This is a Cosmos Native CLI, it prints the application binary version information
