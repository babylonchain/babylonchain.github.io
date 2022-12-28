---
id: error
sidebar_label: Error Handling
sidebar_position: 2
pagination_prev: null
pagination_next: null
custom_edit_url: null
---

# Error Handling
This article provides an overview of how to handle any errors occurred when installing the Babylon Chain.

In this article:
- [Errors During Repository Cloning](#error1)
    - [Too Many Arguments](#error1.1)
        - [Solution:](#sol1)
    -  [Could Not Set 'core.filemode' to 'false'](#error1.2)
        - [Solution:](#sol2)
- [Error During Babylon Chain Initialization](#error2)
    - [No Such Directory Found](#error2.1)
        - [Solution:](#sol3)
    - [Command 'make' Not Found](#error2.2)
        - [Solution:](#sol4)
    - [Make Build Error 1](#error2.3)
        - [Solution:](#sol5)
    - [Make Build Error 127](#error2.4)
        - [Solution:](#sol6)
    - [Genesis File Already Exists](#error2.5)
        - [Solution:](#sol7)
    
## Error During Repository Cloning <a id="error1"></a>
### Too Many Arguments <a id="error1.1"></a>
```
fatal: Too many arguments.
```
This error occurs when something is wrong with the git clone syntax on your Ubuntu.

#### Solution: <a id="sol1"></a>
Please make sure that the syntax is correct. Here is an example of the correct syntax to clone a git repository:
```
git clone https://qa12345678910@github.com/babylonchain/babylon.git
```
:::info Note

Do not forget to create your personal access token to clone a git repository.

:::
### Could Not Set 'core.filemode' to 'false' <a id="error1.2"></a>
```
fatal: could not set 'core.filemode' to 'false'
```
This error occurs when the Windows Linux System permission within the drive is denied.
#### Solution: <a id="sol2"></a>
Restarting the system will reset the permissions. If this doesn't work, add Sudo to the syntax, as illustrated in the following code:
```
sudo git clone https://qa12345678910@github.com/babylonchain/babylon.git
```
## Error During Babylon Chain Initialization <a id="error2"></a>
### No Such Directory Found <a id="error2.1"></a>
```
No such file or directory
```
This issue happens when a make syntax is executed in the incorrect directory or path.
#### Solution: <a id="sol3"></a>
Remember to access the cloned repository folder to initialize the Babylon Chain after cloning the repository. Here is an example of a configuration code:
```
cd /mnt/c/Users/<yourusername>/Documents/Babylond/babylon
```
### Command 'make' Not Found <a id="error2.2"></a>
```
Command 'make' not found
```
This occurs while building a chain without first installing the Make language.
#### Solution: <a id="sol4"></a>
Install the Make language on Ubuntu by inserting the code below:
```
sudo apt install make
```
### Make Build Error 1 <a id="error2.3"></a>
```
go build -mod=readonly -tags "netgo ledger" -ldflags '-X github.com/cosmos/cosmos-sdk/version.Name=babylon -X github.com/cosmos/cosmos-sdk/version.AppName=babylond -X github.com/cosmos/cosmos-sdk/version.Version=af24cf3 -X github.com/cosmos/cosmos-sdk/version.Commit=af24cf321f848619739fafa7c1f6173b0284e61f -X "github.com/cosmos/cosmos-sdk/version.BuildTags=netgo,ledger" -w -s' -trimpath -o /mnt/c/Users/kakakepan/Documents/babylon/babylon/build/ ./...
go: updates to go.mod needed, disabled by -mod=readonly
make: *** [Makefile:116: build] Error 1
```
This occurs when a Golang version lower than 1.18 has been installed. Babylon requires Golang version 1.18 or above.
#### Solution: <a id="sol5"></a>
You need to uninstall Golang by inserting the code below on Ubuntu:
```
sudo apt-get remove golang-go
```
Next, install the latest version of Golang by inserting the code below:
```
sudo wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
source ~/.bashrc
```
### Make Build Error 127 <a id="error2.4"></a>
```
make: *** [Makefile:116: build] Error 127
```
This occurs if the cloned repository already contains a Build directory when running Make Install on Ubuntu.
#### Solution: <a id="sol6"></a>
1. Go to the cloned repository directory.
2. Remove the Build directory permanently.
3. Insert the code below to create a new Build directory:
```
make build
```
### Genesis File Already Exists <a id="error2.5"></a>
```
Error: genesis.json file already exists
```
This occurs when a genesis file already exists when initializing the Babylon Chain.
#### Solution: <a id="sol7"></a>
Insert the code below to solve the genesis file error on Ubuntu:
```
rm -r ~/.babylond
```