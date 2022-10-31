"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[9514,4972],{6174:function(e,t,a){a.r(t),a.d(t,{default:function(){return ye}});var n=a(7294),r=a(6010),l=a(8839),i=a(5201),o=a(3361),c=a(4333),d=a(3936),s=a(5735),m=a(1440),u=a(5999),b=a(7736),p=a(4025);var v="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),r=a[0],l=a[1],i=(0,n.useRef)(!1),o=(0,b.Ct)(),c=o.startScroll,d=o.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(i.current?i.current=!1:n>=r?(d(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,v,t&&h),type:"button",onClick:a})}var E=a(6550),g=a(8922),k=a(2622),_=a(1327),C=a(7462);function I(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var N="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function Z(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:t},n.createElement(I,{className:S}))}var x=a(4689),y=a(3366),T=a(4001),L=Symbol("EmptyContext"),w=n.createContext(L);function M(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],i=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(w.Provider,{value:i},t)}var A=a(4348),B=a(2289),F=a(9960),P=a(2389),H=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function D(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,d=e.index,s=(0,y.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,k.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,P.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),g=(0,B.Mg)(v,l),_=(0,A.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=_.collapsed,N=_.setCollapsed,S=function(){var e=(0,n.useContext)(w);if(e===L)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=S.expandedItem,x=S.setExpandedItem,M=function(e){void 0===e&&(e=!I),x(e?null:d),N(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,T.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:E,collapsed:I,updateCollapsed:M}),(0,n.useEffect)((function(){b&&null!=Z&&Z!==d&&h&&N(!0)}),[b,Z,d,N,h]),n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},p)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(F.default,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),v?M(!1):(e.preventDefault(),M())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=f?f:"#":f},s),u),v&&b&&n.createElement(W,{categoryLabel:u,onClick:function(e){e.preventDefault(),M()}})),n.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(J,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:o+1})))}var R=a(3919),z=a(9471),U="menuExternalLink_NmtK",K=["item","onItemClick","activePath","level","index"];function V(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,d=(e.index,(0,y.Z)(e,K)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),v=(0,R.Z)(s);return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:m},n.createElement(F.default,(0,C.Z)({className:(0,r.Z)("menu__link",!v&&U,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},v&&{onClick:a?function(){return a(t)}:void 0},d),m,!v&&n.createElement(z.Z,null)))}var j="menuHtmlItem_M9Kj";function G(e){var t=e.item,a=e.level,l=e.index,o=t.value,c=t.defaultStyle,d=t.className;return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),c&&[j,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:o}})}var Y=["item"];function q(e){var t=e.item,a=(0,y.Z)(e,Y);switch(t.type){case"category":return n.createElement(D,(0,C.Z)({item:t},a));case"html":return n.createElement(G,(0,C.Z)({item:t},a));default:return n.createElement(V,(0,C.Z)({item:t},a))}}var O=["items"];function X(e){var t=e.items,a=(0,y.Z)(e,O);return n.createElement(M,null,t.map((function(e,t){return n.createElement(q,(0,C.Z)({key:t,item:e,index:t},a))})))}var J=(0,n.memo)(X),Q="menu_SIkG",$="menuWithAnnouncementBar_GW3s";function ee(e){var t=e.path,a=e.sidebar,l=e.className,o=function(){var e=(0,x.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Q,o&&$,l)},n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(J,{items:a,activePath:t,level:1})))}var te="sidebar_njMd",ae="sidebarWithHideableNavbar_wUlq",ne="sidebarHidden_VK0M",re="sidebarLogo_isFc";function le(e){var t=e.path,a=e.sidebar,l=e.onCollapse,i=e.isHidden,o=(0,k.L)(),c=o.navbar.hideOnScroll,d=o.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.Z)(te,c&&ae,i&&ne)},c&&n.createElement(_.Z,{tabIndex:-1,className:re}),n.createElement(ee,{path:t,sidebar:a}),d&&n.createElement(Z,{onClick:l}))}var ie=n.memo(le),oe=a(1790),ce=a(5912),de=function(e){var t=e.sidebar,a=e.path,l=(0,ce.e)();return n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(J,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function se(e){return n.createElement(oe.Zo,{component:de,props:e})}var me=n.memo(se);function ue(e){var t=(0,g.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ie,e),r&&n.createElement(me,e))}var be="expandButton_m80_",pe="expandButtonIcon_BlDH";function ve(e){var t=e.toggleSidebar;return n.createElement("div",{className:be,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(I,{className:pe}))}var he="docSidebarContainer_b6E3",fe="docSidebarContainerHidden_b3ry";function Ee(e){var t,a=e.children,r=(0,s.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function ge(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,o=(0,E.TH)().pathname,c=(0,n.useState)(!1),d=c[0],s=c[1],m=(0,n.useCallback)((function(){d&&s(!1),l((function(e){return!e}))}),[l,d]);return n.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,he,a&&fe),onTransitionEnd:function(e){e.currentTarget.classList.contains(he)&&a&&s(!0)}},n.createElement(Ee,null,n.createElement(ue,{sidebar:t,path:o,onCollapse:m,isHidden:d})),d&&n.createElement(ve,{toggleSidebar:m}))}var ke={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function _e(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,s.V)();return n.createElement("main",{className:(0,r.Z)(ke.docMainContainer,(t||!l)&&ke.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},a))}var Ce="docPage__5DB",Ie="docsWrapper_BCFX";function Ne(e){var t=e.children,a=(0,s.V)(),r=(0,n.useState)(!1),l=r[0],i=r[1];return n.createElement(m.Z,{wrapperClassName:Ie},n.createElement(f,null),n.createElement("div",{className:Ce},a&&n.createElement(ge,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),n.createElement(_e,{hiddenSidebarContainer:l},t)))}var Se=a(4972),Ze=a(197);function xe(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(Ze.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ye(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(Se.default,null);var o=a.docElement,m=a.sidebarName,u=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(xe,e),n.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.q,{version:t},n.createElement(s.b,{name:m,items:u},n.createElement(Ne,null,o)))))}},4972:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(5999),l=a(8839),i=a(1440);function o(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(i.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);