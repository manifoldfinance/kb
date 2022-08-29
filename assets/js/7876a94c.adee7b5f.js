"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[4618],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(a),k=n,N=m["".concat(d,".").concat(k)]||m[k]||o[k]||l;return a?r.createElement(N,i(i({ref:t},s),{},{components:a})):r.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9446:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return o}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],p={},d="PartnerRegistry",u={unversionedId:"Switchboard/PartnerRegistry",id:"Switchboard/PartnerRegistry",title:"PartnerRegistry",description:"PartnerRegistry",source:"@site/docs/Switchboard/PartnerRegistry.md",sourceDirName:"Switchboard",slug:"/Switchboard/PartnerRegistry",permalink:"/docs/Switchboard/PartnerRegistry",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/Switchboard/PartnerRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Partner",permalink:"/docs/Switchboard/Partner"},next:{title:"SwitchBoard",permalink:"/docs/Switchboard/"}},s={},o=[{value:"Methods",id:"methods",level:2},{value:"basePercentage",id:"basepercentage",level:3},{value:"Returns",id:"returns",level:4},{value:"companyBeneficiary",id:"companybeneficiary",level:3},{value:"Returns",id:"returns-1",level:4},{value:"deletePartner",id:"deletepartner",level:3},{value:"Parameters",id:"parameters",level:4},{value:"isValidPartner",id:"isvalidpartner",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"overrideRegisterPartner",id:"overrideregisterpartner",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"owner",id:"owner",level:3},{value:"Returns",id:"returns-3",level:4},{value:"paused",id:"paused",level:3},{value:"Returns",id:"returns-4",level:4},{value:"previousRegistry",id:"previousregistry",level:3},{value:"Returns",id:"returns-5",level:4},{value:"registerPartner",id:"registerpartner",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"renounceOwnership",id:"renounceownership",level:3},{value:"transferOwnership",id:"transferownership",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"updateCompanyInfo",id:"updatecompanyinfo",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Events",id:"events",level:2},{value:"OwnershipTransferred",id:"ownershiptransferred",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"PartnerRegistered",id:"partnerregistered",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Paused",id:"paused-1",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Unpaused",id:"unpaused",level:3},{value:"Parameters",id:"parameters-9",level:4}],m={toc:o};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"partnerregistry"},"PartnerRegistry"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PartnerRegistry")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"basepercentage"},"basePercentage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function basePercentage() external view returns (uint256)\n")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"companybeneficiary"},"companyBeneficiary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function companyBeneficiary() external view returns (address payable)\n")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"address payable"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"deletepartner"},"deletePartner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function deletePartner(address partnerContract) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Marks a partner contract as no longer valid")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerContract"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The partner contract address to disable")))),(0,l.kt)("h3",{id:"isvalidpartner"},"isValidPartner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function isValidPartner(address partnerContract) external view returns (bool)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Validate partnerContract")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerContract"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The partner contract address to validate")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"overrideregisterpartner"},"overrideRegisterPartner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function overrideRegisterPartner(address payable _companyBeneficiary, uint256 _companyPercentage, address payable partnerBeneficiary, uint256 partnerPercentage) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"registers a partner and deploys a partner contract with custom company values, only usable by owner")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","companyBeneficiary"),(0,l.kt)("td",{parentName:"tr",align:null},"address payable"),(0,l.kt)("td",{parentName:"tr",align:null},"The address that the company will receive payments to - NON-CHANGEABLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","companyPercentage"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage fee the company wants to take - this is out of 1",(0,l.kt)("strong",{parentName:"td"},"18, so 1"),"16 would be 1% fee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerBeneficiary"),(0,l.kt)("td",{parentName:"tr",align:null},"address payable"),(0,l.kt)("td",{parentName:"tr",align:null},"The address that the partner will receive payments to - NON-CHANGEABLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerPercentage"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage fee the partner wants to take - this is out of 1",(0,l.kt)("strong",{parentName:"td"},"18, so 1"),"16 would be 1% fee")))),(0,l.kt)("h3",{id:"owner"},"owner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() external view returns (address)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the address of the current owner.")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"paused"},"paused"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function paused() external view returns (bool)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns true if the contract is paused, and false otherwise.")),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"previousregistry"},"previousRegistry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function previousRegistry() external view returns (contract PartnerRegistry)\n")),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","0"),(0,l.kt)("td",{parentName:"tr",align:null},"contract PartnerRegistry"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"registerpartner"},"registerPartner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function registerPartner(address payable partnerBeneficiary, uint256 partnerPercentage) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"registers a partner and deploys a partner contract")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerBeneficiary"),(0,l.kt)("td",{parentName:"tr",align:null},"address payable"),(0,l.kt)("td",{parentName:"tr",align:null},"The address that the partner will receive payments to - NON-CHANGEABLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerPercentage"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage fee the partner wants to take - this is out of 1",(0,l.kt)("strong",{parentName:"td"},"18, so 1"),"16 would be 1% fee")))),(0,l.kt)("h3",{id:"renounceownership"},"renounceOwnership"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function renounceOwnership() external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Leaves the contract without owner. It will not be possible to call ",(0,l.kt)("inlineCode",{parentName:"em"},"onlyOwner")," functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.")),(0,l.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferOwnership(address newOwner) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Transfers ownership of the contract to a new account (",(0,l.kt)("inlineCode",{parentName:"em"},"newOwner"),"). Can only be called by the current owner.")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newOwner"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"updatecompanyinfo"},"updateCompanyInfo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function updateCompanyInfo(address payable newCompanyBeneficiary, uint256 newBasePercentage) external nonpayable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Updates the beneficiary and default percentage for the company")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newCompanyBeneficiary"),(0,l.kt)("td",{parentName:"tr",align:null},"address payable"),(0,l.kt)("td",{parentName:"tr",align:null},"New beneficiary address for company")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newBasePercentage"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"New base percentage for company")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"previousOwner ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newOwner ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"partnerregistered"},"PartnerRegistered"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event PartnerRegistered(address indexed creator, address indexed beneficiary, address partnerContract)\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beneficiary ",(0,l.kt)("inlineCode",{parentName:"td"},"indexed")),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partnerContract"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"paused-1"},"Paused"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event Paused(address account)\n")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,l.kt)("h3",{id:"unpaused"},"Unpaused"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event Unpaused(address account)\n")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")))))}k.isMDXComponent=!0}}]);