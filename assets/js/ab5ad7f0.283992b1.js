"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8737],{3905:(e,n,t)=>{t.d(n,{Zo:()=>b,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(t),u=o,y=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return t?r.createElement(y,l(l({ref:n},b),{},{components:t})):r.createElement(y,l({ref:n},b))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={id:"babylondhelp",sidebar_label:"babylond help",hide_table_of_contents:!0},l="babylond help",i={unversionedId:"cli/babylond/babylondhelp",id:"cli/babylond/babylondhelp",title:"babylond help",description:"Help with any command available in babylond.",source:"@site/docs/cli/babylond/babylondhelp.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylondhelp",permalink:"/docs/cli/babylond/babylondhelp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/babylondhelp.md",tags:[],version:"current",frontMatter:{id:"babylondhelp",sidebar_label:"babylond help",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond gentx",permalink:"/docs/cli/babylond/babylondgentx"},next:{title:"babylond init",permalink:"/docs/cli/babylond/babylondinit"}},c={},p=[{value:"help command",id:"help-command",level:2},{value:"Options",id:"options",level:2}],b={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-help"},"babylond help"),(0,o.kt)("p",null,"Help with any command available in babylond."),(0,o.kt)("h2",{id:"help-command"},"help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond help\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-h, --help                help for babylond\n      --home string         directory for config and data (default "/home/kakakepan/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}d.isMDXComponent=!0}}]);