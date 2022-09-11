"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[1093],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,g=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7875:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2,id:"howto-connect-to-relay",title:"Connecting to the MEV Relay",description:"How to guide on connecting to the SecureRpc MEV Relay"},c="Connecting to the Relay",p={unversionedId:"How-To/howto-connect-to-relay",id:"How-To/howto-connect-to-relay",title:"Connecting to the MEV Relay",description:"How to guide on connecting to the SecureRpc MEV Relay",source:"@site/docs/How-To/connect-to-the-relay.md",sourceDirName:"How-To",slug:"/How-To/howto-connect-to-relay",permalink:"/docs/How-To/howto-connect-to-relay",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/How-To/connect-to-the-relay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"howto-connect-to-relay",title:"Connecting to the MEV Relay",description:"How to guide on connecting to the SecureRpc MEV Relay"},sidebar:"docsSidebar",previous:{title:"How-to Guides",permalink:"/docs/category/how-to-guides"},next:{title:"Sushi Guard",permalink:"/docs/How-To/use-sushiguard"}},u={},d=[{value:"Goerli",id:"goerli",level:2},{value:"RPC Implements",id:"rpc-implements",level:3},{value:"Validators",id:"validators",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Coordination Chats",id:"coordination-chats",level:2}],m={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"connecting-to-the-relay"},"Connecting to the Relay"),(0,l.kt)("p",null,"We offer both mainnet and testnet methods"),(0,l.kt)("h2",{id:"goerli"},"Goerli"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://goerli.securerpc.com"},"goerli.securerpc.com")),(0,l.kt)("h3",{id:"rpc-implements"},"RPC Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eth_sendPrivateRawTransaction "),(0,l.kt)("li",{parentName:"ul"},"eth_sendBundle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"https://staging:zOzDfoKPU4miDNGHAB3QSnqsJ1wTJKo9@oracle-prod.manifoldx.com/goerli/relay/\n")),(0,l.kt)("h3",{id:"validators"},"Validators"),(0,l.kt)("p",null,"How validators can join our relay on Goerli"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"https://0x8a72a5ec3e2909fff931c8b42c9e0e6c6e660ac48a98016777fc63a73316b3ffb5c622495106277f8dbcc17a06e92ca3@goerli.securerpc.com \n")),(0,l.kt)("h2",{id:"appendix"},"Appendix"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"FQDN")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"TYPE")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"TTL")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"RECORD")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"IPv4")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"51.81.93.106")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"51.81.56.56")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"147.135.70.119")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"147.135.65.21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"147.135.65.191")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"147.135.5.171")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api.securerpc.com."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"135.148.171.175")))),(0,l.kt)("h2",{id:"coordination-chats"},"Coordination Chats"),(0,l.kt)("p",null,"Please reach out for a telegram or slack invite if needed."))}s.isMDXComponent=!0}}]);