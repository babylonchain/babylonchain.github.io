"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[3279],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>b});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),d=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(r),p=t,b=s["".concat(l,".").concat(p)]||s[p]||y[p]||a;return r?o.createElement(b,c(c({ref:n},u),{},{components:r})):o.createElement(b,c({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:t,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9047:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),t=(r(7294),r(3905));const a={id:"babylond_query_zoneconcierge_params",sidebar_label:"babylond query zoneconcierge params",hide_table_of_contents:!0},c="babylond query zoneconcierge params",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/babylond_query_zoneconcierge_params",id:"cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/babylond_query_zoneconcierge_params",title:"babylond query zoneconcierge params",description:"Show the parameters of the zoneconcierge module.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/Babylond_query_zoneconcierge_params.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_zoneconcierge",slug:"/cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/babylond_query_zoneconcierge_params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/babylond_query_zoneconcierge_params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/Babylond_query_zoneconcierge_params.md",tags:[],version:"current",frontMatter:{id:"babylond_query_zoneconcierge_params",sidebar_label:"babylond query zoneconcierge params",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query zoneconcierge",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_zoneconcierge"},next:{title:"babylond rollback",permalink:"/docs/cli/babylond/babylond_rollback"}},l={},d=[{value:"query zoneconcierge params command",id:"query-zoneconcierge-params-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:d};function s(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"babylond-query-zoneconcierge-params"},"babylond query zoneconcierge params"),(0,t.kt)("p",null,"Show the parameters of the zoneconcierge module."),(0,t.kt)("h2",{id:"query-zoneconcierge-params-command"},"query zoneconcierge params command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"babylond query zoneconcierge params [flags]\n")),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for params\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,t.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}s.isMDXComponent=!0}}]);