"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[6504],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Pendie-nomics",s={unversionedId:"information/pendle/pendie-nomics",id:"information/pendle/pendie-nomics",title:"Pendie-nomics",description:"$PENDLE is currently a pure utility token, with governance functions to come after the protocol has matured sufficiently. It will eventually be key to the value accrual mechanics and management of the protocol.",source:"@site/docs/information/pendle/pendie-nomics.md",sourceDirName:"information/pendle",slug:"/information/pendle/pendie-nomics",permalink:"/docs/information/pendle/pendie-nomics",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarMain",previous:{title:"Market States",permalink:"/docs/information/dive-deeper/market-states"},next:{title:"Pe,P and Pa,P",permalink:"/docs/information/pendle/pxp"}},d={},p=[{value:"Emission Schedule and Allocation",id:"emission-schedule-and-allocation",level:2},{value:"Vesting Schedule",id:"vesting-schedule",level:2}],u={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pendie-nomics"},"Pendie-nomics"),(0,i.kt)("p",null,"$PENDLE is currently a pure utility token, with governance functions to come after the protocol has matured sufficiently. It will eventually be key to the value accrual mechanics and management of the protocol."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Items"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Descriptions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Token Ticker"),(0,i.kt)("td",{parentName:"tr",align:"center"},"PENDLE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Token Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ERC20")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Address (Ethereum)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x808507121b80c02388fad14726482e061b8da827")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Address (Avalanche)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0xfB98B335551a418cD0737375a2ea0ded62Ea213b")))),(0,i.kt)("h2",{id:"emission-schedule-and-allocation"},"Emission Schedule and Allocation"),(0,i.kt)("p",null,"Pendle adopts a hybrid inflation model."),(0,i.kt)("p",null,"The emission will begin with stable incentives of 1.2M PENDLE per week for the first 26 weeks, following which, liquidity incentives will decay by 1% a week until week 260. At this point, there will be a terminal inflation rate of 2% per annum based on the circulating token supply."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Weekly Emission Rate",src:n(8801).Z,width:"1258",height:"742"})),(0,i.kt)("p",null,"The maximum number of tokens in circulation by the end of year 2 is 251,061,124. Any subsequent increments will come from liquidity incentives. The following chart shows the breakdown of our token allocation at the end of year 2:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Weekly Emission Rate",src:n(2301).Z,width:"1409",height:"896"})),(0,i.kt)("p",null,"We have allocated the highest percentage to liquidity incentives as the team places a high priority on creating deep and liquid yield markets. The Pendle team will decide on the incentive distribution at the beginning and this will evolve into community governance as the protocol matures. "),(0,i.kt)("p",null,"The token distribution was also planned such that everyone can have a reasonable chance of participating and owning a percentage of the $PENDLE ecosystem."),(0,i.kt)("p",null,"Perpetual inflation will also help ensure that constant contribution to the protocol is required to maintain an ownership position."),(0,i.kt)("h2",{id:"vesting-schedule"},"Vesting Schedule"),(0,i.kt)("p",null,"All investors and team members are under a vesting schedule to align incentives. The table below shows the schedule for the various components:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Segment"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Vesting Schedule"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Team"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2-year vest",(0,i.kt)("br",null),"1-year cliff followed by quarterly release")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Investors & Advisors"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1-year vest",(0,i.kt)("br",null),"Quarterly release starting 3 months after LDB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Ecosystem Fund"),(0,i.kt)("td",{parentName:"tr",align:"center"},"50% no vest",(0,i.kt)("br",null),"50% unlocked after 1 year")))))}m.isMDXComponent=!0},8801:function(e,t,n){t.Z=n.p+"assets/images/tokenomics-1-28d093b747688887a66977c8d1f59377.png"},2301:function(e,t,n){t.Z=n.p+"assets/images/tokenomics-2-c379e3e1ea29a220bec7d6d01b57ec2e.png"}}]);