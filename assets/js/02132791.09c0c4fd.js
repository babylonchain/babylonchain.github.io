"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),f=a,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return n?i.createElement(u,o(o({ref:t},p),{},{components:n})):i.createElement(u,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"finality-provider",title:"Finality Provider",sidebar_label:"Finality Provider"},o=void 0,l={unversionedId:"user-guides/btc-staking-testnet/finality-providers/finality-provider",id:"user-guides/btc-staking-testnet/finality-providers/finality-provider",title:"Finality Provider",description:"1. Overview",source:"@site/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider.md",sourceDirName:"user-guides/btc-staking-testnet/finality-providers",slug:"/user-guides/btc-staking-testnet/finality-providers/finality-provider",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-staking-testnet/finality-providers/finality-provider.md",tags:[],version:"current",frontMatter:{id:"finality-provider",title:"Finality Provider",sidebar_label:"Finality Provider"},sidebar:"docs",previous:{title:"EOTS Manager",permalink:"/docs/user-guides/btc-staking-testnet/finality-providers/eots-manager"},next:{title:"Becoming a BTC Staker",permalink:"/docs/user-guides/btc-staking-testnet/btc-staker"}},s={},d=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Configuration",id:"2-configuration",level:2},{value:"3. Add key for the consumer chain",id:"3-add-key-for-the-consumer-chain",level:2},{value:"4. Starting the Finality Provider Daemon",id:"4-starting-the-finality-provider-daemon",level:2},{value:"5. Create and Register a Finality Provider",id:"5-create-and-register-a-finality-provider",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview"},"1. Overview"),(0,a.kt)("p",null,"The Finality Provider Daemon is responsible for\nmonitoring for new Babylon blocks,\ncommitting public randomness for the blocks it\nintends to provide finality signatures for, and\nsubmitting finality signatures."),(0,a.kt)("p",null,"The daemon can manage and perform the following operations for multiple\nfinality providers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Creation and Registration"),": Creates and registers finality\nproviders to Babylon."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EOTS Randomness Commitment"),": The daemon monitors the Babylon chain and\ncommits EOTS public randomness for every Babylon block each\nfinality provider intends to vote for. The commit intervals can be specified\nin the configuration.\nThe EOTS public randomness is retrieved through the finality provider daemon's\nconnection with the ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-guides/btc-staking-testnet/finality-providers/eots-manager"},"EOTS daemon"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Finality Votes Submission"),": The daemon monitors the Babylon chain\nand produces finality votes for each block each maintained finality provider\nhas committed to vote for.")),(0,a.kt)("p",null,"The daemon is controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd")," tool.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli")," tool implements commands for interacting with the daemon."),(0,a.kt)("h2",{id:"2-configuration"},"2. Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd init")," command initializes a home directory for the\nfinality provider daemon.\nThis directory is created in the default home location or in a\nlocation specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fpd init --home /path/to/fpd/home/\n")),(0,a.kt)("p",null,"After initialization, the home directory will have the following structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls /path/to/fpd/home/\n  \u251c\u2500\u2500 fpd.conf # Fpd-specific configuration file.\n  \u251c\u2500\u2500 logs     # Fpd logs\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," flag is not specified, then the default home directory\nwill be used. For different operating systems, those are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MacOS")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~/Users/<username>/Library/Application Support/Fpd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linux")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.Fpd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows")," ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\AppData\\Local\\Fpd"))),(0,a.kt)("p",null,"Below are some important parameters of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":\nThe configuration below requires to point to the path where this keyring is stored ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyDirectory"),".\nThis ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," field stores the key name used for interacting with the consumer chain\nand will be specified along with the ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyringBackend")," field in the next ",(0,a.kt)("a",{parentName:"p",href:"#3-add-key-for-the-consumer-chain"},"step"),".\nSo we can ignore the setting of the two fields in this step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# RPC Address of the EOTS Daemon\nEOTSManagerAddress = 127.0.0.1:15813\n\n# Babylon specific parameters\n\n# Babylon chain ID\nChainID = chain-test\n\n# Babylon node RPC endpoint\nRPCAddr = http://127.0.0.1:26657\n\n# Babylon node gRPC endpoint\nGRPCAddr = https://127.0.0.1:9090\n\n# Name of the key in the keyring to use for signing transactions\nKey = <finality-provider-key-name>\n\n# Type of keyring to use,\n# supported backends - (os|file|kwallet|pass|test|memory)\n# ref https://docs.cosmos.network/v0.46/run-node/keyring.html#available-backends-for-the-keyring\nKeyringBackend = test\n\n# Directory where keys will be retrieved from and stored\nKeyDirectory = /path/to/fpd/home\n")),(0,a.kt)("p",null,"To see the complete list of configuration options, check the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpd.conf")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Additional Notes:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We strongly recommend that EOTS randomness commitments are limited to 500\nblocks (default value: 100 blocks)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"; The number of Schnorr public randomness for each commitment\nNumPubRand = 100\n\n; The upper bound of the number of Schnorr public randomness for each commitment\nNumPubRandMax = 100\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you encounter any gas-related errors while performing staking operations,\nconsider adjusting the ",(0,a.kt)("inlineCode",{parentName:"p"},"GasAdjustment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GasPrices")," parameters. For example,\nyou can set:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GasAdjustment = 1.5\nGasPrices = 0.01ubbn\n")))),(0,a.kt)("h2",{id:"3-add-key-for-the-consumer-chain"},"3. Add key for the consumer chain"),(0,a.kt)("p",null,"The finality provider daemon requires the existence of a keyring that contains\nan account with Babylon token funds to pay for transactions.\nThis key will be also used to pay for fees of transactions to the consumer chain."),(0,a.kt)("p",null,"Use the following command to add the key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fpd keys add --key-name my-finality-provider --chain-id chain-test\n")),(0,a.kt)("p",null,"After executing the above command, the key name will be saved in the config file\ncreated in ",(0,a.kt)("a",{parentName:"p",href:"#2-configuration"},"step"),"."),(0,a.kt)("h2",{id:"4-starting-the-finality-provider-daemon"},"4. Starting the Finality Provider Daemon"),(0,a.kt)("p",null,"You can start the finality provider daemon using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fpd start --home /path/to/fpd/home\n")),(0,a.kt)("p",null,"This will start the RPC server at the address specified in the configuration under\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"RpcListener")," field, which has a default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:15812"),".\nYou can also specify a custom address using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-listener")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpd start --rpc-listener \'127.0.0.1:8088\'\n\ntime="2023-11-26T16:37:00-05:00" level=info msg="successfully connected to a remote EOTS manager    {"address": "127.0.0.1:15813"}"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Starting FinalityProviderApp"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Starting RPC Server"\ntime="2023-11-26T16:37:00-05:00" level=info msg="RPC server listening   {"address": "127.0.0.1:15812"}"\ntime="2023-11-26T16:37:00-05:00" level=info msg="Finality Provider Daemon is fully active!"\n')),(0,a.kt)("p",null,"All the available CLI options can be viewed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag. These options\ncan also be set in the configuration file."),(0,a.kt)("h2",{id:"5-create-and-register-a-finality-provider"},"5. Create and Register a Finality Provider"),(0,a.kt)("p",null,"A finality provider named ",(0,a.kt)("inlineCode",{parentName:"p"},"my-finality-provider")," can be created in the internal\nstorage (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/bbolt"},"bolt db"),")\nthrough the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli create-finality-provider")," command.\nThis finality provider is associated with a BTC public key which\nserves as its unique identifier and\na Babylon account to which staking rewards will be directed.\nThe key name must be the same as the key added in ",(0,a.kt)("a",{parentName:"p",href:"#3-add-key-for-the-consumer-chain"},"step"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpcli create-finality-provider --key-name my-finality-provider \\\n                --chain-id chain-test --moniker my-name\n{\n    "babylon_pk_hex": "02face5996b2792114677604ec9dfad4fe66eeace3df92dab834754add5bdd7077",\n    "btc_pk_hex": "d0fc4db48643fbb4339dc4bbf15f272411716b0d60f18bdfeb3861544bf5ef63",\n    "description": {\n        "moniker": "my-name"\n    },\n    "status": "CREATED"\n}\n')),(0,a.kt)("p",null,"The finality provider can be registered with Babylon through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"register-finality-provider")," command.\nThe output contains the hash of the Babylon\nfinality provider registration transaction.\nNote that if the ",(0,a.kt)("inlineCode",{parentName:"p"},"key-name")," is not specified, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," field of config specified in ",(0,a.kt)("a",{parentName:"p",href:"#3-add-key-for-the-consumer-chain"},"step"),"\nwill be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpcli register-finality-provider \\\n                 --btc-pk d0fc4db48643fbb4339dc4bbf15f272411716b0d60f18bdfeb3861544bf5ef63\n{\n    "tx_hash": "800AE5BBDADE974C5FA5BD44336C7F1A952FAB9F5F9B43F7D4850BA449319BAA"\n}\n')),(0,a.kt)("p",null,"To verify that your finality provider has been created,\nwe can check the finality providers that are managed by the daemon and their status.\nThese can be listed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpcli list-finality-providers")," command.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," field can receive the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATED"),": The finality provider is created but not registered yet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REGISTERED"),": The finality provider is registered but has not received any active delegations yet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ACTIVE"),": The finality provider has active delegations and is empowered to send finality signatures"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INACTIVE"),": The finality provider used to be ACTIVE but the voting power is reduced to zero"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SLASHED"),": The finality provider is slashed due to malicious behavior")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'fpcli list-finality-providers\n{\n    "finality-providers": [\n        ...\n        {\n            "babylon_pk_hex": "02face5996b2792114677604ec9dfad4fe66eeace3df92dab834754add5bdd7077",\n            "btc_pk_hex": "d0fc4db48643fbb4339dc4bbf15f272411716b0d60f18bdfeb3861544bf5ef63",\n            "description": {\n                "moniker": "my-name"\n            },\n            "last_vote_height": 1\n            "status": "REGISTERED"\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);