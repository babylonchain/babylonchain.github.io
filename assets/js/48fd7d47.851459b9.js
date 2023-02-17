"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={id:"setup-node",sidebar_label:"Setting Up a Full Node",hide_table_of_contents:!0},s="Setting Up a Full Node",i={unversionedId:"testnet/setup-node",id:"testnet/setup-node",title:"Setting Up a Full Node",description:"Learn how to set up the full node for the Babylon system.",source:"@site/docs/testnet/setup-node.md",sourceDirName:"testnet",slug:"/testnet/setup-node",permalink:"/docs/testnet/setup-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/testnet/setup-node.md",tags:[],version:"current",frontMatter:{id:"setup-node",sidebar_label:"Setting Up a Full Node",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Network Information",permalink:"/docs/testnet/network-information"},next:{title:"Getting Testnet Tokens",permalink:"/docs/testnet/getting-funds"}},l={},d=[{value:"1. Initialize the Node Directory",id:"1-initialize-the-node-directory",level:2},{value:"2. Add Seed Nodes and Persistent Peers",id:"2-add-seed-nodes-and-persistent-peers",level:2},{value:"3. Setup Cosmovisor",id:"3-setup-cosmovisor",level:2},{value:"4. Start the Node",id:"4-start-the-node",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-full-node"},"Setting Up a Full Node"),(0,r.kt)("p",null,"Learn how to set up the full node for the Babylon system."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"setfullnode",src:n(33296).Z+"#left",width:"677",height:"511"})),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide requires having Babylon installed on a Linux System.\nThe instructions can be found on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Installation/"},"Installation page"),"\nThe version to install is specified at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/networks/tree/main/bbn-test1"},"bbn-test1 network info page"),".")),(0,r.kt)("h2",{id:"1-initialize-the-node-directory"},"1. Initialize the Node Directory"),(0,r.kt)("p",null,"First, initialize a node configuration directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.babylond"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"$NODENAME")," variable specifies the name you aim to give your node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"babylond init $NODENAME --chain-id bbn-test1\n")),(0,r.kt)("p",null,"Then, retrieve the genesis file and place it in the node directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wget https://github.com/babylonchain/networks/raw/main/bbn-test1/genesis.tar.bz2\ntar -xjf genesis.tar.bz2 && rm genesis.tar.bz2\nmv genesis.json ~/.babylond/config/genesis.json\n")),(0,r.kt)("h2",{id:"2-add-seed-nodes-and-persistent-peers"},"2. Add Seed Nodes and Persistent Peers"),(0,r.kt)("p",null,"Edit the configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/config.toml")," and modify\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"seeds")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"persistent_peers")," attributes to contain appropriate seeds and peers\nof your choice. The full list of Babylon approved seeds and peers can be found under\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/networks/tree/main/bbn-test1"},"bbn-test1 network info page"),"."),(0,r.kt)("p",null,"Edit the configuration file at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/app.toml")," and modify the\n",(0,r.kt)("inlineCode",{parentName:"p"},"btc-network")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"btc-tag")," attributes to contain the BTC network parameters specified\nin the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/networks/tree/main/bbn-test1"},"bbn-test1 network info page"),"."),(0,r.kt)("h2",{id:"3-setup-cosmovisor"},"3. Setup Cosmovisor"),(0,r.kt)("p",null,"To install the latest version of Cosmovisor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest\n")),(0,r.kt)("p",null,"Create the necessary directories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mkdir -p ~/.babylond\nmkdir -p ~/.babylond/cosmovisor\nmkdir -p ~/.babylond/cosmovisor/genesis\nmkdir -p ~/.babylond/cosmovisor/genesis/bin\nmkdir -p ~/.babylond/cosmovisor/upgrades\n")),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"babylond")," binary into the ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor/genesis")," folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cp $GOPATH/bin/babylond ~/.babylond/cosmovisor/genesis/bin/babylond\n")),(0,r.kt)("p",null,"Setup a cosmovisor service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'sudo tee /etc/systemd/system/babylond.service > /dev/null <<EOF\n[Unit]\nDescription=Babylon daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) run start --x-crisis-skip-assert-invariants\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\n\nEnvironment="DAEMON_NAME=babylond"\nEnvironment="DAEMON_HOME=${HOME}/.babylond"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,r.kt)("h2",{id:"4-start-the-node"},"4. Start the Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo -S systemctl daemon-reload\nsudo -S systemctl enable babylond\nsudo -S systemctl start babylond\n")),(0,r.kt)("p",null,"You can check the status of the node by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"systemctl status babylond\n")))}c.isMDXComponent=!0},33296:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/setfullnode-12d86dd0eceb99d2ad5a36857dbfc1cd.png"}}]);