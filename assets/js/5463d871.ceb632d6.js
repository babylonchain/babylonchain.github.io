"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),b=c(n),u=o,d=b["".concat(s,".").concat(u)]||b[u]||y[u]||r;return n?a.createElement(d,l(l({ref:t},h),{},{components:n})):a.createElement(d,l({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},56309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var a=n(87462),o=(n(67294),n(3905));const r=n.p+"assets/images/integrating-959f2b78fa607e9b59e055d686fbd9c4.png",l={id:"czintegrate",sidebar_label:"Integrating with Babylon",hide_table_of_contents:!0},i="Integrating with Babylon",s={unversionedId:"testnet/czintegrate",id:"testnet/czintegrate",title:"Integrating with Babylon",description:"",source:"@site/docs/testnet/integrate.md",sourceDirName:"testnet",slug:"/testnet/czintegrate",permalink:"/docs/testnet/czintegrate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/testnet/integrate.md",tags:[],version:"current",frontMatter:{id:"czintegrate",sidebar_label:"Integrating with Babylon",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Becoming a Vigilante",permalink:"/docs/testnet/become-vigilante"},next:{title:"gRPC Gateway (REST API)",permalink:"/docs/grpcrestapi"}},c={},h=[{value:"Babylon IBC relayer",id:"babylon-ibc-relayer",level:2},{value:"Running a Babylon IBC relayer",id:"running-a-babylon-ibc-relayer",level:2},{value:"Create a Babylon Account",id:"create-a-babylon-account",level:3},{value:"Obtain Babylon Tokens",id:"obtain-babylon-tokens",level:3},{value:"Install the Babylon Relayer",id:"install-the-babylon-relayer",level:3},{value:"Configure the Babylon Relayer",id:"configure-the-babylon-relayer",level:3},{value:"Restore the Babylon Account to the Babylon Relayer",id:"restore-the-babylon-account-to-the-babylon-relayer",level:3},{value:"Start the Babylon Relayer",id:"start-the-babylon-relayer",level:3},{value:"Check if the Integration is Successful",id:"check-if-the-integration-is-successful",level:3},{value:"Future Integration Phases",id:"future-integration-phases",level:2}],y={toc:h};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-with-babylon"},"Integrating with Babylon"),(0,o.kt)("p",null,"Learn how to integrate a Cosmos Zone with Babylon."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At the moment, Babylon provides a canonical chain oracle for each integrated Cosmos zone, and allows anyone to query the canonical chains of integrated Cosmos zones and query the fork headers created by a validator set with dishonest majority.\nIn the future, integrating Babylon will allows Cosmos zones to raise alarms upon dishonest majority attacks, and reduce the unbonding time."),(0,o.kt)("p",null,"In order to integrate a Cosmos zone to Babylon, the first option would be sending an email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:admin@babylonchain.io"},"the Babylon team"),", then the Babylon team will deploy a relayer for your blockchain.\nAlternatively, anyone can integrate any Cosmos zone to Babylon by running an IBC relayer specialized for Babylon.\nThe special IBC relayer uses a subset of the IBC protocol, and there is no need to modify the integrated Cosmos zone's code, or have tokens in the integrated Cosmos zone."),(0,o.kt)("h2",{id:"babylon-ibc-relayer"},"Babylon IBC relayer"),(0,o.kt)("p",null,"In order to provide a canonical chain oracle for Cosmos zones, Babylon only needs to use a subset of IBC protocols.\nSpecifically, Babylon needs to maintain an IBC light client for the integrated Cosmos zone, but not the other way.\nHowever, existing relayers, including the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/relayer"},"Go relayer")," and the Rust Hermes relayer, are designed for the full IBC protocol stack with an emphasis on IBC packets, thus only provide functionalities for updating both IBC clients in two Cosmos zones and relaying IBC packets among them."),(0,o.kt)("p",null,"To this end, the Babylon team has developed a special IBC relayer based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/relayer"},"the official IBC relayer in Golang"),".\nThe special IBC relayer allows one to maintain an IBC light client of a Cosmos zone in Babylon, and periodically forward headers of the Cosmos zone to Babylon.\nIt gives us the following advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrating a Cosmos zone to Babylon only needs Babylon accounts and tokens. Accounts and tokens of integrated Cosmos zones are not needed."),(0,o.kt)("li",{parentName:"ul"},"Integrating a Cosmos zone to Babylon incurs zero computational or storage overhead on integrated Cosmos zones.")),(0,o.kt)("h2",{id:"running-a-babylon-ibc-relayer"},"Running a Babylon IBC relayer"),(0,o.kt)("div",{style:{justifyContent:"center",display:"flex",marginBottom:"50px"}},(0,o.kt)("img",{style:{width:"1000px"},src:r,alt:"integration"})),(0,o.kt)("p",null,"Running a Babylon IBC relayer consists of the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Babylon Account"),(0,o.kt)("li",{parentName:"ol"},"Obtain Babylon Tokens"),(0,o.kt)("li",{parentName:"ol"},"Install the Babylon Relayer"),(0,o.kt)("li",{parentName:"ol"},"Configure the Babylon Relayer"),(0,o.kt)("li",{parentName:"ol"},"Restore the Babylon Account to the Babylon Relayer"),(0,o.kt)("li",{parentName:"ol"},"Start the Babylon Relayer")),(0,o.kt)("h3",{id:"create-a-babylon-account"},"Create a Babylon Account"),(0,o.kt)("p",null,"To create a Babylon account, "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ babylond keys add $BABYLON_KEY_NAME --chain-id $BABYLON_CHAIN_ID --node $BABYLON_RPC_NODE\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$BABYLON_KEY_NAME")," is a name you pick for the Babylon key, ",(0,o.kt)("inlineCode",{parentName:"p"},"$BABYLON_CHAIN_ID")," is the chain ID of Babylon, and ",(0,o.kt)("inlineCode",{parentName:"p"},"$BABYLON_RPC_NODE")," is the RPC endpoint of a Babylon node."),(0,o.kt)("p",null,"The command will return the secret key, address and the mnemonics.\nPlease keep the secret key in a secret place."),(0,o.kt)("h3",{id:"obtain-babylon-tokens"},"Obtain Babylon Tokens"),(0,o.kt)("p",null,"Then, you need to obtain some Babylon tokens for the address in order to run the relayer.\nThe testnet tokens can be obtained from the faucet."),(0,o.kt)("h3",{id:"install-the-babylon-relayer"},"Install the Babylon Relayer"),(0,o.kt)("p",null,"The Babylon relayer is located at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babylonchain/babylon-relayer"},"https://github.com/babylonchain/babylon-relayer"),".\nPlease follow the documentation for installing it.\nTo summary, under the ",(0,o.kt)("inlineCode",{parentName:"p"},"babylon-relayer/")," folder,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ make build install\n")),(0,o.kt)("h3",{id:"configure-the-babylon-relayer"},"Configure the Babylon Relayer"),(0,o.kt)("p",null,"The default Babylon config file will be located at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.relayer/config/config.yaml"),".\nAn example config file for integrating Osmosis testnet is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n    api-listen-addr: :5183\n    timeout: 20s\n    memo: \"\"\n    light-cache-size: 10\nchains:\n    babylon:\n        type: cosmos\n        value:\n            key: babylon-key      # REPLACEME: Nane of the key in the keyring (same as the one added on the bootrapping script by `keys add`.\n            chain-id: bbn-demo1   # REPLACEME: Chain ID for the network you're connecting to. NOTE: this chain-id should be the same as the directory that contains the test keyring, i.e. if bbn-demo1, then `relayer-home/keys/bbn-demo1` should contain the `keyring-test` directory with a key with the same name as the above attribute.\n            rpc-addr: http://rpc0.demo.babylonchain.io:26657 # REPLACEME: Address to which an RPC connection can be made\n            account-prefix: bbn\n            keyring-backend: test\n            gas-adjustment: 1.5\n            gas-prices: 0.002ubbn\n            min-gas-amount: 0\n            debug: true\n            timeout: 10s\n            output-format: json\n            sign-mode: direct\n            extra-codecs: []\n    osmosis:\n        type: cosmos\n        value:\n            chain-id: osmo-test-4                                        # REPLACEME: Chain ID for the network you're connecting to.\n            rpc-addr: https://osmosis-testnet-rpc.allthatnode.com:26657/ # REPLACEME: Address to which an RPC connection can be made\n            keyring-backend: test\n            timeout: 10s\npaths:\n    osmosis:\n        src:\n            chain-id: bbn-demo1\n        dst:\n            chain-id: osmo-test-4\n")),(0,o.kt)("h3",{id:"restore-the-babylon-account-to-the-babylon-relayer"},"Restore the Babylon Account to the Babylon Relayer"),(0,o.kt)("p",null,"To restore the Babylon account to the Babylon relayer,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ babylon-relayer keys restore $BABYLON_CHAIN_ID testkey "$MNEMONICS"\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$BABYLON_CHAIN_ID")," is the chain ID of Babylon and ",(0,o.kt)("inlineCode",{parentName:"p"},"$MNEMONICS")," is the mnemonics generated when creating the Babylon account."),(0,o.kt)("h3",{id:"start-the-babylon-relayer"},"Start the Babylon Relayer"),(0,o.kt)("p",null,"To start the Babylon relayer,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ babylon-relayer keep-update-clients --interval $INTERVAL\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$INTERVAL")," is the interval for relaying a header (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"10m")," to denote 10 minutes per header)."),(0,o.kt)("h3",{id:"check-if-the-integration-is-successful"},"Check if the Integration is Successful"),(0,o.kt)("p",null,"After the above steps, the Cosmos zone has been integrated to Babylon.\nYou can do the following things to check the status of the integration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check the API ",(0,o.kt)("a",{parentName:"li",href:"http://rpc0.demo.babylonchain.io:1317/babylon/zoneconcierge/v1/chain_info/"},"http://rpc0.demo.babylonchain.io:1317/babylon/zoneconcierge/v1/chain_info/"),"<your_chain_id> that shows the information of the Cosmos zone in Babylon's view"),(0,o.kt)("li",{parentName:"ul"},"Check whether BabylonScan shows the information of the Cosmos zone or not.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"NOTE: one needs to submit a PR to Babylon's chain registry in order to be shown on BabylonScan")))),(0,o.kt)("h2",{id:"future-integration-phases"},"Future Integration Phases"),(0,o.kt)("p",null,"In the future, Babylon will enable further integration phases, such as raising alarms upon dishonest majority attacks and reducing the unbonding time period.\nSuch integrations will need IBC packets, thus require using the original IBC relayer rather than the above specialized one.\nPlease see ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/czconcierge"},"Zone Concierge")," for more details."))}b.isMDXComponent=!0}}]);