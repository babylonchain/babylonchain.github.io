"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,h=u["".concat(l,".").concat(k)]||u[k]||p[k]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"btc-staker",title:"Becoming a BTC Staker",sidebar_label:"Becoming a BTC Staker"},o=void 0,s={unversionedId:"user-guides/btc-staking-testnet/btc-staker",id:"user-guides/btc-staking-testnet/btc-staker",title:"Becoming a BTC Staker",description:"1. Overview",source:"@site/docs/user-guides/btc-staking-testnet/become-btc-staker.md",sourceDirName:"user-guides/btc-staking-testnet",slug:"/user-guides/btc-staking-testnet/btc-staker",permalink:"/docs/user-guides/btc-staking-testnet/btc-staker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-staking-testnet/become-btc-staker.md",tags:[],version:"current",frontMatter:{id:"btc-staker",title:"Becoming a BTC Staker",sidebar_label:"Becoming a BTC Staker"},sidebar:"docs",previous:{title:"Finality Provider",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider"},next:{title:"Developer Guides",permalink:"/docs/developer-guides/overview"}},l={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Installation",id:"2-installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Downloading the code",id:"downloading-the-code",level:3},{value:"Building and installing the binary",id:"building-and-installing-the-binary",level:3},{value:"3. Setting up BTC Staker",id:"3-setting-up-btc-staker",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"1. Create a Babylon keyring (keyring backend: test) with funds",id:"1-create-a-babylon-keyring-keyring-backend-test-with-funds",level:4},{value:"2. Start Bitcoin node with wallet",id:"2-start-bitcoin-node-with-wallet",level:4},{value:"2.1. Download and Extract Bitcoin Binary:",id:"21-download-and-extract-bitcoin-binary",level:4},{value:"2.2. Create and start a Systemd Service:",id:"22-create-and-start-a-systemd-service",level:4},{value:"2.3. Create legacy wallet and generate address:",id:"23-create-legacy-wallet-and-generate-address",level:4},{value:"2.4. Request signet BTC from faucet:",id:"24-request-signet-btc-from-faucet",level:4},{value:"Staker daemon (<code>stakerd</code>) configuration",id:"staker-daemon-stakerd-configuration",level:3},{value:"Babylon configuration",id:"babylon-configuration",level:4},{value:"BTC Node configuration",id:"btc-node-configuration",level:4},{value:"BTC Wallet configuration",id:"btc-wallet-configuration",level:4},{value:"BTC Node type specific configuration",id:"btc-node-type-specific-configuration",level:4},{value:"4. Starting staker daemon",id:"4-starting-staker-daemon",level:2},{value:"5. Staking operations with stakercli",id:"5-staking-operations-with-stakercli",level:2},{value:"Stake Bitcoin",id:"stake-bitcoin",level:3},{value:"1. List active BTC finality providers on Babylon",id:"1-list-active-btc-finality-providers-on-babylon",level:4},{value:"2. Obtain the BTC address from the BTC wallet",id:"2-obtain-the-btc-address-from-the-btc-wallet",level:4},{value:"3. Stake Bitcoin",id:"3-stake-bitcoin",level:4},{value:"Unbond staked funds",id:"unbond-staked-funds",level:3},{value:"Withdraw staked funds",id:"withdraw-staked-funds",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-overview"},"1. Overview"),(0,i.kt)("p",null,"BTC-Staker is a toolset designed for seamless Bitcoin staking. It consists of two\ncomponents:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," daemon manages connections to the Babylon and Bitcoin\nnodes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"stakercli")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"stakercli")," is a command line interface (CLI) to facilitate\ninteraction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," daemon . It enables users to stake funds, withdraw\nfunds, unbond staked funds, retrieve the active finality providers set in Babylon,\nand more. It serves as an intuitive interface for effortless control and\nmonitoring of your Bitcoin staking activities."))),(0,i.kt)("h2",{id:"2-installation"},"2. Installation"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This project requires Go version 1.21 or later."),(0,i.kt)("p",null,"Install Go by following the instructions on\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"official Go installation guide"),"."),(0,i.kt)("p",null,"Install essential tools and packages needed to compile and build the binaries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential\n")),(0,i.kt)("h3",{id:"downloading-the-code"},"Downloading the code"),(0,i.kt)("p",null,"To get started, clone the repository to your local machine from Github:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/babylonchain/btc-staker.git\n")),(0,i.kt)("p",null,"You can choose a specific version from\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/btcstaker/releases"},"official releases page")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd btc-staker # cd into the project directory\ngit checkout <release-tag>\n")),(0,i.kt)("h3",{id:"building-and-installing-the-binary"},"Building and installing the binary"),(0,i.kt)("p",null,"At the top-level directory of the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,i.kt)("p",null,"The above command will build and install the following binaries to\n",(0,i.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stakerd"),": The daemon program for the btc-staker"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stakercli"),": The CLI tool for interacting with the stakerd.")),(0,i.kt)("p",null,"If your shell cannot find the installed binaries, make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," is in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," of your shell. Usually these commands will do the job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$HOME/go/bin:$PATH\necho 'export PATH=$HOME/go/bin:$PATH' >> ~/.profile\n")),(0,i.kt)("p",null,"To build without installing,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,i.kt)("p",null,"The above command will put the built binaries in a build directory with the following\nstructure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ls build\n     \u251c\u2500\u2500 stakerd\n     \u2514\u2500\u2500 stakercli\n")),(0,i.kt)("h2",{id:"3-setting-up-btc-staker"},"3. Setting up BTC Staker"),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("h4",{id:"1-create-a-babylon-keyring-keyring-backend-test-with-funds"},"1. Create a Babylon keyring (keyring backend: test) with funds"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," daemon requires a keyring with loaded Babylon tokens to pay for the\ntransactions. Follow this\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/getting-funds"},"guide"),"\nto create a keyring and request funds."),(0,i.kt)("h4",{id:"2-start-bitcoin-node-with-wallet"},"2. Start Bitcoin node with wallet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," daemon requires a running Bitcoin node and a ",(0,i.kt)("strong",{parentName:"p"},"legacy")," wallet loaded\nwith signet Bitcoins."),(0,i.kt)("p",null,"You can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," daemon to connect to either\n",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoind")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"btcd")," node types. While both are compatible, we recommend\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoind"),". Ensure that you are using legacy wallets, as ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd")," daemon\ndoesn't currently support descriptor wallets."),(0,i.kt)("p",null,"Below, we'll guide you through setting up a signet ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoind")," node and a legacy\nwallet:"),(0,i.kt)("h4",{id:"21-download-and-extract-bitcoin-binary"},"2.1. Download and Extract Bitcoin Binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Download Bitcoin Core binary\nwget https://bitcoincore.org/bin/bitcoin-core-26.0/bitcoin-26.0-x86_64-linux-gnu.tar.gz\n\n# Extract the downloaded archive\ntar -xvf bitcoin-26.0-x86_64-linux-gnu.tar.gz\n\n# Provide execution permissions to binaries\nchmod +x bitcoin-26.0/bin/bitcoind\nchmod +x bitcoin-26.0/bin/bitcoin-cli\n")),(0,i.kt)("h4",{id:"22-create-and-start-a-systemd-service"},"2.2. Create and start a Systemd Service:"),(0,i.kt)("p",null,"Please update the following configurations in the provided file:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<rpcuser>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<rpcpass>")," with your own values. These credentials will\nalso be utilized in the btc-staker configuration file later on."),(0,i.kt)("li",{parentName:"ol"},"Ensure that the ",(0,i.kt)("inlineCode",{parentName:"li"},"<user>")," is set to the machine user. In the guide below, it's set\nto ubuntu."),(0,i.kt)("li",{parentName:"ol"},"Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"deprecatedrpc=create_bdb")," is necessary to enable the creation of a\nlegacy wallet, which has been deprecated in the latest core version. For more\ninformation, refer to the Bitcoin Core 26.0 release\npage ",(0,i.kt)("a",{parentName:"li",href:"https://bitcoincore.org/en/releases/26.0/"},"here"),"\nand this ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bitcoin/pull/28597"},"link"),"."),(0,i.kt)("li",{parentName:"ol"},"If you want to enable remote connections to the node, you can add\n",(0,i.kt)("inlineCode",{parentName:"li"},"rpcallowip=0.0.0.0/0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"rpcbind=0.0.0.0")," to the bitcoind command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the service file\nsudo tee /etc/systemd/system/bitcoind.service >/dev/null <<EOF\n[Unit]\nDescription=bitcoin signet node\nAfter=network.target\n\n[Service]\nUser=<user>\nType=simple\nExecStart=/home/ubuntu/bitcoin-26.0/bin/bitcoind \\\n    -deprecatedrpc=create_bdb \\\n    -signet \\\n    -server \\\n    -rpcport=38332 \\\n    -rpcuser=<your_rpc_username> \\\n    -rpcpassword=<your_rpc_password>\nRestart=on-failure\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the service\nsudo systemctl daemon-reload\nsudo systemctl enable bitcoind\nsudo systemctl start bitcoind\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Check the status and logs of the service\nsystemctl status bitcoind\njournalctl -u bitcoind -f\n")),(0,i.kt)("h4",{id:"23-create-legacy-wallet-and-generate-address"},"2.3. Create legacy wallet and generate address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a new wallet\n~/bitcoin-26.0/bin/bitcoin-cli -signet \\\n    -rpcuser=<your_rpc_username> \\\n    -rpcpassword=<your_rpc_password> \\\n    -rpcport=38332 \\\n    -named createwallet \\\n    wallet_name=btcstaker \\\n    passphrase="<passphrase>" \\\n    load_on_startup=true \\\n    descriptors=false\n\n# Load the newly created wallet\n~/bitcoin-26.0/bin/bitcoin-cli -signet \\\n    -rpcuser=<your_rpc_username> \\\n    -rpcpassword=<your_rpc_password> \\\n    -rpcport=38332 \\\n    loadwallet "btcstaker"\n\n# Generate a new address for the wallet\n~/bitcoin-26.0/bin/bitcoin-cli -signet \\\n    -rpcuser=<your_rpc_username> \\\n    -rpcpassword=<your_rpc_password> \\\n    -rpcport=38332 \\\n    getnewaddress\n')),(0,i.kt)("h4",{id:"24-request-signet-btc-from-faucet"},"2.4. Request signet BTC from faucet:"),(0,i.kt)("p",null,"Use the faucet ",(0,i.kt)("a",{parentName:"p",href:"https://signet.bc-2.jp/"},"link")," to request signet BTC to the address\ngenerated in the previous step. You can use the following command to check the\nbalance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace $TXID with the transaction id you received from the faucet\n~/bitcoin-26.0/bin/bitcoin-cli -signet \\\n    -rpcuser=<your_rpc_username> \\\n    -rpcpassword=<your_rpc_password> \\\n    -rpcport=38332 \\\n    gettransaction $TXID\n\n# Once the transaction is confirmed, you can check the balance\n~/bitcoin-26.0/bin/bitcoin-cli -signet \\\n    -rpcuser=<your_rpc_username> \\\n    -rpcpassword=<your_rpc_password> \\\n    -rpcport=38332 \\\n    getbalance\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure to run the Bitcoin node on the same network as the one the Babylon node\nconnects to. For Babylon testnet, we are using BTC Signet."),(0,i.kt)("li",{parentName:"ol"},"If you prefer not to run your own Bitcoin node, you can find an RPC to connect to."),(0,i.kt)("li",{parentName:"ol"},"Expected sync times for the BTC node are as follows: Signet takes less than 1\nhour, testnet takes a few hours, and mainnet could take a few days."),(0,i.kt)("li",{parentName:"ol"},"Ensure that you use a legacy (non-descriptor) wallet, as BTC Staker doesn't\ncurrently support descriptor wallets."),(0,i.kt)("li",{parentName:"ol"},"You can also use ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoin.conf")," instead of using flags in the ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoind")," cmd.\nPlease check the Bitcoin signet ",(0,i.kt)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/Signet"},"wiki")," and this\nmanual ",(0,i.kt)("a",{parentName:"li",href:"https://manpages.org/bitcoinconf/5"},"here")," to learn how to\nset ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoin.conf"),". Ensure you have configured the ",(0,i.kt)("inlineCode",{parentName:"li"},"bitcoind.conf")," correctly and\nset all the required parameters as shown in the systemd service file above.")),(0,i.kt)("h3",{id:"staker-daemon-stakerd-configuration"},"Staker daemon (",(0,i.kt)("inlineCode",{parentName:"h3"},"stakerd"),") configuration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stakercli")," tool serves as a control plane for the Staker Daemon."),(0,i.kt)("p",null,"Initialize the home directory for the Staker Daemon and dump the default\nconfiguration file to the specified directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"stakercli admin dump-config --config-file-dir /path/to/stakerd-home/\n")),(0,i.kt)("p",null,"After initialization, the home directory will have the following structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls /path/to/stakerd-home/\n    \u251c\u2500\u2500 stakerd.conf\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config-file-dir")," flag is not specified, then the default home directory\nwill be used. For different operating systems, those are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MacOS")," ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Application Support/Stakerd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux")," ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.Stakerd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows")," ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\AppData\\Local\\Stakerd"))),(0,i.kt)("p",null,"In the following, we go through important parameters of the ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd.conf")," file."),(0,i.kt)("h4",{id:"babylon-configuration"},"Babylon configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," parameter in the config below is the name of the key in the keyring to\nuse for signing transactions. Use the key name you created\nin ",(0,i.kt)("a",{parentName:"p",href:"#1-create-a-babylon-keyring-keyring-backend-test-with-funds"},"Create a Babylon keyring with funds"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyringDirectory")," is set to the location where the keyring is\nstored.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," keyring backend")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure you use the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainID")," for the network you're connecting to. For\nexample, for Babylon devnet, the chain ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"bbn-dev-5"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To change the Babylon RPC/GRPC address, update the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"RPCAddr = https://rpc.devnet.babylonchain.io:443 # rpc node address\nGRPCAddr = https://grpc.devnet.babylonchain.io:443 # grpc node address\n")),(0,i.kt)("p",{parentName:"li"},"The above addresses are for Babylon devnet.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you encounter any gas-related errors while performing staking operations,\nconsider adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"},"GasAdjustment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GasPrices")," parameters. For example,\nyou can set:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"GasAdjustment = 1.5\nGasPrices = 0.002ubbn\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[babylon]\n# Name of the key in the keyring to use for signing transactions\nKey = btc-staker\n\n# Chain id of the chain (Babylon)\nChainID = chain-test\n\n# Address of the chain's RPC server (Babylon)\nRPCAddr = http://localhost:26657\n\n# Address of the chain's GRPC server (Babylon)\nGRPCAddr = https://localhost:9090\n\n# Type of keyring backend to use \nKeyringBackend = test\n\n# Adjustment factor when using gas estimation\nGasAdjustment = 1.2\n\n# Comma separated minimum gas prices to accept for transactions\nGasPrices = 0.01ubbn\n\n# Directory to store staker keys in\nKeyDirectory = /Users/<user>/Library/Application Support/Stakerd\n")),(0,i.kt)("h4",{id:"btc-node-configuration"},"BTC Node configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"BTC configuration should reflect the BTC node that we're running and the network\nBabylon connects to."),(0,i.kt)("li",{parentName:"ol"},"You can use this ",(0,i.kt)("a",{parentName:"li",href:"https://signet.bc-2.jp/"},"faucet")," to receive signet BTC.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[chain]\n# btc network to run on\nNetwork = signet\n\n[btcnodebackend]\n# type of node to connect to {bitcoind, btcd}\nNodetype = bitcoind\n\n# type of wallet to connect to {bitcoind, btcwallet}\nWalletType = bitcoind\n\n# fee mode to use for fee estimation {static, dynamic}. In dynamic mode fee will be estimated using backend node\nFeeMode = static\n")),(0,i.kt)("h4",{id:"btc-wallet-configuration"},"BTC Wallet configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure you create a BTC wallet, name it appropriately, and load it with enough\nsignet BTC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[walletconfig]\n# name of the wallet to sign Bitcoin transactions. This should be the same as set in createwallet command in bitcoind.\nWalletName = btcstaker\n\n# passphrase to unlock the wallet\nWalletPass = walletpass\n\n[walletrpcconfig]\n# location of the wallet rpc server\n# note: in case of bitcoind, the wallet host is same as the rpc host\nHost = localhost:38332\n\n# user auth for the wallet rpc server\n# note: in case of bitcoind, the wallet rpc credentials are same as rpc credentials\n# this should be the same as set in the bitcoind daemon\nUser = your_rpc_username\n\n# password auth for the wallet rpc server. This should be the same as set in the bitcoind daemon\nPass = your_rpc_password\n\n# disables tls for the wallet rpc client\nDisableTls = true\n")),(0,i.kt)("h4",{id:"btc-node-type-specific-configuration"},"BTC Node type specific configuration"),(0,i.kt)("p",null,"Make sure to replace the following important parameters related to ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoind")," as per\nyour setup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[bitcoind]\n# The daemon's rpc listening address\n# note: P2P port for signet is 38332/38333\n# mainnet 8332/8333\n# testnet 18332/18333\n# regtest 18443\n# ref - https://github.com/bitcoin/bitcoin/blob/03752444cd54df05a731557968d5a9f33a55c55c/src/chainparamsbase.cpp#L39\nRPCHost = 127.0.0.1:38332\n\n# Username for RPC connections. This should be the same as set in the bitcoind daemon\nRPCUser = your_rpc_username\n\n# Password for RPC connections. This should be the same as set in the bitcoind daemon\nRPCPass = your_rpc_password\n\n# The address listening for ZMQ connections to deliver raw block notifications\nZMQPubRawBlock = tcp://127.0.0.1:29001\n\n# The address listening for ZMQ connections to deliver raw transaction notifications\nZMQPubRawTx = tcp://127.0.0.1:29002\n")),(0,i.kt)("p",null,"To see the complete list of configuration options, check the ",(0,i.kt)("inlineCode",{parentName:"p"},"stakerd.conf")," file."),(0,i.kt)("h2",{id:"4-starting-staker-daemon"},"4. Starting staker daemon"),(0,i.kt)("p",null,"You can start the staker daemon using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"stakerd\n")),(0,i.kt)("p",null,"This will start the RPC server at the address specified in the configuration under\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"RawRPCListeners")," field. A custom address can also be specified using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--rpclisten")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'stakerd --rpclisten \'localhost:15812\'\n\ntime="2023-12-08T11:48:04+05:30" level=info msg="Starting StakerApp"\n')),(0,i.kt)("p",null,"All the available CLI options can be viewed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag. These options\ncan also be set in the configuration file."),(0,i.kt)("h2",{id:"5-staking-operations-with-stakercli"},"5. Staking operations with stakercli"),(0,i.kt)("p",null,"The following guide will show how to stake, withdraw, and unbond Bitcoin."),(0,i.kt)("h3",{id:"stake-bitcoin"},"Stake Bitcoin"),(0,i.kt)("h4",{id:"1-list-active-btc-finality-providers-on-babylon"},"1. List active BTC finality providers on Babylon"),(0,i.kt)("p",null,"Find the BTC public key of the finality provider you intend to stake to."),(0,i.kt)("p",null,"When staking, specify the BTC public key of a single finality provider using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--finality-providers-pks")," flag in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stake")," command."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," Make sure to use only one finality provider BTC public key in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--finality-providers-pks")," flag of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"stake"),"\ncommand, as multiple providers are not currently supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'stakercli daemon babylon-finality-providers\n{\n    "finality_providers": [\n        {\n            "babylon_public_Key": "0294092d0266c8d26544291b692e13f1e4fcba7829c5445ff99fcb3aefb23fe7cd",\n            "bitcoin_public_Key": "3328782c63404386d9cd905dba5a35975cba629e48192cea4a348937e865d312"\n        }\n    ],\n    "total_finality_providers_count": "1"\n}\n')),(0,i.kt)("h4",{id:"2-obtain-the-btc-address-from-the-btc-wallet"},"2. Obtain the BTC address from the BTC wallet"),(0,i.kt)("p",null,"Find the BTC address that has sufficient Bitcoin balance that you want to stake from."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": In case you don't have addresses with adequate balances, you can use the\nfaucet to receive signet BTC. Visit the faucet ",(0,i.kt)("a",{parentName:"p",href:"https://signet.bc-2.jp/"},"link")," to\nacquire signet BTC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'stakercli daemon list-outputs\n{\n  "outputs": [\n    {\n      "amount": "10 BTC",\n      "address": "bcrt1q56ehztys752uzg7fzpear08l5mw8w2kxgz7644"\n    },\n    {\n      "amount": "10 BTC",\n      "address": "bcrt1ql94x9v78ag7qx896f0axka809u55pla8cywsvn"\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"3-stake-bitcoin"},"3. Stake Bitcoin"),(0,i.kt)("p",null,"Stake Bitcoin to the finality provider of your choice. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--staking-time")," flag\nspecifies the timelock of the staking transaction in BTC blocks.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"--staking-amount"),"\nflag specifies the amount in satoshis to stake."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'stakercli daemon stake \\\n  --staker-address bcrt1q56ehztys752uzg7fzpear08l5mw8w2kxgz7644 \\\n  --staking-amount 1000000 \\\n  --finality-providers-pks 3328782c63404386d9cd905dba5a35975cba629e48192cea4a348937e865d312 \\\n  --staking-time 100\n\n# Transaction details\n{\n  "tx_hash": "6bf442a2e864172cba73f642ced10c178f6b19097abde41608035fb26a601b10"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": You can self delegate i.e. stake to your own finality provider. Follow\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/finality-provider/blob/dev/docs/finality-provider.md#4-create-and-register-a-finality-provider"},"finality provider registration guide"),"\nto create and register a finality provider to Babylon. Once the finality provider is\nregistered, you can use your finality provider BTC public key in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--finality-providers-pks")," flag of the ",(0,i.kt)("inlineCode",{parentName:"p"},"stake"),"\ncommand."),(0,i.kt)("h3",{id:"unbond-staked-funds"},"Unbond staked funds"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," cmd initiates the unbonding flow which involves communication with the\nBabylon chain, Covenant emulators, and the BTC chain. It"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build the unbonding transaction and send it to the Babylon chain"),(0,i.kt)("li",{parentName:"ol"},"Wait for the signatures from the covenant emulators"),(0,i.kt)("li",{parentName:"ol"},"Send the unbonding transaction to the BTC chain")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--staking-transaction-hash")," is the transaction hash from the response of the ",(0,i.kt)("inlineCode",{parentName:"p"},"stake"),"\ncommand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"stakercli daemon unbond \\\n  --staking-transaction-hash 6bf442a2e864172cba73f642ced10c178f6b19097abde41608035fb26a601b10\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can also use this cmd to get the list of all staking transactions in db.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"stakercli daemon list-staking-transactions\n"))),(0,i.kt)("li",{parentName:"ol"},"There is a minimum unbonding time currently set to 50 BTC blocks. After this\nperiod, the unbonding timelock will expire, and the staked funds will be unbonded.")),(0,i.kt)("h3",{id:"withdraw-staked-funds"},"Withdraw staked funds"),(0,i.kt)("p",null,"The staker can withdraw the staked funds after the timelock of the staking or\nunbonding transaction expires."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--staking-transaction-hash")," is the transaction hash from the response of ",(0,i.kt)("inlineCode",{parentName:"p"},"stake"),"\ncommand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"stakercli daemon unstake \\\n  --staking-transaction-hash 6bf442a2e864172cba73f642ced10c178f6b19097abde41608035fb26a601b10\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),":\nYou can also use this cmd to get the list of all withdrawable staking transactions in\ndb."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"stakercli daemon withdrawable-transactions\n")))}p.isMDXComponent=!0}}]);