"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,id:"intro",title:"Manifold Finance Introduction",description:"An introduction to Manifold Finance"},s="Ethereum network",c={unversionedId:"intro",id:"intro",title:"Manifold Finance Introduction",description:"An introduction to Manifold Finance",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"Manifold Finance Introduction",description:"An introduction to Manifold Finance"},sidebar:"docsSidebar",next:{title:"General - Overview",permalink:"/docs/category/general---overview"}},u={},d=[{value:"Ethereum2",id:"ethereum2",level:2},{value:"Block Construction in Eth2",id:"block-construction-in-eth2",level:3},{value:"Reading this documentation",id:"reading-this-documentation",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethereum-network"},"Ethereum network"),(0,a.kt)("p",null,"The Ethereum network is a distributed consensus platform that allows users to write and compute smart contracts in a distributed manner. Smart contracts are essentially Turing complete programs that are available at a unique address of the network. When the smart contract is run as part of a transaction, the result and the current state of the contract are stored in a verifiable consensus that is agreed upon by the entire network of nodes."),(0,a.kt)("h2",{id:"ethereum2"},"Ethereum2"),(0,a.kt)("p",null,"Ethereum will soon transition from a Proof of Work (PoW) to a Proof of Stake (PoS) consensus protocol. This transition has been worked on for years and is happening in multiple steps."),(0,a.kt)("p",null,"Ethereum\u2019s consensus is currently secured by miners who run hardware optimized to solve the proof of work challenge. The move from a PoW to a PoS consensus means the network becomes secured by validators, who stake security deposits of 32 ETH and vote to come to a consensus on the state of the beacon chain. Validators are economically incentivized to do this via rewards for good behavior and penalties (slashing) for downtime or malicious behavior."),(0,a.kt)("h3",{id:"block-construction-in-eth2"},"Block Construction in Eth2"),(0,a.kt)("p",null,"Manifold Finance enables and provides access to high-value transaction pools on EVM-compatible chains, through our infrastructure: ",(0,a.kt)("em",{parentName:"p"},"SecureRPC"),". We aggregate multiple endpoints along with maintaining direct access to disparate mining pools/validator nodes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In short, we believe that access to transaction sets will be ",(0,a.kt)("strong",{parentName:"p"},"the defining advantage for block builders")," in Ethereum2. The ",(0,a.kt)("strong",{parentName:"p"},"ultimate goal for a block builder is to build the highest-value block that it can"),". To do this, it needs to build from high-value transactions. ",(0,a.kt)("strong",{parentName:"p"},"The combined value of MEV opportunities at any point in time will in general outweigh any delta that could be obtained by smart block building algorithms, so access to a high-value transaction pool will be the defining advantage for block builders"),". The only logical choice is to send it to the single builder that already has the highest-value transaction pool. And as searchers are financially driven, they are all likely to make the same choice.")),(0,a.kt)("p",null,"This appears to create a positive feedback situation, leading to the end result of a single large high-value transaction pool, and a single major builder. Smaller transaction pools may survive if backed by validators willing to sacrifice financial rewards for some other value, however, validators that are monetarily driven will end up taking the block from the single major builder."),(0,a.kt)("h2",{id:"reading-this-documentation"},"Reading this documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guides, for broad hands-on understanding and connections to other learning resources"),(0,a.kt)("li",{parentName:"ul"},"Tutorials, intended to teach a particular process or project"),(0,a.kt)("li",{parentName:"ul"},"Cookbooks, collections of tips and tricks"),(0,a.kt)("li",{parentName:"ul"},"Reference, full manuals and technical coverage"),(0,a.kt)("li",{parentName:"ul"},"Pedias, for encyclopedic description")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If information is more encyclopedic (with a similar scope and tone to pages on Wikipedia), a page would be considered a pedia."),(0,a.kt)("li",{parentName:"ul"},"If information is less encyclopedic and more similar to a compendium, study guide, or bibliographic guide, a page would be considered a guide."),(0,a.kt)("li",{parentName:"ul"},"If information is more about direct instruction to achieve a specific task, a page would be considered a tutorial."),(0,a.kt)("li",{parentName:"ul"},"If a page is more just a set of tips and tricks (less instructive than a tutorial), it would be a cookbook."),(0,a.kt)("li",{parentName:"ul"},"If a page is a detailed reference (like a man page or full software manual), it would fit under references.")))}m.isMDXComponent=!0}}]);