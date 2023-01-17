---
id: installation
sidebar_label: Installation Guide
sidebar_position: 5
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
custom_edit_url: null
---

# Installation Guide

This article provides an overview of installing and initializing the Babylon chain on your system.

In this article:
- [Step 1: Install Golang](#step1)
- [Step 2: Build and Install Babylon](#step2)

## Step 1: Install Golang <a id="step1"></a>
:::info Note

Babylon requires Golang [version 1.19](https://go.dev/doc/install) for Babylon to be installed on your system.
Install it using the instructions on the provided link.

:::

After you install it, you can verify that you have the proper version by running:
```console
$ go version
go version go1.19 darwin/amd64
```

## Step 2: Build and install Babylon <a id="step2"></a>
You need to clone Babylon’s GitHub repository to install the `babylond` executable.

1. Install build requirements
```console
sudo apt install git build-essential ufw curl jq snapd --yes
```
2. Retrieve the Babylon source code either through the [releases page](https://github.com/babylonchain/babylon/releases) or by cloning the [source code](https://github.com/babylonchain/babylon). In case you want to create a full node for the testnet, it is highly recommended that you choose the release corresponding to the current testnet. See the [testnet network information](./testnet/network-information.md) page for more details.
3. Navigate to the directory that contains the Babylon source code. From there build and install the babylond executable
```console
git checkout <version_to_install>
make install
```

:::info Note

The last command first executes `git checkout` in the specific version that you want to install.
Ensure that you install the same version of the Babylon executable as the one that is running on the network you aim to join.

:::
