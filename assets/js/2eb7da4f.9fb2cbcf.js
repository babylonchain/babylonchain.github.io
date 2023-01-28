"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2907],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>p});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),y=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},u=function(e){var o=y(e.components);return n.createElement(d.Provider,{value:o},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},s=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=y(t),s=r,p=c["".concat(d,".").concat(s)]||c[s]||b[s]||a;return t?n.createElement(p,l(l({ref:o},u),{},{components:t})):n.createElement(p,l({ref:o},u))}));function p(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var y=2;y<a;y++)l[y]=t[y];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7414:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>y});var n=t(7462),r=(t(7294),t(3905));const a={id:"babylond_query_gov_vote",sidebar_label:"babylond query gov vote",hide_table_of_contents:!0},l="babylond query gov vote",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_vote",id:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_vote",title:"babylond query gov vote",description:"Querying details of a single vote on the governance module by the given identifier.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_vote.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_gov",slug:"/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_vote",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_vote",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_vote.md",tags:[],version:"current",frontMatter:{id:"babylond_query_gov_vote",sidebar_label:"babylond query gov vote",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query gov tally",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_tally"},next:{title:"babylond query gov votes",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_votes"}},d={},y=[{value:"query gov vote command",id:"query-gov-vote-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:y};function c(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-gov-vote"},"babylond query gov vote"),(0,r.kt)("p",null,"Querying details of a single vote on the governance module by the given identifier."),(0,r.kt)("h2",{id:"query-gov-vote-command"},"query gov vote command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query gov vote [proposal-id] [voter-addr] [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond query gov vote 1 cosmos55667j5whet0lpe65qaq4rpq03hjxlwd9772565k\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for vote\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}c.isMDXComponent=!0}}]);