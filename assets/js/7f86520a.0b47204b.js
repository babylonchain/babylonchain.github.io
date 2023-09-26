"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1390],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(g,s(s({ref:e},u),{},{components:n})):o.createElement(g,s({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:a,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1134:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={id:"overview",sidebar_label:"Bitcoin Staking",hide_table_of_contents:!0},s="Bitcoin Staking",r={unversionedId:"introduction/btc-staking/overview",id:"introduction/btc-staking/overview",title:"Bitcoin Staking",description:"Babylon's Bitcoin staking protocol allows Bitcoin holders to stake their BTC to PoS blockchains, without the BTC moving out of their wallets.",source:"@site/docs/introduction/btc-staking/overview.md",sourceDirName:"introduction/btc-staking",slug:"/introduction/btc-staking/overview",permalink:"/docs/introduction/btc-staking/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/btc-staking/overview.md",tags:[],version:"current",frontMatter:{id:"overview",sidebar_label:"Bitcoin Staking",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylon Overview",permalink:"/docs/introduction/babylon-overview"},next:{title:"Bitcoin Timestamping",permalink:"/docs/introduction/btc-timestamping/overview"}},c={},l=[{value:"Security guarantees",id:"security-guarantees",level:2},{value:"BTC staking workflow",id:"btc-staking-workflow",level:2},{value:"BTC staking core components",id:"btc-staking-core-components",level:2}],u={toc:l};function h(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bitcoin-staking"},"Bitcoin Staking"),(0,a.kt)("p",null,"Babylon's Bitcoin staking protocol allows Bitcoin holders to stake their BTC to PoS blockchains, without the BTC moving out of their wallets.\nIt provides security guarantees to the PoS chain while ensuring efficient stake unbonding to enhance liquidity for Bitcoin holders.\nThis protocol is designed as a modular plug-in compatible with various PoS consensus algorithms and serves as a foundational component for building restaking protocols."),(0,a.kt)("div",{class:"pdf-banner"},(0,a.kt)("a",{class:"pdf-link",target:"\\_blank",href:"/papers/btc_staking_litepaper.pdf"},(0,a.kt)("span",{class:"pdf-text"},"BTC staking litepaper"),(0,a.kt)("span",{class:"pdf-icon"},"PDF"))),(0,a.kt)("h2",{id:"security-guarantees"},"Security guarantees"),(0,a.kt)("p",null,"Babylon's BTC staking protocol achieves the following security properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fully Slashable PoS Security:")," In the event of a safety violation, 1/3 of the Bitcoin stake is guaranteed to be slashed. As long as a minimum of 2/3 of the Bitcoin stake follows the PoS protocol, the PoS blockchain remains live."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Staker Security:")," Stakers are guaranteed to be able to withdraw their BTC (i.e., unbond), as long as they follow the PoS protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Staker Liquidity:"),"  Unbonding of the staked BTC is guaranteed to be secure and fast without the need of social consensus. ")),(0,a.kt)("h2",{id:"btc-staking-workflow"},"BTC staking workflow"),(0,a.kt)("p",null,"From a BTC staker's perspective, the BTC staking protocol works as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Staking BTC:")," the staker initiates the process by sending a staking transaction to the Bitcoin chain, locking her BTC in a self-custodian vault."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Validation on PoS Chain:")," Once the staking transaction is confirmed on the Bitcoin chain, the staker can start validating transactions on the PoS chain by signing blocks using her secret key. During her validation duty, there are two possible paths:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Happy Path:")," In the honest scenario, the staker follows the protocol, and when she wishes to unbond, she requests unbonding through a transaction on the Bitcoin chain. This action halts her validation duties on the PoS chain. After a parameterized unbonding period, the Bitcoin is returned to her, along with a reward from the PoS chain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unhappy Path:")," If the staker behaves maliciously, e.g., participates in double-spending attacks on the PoS chain, the staking protocol ensures her secret key is exposed to the public. Consequently, anyone can impersonate the staker to submit a slashing transaction on the Bitcoin chain and burn her BTC. This unhappy path ensures that safety violations are penalized, maintaining the overall integrity of the system."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Unlocking BTC:")," The BTC can be unlocked, only by using the staker\u2019s secret key, in one of two possible ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the staker can submit an unbonding transaction on Bitcoin. It unlocks the BTC and returns it to her after a parameterized waiting period."),(0,a.kt)("li",{parentName:"ul"},"the staker can submit a slashing transaction on Bitcoin. It sends the BTC to a burn address.")))),(0,a.kt)("h2",{id:"btc-staking-core-components"},"BTC staking core components"),(0,a.kt)("p",null,"The BTC staking protocol contains the following core components."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Staking Contracts via Bitcoin Covenant Emulation."),"\nGiven the absence of a smart contract layer on the Bitcoin network, our protocol leverages the Bitcoin scripting language to establish staking contracts.\nThese contracts consist of four key transactions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a staking transaction, where the input is the address of the staker\u2019s Bitcoin and the output can be spent in one of two ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"an unbonding transaction, which allows the output to be spent by the staker after a relative timelock (measuring the unbonding time) has expired. The relative lock time can be implemented by the opcode OP_CHECKSEQUENCEVERIFY;"),(0,a.kt)("li",{parentName:"ul"},"a slashing transaction, which allows the staker to spend the output immediately to a burn address (unspendable output)"))),(0,a.kt)("li",{parentName:"ul"},"an unstaking transaction, which can spend the output of the unbonding transaction after the relative timelock has expired")),(0,a.kt)("p",null,"Our approach involves emulating Bitcoin covenants, a technique that restricts how transaction outputs can be spent.\nWhile Bitcoin script will provide native covenant support in a future upgrade, we propose a novel, almost trustless emulation of covenants."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Automated Slashing via Accountable Assertions and Finality Gadgets."),"\nThe BTC staking protocol introduces a mechanism to facilitate slashing in response to safety violations.\nThis mechanism revolves around the exposure of the staker's secret key whenever a safety violation occurs.\nWe combine two concepts to achieve this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accountable assertions from cryptography, and"),(0,a.kt)("li",{parentName:"ul"},"Finality gadgets from blockchain consensus")),(0,a.kt)("p",null,"We employ extractable one-time signatures (EOTS) to realize accountable assertions, where using the same secret key to sign different blocks at the same height results in secret key leakage.\nBy introducing an additional signing round after the base consensus protocol finalizes a block, termed as an EOTS finality gadget, we ensure that a block is considered finalized if it receives EOTS signatures from over 2/3 of the BTC stake.\nIf there is a safety violation in this modified protocol, then more than 1/3 of the BTC stake has signed two blocks at the same height using EOTS.\nThis leads to the extraction of the secret keys of those stakers.\nThe EOTS signature scheme can be implemented by Schnorr signatures, the signature scheme used in Bitcoin.\nHence these extracted secret keys can be used to spend the slashing transactions."),(0,a.kt)("p",null,"This modular approach can be applied to various BFT consensus protocols without altering the base protocols themselves, making it compatible with different PoS blockchains."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fast Unbonding via Bitcoin Timestamping."),"\nOur Bitcoin staking protocol aims to achieve fast unbonding without the need for social consensus, a common requirement in PoS blockchains with native staking.\nTraditional PoS blockchains often suffer from long unbonding times, vulnerable to long-range attacks.\nHowever, the nature of the Bitcoin chain, where removing transactions is costly, allows for fast unbonding without social consensus.\nTo address the challenge of synchronizing the PoS chain with the Bitcoin chain, we introduce ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/btc-timestamping/overview"},"Bitcoin timestamping"),".\nThis technique involves recording PoS block hashes and validator set on the Bitcoin chain, ensuring tight synchronization between the two chains.\nThis innovation also enables secure and fast unbonding in PoS blockchains with native staking, making Bitcoin a trusted external resource."))}h.isMDXComponent=!0}}]);