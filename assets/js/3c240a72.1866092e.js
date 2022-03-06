"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[3984],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return T},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var i=n(3117),r=n(102),a=n(7294),o=n(3905),l=n(2389),s=n(2609),u=n(6010),d="tabItem_LplD";function c(e){var t,n,r,o=e.lazy,l=e.block,c=e.defaultValue,p=e.values,h=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),g=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,a.useState)(b),O=w[0],x=w[1],E=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=g[h];null!=P&&P!==O&&y.some((function(e){return e.value===P}))&&x(P)}var N=function(e){var t=e.currentTarget,n=E.indexOf(t),i=y[n].value;i!==O&&(D(t),x(i),null!=h&&T(h,i))},Y=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=E.indexOf(e.currentTarget)+1;n=E[i]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},m)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Y,onFocus:N,onClick:N},r,{className:(0,u.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,l.Z)();return a.createElement(c,(0,i.Z)({key:String(t)},e))}function h(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}var m=["components"],f={sidebar_position:2},y="Yield Tokenization",v={unversionedId:"information/using-the-app/mint/yield-tokenization",id:"information/using-the-app/mint/yield-tokenization",title:"Yield Tokenization",description:"Ownership Token (OT)",source:"@site/docs/information/using-the-app/mint/yield-tokenization.md",sourceDirName:"information/using-the-app/mint",slug:"/information/using-the-app/mint/yield-tokenization",permalink:"/docs/information/using-the-app/mint/yield-tokenization",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebarMain",previous:{title:"Introduction",permalink:"/docs/information/using-the-app/mint/mint-intro"},next:{title:"Supported Assets",permalink:"/docs/information/using-the-app/mint/supported-assets"}},b={},k=[{value:"Ownership Token (OT)",id:"ownership-token-ot",level:2},{value:"Yield Token (YT)",id:"yield-token-yt",level:2},{value:"Exchange Index",id:"exchange-index",level:2}],g={toc:k};function T(e){var t=e.components,a=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yield-tokenization"},"Yield Tokenization"),(0,o.kt)("h2",{id:"ownership-token-ot"},"Ownership Token (OT)"),(0,o.kt)("p",null,"OT represents ownership of the underlying asset deposited for minting. For example, 1 OT-aUSDC represents 1 USDC staked in Aave. Upon expiry, you only need OT to redeem the underlying asset 1:1."),(0,o.kt)("p",null,"Since OT represents ownership of the asset, OT holders are also entitled to any incentives distributed by the asset protocol, such as xJOE farming incentives, as well as any airdrops."),(0,o.kt)("p",null,"OT price will always be at a lower price than the underlying, and its value will appreciate towards the value of the underlying asset as time passes. As such, buying OT is akin to buying the underlying asset at a discount, since the OT will eventually be redeemable for the underlying. "),(0,o.kt)("h2",{id:"yield-token-yt"},"Yield Token (YT)"),(0,o.kt)("p",null,"YT entitles the holder to the future yield of the underlying asset. For example, 1 YT-aUSDC represents the yield that 1 aUSDC will generate up to expiry."),(0,o.kt)("p",null,"The yield generated by the asset will be distributed in real-time to the YT holder, who can then ",(0,o.kt)("a",{parentName:"p",href:"/docs/information/using-the-app/claim"},"claim")," the yield at any time via the Dashboard."),(0,o.kt)("p",null,"As yield is accrued, the value of YT will decrease. Upon expiry, YT will be worth 0, as all the yield has been distributed to the respective holders."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Value of Token",src:n(9587).Z,width:"1484",height:"1068"})),(0,o.kt)("p",null,"If a user only mints OT and YT and does nothing else, it is functionally equivalent to holding the underlying asset - OT will return the underlying asset and YT will return the yield of the asset."),(0,o.kt)("p",null,"To capitalise on the split tokens, users must either trade to make a profit on price swings or provide liquidity in the OT and YT pools to earn additional APY."),(0,o.kt)("p",null,"Want to learn about how to make gains on Pendle? Go to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/information/pendle-guide/yield-trading/yield-trading-intro"},"Pendle Guide")," section for more info."),(0,o.kt)("h2",{id:"exchange-index"},"Exchange Index"),(0,o.kt)("p",null,"For most tokens, 1 OT does not represent 1 underlying and 1 YT does not represent the yield of 1 underlying due to the nature of yield-bearing assets."),(0,o.kt)("p",null,"These assets generate yield by altering the exchange index to their counterparts. For example, even if $TIME remains constant, 1 wMEMO will be worth more as time passes, since the exchange index is constantly increasing."),(0,o.kt)("p",null,"This adds another layer of complexity to the pricing of OT and YT. To eliminate this factor, we changed the ratio of deposited asset to OT and YT to match the exchange index."),(0,o.kt)("p",null,"As such, if the exchange rate was 1 wMEMO = 40 MEMO, 1 wMEMO would mint 40 OT and 40 YT. In other words, 1 OT and 1 YT represents 1 MEMO worth of wMEMO."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"There are some exceptions, however.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(p,{mdxType:"Tabs"},(0,o.kt)(h,{value:"aUSDC",label:"aUSDC",mdxType:"TabItem"},"Aave converts the yield of the asset into more aUSDC, such that 1 aUSDC = 1 USDC, so you earn yield by increasing your aUSDC balance, rather than the exchange index increasing."),(0,o.kt)(h,{value:"cDAI",label:"cDAI",mdxType:"TabItem"},"1 OT-cDAI represents 0.0214751 DAI while 1 YT-cDAI represents the yield of 0.0214751 DAI deposited in Compound.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Why is it like that? The devs did a boo-boo and didn't consider the exchange rate factor. cDAI appreciated and we were left with this mess.",(0,o.kt)("br",null),(0,o.kt)("br",null),"We fixed this with the other assets."),(0,o.kt)(h,{value:"LP Tokens",label:"LP Tokens",mdxType:"TabItem"},"Yield tokenization for LP tokens works similarly to a normal yield-bearing asset, but the math behind it is different due to the relationship between liquidity and LP tokens.",(0,o.kt)("br",null),(0,o.kt)("br",null),"The number of LP tokens will remain constant while liquidity will increase as swap fees are collected and added to the pool.",(0,o.kt)("br",null),(0,o.kt)("br",null),"OT represents ownership of the liquidity behind the LP tokens at the time of minting. YT represents entitlement to the yield generated by this liquidity.",(0,o.kt)("br",null),(0,o.kt)("br",null),"For example, at the start of the year, 10 LP represents 10 units of liquidity. After swaps occur, at the end of the year, 10 LP represents 11 units of liquidity. An OT holder will be able to redeem 10 units of liquidity in LP tokens, while a YT holder will have accrued 1 unit of liquidity in LP tokens.")))))}T.isMDXComponent=!0},9587:function(e,t,n){t.Z=n.p+"assets/images/value-of-token-5c4b9774831897c7da9c7d1f520562cc.png"}}]);