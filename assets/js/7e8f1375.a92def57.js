"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6507],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>s});var o=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,a=function(e,r){if(null==e)return{};var n,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),u=function(e){var r=o.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return o.createElement(d.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var n=e.components,a=e.mdxType,t=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,m=c["".concat(d,".").concat(s)]||c[s]||y[s]||t;return n?o.createElement(m,l(l({ref:r},p),{},{components:n})):o.createElement(m,l({ref:r},p))}));function s(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var t=n.length,l=new Array(t);l[0]=c;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<t;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74766:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>t,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const t={id:"babylond_query_gov_params",sidebar_label:"babylond query gov params",hide_table_of_contents:!0},l="babylond query gov params",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_params",id:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_params",title:"babylond query gov params",description:"Querying all the parameters for the governance module.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_params.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_gov",slug:"/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_params.md",tags:[],version:"current",frontMatter:{id:"babylond_query_gov_params",sidebar_label:"babylond query gov params",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query gov param",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_param"},next:{title:"babylond query gov proposal",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposal"}},d={},u=[{value:"query gov params command",id:"query-gov-params-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],p={toc:u};function y(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-gov-params"},"babylond query gov params"),(0,a.kt)("p",null,"Querying all the parameters for the governance module."),(0,a.kt)("h2",{id:"query-gov-params-command"},"query gov params command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query gov params [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query gov params\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for params\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);