"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[7799],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=m(a),d=s,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},785:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return h}});var n=a(7462),s=a(3366),o=(a(7294),a(3905)),i=["components"],r={created:"2022-08-01T17:20:10 (UTC -08:00)",title:"Single Slot Finality",tags:["mev boost","eth2","flashbots"],author:"V. Buterin"},l="Paths Toward single-slot finality",m={unversionedId:"Block-Construction/Single-Slot-Finality",id:"Block-Construction/Single-Slot-Finality",title:"Single Slot Finality",description:"source//notes.ethereum.org/@vbuterin/singleslotfinality",source:"@site/docs/Block-Construction/Single-Slot-Finality.md",sourceDirName:"Block-Construction",slug:"/Block-Construction/Single-Slot-Finality",permalink:"/docs/Block-Construction/Single-Slot-Finality",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/Block-Construction/Single-Slot-Finality.md",tags:[{label:"mev boost",permalink:"/docs/tags/mev-boost"},{label:"eth2",permalink:"/docs/tags/eth-2"},{label:"flashbots",permalink:"/docs/tags/flashbots"}],version:"current",frontMatter:{created:"2022-08-01T17:20:10 (UTC -08:00)",title:"Single Slot Finality",tags:["mev boost","eth2","flashbots"],author:"V. Buterin"},sidebar:"docsSidebar",previous:{title:"Finding the Safe Head",permalink:"/docs/Block-Construction/Find-Safe-Head"},next:{title:"How-to Guides",permalink:"/docs/category/how-to-guides"}},p={},h=[{value:"How and why Ethereum staking works today",id:"how-and-why-ethereum-staking-works-todayhow-and-why-ethereum-staking-works-today",level:2},{value:"Why try to implement single-slot finality?",id:"why-try-to-implement-single-slot-finalitywhy-try-to-implement-single-slot-finality",level:2},{value:"Idea 1: single-slot finality through super-committees",id:"idea-1-single-slot-finality-through-super-committeesidea-1-single-slot-finality-through-super-committees",level:2},{value:"Secondary benefits of switching to super-committees",id:"secondary-benefits-of-switching-to-super-committeessecondary-benefits-of-switching-to-super-committees",level:3},{value:"How big do the super-committees have to be?",id:"how-big-do-the-super-committees-have-to-behow-big-do-the-super-committees-have-to-be",level:3},{value:"Idea 2: try really hard to make very high attester counts work",id:"idea-2-try-really-hard-to-make-very-high-attester-counts-workidea-2-try-really-hard-to-make-very-high-attester-counts-work",level:2},{value:"More specialized aggregators",id:"more-specialized-aggregatorsmore-specialized-aggregators",level:3},{value:"How do we get there?",id:"how-do-we-get-therehow-do-we-get-there",level:2}],c={toc:h};function d(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"paths-toward-single-slot-finality"},"Paths Toward single-slot finality"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"source: ",(0,o.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality"},"https://notes.ethereum.org/@vbuterin/single_slot_finality"))),(0,o.kt)("p",null,"Today, Ethereum blocks take 64-95 slots (~15 minutes) to finalize. This ",(0,o.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@vbuterin/serenity_design_rationale#Why-32-ETH-validator-sizes"},"was justified")," as picking a medium not-bad-on-any-dimension tradeoff on the ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@VitalikButerin/parametrizing-casper-the-decentralization-finality-time-overhead-tradeoff-3f2011672735"},"decentralization / finality time / overhead tradeoff curve"),": 15 minutes is not too long and it\u2019s comparable to existing exchanges\u2019 confirmation times, it allows users to run nodes on regular computers, even with the large number of validators arising from a deposit size of 32 ETH (as opposed to the earlier value ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1011"},"of 1500 ETH"),"). However, there are a lot of good arguments for decreasing the finality time to a single slot. This is a state-of-research post reviewing some possible strategies for doing so."),(0,o.kt)("h2",{id:"how-and-why-ethereum-staking-works-todayhow-and-why-ethereum-staking-works-today"},(0,o.kt)("a",{parentName:"h2",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#How-and-why-Ethereum-staking-works-today",title:"How-and-why-Ethereum-staking-works-today"}),"How and why Ethereum staking works today"),(0,o.kt)("p",null,"Today, there are ",(0,o.kt)("a",{parentName:"p",href:"https://beaconcha.in/"},"~285,000 ",(0,o.kt)("strong",{parentName:"a"},"validators")),", accounts that have deposited ",(0,o.kt)("strong",{parentName:"p"},"32 ETH")," and as a result can participate in staking. Validators do not correspond one-to-one to users: wealthy stakers may control many hundreds of validators. The 32 ETH minimum limits the possible number of validator accounts, ensuring the chain still has the computational capacity to process them."),(0,o.kt)("p",null,"A new block gets added to the chain every ",(0,o.kt)("strong",{parentName:"p"},"slot")," (12 seconds). In every slot, there are also thousands of ",(0,o.kt)("strong",{parentName:"p"},"attestations")," that vote on the head of the chain. There is a ",(0,o.kt)("strong",{parentName:"p"},"fork choice rule")," called ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2003.03052"},"LMD GHOST")," which takes as input these attestations, and determines the head of the chain. This parallel voting by thousands of attestations makes Ethereum much more robust than a traditional ",(0,o.kt)("em",{parentName:"p"},"longest-chain")," system: unless there is an active attack or a huge network mishap, even a single slot is almost never reverted."),(0,o.kt)("p",null,"The attestations also have a second purpose: they act as votes in a massive consensus algorithm called ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1710.09437"},"Casper FFG"),". Every ",(0,o.kt)("strong",{parentName:"p"},"epoch")," (32 slots, or 6.4 min), ",(0,o.kt)("em",{parentName:"p"},"all")," active validators get a chance to attest once. After two rounds of this, if all goes well, an epoch (and all the blocks inside it) will be ",(0,o.kt)("strong",{parentName:"p"},"finalized"),". Once a block is finalized, reverting that block requires at least 1/3 of all validators to burn their deposits: ",(0,o.kt)("strong",{parentName:"p"},"a cost of attack of over ~3 million ETH"),"."),(0,o.kt)("p",null,"Persistently censoring validators or transactions is similarly costly, though defending against censorship attacks requires extra-protocol intervention. If 51% of validators start censoring, the victims and users can coordinate on a ",(0,o.kt)("strong",{parentName:"p"},"minority soft fork")," where they build on each other\u2019s blocks and ignore the attacker. On the minority soft fork, the attacker\u2019s deposits would lose millions of ETH to an ",(0,o.kt)("strong",{parentName:"p"},"inactivity leak"),", and after a few weeks the chain resumes finalizing."),(0,o.kt)("h2",{id:"why-try-to-implement-single-slot-finalitywhy-try-to-implement-single-slot-finality"},(0,o.kt)("a",{parentName:"h2",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#Why-try-to-implement-single-slot-finality",title:"Why-try-to-implement-single-slot-finality"}),"Why try to implement single-slot finality?"),(0,o.kt)("p",null,"There are a few key reasons to try to move away from the status quo and bring the finality time down to a single slot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User experience"),". Most users are not willing to wait 15 minutes for finality. Today, even exchanges frequently consider deposits \u201cfinalized\u201d after only 12-20 confirmations (~3-5 min), despite the low security assurance (compared to true PoS finalization) that 12-20 PoW confirmations offer. Single-slot finality would provide a very high degree of security at a speed that users are increasingly accustomed to expect."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MEV reorg resistance"),". Single-slot finality would make it infeasible for even a majority to reorg the chain for MEV extraction purposes. LMD GHOST in the merge already makes this ",(0,o.kt)("em",{parentName:"li"},"difficult"),", but single-slot finality makes this assurance much stronger and creates a strong and overwhelming disincentive deterring even a hostile majority from colluding and attacking. See ",(0,o.kt)("a",{parentName:"li",href:"https://www.paradigm.xyz/2021/07/ethereum-reorgs-after-the-merge/"},"this post")," for a more detailed exposition of the argument."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Opportunity to cut protocol complexity and bugs"),". The \u201cinterface\u201d ",(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2003.03052"},"between Casper FFG finalization and LMD GHOST fork choice")," is a source of significant complexity, leading to a number of attacks that have required fairly complicated patches to fix, with more weaknesses being ",(0,o.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/balancing-attack-lmd-edition/11853"},"regularly discovered"),". Single-slot finality offers an opportunity to create a cleaner relationship between a single-slot confirmation mechanism and the fork choice rule (which would only run in the ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mo",{parentName:"mrow"},"\u2265"),(0,o.kt)("mfrac",{parentName:"mrow"},(0,o.kt)("mn",{parentName:"mfrac"},"1"),(0,o.kt)("mn",{parentName:"mfrac"},"3"))),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ge \\frac{1}{3}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,o.kt)("span",{parentName:"span",className:"mfrac"},(0,o.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"3")))),(0,o.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,o.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,o.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,o.kt)("span",{parentName:"span"}))))),(0,o.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," offline case). Other sources of complexity (eg. shuffling into fixed-size committees) could also be cut.")),(0,o.kt)("h2",{id:"idea-1-single-slot-finality-through-super-committeesidea-1-single-slot-finality-through-super-committees"},(0,o.kt)("a",{parentName:"h2",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#Idea-1-single-slot-finality-through-super-committees",title:"Idea-1-single-slot-finality-through-super-committees"}),"Idea 1: single-slot finality through super-committees"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instead of ",(0,o.kt)("em",{parentName:"strong"},"all")," validators participating in each Casper FFG round, only a medium-sized super-committee of a few thousand validators participates, allowing each round of consensus to happen within a single slot.")," The technical idea was first introduced in ",(0,o.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/a-model-for-cumulative-committee-based-finality/10259"},"this ethresear.ch post"),". The post describes the idea in much more detail, but the core principles are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instead of the BFT consensus running every ",(0,o.kt)("em",{parentName:"li"},"epoch"),", it runs every ",(0,o.kt)("em",{parentName:"li"},"slot"),". This means that once a transaction is included in a block, after a ",(0,o.kt)("em",{parentName:"li"},"single slot")," it would cost many thousands of ETH to revert that transaction."),(0,o.kt)("li",{parentName:"ul"},"We don\u2019t rely on the full active validator set to finalize each slot. Instead, we rely on a randomly selected super-committee of a few thousand validators."),(0,o.kt)("li",{parentName:"ul"},"The fork choice rule (LMD GHOST) is only used in the exceptional case where a committee doesn\u2019t confirm (this requires >1/4 to be offline or malicious). If this happens, the fork choice rule governs which block is the head of the chain, and the committee gets inactivity-leaked until it confirms again.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/ethereum-hackmd/upload_3e4e25bcf33b0b0ceba47e25dcf64dec.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If a committee fails to confirm, the chain keeps progressing using the fork choice to determine the head and the offline validators leak until their balances are diluted to the point where > 2/3 of the remaining validator balances are online the committee can confirm.")),(0,o.kt)("h3",{id:"secondary-benefits-of-switching-to-super-committeessecondary-benefits-of-switching-to-super-committees"},(0,o.kt)("a",{parentName:"h3",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#Secondary-benefits-of-switching-to-super-committees",title:"Secondary-benefits-of-switching-to-super-committees"}),"Secondary benefits of switching to super-committees"),(0,o.kt)("p",null,"Switching from a global validator set to super-committees has some secondary benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The computational load of running a validator node becomes more stable"),". Instead of requirements being proportional to the total validator count, forcing validators to have beefy machines just in case the validator count greatly increases, the computational load will be stable, so validators know exactly what computational requirements they need."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Most of the time, validators could withdraw instantly"),". Validators who are not currently part of a committee would be able to withdraw instantly (unless there are very many withdrawals going on and there is a queue). Even validators who are in a committee would be able to withdraw very quickly (1-5 min), because committees could rotate rapidly under single-slot finality. Only in truly exceptional situations (either an unexpected mass exit or an active ongoing attack) would validators be required to stay and continue protecting the chain until everything goes back to normal.")),(0,o.kt)("h3",{id:"how-big-do-the-super-committees-have-to-behow-big-do-the-super-committees-have-to-be"},(0,o.kt)("a",{parentName:"h3",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#How-big-do-the-super-committees-have-to-be",title:"How-big-do-the-super-committees-have-to-be"}),"How big do the super-committees have to be?"),(0,o.kt)("p",null,"In terms of ",(0,o.kt)("em",{parentName:"p"},"validator count"),", the answer is \u201cbig enough to be a secure committee\u201d (so, ",(0,o.kt)("a",{parentName:"p",href:"https://eth.wiki/sharding/Sharding-FAQs#how-is-the-randomness-for-random-sampling-generated"},"a few hundred"),"). But the committees also have to be big enough ",(0,o.kt)("em",{parentName:"p"},"in terms of")," . The amount of ETH that gets slashed and inactivity-leaked needs to be greater than the revenue that can be realistically gained from an attack, and it needs to be large enough to either deter or bankrupt powerful attackers that have large outside incentives to break the chain."),(0,o.kt)("p",null,"This question of how much ETH is required is inevitably a matter of intuition. Here are some questions you could ask to guide your intuition:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Suppose that the Ethereum chain gets 51% attacked and the community needs to spend a few days coordinating an off-chain governance event to recover, but X percent of all ETH gets burned. How large does X need to be for this to be net-good for the Ethereum ecosystem?"),(0,o.kt)("li",{parentName:"ul"},"Suppose a major exchange gets hacked for millions of ETH, and the attacker deposits the proceeds and gets over 51% of all validators. How many times should they be able to 51% attack the chain before all their stolen money is burned?"),(0,o.kt)("li",{parentName:"ul"},"Suppose that a 51% attacker starts repeatedly re-orging the chain for only a short time to capture all the MEV. What level of cost per second do we want to impose on the attacker?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.joincolossus.com/episodes/14242194/drake-ethereum-into-the-ether?tab=transcript"},"Estimates from Justin Drake")," suggest that the cost of ",(0,o.kt)("em",{parentName:"li"},"spawn-camp attacking")," Bitcoin today (so, repeatedly 51% attacking until the community changes the PoW algorithm) is around $10 billion, or 1% of the market cap. How many times that level should the cost of ",(0,o.kt)("em",{parentName:"li"},"one-time 51% attacking")," Ethereum be?")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/ethereum-hackmd/upload_e3c156d9ef092dc3a97bce7e8dd70e35.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Internal poll among Ethereum researchers.")),(0,o.kt)("p",null,"A 1 million ETH cost of attack would imply a super-committee size of 2 million ETH (~65,536 validators) if we focus only on non-latency-dependent 51% attacks, and 3 million ETH (~97,152 validators) if we also include 34% attacks that involve complicated combinations of malicious validators and network manipulation. But if we want Ethereum chain load to remain the same as it is today (), this would correspond to a cost of attack of 96,000 to 144,000 ETH. There remains a large disparity between these two numbers."),(0,o.kt)("p",null,"Hence, unless the Ethereum community can be convinced that a lower cost of attacking Ethereum is acceptable (remember: attackers would still need to ",(0,o.kt)("em",{parentName:"p"},"control")," over 50% of ",(0,o.kt)("em",{parentName:"p"},"all")," staking ETH, this is just the amount they would ",(0,o.kt)("em",{parentName:"p"},"lose"),"), relying on this path alone seems difficult."),(0,o.kt)("h2",{id:"idea-2-try-really-hard-to-make-very-high-attester-counts-workidea-2-try-really-hard-to-make-very-high-attester-counts-work"},(0,o.kt)("a",{parentName:"h2",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#Idea-2-try-really-hard-to-make-very-high-attester-counts-work",title:"Idea-2-try-really-hard-to-make-very-high-attester-counts-work"}),"Idea 2: try really hard to make very high attester counts work"),(0,o.kt)("p",null,"Suppose that we actually do want to have a chain with a large number of validators participating per slot (say, 131,072 validators to get a conservative ~4M ETH). How would the performance numbers on that look like?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"It turns out that the ",(0,o.kt)("em",{parentName:"strong"},"on-chain costs")," of having a huge number of validators attesting per slot are less prohibitive than they seem"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The state space required to store the validator records would be exactly the same as today (~150 bytes per validator)"),(0,o.kt)("li",{parentName:"ul"},"Verifying a signature would require adding together a de-facto random subset of 131,072 pubkeys. Each elliptic curve addition could be done in ~1 microsecond, so this could be done in ",(0,o.kt)("strong",{parentName:"li"},"~130 milliseconds"),". This would need to be done twice per slot (or possibly a few more times if a block includes redundant attestations)"),(0,o.kt)("li",{parentName:"ul"},"On-chain costs (specifically, computing the aggregate pubkey that the signature is verified against) can be optimized further if we assume that a validator who is active in slot N generally stays active in slot N+1; this would mean that for each slot we would only need to compute the ",(0,o.kt)("em",{parentName:"li"},"delta")," between the old and new aggregate pubkey, which may consist of a few thousand or even only a few hundred validator pubkeys under good conditions. Even under worst-case conditions, at least 2x optimization (so, ~65 milliseconds) should always be possible.")),(0,o.kt)("p",null,"The biggest problem that remains is ",(0,o.kt)("em",{parentName:"p"},"signature aggregation"),". There are 131,072 validators making and sending signatures, and these need to be quickly combined into a single large aggregate signature."),(0,o.kt)("p",null,"Today, aggregation is done in p2p subnets. Each size-256 committee has signatures aggregated in its own subnet. There are 16 randomly selected privileged aggregators who can make aggregates and submit them to the main subnet. The proposer then takes the best aggregate from each committee, and aggregates those together, making the single grand combined aggregate."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/ethereum-hackmd/upload_c745904625619428d8601ea8a7a69fbc.png",alt:null})),(0,o.kt)("p",null,"This imposes a load in each subcommittee, where validators need to validate signatures individually (one pairing per signature) particularly in case of attacks flooding the network with invalid signatures, as well as in the global subnet, where the proposer must validate ",(0,o.kt)("inlineCode",{parentName:"p"},"16 * n")," signatures if there are ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," committees."),(0,o.kt)("p",null,"Aggregation is likely to be a target of significant optimization over the next two years. Currently, the biggest practical bottleneck is the load in each subnet, especially for nodes that need to be in multiple subnets."),(0,o.kt)("p",null,"Two promising easy paths to get significant improvements are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Increase the number of subnets")," to allow more total attestations without increasing the load per subnet. The load in the main subnet would increase, but this would be compensated for by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/pull/2792"},"dank-sharding"),", which provides efficiencies by allowing all validators in a slot to make signatures over the same data, allowing those signatures to be batch-verified more easily."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Change networking rules so that even a node with many validators only needs to participate in one subnet"),", giving room to increase both per-subnet load and subnet count. A validator only strictly ",(0,o.kt)("em",{parentName:"li"},"needs")," to be subscribed to a subnet if they are an aggregator in it; a validator that is merely ",(0,o.kt)("em",{parentName:"li"},"publishing")," to a subnet need only find an honest peer subscribed to that subnet, and need not subscribe to it themselves.")),(0,o.kt)("h3",{id:"more-specialized-aggregatorsmore-specialized-aggregators"},(0,o.kt)("a",{parentName:"h3",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#More-specialized-aggregators",title:"More-specialized-aggregators"}),"More specialized aggregators"),(0,o.kt)("p",null,"One possible more radical strategy for supporting far more validators is to turn signature aggregation into a more specialized role (similar to ",(0,o.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance"},"block builders in PBS"),"), where we expect specialized actors to be persistently in many subnets each (or even all subnets) and do a good job of gathering signatures. These actors could be paid, or this could be a volunteer role (as the additional cost is very low for users who are staking many validators already)."),(0,o.kt)("p",null,"A simple protocol for this is to allow validators to sign a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposedAggregate")," message containing (i) an aggregate signature, (ii) a bitfield of who participated (only 16 kB assuming 131,072 validators) and (iii) a signature over these two objects signed by the aggregator."),(0,o.kt)("p",null,"Proposers would listen for ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposedAggregate")," messages, and verify the signature with the highest participant count. If it is valid, they include it. If the signature is invalid, the proposer would lose up to ~130 milliseconds verifying it and they would move on to verify the second-highest-participation aggregate (and if needed the third-highest, etc), and the aggregator(s) of all invalid ",(0,o.kt)("inlineCode",{parentName:"p"},"ProposedAggregate")," messages could be slashed."),(0,o.kt)("h2",{id:"how-do-we-get-therehow-do-we-get-there"},(0,o.kt)("a",{parentName:"h2",href:"https://notes.ethereum.org/@vbuterin/single_slot_finality#How-do-we-get-there",title:"How-do-we-get-there"}),"How do we get there?"),(0,o.kt)("p",null,"Moving to single-slot confirmations is a multi-year roadmap; even if implemented with a large amount of development effort starting soon, it would be one of the later big changes to be added to Ethereum, well after a complete rollout of proof of stake, sharding and Verkle trees. In general, the path to implementation would look roughly as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Step up work on optimizing attestation aggregation"),". This is an important problem anyway, as the validator count is expected to increase. We need a more dedicated research and development effort on this problem regardless of what we do for any of the other steps."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Agree on general parameters"),": what size of super-committee are we targeting (or would the super-committee be the set of ",(0,o.kt)("em",{parentName:"li"},"all")," active validators, and we implement some different mechanism for controlling how many active validators there can be)? What level of overhead are we comfortable with, and what techniques would we use to reduce overhead?"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Research, agree on and specify an ideal consensus and fork choice mechanism for single-slot finality"),". This would combine together a BFT consensus mechanism (either Casper FFG or something more traditional) and a fork choice rule, where the fork choice rule would only be relevant in the case where ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mo",{parentName:"mrow"},"\u2265"),(0,o.kt)("mfrac",{parentName:"mrow"},(0,o.kt)("mn",{parentName:"mfrac"},"1"),(0,o.kt)("mn",{parentName:"mfrac"},"3"))),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ge \\frac{1}{3}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,o.kt)("span",{parentName:"span",className:"mfrac"},(0,o.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"3")))),(0,o.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,o.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,o.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,o.kt)("span",{parentName:"span"}))))),(0,o.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," of validators are offline."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Agree on and execute on an implementation path"),". This could be multi-step, where one step introduces the super-committee mechanism and then the next step adds the full new consensus and aggregation mechanism.")),(0,o.kt)("p",null,"The benefits at the end would be very significant, and the technology could improve over time to achieve other benefits not described here (eg. using the increased maximum validator count to decrease the minimum deposit size). Hence, it\u2019s worth starting deeper and more dedicated research and development on the technical challenges described in this post very soon."))}d.isMDXComponent=!0}}]);