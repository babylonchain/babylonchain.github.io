"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={id:"become-validator",sidebar_label:"Becoming a Validator",hide_table_of_contents:!0},i="Becoming a Validator",l={unversionedId:"node-operators/become-validator",id:"node-operators/become-validator",title:"Becoming a Validator",description:"In this guide we are going to go through the steps for someone",source:"@site/docs/node-operators/become-validator.md",sourceDirName:"node-operators",slug:"/node-operators/become-validator",permalink:"/docs/node-operators/become-validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/node-operators/become-validator.md",tags:[],version:"current",frontMatter:{id:"become-validator",sidebar_label:"Becoming a Validator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Setting Up a Full Node",permalink:"/docs/node-operators/setup-node"},next:{title:"Resources",permalink:"/docs/resources/overview"}},s={},d=[{value:"Create a Keyring and Get Funds",id:"create-a-keyring-and-get-funds",level:2},{value:"Create a BLS key",id:"create-a-bls-key",level:2},{value:"Modify the client configuration",id:"modify-the-client-configuration",level:2},{value:"Create the validator",id:"create-the-validator",level:2},{value:"Verify your validator",id:"verify-your-validator",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"becoming-a-validator"},"Becoming a Validator"),(0,o.kt)("p",null,"In this guide we are going to go through the steps for someone\nto become a validator."),(0,o.kt)("p",null,"Prerequisites: Having a full node setup and synced by following this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"guide")),(0,o.kt)("h2",{id:"create-a-keyring-and-get-funds"},"Create a Keyring and Get Funds"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, validators can only use the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," keyring backend. In the future,\nBabylon will support other types of encrypted backends provided by the Cosmos SDK for validators.")),(0,o.kt)("p",null,"To create the keyring that will hold the validator account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond --keyring-backend test keys add val-key\n")),(0,o.kt)("p",null,"This will generate an address as well as a mnemonic which should be noted for future reference.\nIn order to become a validator, you need to have funds that will be bonded.\nFunds can be retrieved either through our ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.babylonchain.io"},"faucet")," for the testnet\nor from other sources that have access to testnet Babylon tokens."),(0,o.kt)("h2",{id:"create-a-bls-key"},"Create a BLS key"),(0,o.kt)("p",null,"Validators are expected to submit a BLS signature at the end of each epoch.\nTo do that, a validator needs to have a BLS key pair to sign information with."),(0,o.kt)("p",null,"Using the address that you created on the previous step (",(0,o.kt)("inlineCode",{parentName:"p"},"$ADDR")," variable):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond create-bls-key $ADDR\n")),(0,o.kt)("p",null,"This command will create a BLS key and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/priv_validator_key.json"),".\nThis is the same file that stores the private key that the validator uses to sign blocks.\nPlease ensure that this file is secured properly."),(0,o.kt)("h2",{id:"modify-the-client-configuration"},"Modify the client configuration"),(0,o.kt)("p",null,"A Babylon validator needs to send BLS signature transactions at the end of each epoch.\nThis process is done automatically through the Babylon codebase which identifies\nwhich key to use from the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/client.toml")," file. Edit this file and\nset the keyring backend that you're using.\nIn this guide's case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'keyring-backend = "test"\n')),(0,o.kt)("h2",{id:"create-the-validator"},"Create the validator"),(0,o.kt)("p",null,"Contrary to a vanilla Cosmos SDK chain, a validator for Babylon is created through\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"babylond tx checkpointing create-validator")," command.\nThis command expects that a BLS validator key exists under the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/priv_validator_key.json"),"\nand has the same parameters as the ",(0,o.kt)("inlineCode",{parentName:"p"},"babylond tx staking create-validator")," command."),(0,o.kt)("p",null,"To create the validator (using sample parameters):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'babylond tx checkpointing create-validator \\\n    --amount="1000000ubbn" \\\n    --pubkey=$(babylond tendermint show-validator) \\\n    --moniker="My Validator" \\\n    --chain-id=bbn-test-0\\\n    --gas="auto" \\\n    --gas-adjustment=1.2 \\\n    --gas-prices="0.0025ubbn" \\\n    --from=val-key \\\n    --commission-rate="0.10" \\\n    --commission-max-rate="0.20" \\\n    --commission-max-change-rate="0.01" \\\n    --min-self-delegation="1"\n')),(0,o.kt)("h2",{id:"verify-your-validator"},"Verify your validator"),(0,o.kt)("p",null,"On the Babylon system,\none can become a validator only after an epoch ends.\nFor the testnet, an epoch lasts for around 30 minutes."),(0,o.kt)("p",null,"To verify that you have become a validator, first find your validator address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond keys show $KEYNAME -a --bech val\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$KEYNAME")," is the name of the key that you used for the self-delegation (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"val-key")," on our example).\nThis will return an address which you can use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ADDR")," variable to perform the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond query staking validator $ADDR\n")),(0,o.kt)("p",null,"If all goes well, you should see a response indicating the parameters that you specified\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-validator")," transaction."),(0,o.kt)("p",null,"After the epoch ends and if you have enough stake to be an active validator,\nperforming this query will return you a status ",(0,o.kt)("inlineCode",{parentName:"p"},"BOND_STATUS_BONDED"),".\nCongrats! You are now a validator on the Babylon system."))}u.isMDXComponent=!0}}]);