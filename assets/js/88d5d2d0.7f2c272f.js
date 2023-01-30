"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={id:"btclightclient",sidebar_label:"BTC Light Client",hide_table_of_contents:!0},r="BTC Light Client Module",l={unversionedId:"modules/btclightclient",id:"modules/btclightclient",title:"BTC Light Client Module",description:"This page describes the BTC light client module in Babylon.",source:"@site/docs/modules/btclightclient.md",sourceDirName:"modules",slug:"/modules/btclightclient",permalink:"/docs/modules/btclightclient",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/btclightclient.md",tags:[],version:"current",frontMatter:{id:"btclightclient",sidebar_label:"BTC Light Client",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"BTC Checkpoint Module",permalink:"/docs/modules/btccheckpoint"},next:{title:"Zone Concierge Module",permalink:"/docs/modules/czconcierge"}},c={},s=[{value:"Summary",id:"summary",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Design",id:"design",level:2},{value:"Base Bitcoin Header",id:"base-bitcoin-header",level:3},{value:"Inserting Bitcoin Blocks",id:"inserting-bitcoin-blocks",level:3},{value:"Identifying the Canonical Chain",id:"identifying-the-canonical-chain",level:3}],h={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"btc-light-client-module"},"BTC Light Client Module"),(0,a.kt)("p",null,"This page describes the BTC light client module in Babylon."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The BTC light client module is responsible for maintaining a chain of Bitcoin headers\nand identifying the canonical Bitcoin chain from it, much like a Bitcoin light client.\nThis header chain can then be used to verify the\ninclusion of checkpoints in Bitcoin and to calculate the checkpoint depth. This\nmodule is critical to Babylon, as it provides a consistent view of time\namong all Babylon nodes."),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Babylon nodes need to make decisions based on the state of the Bitcoin chain.\nExample decisions are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Has a checkpoint been included in Bitcoin?"),(0,a.kt)("li",{parentName:"ul"},"Is this checkpoint deep enough in Bitcoin to mark it as finalized? If yes,\nthe node will approve the stake unbonding request covered by it.")),(0,a.kt)("p",null,"Each decision must be consistent among all the Babylon nodes\nto make sure their application state is the same after the execution of\neach Babylon block.\nThus, Babylon nodes must have a consistent view of the Bitcoin chain included as a part of their state."),(0,a.kt)("p",null,"The BTC light client module accomplishes this by\nreceiving Bitcoin headers as Tendermint-ordered Babylon transactions,\ntypically from a ",(0,a.kt)("a",{parentName:"p",href:"./reporter"},"vigilante reporter"),",\nand is responsible for their verification.\nOnce headers are added, the BTC light client module can identify the canonical chain\nby calculating the chain that has the most work committed to it.\nSince Tendermint guarantees consistency of\ntransaction orders, the BTC light client module of all Babylon nodes will\nmaintain the same BTC header chain.\nOther modules can then query the BTC light client for checkpoint related\ndecision making."),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"Below we outline the key design decisions for the BTC light client module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#base-bitcoin-header"},"Base Bitcoin Header")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inserting-bitcoin-blocks"},"Inserting Bitcoin Blocks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identifying-the-canonical-chain"},"Identifying the Canonical Chain"))),(0,a.kt)("h3",{id:"base-bitcoin-header"},"Base Bitcoin Header"),(0,a.kt)("p",null,"The base bitcoin header is the first Bitcoin header that Babylon maintains.\nThis header is specified in Babylon\u2019s genesis block, and\nis a header that is sufficiently deep.\nFor example, for our testnet, we will use a Bitcoin header that is 100-deep inside\nBitcoin's canonical chain at the time of genesis.\nReverting such a header would require immense computational power.\nWe choose a 100 because Bitcoin itself uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"100-deep")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"COINBASE_MATURITY")," value\nto determine whether a coinbase reward is available to be spent."),(0,a.kt)("h3",{id:"inserting-bitcoin-blocks"},"Inserting Bitcoin Blocks"),(0,a.kt)("p",null,"Bitcoin blocks are inserted into the Babylon chain by submitting\na message to the BTC light client module containing the hex representation of the header.\nThose headers are verified based on the following rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The header has the structure of a valid Bitcoin block."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Bits")," field of the header respects the work rules ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bitcoin/blob/a688ff9046a9df58a373086445ab5796cccf9dd3/src/validation.cpp#L3468"},"maintained by the connected Bitcoin chain")," (either mainnet or testnet)."),(0,a.kt)("li",{parentName:"ol"},"The hash of the header does not correspond to a hash of a header already maintained by Babylon."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"PrevHash")," field corresponds to a hash of a Bitcoin header that is already maintained by Babylon.")),(0,a.kt)("p",null,"The above rules ensure that a Babylon node only accepts Bitcoin headers that would be accepted\nby a Bitcoin full node or light client, with the exception of not accepting orphaned headers.\nOrphan headers are headers that are not connected with any known Bitcoin block through the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrevHash")," field\nwhich are typically accepted by Bitcoin node implementations in the hopes that the missing header with a hash\nequal to ",(0,a.kt)("inlineCode",{parentName:"p"},"PrevHash")," will be propagated at a later point.\nTo simplify the Babylon node, we made the design decision of not maintaining such a pool of orphan headers."),(0,a.kt)("h3",{id:"identifying-the-canonical-chain"},"Identifying the Canonical Chain"),(0,a.kt)("p",null,"The BTC light client module maintains an entry in its storage corresponding to the tip\nof the canonical chain based on the set of headers that it has. Along with the tip,\nit stores its cumulative work, i.e. the total work for this chain of headers."),(0,a.kt)("p",null,"When a new header is inserted, its cumulative work is calculated as the sum of\nits work (through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bits")," field of the header) and the cumulative work of its parent header.\nIf this sum is more than the cumulative work of the tip of the chain,\nthen the new header becomes the tip."),(0,a.kt)("p",null,"One can identify the canonical Bitcoin chain maintained by Babylon and the corresponding depth of headers\nby traversing the ancestor list of the tip of the canonical chain."))}d.isMDXComponent=!0}}]);