"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={id:"intro",sidebar_label:"Introduction",sidebar_position:0,hide_table_of_contents:!0,pagination_prev:null,custom_edit_url:null},r="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"This article provides an overview of what Babylon is and how Babylon works on the Proof of Stake chains.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"intro",sidebar_label:"Introduction",sidebar_position:0,hide_table_of_contents:!0,pagination_prev:null,custom_edit_url:null},sidebar:"docs",next:{title:"Installation Guide",permalink:"/docs/installation"}},s={},c=[{value:'1. Babylon Overview <a id="overview"></a>',id:"1-babylon-overview-",level:2},{value:'2. A Primary Usecase: Securing PoS Chains <a id="usecase"></a>',id:"2-a-primary-usecase-securing-pos-chains-",level:2},{value:'2.1 Long-Range Attack: A Fundanmental Threat to PoS Chains <a id="long"></a>',id:"21-long-range-attack-a-fundanmental-threat-to-pos-chains-",level:3},{value:'2.2 Secure PoS using BTC timestamping <a id="time"></a>',id:"22-secure-pos-using-btc-timestamping-",level:3},{value:'2.3 Benefits of BTC Timestamping to PoS Chains <a id="benefit"></a>',id:"23-benefits-of-btc-timestamping-to-pos-chains-",level:3},{value:'3. Key Components of Babylon <a id="key"></a>',id:"3-key-components-of-babylon-",level:2},{value:'Epoching <a id="epoch"></a>',id:"epoching-",level:3},{value:'Checkpointing <a id="checkpoint"></a>',id:"checkpointing-",level:3},{value:'Vigilante Submitter <a id="sub"></a>',id:"vigilante-submitter-",level:3},{value:'Vigilante Reporter <a id="rep"></a>',id:"vigilante-reporter-",level:3},{value:'BTCCheckpoint <a id="check"></a>',id:"btccheckpoint-",level:3},{value:'BTCLightClient <a id="light"></a>',id:"btclightclient-",level:3},{value:'Vigilante Master Monitor <a id="master"></a>',id:"vigilante-master-monitor-",level:3},{value:'IBC relayer <a id="layer"></a>',id:"ibc-relayer-",level:3},{value:'IBC light client <a id="client"></a>',id:"ibc-light-client-",level:3},{value:'CZConcierge <a id="cz"></a>',id:"czconcierge-",level:3}],h={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This article provides an overview of what Babylon is and how Babylon works on the Proof of Stake chains."),(0,i.kt)("p",null,"In this article:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"1. Babylon Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usecase"},"2. A Primary Usecase: Securing PoS Chains"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#long"},"2.1 Long-Range Attack: A Foundamental Threat to PoS Chains")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#time"},"2.2 Secure PoS using BTC timestamping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#benefit"},"2.3 Benefits of BTC Timestamping to PoS Chains")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#key"},"3. Key Components of Babylon"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#epoch"},"Epoching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkpoint"},"Checkpointing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sub"},"Vigilante Submitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rep"},"Vigilante Reporter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#check"},"BTCCheckpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#light"},"BTCLightClient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#master"},"Vigilante Master Monitor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#layer"},"IBC relayer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#client"},"IBC light client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cz"},"CZConcierge"))))),(0,i.kt)("h2",{id:"1-babylon-overview-"},"1. Babylon Overview ",(0,i.kt)("a",{id:"overview"})),(0,i.kt)("p",null,"Babylon is a PoS (proof-of-stake) blockchain that provides secure Bitcoin timestamps to its transactions. Babylon is built using the Tendermint consensus engine and Cosmos SDK. It leverages cutting-edge cryptographic technologies and advanced Cosmos SDK features to send succinct, verifiable, and adversary-slashing checkpoints of the Babylon chain to BTC as BTC transactions. The BTC timestamps of Babylon checkpoints provide BTC-level security to all Babylon transactions."),(0,i.kt)("p",null,"Below is a high-level architecture of the Babylon system. Babylon can be viewed as a checkpoint verifier and aggregator. It verifies and aggregates the checkpoints submitted by its users into ones that BTC can securely timestamp."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1vbtoSy1ytLvchNTNlZ9E_uCpCYX8otwL",alt:"Alt text"})),(0,i.kt)("p",null,"This primitive enables enormous security-related use cases for the decentralized world. One motivating and primary use case is to bring BTC security to PoS chains."),(0,i.kt)("h2",{id:"2-a-primary-usecase-securing-pos-chains-"},"2. A Primary Usecase: Securing PoS Chains ",(0,i.kt)("a",{id:"usecase"})),(0,i.kt)("h3",{id:"21-long-range-attack-a-fundanmental-threat-to-pos-chains-"},"2.1 Long-Range Attack: A Fundanmental Threat to PoS Chains ",(0,i.kt)("a",{id:"long"})),(0,i.kt)("p",null,"By PoS chains, we refer to BFT (Byzantine-fault-tolerent) PoS chains that require a 2/3 majority vote from their validators to confirm a block. PoS chains are not supposed to fork, and when forking happens, the chain is attacked: To have 2/3 majority vote for both forks, at least 1/3 of the validators have double-voted by signing both forks, which is a prohibited behavior by the consensus protocol."),(0,i.kt)("p",null,"The picture below illustrates a forking attack to a hypothetical PoS chain called ",(0,i.kt)("strong",{parentName:"p"},"\u201cRugpull\u201c"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1z8SSZHqa5IDmkCiUaM8iNaIlLQjTJPOo",alt:"Forking Attack"})),(0,i.kt)("p",null,"To deter such attacks, most PoS chains only allow accounts who have bonded their tokens (a.k.a staking) to be validators. This way, if a validator is caught double signing, its bonded stake can be slashed by the consensus protocol in both forks, causing total economical loss to this malicious validator."),(0,i.kt)("p",null,"This deterrence seems to provide slashable security to PoS chains. However, this requires the remaining validators to perceive both forks while the malicious validators are still bonded. Therefore, to avoid slashing, the malicious validators can first unbond from the first fork and then create the second fork from a block height where they are still validators. This way, the malicious validators will not be slashable in the first fork since they do not have a bonded stake. What\u2019s even worse is that once the attack happens, new users of the PoS chain cannot tell which fork they should follow."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1k5qC4FRSNmMVVyGSstWsN5Gq8db22ah7",alt:"Long-range Attack"})),(0,i.kt)("p",null,"This attack is called the long-range attack, which renders PoS chains not slashable and secure. This attack is fundamental and cannot be solved by modifying the consensus protocol without an extra source of trust. To alleviate this threat, some PoS chains resort to social consensus, where the stakeholders periodically make off-chain decisions on the correct block at the latest height and ignore any other potential forks. However, this approach ties the chain's security to the participating stakeholders' subjective opinions. This approach is also called weak subjectivity, which is against the decentralization principle. In addition, since social consensus takes time, most PoS chains impose a very long stake unbonding time in the order of weeks."),(0,i.kt)("h3",{id:"22-secure-pos-using-btc-timestamping-"},"2.2 Secure PoS using BTC timestamping ",(0,i.kt)("a",{id:"time"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1CRKDJS8uv4Ba88BiJObsxI5CViXRyPxx",alt:"Secure PoS"})),(0,i.kt)("p",null,"To protect the PoS chain from long-range attacks, we can checkpoint the PoS chain blocks to BTC, and implement a fork choice rule for the fork with an earlier BTC timestamp. This way, either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The attacking fork will have a later BTC timestamp in the BTC canonical chain and will never be chosen by anyone, or")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In order to be chosen, the attacker will have to create a very long fork of BTC in which the attacking PoS fork has an earlier timestamp, which is economically impossible."))),(0,i.kt)("p",null,"Thus, long-range attacks are neutralized by BTC timestamping."),(0,i.kt)("h3",{id:"23-benefits-of-btc-timestamping-to-pos-chains-"},"2.3 Benefits of BTC Timestamping to PoS Chains ",(0,i.kt)("a",{id:"benefit"})),(0,i.kt)("p",null,"Along with solving long-range attacks, the irreversible BTC timestamps of PoS blocks also provide other security benefits to PoS chains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"No weak subjectivity"),": Bitcoin timestamps are objective. It can thus eliminate the dependency of PoS chains on social consensus and weak subjectivity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Shorter Unbonding Time"),": By replacing social consensus, BTC timestamping can reduce the stake unbonding time of PoS chains from weeks to one day.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New Chain Bootstrapping"),": New PoS chains with low valuation are more vulnerable to forking attacks. BTC timestamping can help safeguard the chain alone its growth.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Verification of State Sync and Snapshots"),": The objective truth about a PoS chain provided by BTC allows the users of the PoS chain to verify the chain state or snapshot it has downloaded from the P2P network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Protecting Important Transactions"),": BTC timestamps can be used to further confirm important PoS transactions at the cost of longer confirmation latency.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Censorship Resistance"),": BTC timestamping could also be used to fight against transaction censorship in PoS chains via posting censored transactions to BTC."))),(0,i.kt)("p",null,"However, directly checkpointing to BTC is difficult and unscalable due to BTC\u2019s tight space and expensive transaction fees. Moreover, BTC cannot verify the checkpointed data. This motivates the creation of Babylon, which solves all the difficulties with provable security."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Without ",(0,i.kt)("strong",{parentName:"p"},"Babylon"),", it is difficult for any chain to directly checkpoint to ",(0,i.kt)("strong",{parentName:"p"},"Bitcoin")," due to scalability, cost, code modification, and security problems.")),(0,i.kt)("h2",{id:"3-key-components-of-babylon-"},"3. Key Components of Babylon ",(0,i.kt)("a",{id:"key"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1VxBWID9K9Q1TASa5fdtnHrCHFBEzNUzr",alt:"Key Components"})),(0,i.kt)("h3",{id:"epoching-"},"Epoching ",(0,i.kt)("a",{id:"epoch"})),(0,i.kt)("p",null,"A new Cosmos app module for Babylon. It epoches the Babylon blocks, and within each epoch the validator set does not change. It achieves this by delaying the execution of validator-set-changing transactions to the last block of each epoch. This way, Babylon only needs to checkpoint one block per epoch to BTC, which reduces the checkpointing costs."),(0,i.kt)("h3",{id:"checkpointing-"},"Checkpointing ",(0,i.kt)("a",{id:"checkpoint"})),(0,i.kt)("p",null,"A new Cosmos app module for Babylon. It collects the BLS signatures of Babylon validators on each block to be checkpointed and aggregate them into a BLS multiSig, and prepare a checkppoint accordingly. It then maintains the confirmation status of each checkpoint and the associated epoch according to the status provided by the btccheckpoint module."),(0,i.kt)("h3",{id:"vigilante-submitter-"},"Vigilante Submitter ",(0,i.kt)("a",{id:"sub"})),(0,i.kt)("p",null,"A standalone program that submits the Babylon checkpoints to BTC as BTC op_return transactions."),(0,i.kt)("h3",{id:"vigilante-reporter-"},"Vigilante Reporter ",(0,i.kt)("a",{id:"rep"})),(0,i.kt)("p",null,"A standalone program that scans BTC ledger for Babylon\u2019s BTC checkpoints, and reports them back to Babylon as Babylon transactions. It also reports BTC headers to Babylon as Babylon transactions."),(0,i.kt)("h3",{id:"btccheckpoint-"},"BTCCheckpoint ",(0,i.kt)("a",{id:"check"})),(0,i.kt)("p",null,"A new Cosmos app module for Babylon. It verifies the Babylon\u2019s BTC checkpoints reported by the vigilante reporter, and provides the confirmation status of these checkpoints to the checkpointing module based on their depth according to the on chain BTC light client. "),(0,i.kt)("h3",{id:"btclightclient-"},"BTCLightClient ",(0,i.kt)("a",{id:"light"})),(0,i.kt)("p",null,"A new Cosmos app module for Babylon. This module maintains a BTC header chain and validates if a BTC block is part of the canonical BTC chain, its depth, and whether the inclusion evidence for a Bitcoin transaction is valid."),(0,i.kt)("h3",{id:"vigilante-master-monitor-"},"Vigilante Master Monitor ",(0,i.kt)("a",{id:"master"})),(0,i.kt)("p",null,"A standalone program that monitors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The consistency between the realworld BTC caononical chain and the BTC header chain maintained by  Babylon\u2019s btclightclient module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Whether all Babylon\u2019s BTC checkpoints have been included in Babylon the ledger on time so that all Babylon nodes can see them."))),(0,i.kt)("h3",{id:"ibc-relayer-"},"IBC relayer ",(0,i.kt)("a",{id:"layer"})),(0,i.kt)("p",null,"A standard Cosmos program that enables interchain communicaton. Its default client update function sends a Cosmos zone (CZ)'s headers to Babylon as Babylon transactions, making it a natural checkpointing mechanism."),(0,i.kt)("h3",{id:"ibc-light-client-"},"IBC light client ",(0,i.kt)("a",{id:"client"})),(0,i.kt)("p",null,"A standard Cosmos app module residing in Babylon. It verifies the CZ headers shared by the IBC relayer and uses the verified CZ headers to further verify CZ transactions."),(0,i.kt)("h3",{id:"czconcierge-"},"CZConcierge ",(0,i.kt)("a",{id:"cz"})),(0,i.kt)("p",null,"A new Cosmos app module for Babyon. It extracts verified CZ headers from the IBC light client and maintain their BTC-confirmaton status based on the BTC-confirmation status of the Babylon transactons that carry them."))}p.isMDXComponent=!0}}]);