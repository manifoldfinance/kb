"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[2960],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(c,d(d({ref:t},p),{},{components:a})):r.createElement(c,d({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,d=new Array(l);d[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var s=2;s<l;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5690:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),d=["components"],i={},o="TokenTransferProxy",s={unversionedId:"Switchboard/TokenTransferProxy",id:"Switchboard/TokenTransferProxy",title:"TokenTransferProxy",description:"Amir Bandeali - &lt;amir@0xProject.com&gt;, Will Warren - &lt;will@0xProject.com&gt;",source:"@site/docs/Switchboard/TokenTransferProxy.md",sourceDirName:"Switchboard",slug:"/Switchboard/TokenTransferProxy",permalink:"/docs/Switchboard/TokenTransferProxy",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/Switchboard/TokenTransferProxy.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"TokenBalanceLibrary",permalink:"/docs/Switchboard/TokenBalanceLibrary"},next:{title:"UniswapV2Ward",permalink:"/docs/Switchboard/UniswapV2Ward"}},p={},m=[{value:"Methods",id:"methods",level:2},{value:"addAuthorizedAddress",id:"addauthorizedaddress",level:3},{value:"Parameters",id:"parameters",level:4},{value:"authorized",id:"authorized",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"owner",id:"owner",level:3},{value:"Returns",id:"returns-1",level:4},{value:"removeAuthorizedAddress",id:"removeauthorizedaddress",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"renounceOwnership",id:"renounceownership",level:3},{value:"transferFrom",id:"transferfrom",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"transferOwnership",id:"transferownership",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Events",id:"events",level:2},{value:"LogAuthorizedAddressAdded",id:"logauthorizedaddressadded",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"LogAuthorizedAddressRemoved",id:"logauthorizedaddressremoved",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"OwnershipTransferred",id:"ownershiptransferred",level:3},{value:"Parameters",id:"parameters-7",level:4}],u={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tokentransferproxy"},"TokenTransferProxy"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Amir Bandeali - ","<",(0,l.kt)("a",{parentName:"em",href:"mailto:amir@0xProject.com"},"amir@0xProject.com"),">",", Will Warren - ","<",(0,l.kt)("a",{parentName:"em",href:"mailto:will@0xProject.com"},"will@0xProject.com"),">")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TokenTransferProxy - Transfers tokens on behalf of contracts that have been approved via decentralized governance.")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"addauthorizedaddress"},"addAuthorizedAddress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addAuthorizedAddress(address target) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Authorizes an address.")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address to authorize.")))),(0,l.kt)("h3",{id:"authorized"},"authorized"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function authorized(address) external view returns (bool)\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"owner"},"owner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() external view returns (address)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the address of the current owner.")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"removeauthorizedaddress"},"removeAuthorizedAddress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function removeAuthorizedAddress(address target) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Removes authorizion of an address.")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address to remove authorization from.")))),(0,l.kt)("h3",{id:"renounceownership"},"renounceOwnership"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function renounceOwnership() external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Leaves the contract without owner. It will not be possible to call ",(0,l.kt)("inlineCode",{parentName:"em"},"onlyOwner")," functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.")),(0,l.kt)("h3",{id:"transferfrom"},"transferFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferFrom(address token, address from, address to, uint256 value) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Calls into ERC20 Token contract, invoking transferFrom.")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of token to transfer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address to transfer token from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address to transfer token to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of token to transfer.")))),(0,l.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferOwnership(address newOwner) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Transfers ownership of the contract to a new account (",(0,l.kt)("inlineCode",{parentName:"em"},"newOwner"),"). Can only be called by the current owner.")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newOwner"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"logauthorizedaddressadded"},"LogAuthorizedAddressAdded"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event LogAuthorizedAddressAdded(address indexed target, address indexed caller)\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caller ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"logauthorizedaddressremoved"},"LogAuthorizedAddressRemoved"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event LogAuthorizedAddressRemoved(address indexed target, address indexed caller)\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caller ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"previousOwner ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newOwner ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))))}k.isMDXComponent=!0}}]);