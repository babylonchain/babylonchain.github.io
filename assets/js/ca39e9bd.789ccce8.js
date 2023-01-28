"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1565],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>s});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),y=i(n),b=a,s=y["".concat(p,".").concat(b)]||y[b]||c[b]||o;return n?t.createElement(s,l(l({ref:r},u),{},{components:n})):t.createElement(s,l({ref:r},u))}));function s(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d[y]="string"==typeof e?e:a,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9893:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=n(7462),a=(n(7294),n(3905));const o={id:"babylond_query_upgrade_applied",sidebar_label:"babylond query upgrade applied",hide_table_of_contents:!0},l="babylond query upgrade applied",d={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_applied",id:"cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_applied",title:"babylond query upgrade applied",description:"Return the block header by the height at which the upgrade was applied.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_upgrade/Babylond_query_upgrade_applied.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_upgrade",slug:"/cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_applied",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_applied",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_upgrade/Babylond_query_upgrade_applied.md",tags:[],version:"current",frontMatter:{id:"babylond_query_upgrade_applied",sidebar_label:"babylond query upgrade applied",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query upgrade",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_upgrade"},next:{title:"babylond query upgrade module-versions",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_module_versions"}},p={},i=[{value:"query upgrade applied command",id:"query-upgrade-applied-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:i};function y(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-upgrade-applied"},"babylond query upgrade applied"),(0,a.kt)("p",null,"Return the block header by the height at which the upgrade was applied."),(0,a.kt)("h2",{id:"query-upgrade-applied-command"},"query upgrade applied command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query upgrade applied [upgrade-name] [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for applied\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);