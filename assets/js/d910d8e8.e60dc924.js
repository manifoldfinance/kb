"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[738],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,b=m["".concat(l,".").concat(c)]||m[c]||h[c]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6620:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={},l=void 0,p={unversionedId:"MEV/relay/Research",id:"MEV/relay/Research",title:"Research",description:"Here we collect resources and pointers to topics related to MEV in proof-of-stake Ethereum and research questions about the journey from mev-boost to in-protocol proposer-builder separation (PBS).",source:"@site/docs/MEV/relay/Research.md",sourceDirName:"MEV/relay",slug:"/MEV/relay/Research",permalink:"/docs/MEV/relay/Research",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/MEV/relay/Research.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Block Properties",permalink:"/docs/MEV/relay/Notes-&-Assumptions"},next:{title:"Resources",permalink:"/docs/MEV/relay/Resources"}},u={},h=[],m={toc:h};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here we collect resources and pointers to topics related to MEV in proof-of-stake Ethereum and research questions about the journey from mev-boost to in-protocol proposer-builder separation (PBS)."),(0,o.kt)("h1",{id:"papers"},"Papers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2003.03052"},"Combining GHOST and Casper")," Buterin et al. (2020)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elopio.keybase.pub/papers/2020-combining_ghost_and_casper.pdf"},"elopio's annotations")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2110.10086"},"Three Attacks on Proof-of-Stake Ethereum")," Schwarz-Schilling et al. (2021)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2203.01315"},"Two Attacks on Proof-of-Stake Ghost/Ethereum")," Neu et al. (2022)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/025.pdf"},"Single Secret Leader Election")," Boneh et al. (2020)")),(0,o.kt)("h1",{id:"posts"},"Posts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"Proposer/block builder separation-friendly fee market designs")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/two-slot-proposer-builder-separation/10980"},"Two-slot proposer/builder separation")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance"},"State of research: increasing censorship resistance of transactions under proposer/builder separation (PBS)")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@fradamt/H1TsYRfJc"},"PBS Censorship-Resistance Alternatives")," by Francesco D'Amato (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@fradamt/H1ZqdtrBF"},"Current CrList Proposal")," by Francesco D'Amato"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://writings.flashbots.net/research/mev-eth2/"},"MEV in eth2")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/eth2-research"},"associated repo"),") by Alex Obadia & Taarush Vemulapalli (Flashbots)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/committee-driven-mev-smoothing/10408"},"Commitee-driven MEV smoothing")," by Francesco D'Amato (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethereum.github.io/beaconrunner/notebooks/naiveurn.html"},"Exploring Inequality in Proof of Stake")," by Barnabe Monnot (RIG/EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2021/12/06/endgame.html"},"Endgame")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/VitalikButerin/status/1466411377107558402?s=20"},"Updated Ethereum Roadmap")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@vbuterin/proto_danksharding_faq"},"Proto-Danksharding FAQ")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@prysmaticlabs/finality"},"What Happens After Finality in eth2")," by Raul Jordan (Prysmatic)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/rng-exploitability-analysis-assuming-pure-randao-based-main-chain/1825"},"RNG exploitability analysis assuming pure RANDAO-based main chain")," by Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethereum.github.io/beaconrunner/notebooks/randao/randao.html"},"Exploring the RANDAO game in PoS Ethereum")," by Caspar Schwarz-Schilling & Barnabe Monnot (RIG/EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rocket-pool/rocketpool-research/tree/master/Post%20Merge"},"Rocketpool Post-Merge research")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@casparschwa/H1T0k7b85"},"Proposer Boost Considerations")," by Caspar Schwarz-Schilling (RIG/EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@casparschwa/ByHu1XZUq"},"(Un-)Timeliness in PoS Ethereum")," by Caspar Schwarz-Schilling (RIG/EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@casparschwa/S1vcyXZL9"},"Retroactive Proposer Rewards")," by Caspar Schwarz-Schilling (RIG/EF)")),(0,o.kt)("h1",{id:"talks"},"Talks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/GJwS7VF40wk?t=23285"},"Flashbots Incentives for Geographical Diversity")," at EthStaker Amsterdam by Leo Arias & Alex Obadia (Flashbots)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/jLHf6yw7b5Y"},"MEV & Cryptography")," by Justin Drake (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/8mcm-jT2nq4"},"Flashbots MEV Roast #15: PBS on Ethereum Roadmap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/e9oudTr5BE4"},"\u201cDude, what\u2019s the Danksharding situation?\u201d Workshop")," by Dankrad Feist & Vitalik Buterin (EF)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/XhZ2FDMdVUM"},"MEV after EIP-1559 and the Merge")," at EthCC 4 by Alex Obadia & Alejo Salles (Flashots)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/6MeKNSqC2es"},"The MEV in Nethermind in eth2")," at EthCC 4 by Tomasz Sta\u0144czak & Marcello Bardus (Flashbots/Nethermind)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/zsgC6mNP9eU"},"MEV on eth2")," at ETHGlobal Scaling Ethereum Roast by Alex Obadia (Flashbots)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/Hjd9WowOa3g"},"MEV after The Merge with Nethermind and Flashbots")," at ETHGlobal Scaling Ethereum conference by Alex Obadia & Tomasz Sta\u0144czak (Flashbots/Nethermind)")),(0,o.kt)("h1",{id:"open-questions"},"Open questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/111"},"Late block proposal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/112"},"Header and bid publicly accessible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/113"},"Transaction cancellation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/122"},"Relays gossiping payloads between each other & multiple relays with the same payload")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/139"},"Distributed Block-Building")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/215"},"CrLists in mev-boost"))))}c.isMDXComponent=!0}}]);