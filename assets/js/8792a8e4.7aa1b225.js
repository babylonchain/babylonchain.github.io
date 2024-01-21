"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={id:"setup-node",sidebar_label:"Setting Up a Full Node",hide_table_of_contents:!0},i="Setting Up a Full Node",s={unversionedId:"user-guides/btc-timestamping-testnet/setup-node",id:"user-guides/btc-timestamping-testnet/setup-node",title:"Setting Up a Full Node",description:"Learn how to set up the full node for the Babylon system.",source:"@site/docs/user-guides/btc-timestamping-testnet/setup-node.md",sourceDirName:"user-guides/btc-timestamping-testnet",slug:"/user-guides/btc-timestamping-testnet/setup-node",permalink:"/docs/user-guides/btc-timestamping-testnet/setup-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-timestamping-testnet/setup-node.md",tags:[],version:"current",frontMatter:{id:"setup-node",sidebar_label:"Setting Up a Full Node",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Network Information",permalink:"/docs/user-guides/btc-timestamping-testnet/network-information"},next:{title:"Getting Testnet Tokens",permalink:"/docs/user-guides/btc-timestamping-testnet/getting-funds"}},l={},p=[{value:"1. Initialize the Node Directory",id:"1-initialize-the-node-directory",level:2},{value:"2. Add Peers and Modify Configuration",id:"2-add-peers-and-modify-configuration",level:2},{value:"3. Setup Cosmovisor",id:"3-setup-cosmovisor",level:2},{value:"4. Start the Node",id:"4-start-the-node",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-full-node"},"Setting Up a Full Node"),(0,a.kt)("p",null,"Learn how to set up the full node for the Babylon system."),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide requires having Babylon installed on a Linux System.\nThe instructions can be found on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guides/installation"},"Installation page"),"\nThe version to install is specified at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/networks/tree/main/bbn-test-2"},"bbn-test-2 network info page"),".")),(0,a.kt)("h2",{id:"1-initialize-the-node-directory"},"1. Initialize the Node Directory"),(0,a.kt)("p",null,"First, initialize a node configuration directory under ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.babylond"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"$NODENAME")," variable specifies the name you aim to give your node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"babylond init $NODENAME --chain-id bbn-test-2\n")),(0,a.kt)("p",null,"Then, retrieve the genesis file and place it in the node directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"wget https://github.com/babylonchain/networks/raw/main/bbn-test-2/genesis.tar.bz2\ntar -xjf genesis.tar.bz2 && rm genesis.tar.bz2\nmv genesis.json ~/.babylond/config/genesis.json\n")),(0,a.kt)("h2",{id:"2-add-peers-and-modify-configuration"},"2. Add Peers and Modify Configuration"),(0,a.kt)("p",null,"Edit the configuration file at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/config.toml")," and modify\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"seeds")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"persistent_peers")," attributes to contain appropriate seeds and peers\nof your choice. The full list of Babylon approved seeds and peers can be found under\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/networks/tree/main/bbn-test-2"},"bbn-test-2 network info page"),"."),(0,a.kt)("p",null,"Edit the configuration file at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/app.toml")," and modify the\n",(0,a.kt)("inlineCode",{parentName:"p"},"btc-network")," attribute to contain the appropriate BTC network\nparameters as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[btc-config]\nnetwork = "mainnet"\n')),(0,a.kt)("p",null,"On the same file, you can also modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"minimum-gas-prices")," attribute and\nset it to a value of your choosing. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'minimum-gas-prices = "0.00001ubbn"\n')),(0,a.kt)("h2",{id:"3-setup-cosmovisor"},"3. Setup Cosmovisor"),(0,a.kt)("p",null,"To install the latest version of Cosmovisor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest\n")),(0,a.kt)("p",null,"Create the necessary directories"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkdir -p ~/.babylond\nmkdir -p ~/.babylond/cosmovisor\nmkdir -p ~/.babylond/cosmovisor/genesis\nmkdir -p ~/.babylond/cosmovisor/genesis/bin\nmkdir -p ~/.babylond/cosmovisor/upgrades\n")),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"babylond")," binary into the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor/genesis")," folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cp $GOPATH/bin/babylond ~/.babylond/cosmovisor/genesis/bin/babylond\n")),(0,a.kt)("p",null,"Setup a cosmovisor service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'sudo tee /etc/systemd/system/babylond.service > /dev/null <<EOF\n[Unit]\nDescription=Babylon daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) run start --x-crisis-skip-assert-invariants\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\n\nEnvironment="DAEMON_NAME=babylond"\nEnvironment="DAEMON_HOME=${HOME}/.babylond"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,a.kt)("h2",{id:"4-start-the-node"},"4. Start the Node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo -S systemctl daemon-reload\nsudo -S systemctl enable babylond\nsudo -S systemctl start babylond\n")),(0,a.kt)("p",null,"You can check the status of the node by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"systemctl status babylond\n")))}c.isMDXComponent=!0}}]);