"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(b,o(o({ref:t},u),{},{components:n})):i.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a=n.p+"assets/images/submitter-03eb5a20aeebd1e6a55f7bd5fa66226f.png",o={id:"submitter",sidebar_label:"Vigilante Submitter Program",hide_table_of_contents:!0},s="Vigilante Submitter",l={unversionedId:"modules/submitter",id:"modules/submitter",title:"Vigilante Submitter",description:"Learn what the Babylon Vigilante Submitter program is and how it operates.",source:"@site/docs/modules/submitter.md",sourceDirName:"modules",slug:"/modules/submitter",permalink:"/docs/modules/submitter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/submitter.md",tags:[],version:"current",frontMatter:{id:"submitter",sidebar_label:"Vigilante Submitter Program",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Zone Concierge Module",permalink:"/docs/modules/czconcierge"},next:{title:"Vigilante Reporter Program",permalink:"/docs/modules/reporter"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Design",id:"design",level:2},{value:"Extracting Checkpoints",id:"extracting-checkpoints",level:3},{value:"Converting Checkpoints to BTC Transactions",id:"converting-checkpoints-to-btc-transactions",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vigilante-submitter"},"Vigilante Submitter"),(0,r.kt)("p",null,"Learn what the Babylon Vigilante Submitter program is and how it operates."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The vigilante submitter is a separate program that is responsible for submitting checkpoints from Babylon to BTC periodically.\nTo submit a checkpoint to Bitcoin, the Babylon system needs to encode a checkpoint to two transactions and submit them to BTC.\nIt is a critical piece to ensure the liveness of Babylon.\nWe need to ensure that at least one submitter is working in the Babylon network."),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"The vigilante submitter needs to convert a raw checkpoint to BTC transactions and send them to BTC.\nIt also needs to ensure that all the ",(0,r.kt)("inlineCode",{parentName:"p"},"SEALED")," checkpoints will be eventually submitted to BTC.\nFurther, since submitting checkpoints costs real Bitcoin to pay the miners, the submitter needs to minimize the cost and duplicate submissions."),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("div",{style:{justifyContent:"center",display:"flex",marginBottom:"50px"}},(0,r.kt)("img",{style:{width:"1000px"},src:a,alt:"vigilantesubmitter"})),(0,r.kt)("p",null,"The vigilante submitter program makes the following design decisions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#extracting-checkpoints"},"Extracting Checkpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#converting-checkpoints-to-btc-transactions"},"Converting Checkpoints to BTC Transactions"))),(0,r.kt)("h3",{id:"extracting-checkpoints"},"Extracting Checkpoints"),(0,r.kt)("p",null,"In case of any failure, a checkpoint may not be successfully submitted to BTC in one shot.\nTo ensure a raw checkpoint will be eventually submitted to BTC, the submitter adopts a pull-based approach to repetitively submit checkpoints with the status of ",(0,r.kt)("inlineCode",{parentName:"p"},"SEALED")," even though they have been submitted before.\nThe submitter uses two configurable items, ",(0,r.kt)("inlineCode",{parentName:"p"},"pulling-intervals")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resend-intervals")," to control the frequency of the pulling and re-sending checkpoints that have been sent before."),(0,r.kt)("h3",{id:"converting-checkpoints-to-btc-transactions"},"Converting Checkpoints to BTC Transactions"),(0,r.kt)("p",null,"BTC allows users to store arbitrary data in the Bitcoin blockchain via ",(0,r.kt)("inlineCode",{parentName:"p"},"OP_RETURN"),", which is a transaction output in Bitcoin that is provably unspendable.\nTo avoid abuse of ",(0,r.kt)("inlineCode",{parentName:"p"},"OP_RETURN"),", the data size carried in ",(0,r.kt)("inlineCode",{parentName:"p"},"OP_RETURN")," is limited to less than 80 bytes."),(0,r.kt)("p",null,"A raw checkpoint consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch_num")," (8 bytes), ",(0,r.kt)("inlineCode",{parentName:"p"},"last_commit_hash")," (32 bytes), ",(0,r.kt)("inlineCode",{parentName:"p"},"bitmap")," (13 bytes), and ",(0,r.kt)("inlineCode",{parentName:"p"},"bls_multi_sig")," (48 bytes), which is 101 bytes.\nBesides a raw checkpoint, we also need to include Babylon identifier (4 bytes) and the submitter's Babylon address (20 bytes) for claiming reward."),(0,r.kt)("p",null,"Therefore, we need at least two BTC transactions to carry a raw checkpoint.\nThe structure of the two ",(0,r.kt)("inlineCode",{parentName:"p"},"OP_RETURN")," entries is shown as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// 73 Bytes in total\nmessage CheckpointFirst {\n  int32 identifier = 0x62626E00 // 4-Byte identifier (0x62626E = BBN in text, 0x00 signals the first half)\n  uint64 epoch_num // 4 Bytes, big endian\n  bytes last_commit_hash // 32 Bytes\n  bytes bitmap // 13 Bytes\n  bytes bbn_addr // 20 bytes (for reward)\n}\n\n// 62 Bytes in total\nmessage CheckpointSecond {\n  int32 identifier = 0x62626E01 // 4-Byte identifier (0x62626E = BBN in text, 0x01 denotes the second half)\n  bytes bls_multi_sig // 48 Bytes\n  bytes checksum // first 10 Bytes of the Sha256 hash of CheckpointFirst\n}\n")))}m.isMDXComponent=!0}}]);