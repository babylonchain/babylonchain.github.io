"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(g,l(l({ref:t},p),{},{components:n})):i.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r=n.p+"assets/images/vigilante-8d663435f4d42527ea1d48ecb9dec241.png",l={id:"become-vigilante",sidebar_label:"Becoming a Vigilante",hide_table_of_contents:!0},o="Becoming a Babylon Vigilante",s={unversionedId:"testnet/become-vigilante",id:"testnet/become-vigilante",title:"Becoming a Babylon Vigilante",description:"Learn how to run the Babylon Vigilante program.",source:"@site/docs/testnet/become-vigilante.md",sourceDirName:"testnet",slug:"/testnet/become-vigilante",permalink:"/docs/testnet/become-vigilante",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/testnet/become-vigilante.md",tags:[],version:"current",frontMatter:{id:"become-vigilante",sidebar_label:"Becoming a Vigilante",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Becoming a Validator",permalink:"/docs/testnet/become-validator"},next:{title:"Integrating with Babylon",permalink:"/docs/testnet/czintegrate"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Deploy Vigilante Locally",id:"deploy-vigilante-locally",level:2},{value:"Reporter",id:"reporter",level:3},{value:"Submitter",id:"submitter",level:3},{value:"Monitor",id:"monitor",level:3},{value:"Deploy Vigilante Using Docker",id:"deploy-vigilante-using-docker",level:2},{value:"Reporter",id:"reporter-1",level:3},{value:"Submitter",id:"submitter-1",level:3},{value:"Monitor",id:"monitor-1",level:3},{value:"Buildx",id:"buildx",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"becoming-a-babylon-vigilante"},"Becoming a Babylon Vigilante"),(0,a.kt)("p",null,"Learn how to run the Babylon Vigilante program."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Vigilante programs are standalone programs that are run along-side with Babylon nodes.\nPeople run a vigilante program in three modes, ",(0,a.kt)("inlineCode",{parentName:"p"},"reporter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"submitter"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"monitor"),", each responsible to different aspects to the security of the Babylon network."),(0,a.kt)("div",{style:{justifyContent:"center",display:"flex",marginBottom:"50px"}},(0,a.kt)("img",{style:{width:"1000px"},src:r,alt:"becomevigilante"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"First we need to have the access to a synced Babylon full node and a synced BTC full node.\nTo run a BTC full node, please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://bitcoin.org/en/full-node"},"instructions of running a ",(0,a.kt)("inlineCode",{parentName:"a"},"bitcoind")," full node")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/btcsuite/btcd"},"instructions of running a ",(0,a.kt)("inlineCode",{parentName:"a"},"btcd")," full node")," (an alternative full node bitcoin implementation written in Golang).\nWe support the connections to both.\nTo run a Babylon full node, please follow this ",(0,a.kt)("a",{parentName:"p",href:"/docs/testnet/setup-node"},"guide"),"."),(0,a.kt)("p",null,"We specify the following paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'BABYLON_PATH="path_where_babylon_is_built" # example: $HOME/Projects/Babylon/babylon\nVIGILANTE_PATH="root_vigilante_dir" # example: $HOME/Projects/Babylon/vigilante\nTESTNET_PATH="path_where_the_testnet_files_will_be_stored" # example: $HOME/Projects/Babylon/babylon/.testnet\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Create a directory which will store the vigilante configuration,\ncopy the sample vigilante configuration into a ",(0,a.kt)("inlineCode",{parentName:"p"},"vigilante.yml")," file, and\nadapt it to the specific requirements."),(0,a.kt)("p",null,"Currently, the vigilante configuration should be edited manually.\nIn the future, we will add functionality for generating this file through\na script.\nFor Docker deployments, we have created the ",(0,a.kt)("inlineCode",{parentName:"p"},"sample-vigilante-docker.yaml"),"\nfile which contains a configuration that will work out of this box for this guide."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cp sample-vigilante.yml $VIGILANTE_PATH/vigilante.yml\nnano $VIGILANTE_PATH/vigilante.yml # edit the config file to replace $TESTNET instances \n")),(0,a.kt)("h2",{id:"deploy-vigilante-locally"},"Deploy Vigilante Locally"),(0,a.kt)("h3",{id:"reporter"},"Reporter"),(0,a.kt)("p",null,"Run the vigilante reporter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go run $VIGILANTE_PATH/cmd/main.go reporter \\\n         --config $VIGILANTE_PATH/vigilante.yml \\\n         --babylon-key $BABYLON_KEY_DIR\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"$BABYLON_KEY_DIR")," stores the keyring that will be used to submit BTC headers and checkpoints to Babylon."),(0,a.kt)("h3",{id:"submitter"},"Submitter"),(0,a.kt)("p",null,"Similarly, run the vigilante submitter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go run $VIGILANTE_PATH/cmd/main.go submitter \\\n         --config $VIGILANTE_PATH/vigilante.yml\n")),(0,a.kt)("h3",{id:"monitor"},"Monitor"),(0,a.kt)("p",null,"The monitor mode requires the genesis file of Babylon as an additional parameter, which is stored under ",(0,a.kt)("inlineCode",{parentName:"p"},"$BABYLON_NODE_PATH/config/genesis.json"),".\nSo, run the vigilante monitor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go run $VIGILANTE_PATH/cmd/main.go monitor \\\n         --genesis $BABYLON_NODE_PATH/config/genesis.json\n         --config $VIGILANTE_PATH/vigilante.yml\n")),(0,a.kt)("h2",{id:"deploy-vigilante-using-docker"},"Deploy Vigilante Using Docker"),(0,a.kt)("h3",{id:"reporter-1"},"Reporter"),(0,a.kt)("p",null,"Initially, build a Docker image named ",(0,a.kt)("inlineCode",{parentName:"p"},"babylonchain/vigilante-reporter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cp sample-vigilante-docker.yml $VIGILANTE_PATH/vigilante.yml\nmake reporter-build\n")),(0,a.kt)("p",null,"Afterwards, run the above image and attach the directories\nthat contain the configuration for Babylon, Bitcoin, and the vigilante."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n         -v $TESTNET_PATH/bitcoin:/bitcoin \\\n         -v $BABYLON_NODE_PATH:/babylon \\\n         -v $VIGILANTE_PATH:/vigilante \\\n         babylonchain/vigilante-reporter\n")),(0,a.kt)("h3",{id:"submitter-1"},"Submitter"),(0,a.kt)("p",null,"Follow the same steps as above, but with the ",(0,a.kt)("inlineCode",{parentName:"p"},"babylonchain/vigilante-submitter")," Docker image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n         -v $TESTNET_PATH/bitcoin:/bitcoin \\\n         -v $BABYLON_NODE_PATH:/babylon \\\n         -v $VIGILANTE_PATH:/vigilante \\\n         babylonchain/vigilante-submitter\n")),(0,a.kt)("h3",{id:"monitor-1"},"Monitor"),(0,a.kt)("p",null,"Follow the same steps as above, but with the ",(0,a.kt)("inlineCode",{parentName:"p"},"babylonchain/vigilante-monitor")," Docker image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n         -v $TESTNET_PATH/bitcoin:/bitcoin \\\n         -v $BABYLON_NODE_PATH:/babylon \\\n         -v $VIGILANTE_PATH:/vigilante \\\n         babylonchain/vigilante-monitor\n")),(0,a.kt)("h3",{id:"buildx"},"Buildx"),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"s are also compatible with Docker's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/multi-arch/"},"buildx feature"),"\nthat allows multi-architectural builds. To have a multi-architectural build,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker buildx create --use\nmake reporter-buildx  # for the reporter\nmake submitter-buildx # for the submitter\nmake monitor-buildx # for the monitor\n")))}m.isMDXComponent=!0}}]);