"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,m=k["".concat(c,".").concat(d)]||k[d]||s[d]||o;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},62925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={id:"monitor",sidebar_label:"Checkpointing Monitor Program",hide_table_of_contents:!0},r="Vigilante Checkpointing Monitor",l={unversionedId:"developer-guides/vigilantes/monitor",id:"developer-guides/vigilantes/monitor",title:"Vigilante Checkpointing Monitor",description:"Learn what the Babylon Vigilante checkpointing Monitor program is and how it operates.",source:"@site/docs/developer-guides/vigilantes/monitor.md",sourceDirName:"developer-guides/vigilantes",slug:"/developer-guides/vigilantes/monitor",permalink:"/docs/developer-guides/vigilantes/monitor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developer-guides/vigilantes/monitor.md",tags:[],version:"current",frontMatter:{id:"monitor",sidebar_label:"Checkpointing Monitor Program",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Vigilante Reporter Program",permalink:"/docs/developer-guides/vigilantes/reporter"},next:{title:"gRPC Gateway (REST API)",permalink:"/docs/developer-guides/grpcrestapi"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Design",id:"design",level:2},{value:"Consistency Check",id:"consistency-check",level:3},{value:"Liveness Check",id:"liveness-check",level:3},{value:"Definition",id:"definition",level:4},{value:"Bookkeeping",id:"bookkeeping",level:4},{value:"Workflow",id:"workflow",level:4}],h={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vigilante-checkpointing-monitor"},"Vigilante Checkpointing Monitor"),(0,a.kt)("p",null,"Learn what the Babylon Vigilante checkpointing Monitor program is and how it operates."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The Checkpointing Monitor is a separate process running alongside a Babylon node.\nThe responsibility of the Checkpointing Monitor to constantly check (1) consistency between the Babylon node and BTC,\nand (2) whether the blockchain is under liveness attack.\nOnce a critical issue is found, it raises an alarm to the user who decides whether to stall the blockchain.\nRunning a Checkpointing Monitor is optional but highly recommended since it ensures a Babylon node is in a healthy state."),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"The Checkpointing Monitor aims to provide the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BTC header chain safety and liveness.\nIt ensures that the BTC header chain maintained by btclightclient is live and consistent with the BTC canonical chain."),(0,a.kt)("li",{parentName:"ul"},"Babylon checkpoint chain safety and liveness.\nIt ensures that the checkpoint chain of the Babylon node is live and consistent with that submitted to BTC canonical chain.")),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"The Checkpointing Monitor can be started at any time after the Babylon node is started.\nThe Checkpointing Monitor initiates by reading some parameters from the genesis file, i.e., validator BLS key set, base BTC height.\nThen it goes through a bootstrapping procedure to process checkpoints that have already been submitted to BTC.\nAfter that, it is driven by newly mined BTC blocks.\nNote that the monitor only processes a BTC block when it is ",(0,a.kt)("inlineCode",{parentName:"p"},"k-deep")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," is a configurable parameter."),(0,a.kt)("p",null,"The vigilante checkpointing monitor program makes the following design decisions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consistency-check"},"Consistency Check")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#liveness-check"},"Liveness Check"))),(0,a.kt)("p",null,"In the following description, when we say upon a BTC block, it means the block is already ",(0,a.kt)("inlineCode",{parentName:"p"},"k-deep"),"."),(0,a.kt)("h3",{id:"consistency-check"},"Consistency Check"),(0,a.kt)("p",null,"The workflow of the Checkpointing Monitor checking consistency of the Babylon ledger against BTC upon a new BTC block is described as the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compare the BTC header with the header at the same height from Babylon.\nIf they do not match, the alarm is raised.\nIf the header does not exist in Babylon, send the alarm.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upon a BTC checkpoint found (ignore checkpoints with higher epochs than the current epoch)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the Checkpointing Monitor verifies the checkpoint using the validator BLS key set ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if the BLS sig is valid, continue "),(0,a.kt)("li",{parentName:"ul"},"otherwise, skip this checkpoint "))),(0,a.kt)("li",{parentName:"ul"},"query the checkpoint from Babylon and checks whether the two checkpoints match on LastCommitHash ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if matched, extend the checkpoint chain, increase the current epoch, continue "),(0,a.kt)("li",{parentName:"ul"},"otherwise, or the Babylon node does not have the checkpoint at the same epoch, the alarm is raised "))),(0,a.kt)("li",{parentName:"ul"},"it updates the validator BLS key set by querying the Babylon node ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"an alarm is raised if the Babylon node does not have the validator BLS key set for the next epoch")))))),(0,a.kt)("h3",{id:"liveness-check"},"Liveness Check"),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The Checkpointing Monitor should alarm if any of the unique checkpoints (the same checkpoints can have different submitters) with a valid BLS signature is not reported to Babylon within a period of time,\nwhich is measured by BTC height.\nWe first define some marks of the lifecycle of a unique checkpoint (measured by BTC height):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"H1"),": the tip height of ",(0,a.kt)("inlineCode",{parentName:"li"},"btclightclient")," when the relevant epoch ends (obtained from Babylon)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"H2"),": the BTC height at which the checkpoint first appears on BTC (obtained from BTC)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"H3"),": the tip height of ",(0,a.kt)("inlineCode",{parentName:"li"},"btclightclient")," when the checkpoint is reported as a submission (obtained from Babylon)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"H4"),": the current tip height of ",(0,a.kt)("inlineCode",{parentName:"li"},"btclightclient")," when asked (obtained from Babylon)")),(0,a.kt)("p",null,"We decide a checkpoint is under liveness attack if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Happy case (H3 > H2 > H1)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"H3 - H1 > X (the checkpoint is received by ",(0,a.kt)("inlineCode",{parentName:"li"},"btccheckpoint"),")"),(0,a.kt)("li",{parentName:"ul"},"H4 - H1 > X (the checkpoint is not received by ",(0,a.kt)("inlineCode",{parentName:"li"},"btccheckpoint"),")"))),(0,a.kt)("li",{parentName:"ul"},"Unhappy case (H2 < H1, the checkpoint is forked and submitted before epoch ends)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"H3 - H2 > X (the checkpoint is received by ",(0,a.kt)("inlineCode",{parentName:"li"},"btccheckpoint"),")"),(0,a.kt)("li",{parentName:"ul"},"H4 - H2 > X (the checkpoint is not received by ",(0,a.kt)("inlineCode",{parentName:"li"},"btccheckpoint"),")")))),(0,a.kt)("p",null,"For short, we decide a checkpoint is under liveness attack if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H3 - min(H1, H2) > X (the checkpoint is received by ",(0,a.kt)("inlineCode",{parentName:"li"},"btccheckpoint"),")"),(0,a.kt)("li",{parentName:"ul"},"H4 - min(H1, H2) > X (the checkpoint is not received by ",(0,a.kt)("inlineCode",{parentName:"li"},"btccheckpoint"),")")),(0,a.kt)("h4",{id:"bookkeeping"},"Bookkeeping"),(0,a.kt)("p",null,"The checkpointing monitor uses the following table for bookkeeping.\nFor each newly scanned checkpoint with a valid BLS sig, the checkpointing monitor records its epoch number, H2 and the status of ",(0,a.kt)("inlineCode",{parentName:"p"},"not_reported")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Epoch"),(0,a.kt)("th",{parentName:"tr",align:null},"Checkpoint id"),(0,a.kt)("th",{parentName:"tr",align:null},"H2"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"reported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"reported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"30"),(0,a.kt)("td",{parentName:"tr",align:null},"not_reported")))),(0,a.kt)("p",null,"We implement a new module called ",(0,a.kt)("inlineCode",{parentName:"p"},"monitor")," in Babylon to provide all the data (e.g., H1, H3, H4) that is needed by the vigilante Checkpointing Monitor."),(0,a.kt)("h4",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"For every t seconds (a configurable parameter), the Checkpointing Monitor identifies ",(0,a.kt)("inlineCode",{parentName:"p"},"not_reported")," checkpoints and asks btccheckpoint to check whether each checkpoint is reported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If so, check the ",(0,a.kt)("inlineCode",{parentName:"li"},"gap = H3 - min(H1, H2)"),"; ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"gap > X"),", change the status to ",(0,a.kt)("inlineCode",{parentName:"li"},"censored")," and send the alarm. "),(0,a.kt)("li",{parentName:"ul"},"Otherwise, change the status to ",(0,a.kt)("inlineCode",{parentName:"li"},"reported")," and check the next checkpoint "))),(0,a.kt)("li",{parentName:"ul"},"Otherwise, check the ",(0,a.kt)("inlineCode",{parentName:"li"},"gap = H4 - min(H1, H2)"),"; ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"gap > X"),", change the status to ",(0,a.kt)("inlineCode",{parentName:"li"},"censored")," and send the alarm. "),(0,a.kt)("li",{parentName:"ul"},"Otherwise, check the next checkpoint")))))}s.isMDXComponent=!0}}]);