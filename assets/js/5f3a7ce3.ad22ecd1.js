"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[5289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),y=u(n),s=a,p=y["".concat(c,".").concat(s)]||y[s]||d[s]||i;return n?r.createElement(p,o(o({ref:t},b),{},{components:n})):r.createElement(p,o({ref:t},b))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"Babylond_query_ibc_client_status",sidebar_label:"babylond query ibc client status",hide_table_of_contents:!0},o="babylond query ibc client status",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status",title:"babylond query ibc client status",description:"Querying the activity of the currently active client by the specified client identifier.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_client_status",sidebar_label:"babylond query ibc client status",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc client states",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_states"},next:{title:"babylond query ibc connection",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection"}},c={},u=[{value:"query ibc client status command",id:"query-ibc-client-status-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],b={toc:u};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-ibc-client-status"},"babylond query ibc client status"),(0,a.kt)("p",null,"Querying the activity of the currently active client by the specified client identifier."),(0,a.kt)("h2",{id:"query-ibc-client-status-command"},"query ibc client status command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query ibc client status [client-id] [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query ibc client status 1234htyuhgnka358\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for status\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);