"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={id:"become-validator",sidebar_label:"Become a Validator",hide_table_of_contents:!0},i="Become a Validator",s={unversionedId:"user-guides/btc-timestamping-testnet/become-validator",id:"user-guides/btc-timestamping-testnet/become-validator",title:"Become a Validator",description:"Learn how to become a Validator for Babylon.",source:"@site/docs/user-guides/btc-timestamping-testnet/become-validator.md",sourceDirName:"user-guides/btc-timestamping-testnet",slug:"/user-guides/btc-timestamping-testnet/become-validator",permalink:"/docs/user-guides/btc-timestamping-testnet/become-validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guides/btc-timestamping-testnet/become-validator.md",tags:[],version:"current",frontMatter:{id:"become-validator",sidebar_label:"Become a Validator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Get Testnet Tokens",permalink:"/docs/user-guides/btc-timestamping-testnet/getting-funds"},next:{title:"Become a Vigilante",permalink:"/docs/user-guides/btc-timestamping-testnet/become-vigilante"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create a Keyring and Get Funds",id:"1-create-a-keyring-and-get-funds",level:2},{value:"2. Create a BLS key",id:"2-create-a-bls-key",level:2},{value:"3. Modify the Configuration",id:"3-modify-the-configuration",level:2},{value:"4. Create the Validator",id:"4-create-the-validator",level:2},{value:"5. Verify your Validator",id:"5-verify-your-validator",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"become-a-validator"},"Become a Validator"),(0,o.kt)("p",null,"Learn how to become a Validator for Babylon."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Having a full node setup and synced by following this ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-timestamping-testnet/setup-node"},"guide")),(0,o.kt)("h2",{id:"1-create-a-keyring-and-get-funds"},"1. Create a Keyring and Get Funds"),(0,o.kt)("p",null,"Validators are required to have funds for two reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"They need to provide a self delegation"),(0,o.kt)("li",{parentName:"ol"},"They need to pay for transaction fees for submitting BLS signature transactions")),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, validators can only use the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," keyring backend. In the future,\nBabylon will support other types of encrypted backends provided by the Cosmos SDK for validators.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-timestamping-testnet/getting-funds"},"Getting Testnet Tokens")," page contains detailed instructions\non how to create a keyring and get funds for it through a faucet."),(0,o.kt)("h2",{id:"2-create-a-bls-key"},"2. Create a BLS key"),(0,o.kt)("p",null,"Validators are expected to submit a BLS signature at the end of each epoch.\nTo do that, a validator needs to have a BLS key pair to sign information with."),(0,o.kt)("p",null,"Using the address that you created on the previous step (",(0,o.kt)("inlineCode",{parentName:"p"},"$ADDR")," variable):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond create-bls-key $ADDR\n")),(0,o.kt)("p",null,"This command will create a BLS key and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/priv_validator_key.json"),".\nThis is the same file that stores the private key that the validator uses to sign blocks.\nPlease ensure that this file is secured properly."),(0,o.kt)("p",null,"After creating a BLS key, you need to restart your node to load this key into\nmemory. If you followed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-guides/btc-timestamping-testnet/setup-node"},"setting up a node guide"),", you\nwould have to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo systemctl stop babylond\nsudo systemctl start babylond\n")),(0,o.kt)("h2",{id:"3-modify-the-configuration"},"3. Modify the Configuration"),(0,o.kt)("p",null,"A Babylon validator needs to send BLS signature transactions at the end of each epoch.\nThis process is done automatically through the Babylon codebase which identifies\nwhich key to use from the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/client.toml")," file. Edit this file and\nset the keyring backend that you're using.\nIn this guide's case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'keyring-backend = "test"\n')),(0,o.kt)("p",null,"Furthermore, you need to specify the name of the key that the validator will be\nusing to submit BLS signature transactions under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/app.toml")," file. Edit this file and set the key name to the\none that holds funds on your keyring:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'key-name = "val-key" # replace with your key name\n')),(0,o.kt)("p",null,"Finally, it is strongly recommended to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout_commit")," value\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/config.toml"),". This value specifies\nhow long a validator will wait before commiting a block before starting\non a new height. More information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.33/tendermint-core/configuration.html#consensus-timeouts-explained"},"here"),".\nGiven that Babylon aims to have a 10 second time between blocks, set this value\nto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'timeout_commit = "10s"\n')),(0,o.kt)("h2",{id:"4-create-the-validator"},"4. Create the Validator"),(0,o.kt)("p",null,"Contrary to a vanilla Cosmos SDK chain, a validator for Babylon is created through\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"babylond tx checkpointing create-validator")," command.\nThis command expects that a BLS validator key exists under the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.babylond/config/priv_validator_key.json"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: Babylon validators are required to submit a BLS signature transaction\nevery epoch (with current parameters every ~30mins). Those transactions\ncurrently cost a static gas fee of ",(0,o.kt)("inlineCode",{parentName:"p"},"100ubbn"),". Therefore, it is important\nthat validators maintain enough unbonded funds in their keyring to pay\nfor those transaction fees.")),(0,o.kt)("p",null,"To create the validator (using sample parameters):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'# Note the variables\n# - $AMOUNT the amount to delegate in ubbn, e.g. 1000000ubbn (must be less than the delegator\'s balance)\n# - $CHAIN_ID the chain ID\n# - $VAL_KEY the name of the key (with a test keyring backend) used for the validator\nbabylond tx checkpointing create-validator \\\n    --amount="$AMOUNT" \\\n    --pubkey=$(babylond tendermint show-validator) \\\n    --moniker="My Validator" \\\n    --chain-id=$CHAIN_ID \\\n    --gas="auto" \\\n    --gas-adjustment=1.2 \\\n    --gas-prices="0.0025ubbn" \\\n    --keyring-backend=test \\\n    --from=$VAL_KEY \\\n    --commission-rate="0.10" \\\n    --commission-max-rate="0.20" \\\n    --commission-max-change-rate="0.01" \\\n    --min-self-delegation="1"\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: In order to become an active validator, you need to have more ",(0,o.kt)("inlineCode",{parentName:"p"},"ubbn"),"\ntokens bonded than the last validator ordered by the tokens bonded (or the\nvalidator set to not be full) as well as have at least ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000ubbn")," bonded.")),(0,o.kt)("h2",{id:"5-verify-your-validator"},"5. Verify your Validator"),(0,o.kt)("p",null,"On the Babylon system,\none can become a validator only after an epoch ends.\nFor the testnet, an epoch lasts for around 30 minutes."),(0,o.kt)("p",null,"To verify that you have become a validator, first find your validator address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond keys show $KEYNAME -a --bech val\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$KEYNAME")," is the name of the key that you used for the self-delegation (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"val-key")," on our example).\nThis will return an address which you can use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ADDR")," variable to perform the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"babylond query staking validator $ADDR\n")),(0,o.kt)("p",null,"If all goes well, you should see a response indicating the parameters that you specified\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-validator")," transaction."),(0,o.kt)("p",null,"After the epoch ends and if you have enough stake to be an active validator,\nperforming this query will return you a status ",(0,o.kt)("inlineCode",{parentName:"p"},"BOND_STATUS_BONDED"),".\nCongrats! You are now a validator on the Babylon system."))}c.isMDXComponent=!0}}]);