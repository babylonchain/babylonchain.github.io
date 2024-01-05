"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(d,s(s({ref:t},h),{},{components:a})):n.createElement(d,s({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={id:"use-case",sidebar_label:"Use Case",hide_table_of_contents:!0},s="Primary Usecase: Securing PoS Chains",r={unversionedId:"introduction/btc-timestamping/use-case",id:"introduction/btc-timestamping/use-case",title:"Primary Usecase: Securing PoS Chains",description:"Learn about Babylon's use case for securing PoS chain transactions with Bitcoin timestamps.",source:"@site/docs/introduction/btc-timestamping/use-case.md",sourceDirName:"introduction/btc-timestamping",slug:"/introduction/btc-timestamping/use-case",permalink:"/docs/introduction/btc-timestamping/use-case",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/btc-timestamping/use-case.md",tags:[],version:"current",frontMatter:{id:"use-case",sidebar_label:"Use Case",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Bitcoin Timestamping",permalink:"/docs/introduction/btc-timestamping/overview"},next:{title:"Architecture",permalink:"/docs/introduction/btc-timestamping/architecture"}},c={},l=[{value:'Long-Range Attack: A Fundamental Threat to PoS Chains <a id="long"></a>',id:"long-range-attack-a-fundamental-threat-to-pos-chains-",level:2},{value:'Secure PoS using BTC timestamping <a id="time"></a>',id:"secure-pos-using-btc-timestamping-",level:2},{value:'2.3 Benefits of BTC Timestamping to PoS Chains <a id="benefit"></a>',id:"23-benefits-of-btc-timestamping-to-pos-chains-",level:2}],h={toc:l};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"primary-usecase-securing-pos-chains"},"Primary Usecase: Securing PoS Chains"),(0,i.kt)("p",null,"Learn about Babylon's use case for securing PoS chain transactions with Bitcoin timestamps."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"long-range-attack-a-fundamental-threat-to-pos-chains-"},"Long-Range Attack: A Fundamental Threat to PoS Chains ",(0,i.kt)("a",{id:"long"})),(0,i.kt)("p",null,"By PoS chains, we refer to BFT (Byzantine-fault-tolerent) PoS chains that require a 2/3 majority vote from their validators to confirm a block. PoS chains are not supposed to fork, and when forking happens, the chain is attacked: To have 2/3 majority vote for both forks, at least 1/3 of the validators have double-voted by signing both forks, which is a prohibited behavior by the consensus protocol."),(0,i.kt)("p",null,"The picture below illustrates a forking attack to a hypothetical PoS chain called ",(0,i.kt)("strong",{parentName:"p"},"\u201cRugpull\u201c"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Forking Attack",src:a(6597).Z,width:"2120",height:"759"})),(0,i.kt)("p",null,"To deter such attacks, most PoS chains only allow accounts who have bonded their tokens (a.k.a staking) to be validators. This way, if a validator is caught double signing, its bonded stake can be slashed by the consensus protocol in both forks, causing total economical loss to this malicious validator."),(0,i.kt)("p",null,"This deterrence seems to provide slashable security to PoS chains. However, this requires the remaining validators to perceive both forks while the malicious validators are still bonded. Therefore, to avoid slashing, the malicious validators can first unbond from the first fork and then create the second fork from a block height where they are still validators. This way, the malicious validators will not be slashable in the first fork since they do not have a bonded stake. What\u2019s even worse is that once the attack happens, new users of the PoS chain cannot tell which fork they should follow."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Long-range Attack",src:a(62647).Z,width:"1729",height:"531"})),(0,i.kt)("p",null,"This attack is called the long-range attack, which renders PoS chains not slashable and secure. This attack is fundamental and cannot be solved by modifying the consensus protocol without an extra source of trust. To alleviate this threat, some PoS chains resort to social consensus, where the stakeholders periodically make off-chain decisions on the correct block at the latest height and ignore any other potential forks. However, this approach ties the chain's security to the participating stakeholders' subjective opinions. This approach is also called weak subjectivity, which is against the decentralization principle. In addition, since social consensus takes time, most PoS chains impose a very long stake unbonding time in the order of weeks."),(0,i.kt)("h2",{id:"secure-pos-using-btc-timestamping-"},"Secure PoS using BTC timestamping ",(0,i.kt)("a",{id:"time"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Secure PoS",src:a(53255).Z,width:"5351",height:"1914"})),(0,i.kt)("p",null,"To protect the PoS chain from long-range attacks, we can checkpoint the PoS chain blocks to BTC, and implement a fork choice rule for the fork with an earlier BTC timestamp. This way, either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The attacking fork will have a later BTC timestamp in the BTC canonical chain and will never be chosen by anyone, or")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In order to be chosen, the attacker will have to create a very long fork of BTC in which the attacking PoS fork has an earlier timestamp, which is economically impossible."))),(0,i.kt)("p",null,"Thus, long-range attacks are neutralized by BTC timestamping."),(0,i.kt)("h2",{id:"23-benefits-of-btc-timestamping-to-pos-chains-"},"2.3 Benefits of BTC Timestamping to PoS Chains ",(0,i.kt)("a",{id:"benefit"})),(0,i.kt)("p",null,"Along with solving long-range attacks, the irreversible BTC timestamps of PoS blocks also provide other security benefits to PoS chains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"No weak subjectivity"),": Bitcoin timestamps are objective. It can thus eliminate the dependency of PoS chains on social consensus and weak subjectivity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Shorter Unbonding Time"),": By replacing social consensus, BTC timestamping can reduce the stake unbonding time of PoS chains from weeks to one day.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New Chain Bootstrapping"),": New PoS chains with low valuation are more vulnerable to forking attacks. BTC timestamping can help safeguard the chain alone its growth.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Verification of State Sync and Snapshots"),": The objective truth about a PoS chain provided by BTC allows the users of the PoS chain to verify the chain state or snapshot it has downloaded from the P2P network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Protecting Important Transactions"),": BTC timestamps can be used to further confirm important PoS transactions at the cost of longer confirmation latency.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Censorship Resistance"),": BTC timestamping could also be used to fight against transaction censorship in PoS chains via posting censored transactions to BTC."))),(0,i.kt)("p",null,"However, directly checkpointing to BTC is difficult and unscalable due to BTC\u2019s tight space and expensive transaction fees. Moreover, BTC cannot verify the checkpointed data. This motivates the creation of Babylon, which solves all the difficulties with provable security."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Without ",(0,i.kt)("strong",{parentName:"p"},"Babylon"),", it is difficult for any chain to directly checkpoint to ",(0,i.kt)("strong",{parentName:"p"},"Bitcoin")," due to scalability, cost, code modification, and security problems.")))}p.isMDXComponent=!0},53255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HowUseCase-9eca05d99ca42eb4e0b5ee74c354176c.png"},6597:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/forking-fab24bb6a9d33c7612ea8bd4d77168b4.gif"},62647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/longrange-1f85015a2f2c1ecd96d022ceaf8b0232.gif"}}]);