---
id: installation
sidebar_label: Installation Guide
sidebar_position: 1
pagination_prev: null
pagination_next: null
custom_edit_url: null
---

# Installation Guide
This article provides an overview of installing and initializing the Babylon chain on your system.

In this article:
- [Step 1: Install Golang](#step1)
- [Step 2: Clone Babylon Repository](#step2)
- [Step 3: Initialize the Babylon Chain](#step3)

![Alt text](https://drive.google.com/uc?export=view&id=1aBku1Zd33aUIPWp3ox_7Wh59ON1HYzOa)

## Step 1: Install Golang <a id="step1"></a>
:::info Note

Babylon requires golang version 1.18 for Babylon to be installed on your system.

:::
Install Golang on your system by following the steps below:
1. Go to <a href="https://golang.org/dl/">Golang official website</a> and grab the tarball link of the golang version you want to use. Or use the following **wget command** to download and install Golang:
```
sudo wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz
```
2. Extract the tarball to **/usr/local** directory by using the code below:
```
sudo tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
```
3. For the system-wide installation, add the **go** binary path to **.bashrc** file **/etc/profile** by using the code below:
```
export PATH=$PATH:/usr/local/go/bin
```
4. Then, run the code below to apply the change:
```
source ~/.bashrc
```
5. Run the code below to check if Golang has been successfully installed:
```
go version
```
It will return the Golang version that you have installed.
```
go version go1.19.4 linux/amd64
```
## Step 2: Clone Babylon Repository <a id="step2"></a>
You need to clone Babylon’s GitHub repository to install the Node. Follow the steps below to clone Babylon’s repository:

1. Open a folder to place the cloned file from the repository.  Insert the following code:
```
cd /mnt/c/Users/(YourSystemUsername)/Documents/Babylon
```
:::info Note

Change the **YourSystemUsername** into your **System Username**.

:::

2. **Clone the repository** by using the following code below:
```
git clone https://<tokenhere>@github.com/babylonchain/babylon.git
```
:::info Note

Replace **tokenhere** with your own unique access token.

:::

3. Enter your **GitHub username** and **password** for the Github authentication process.

4. Successfully cloned the repository.

## Step 3: Initialize the Babylon Chain <a id="step3"></a>
After cloning the Babylon repository, you must create the Babylon chain to start the Node. Follow the steps below to create the Babylon Chain:
1. Open the cloned repository folder on your system:
```
cd /mnt/c/Users/(YourSystemUsername)/Documents/Babylon/babylond
```
2. **Install Make** by inserting the code below:
```
sudo apt install make
```
3. **Build the chain** by inserting the code below on Ubuntu:
```
make build
```
It would return as follows:
```
go build -mod=readonly -tags "netgo ledger" -ldflags '-X github.com/cosmos/cosmos-sdk/version.Name=babylon -X github.com/cosmos/cosmos-sdk/version.AppName=babylond -X github.com/cosmos/cosmos-sdk/version.Version=00924d4 -X github.com/cosmos/cosmos-sdk/version.Commit=00924d4e2cc401bdff89e6489ae301e00a865880 -X "github.com/cosmos/cosmos-sdk/version.BuildTags=netgo,ledger" -w -s' -trimpath -o /mnt/c/Users/kakakepan/Documents/Babylond/babylon/build/ ./...
```
Under the babylond build directory, a babylon executable will be created.

4. To **install the Babylon executable** to the Babylon chain, insert the code below:
```
make install
```
It would return as follows:
```
go install -mod=readonly -tags "netgo ledger" -ldflags '-X github.com/cosmos/cosmos-sdk/version.Name=babylon -X github.com/cosmos/cosmos-sdk/version.AppName=babylond -X github.com/cosmos/cosmos-sdk/version.Version=00924d4 -X github.com/cosmos/cosmos-sdk/version.Commit=00924d4e2cc401bdff89e6489ae301e00a865880 -X "github.com/cosmos/cosmos-sdk/version.BuildTags=netgo,ledger" -w -s' -trimpath  ./...
```
5. **Initialize** the chain by inserting the code below:
```
$ ./build/babylond init chainName
```
:::info Note

You may replace the **chainName** with any **desired name**.

:::

After the Babylon chain has been successfully initialized, a directory named `~/.babylond` will be created, allowing users to choose a different home directory with the `--home` flag.