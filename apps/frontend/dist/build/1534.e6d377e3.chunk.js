(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[1534],{44174:B=>{function M(e,a,t,v){for(var g=-1,O=e==null?0:e.length;++g<O;){var s=e[g];a(v,s,t(s),e)}return v}B.exports=M},81119:(B,M,e)=>{var a=e(89881);function t(v,g,O,s){return a(v,function(y,E,u){g(s,y,O(y),u)}),s}B.exports=t},55189:(B,M,e)=>{var a=e(44174),t=e(81119),v=e(67206),g=e(1469);function O(s,y){return function(E,u){var p=g(E)?a:t,P=y?y():{};return p(E,s,v(u,2),P)}}B.exports=O},94654:(B,M,e)=>{var a=e(21078),t=e(35161);function v(g,O){return a(t(g,O),1)}B.exports=v},7739:(B,M,e)=>{var a=e(89465),t=e(55189),v=Object.prototype,g=v.hasOwnProperty,O=t(function(s,y,E){g.call(s,E)?s[E].push(y):a(s,E,[y])});B.exports=O},35161:(B,M,e)=>{var a=e(29932),t=e(67206),v=e(69199),g=e(1469);function O(s,y){var E=g(s)?a:v;return E(s,t(y,3))}B.exports=O},48734:(B,M,e)=>{"use strict";e.d(M,{U:()=>D,y:()=>p});var a=e(67294),t=e(45697),v=e(71893),g=e(72735),O=e(13819),s=e(41762),y=e(35961),E=e(46273);const u=({theme:n,expanded:i,variant:r,disabled:l,error:d})=>d?`1px solid ${n.colors.danger600} !important`:l?`1px solid ${n.colors.neutral150}`:i?`1px solid ${n.colors.primary600}`:r==="primary"?`1px solid ${n.colors.neutral0}`:`1px solid ${n.colors.neutral100}`,p=(0,v.default)(g.Z)``,P=(0,v.default)(y.x)`
  border: ${u};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:n})=>n.colors.primary600};

    ${p} {
      color: ${({theme:n,expanded:i})=>i?void 0:n.colors.primary700};
    }

    ${g.Z} {
      color: ${({theme:n,expanded:i})=>i?void 0:n.colors.primary600};
    }

    & > ${E.k} {
      background: ${({theme:n})=>n.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:n})=>n.colors.primary200};
    }
  }
`,D=({children:n,expanded:i,id:r,size:l,variant:d,disabled:f,error:_,hasErrorMessage:o,onToggle:c,toggle:m})=>{const b=(0,s.M)("accordion",r);return a.createElement(O.S.Provider,{value:{expanded:i,onToggle:c,toggle:m,id:b,size:l,variant:d,disabled:f}},a.createElement(P,{"data-strapi-expanded":i,disabled:f,"aria-disabled":f,expanded:i,hasRadius:!0,variant:d,error:_},n),_&&o&&a.createElement(y.x,{paddingTop:1},a.createElement(g.Z,{variant:"pi",textColor:"danger600"},_)))};D.defaultProps={disabled:!1,error:void 0,expanded:!1,hasErrorMessage:!0,id:void 0,toggle:void 0,size:"M",variant:"primary",onToggle:void 0},D.propTypes={children:t.node.isRequired,disabled:t.bool,error:t.string,expanded:t.bool,hasErrorMessage:t.bool,id:t.string,onToggle:t.func,size:t.oneOf(["S","M"]),toggle:t.func,variant:t.oneOf(["primary","secondary"])}},63081:(B,M,e)=>{"use strict";e.d(M,{v:()=>D});var a=e(67294),t=e(45697),v=e(13819),g=e(35961),O=Object.defineProperty,s=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,u=(n,i,r)=>i in n?O(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,p=(n,i)=>{for(var r in i||(i={}))y.call(i,r)&&u(n,r,i[r]);if(s)for(var r of s(i))E.call(i,r)&&u(n,r,i[r]);return n},P=(n,i)=>{var r={};for(var l in n)y.call(n,l)&&i.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&s)for(var l of s(n))i.indexOf(l)<0&&E.call(n,l)&&(r[l]=n[l]);return r};const D=n=>{var i=n,{children:r}=i,l=P(i,["children"]);const{expanded:d,id:f}=(0,v.A)();if(!d)return null;const _=`accordion-content-${f}`,o=`accordion-label-${f}`,c=`accordion-desc-${f}`;return a.createElement(g.x,p({role:"region",id:_,"aria-labelledby":o,"aria-describedby":c},l),r)};D.propTypes={children:t.node.isRequired}},13819:(B,M,e)=>{"use strict";e.d(M,{A:()=>v,S:()=>t});var a=e(67294);const t=(0,a.createContext)(),v=()=>(0,a.useContext)(t)},74756:(B,M,e)=>{"use strict";e.d(M,{B:()=>b});var a=e(67294),t=e(45697),v=e(12645),g=e(71893),O=e(39785),s=e(72735),y=e(48734),E=e(13819),u=e(46273),p=e(7681),P=e(52624);const D=({expanded:h,disabled:x,variant:C})=>{let T;return h?T="primary100":x?T="neutral150":C==="primary"?T="neutral0":T="neutral100",T};var n=e(25108),i=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(h,x,C)=>x in h?i(h,x,{enumerable:!0,configurable:!0,writable:!0,value:C}):h[x]=C,_=(h,x)=>{for(var C in x||(x={}))l.call(x,C)&&f(h,C,x[C]);if(r)for(var C of r(x))d.call(x,C)&&f(h,C,x[C]);return h},o=(h,x)=>{var C={};for(var T in h)l.call(h,T)&&x.indexOf(T)<0&&(C[T]=h[T]);if(h!=null&&r)for(var T of r(h))x.indexOf(T)<0&&d.call(h,T)&&(C[T]=h[T]);return C};const c=(0,g.default)(O.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:h,expanded:x})=>x?h.colors.primary600:h.colors.neutral500};
    }
  }
`,m=(0,g.default)(u.k)`
  min-height: ${({theme:h,size:x})=>h.sizes.accordions[x]};
  border-radius: ${({theme:h,expanded:x})=>x?`${h.borderRadius} ${h.borderRadius} 0 0`:h.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:h})=>h.colors.primary600};
      }
    }
  }
`,b=h=>{var x=h,{title:C,description:T,as:I,togglePosition:K,action:$}=x,W=o(x,["title","description","as","togglePosition","action"]);const U=(0,a.useRef)(null),{onToggle:S,toggle:w,expanded:R,id:L,size:A,variant:G,disabled:j}=(0,E.A)(),J=`accordion-content-${L}`,Z=`accordion-label-${L}`,X=`accordion-desc-${L}`,F=A==="M"?6:4,z=A==="M"?F:F-2,Y=D({expanded:R,disabled:j,variant:G}),Q={as:I,fontWeight:A==="S"?"bold":void 0,id:Z,textColor:R?"primary600":"neutral700",ellipsis:!0,variant:A==="M"?"delta":void 0},k=R?"primary600":"neutral600",q=R?"primary200":"neutral200",N=A==="M"?`${32/16}rem`:`${24/16}rem`,ee=()=>{j||(w&&!S?(n.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),w()):S())},H=a.createElement(u.k,{justifyContent:"center",borderRadius:"50%",height:N,width:N,transform:R?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,disabled:j,"aria-hidden":!0,as:"span",background:q,cursor:j?"not-allowed":"pointer",onClick:()=>{var V;return(V=U==null?void 0:U.current)==null?void 0:V.click()},shrink:0},a.createElement(P.J,{as:v.default,width:A==="M"?`${11/16}rem`:`${8/16}rem`,color:R?"primary600":"neutral600"}));return a.createElement(m,{paddingBottom:z,paddingLeft:F,paddingRight:F,paddingTop:z,background:Y,expanded:R,size:A,justifyContent:"space-between",cursor:j?"not-allowed":""},a.createElement(p.K,{horizontal:!0,spacing:3,flex:1,maxWidth:"100%"},K==="left"&&H,a.createElement(c,_({ref:U,onClick:ee,"aria-disabled":j,"aria-expanded":R,"aria-controls":J,"aria-labelledby":Z,"data-strapi-accordion-toggle":!0,expanded:R,type:"button",flex:1,minWidth:0},W),a.createElement(a.Fragment,null,a.createElement(y.y,_({},Q),C),T&&a.createElement(s.Z,{as:"p",id:X,textColor:k},T))),K==="right"&&a.createElement(p.K,{horizontal:!0,spacing:3},H,$),K==="left"&&$))};b.defaultProps={action:void 0,as:"span",description:void 0,variant:"primary",togglePosition:"right"},b.propTypes={action:t.node,as:t.string,description:t.string,title:t.string.isRequired,togglePosition:t.oneOf(["right","left"]),variant:t.oneOf(["primary","secondary"])}},2407:(B,M,e)=>{"use strict";e.d(M,{$:()=>d,O:()=>_});var a=e(67294),t=e(45697),v=e(71893),g=e(16405),O=e(72735),s=e(35961),y=e(46273),E=e(63237),u=Object.defineProperty,p=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,n=(o,c,m)=>c in o?u(o,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[c]=m,i=(o,c)=>{for(var m in c||(c={}))P.call(c,m)&&n(o,m,c[m]);if(p)for(var m of p(c))D.call(c,m)&&n(o,m,c[m]);return o},r=(o,c)=>{var m={};for(var b in o)P.call(o,b)&&c.indexOf(b)<0&&(m[b]=o[b]);if(o!=null&&p)for(var b of p(o))c.indexOf(b)<0&&D.call(o,b)&&(m[b]=o[b]);return m};const l=(0,v.default)(y.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
  :last-of-type ${s.x} {
    display: none;
  }
  :last-of-type ${O.Z} {
    color: ${({theme:o})=>o.colors.neutral800};
    font-weight: ${({theme:o})=>o.fontWeights.bold};
  }
`,d=({children:o})=>a.createElement(l,{inline:!0,as:"li"},a.createElement(O.Z,{variant:"pi",textColor:"neutral600"},o),a.createElement(s.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},a.createElement(g.default,null)));d.displayName="Crumb",d.propTypes={children:t.node.isRequired};const f=t.shape({type:t.oneOf([d])}),_=o=>{var c=o,{children:m,label:b}=c,h=r(c,["children","label"]);return a.createElement(y.k,i({},h),a.createElement(E.T,null,b),a.createElement("ol",{"aria-hidden":!0},m))};_.displayName="Breadcrumbs",_.propTypes={children:t.oneOfType([t.arrayOf(f),f]).isRequired,label:t.string.isRequired}},36989:(B,M,e)=>{"use strict";e.d(M,{Z:()=>E});var a=e(67294),t=e(45697),v=e(71893),g=e(35961),O=e(46273);const s=(0,v.default)(O.k)`
  & > * + * {
    margin-left: ${({theme:u})=>u.spaces[2]};
  }

  margin-left: ${({pullRight:u})=>u?"auto":void 0};
`,y=(0,v.default)(s)`
  flex-shrink: 0;
`,E=({startActions:u,endActions:p})=>u||p?a.createElement(g.x,{paddingLeft:10,paddingRight:10},a.createElement(g.x,{paddingBottom:4},a.createElement(O.k,{justifyContent:"space-between",alignItems:"flex-start"},u&&a.createElement(s,{wrap:"wrap"},u),p&&a.createElement(y,{pullRight:!0},p)))):null;E.defaultProps={endActions:void 0,startActions:void 0},E.propTypes={endActions:t.node,startActions:t.node}},53192:(B,M,e)=>{"use strict";e.d(M,{m:()=>i});var a=e(67294),t=e(71893),v=e(45697),g=e(11276),O=Object.defineProperty,s=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,u=(r,l,d)=>l in r?O(r,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[l]=d,p=(r,l)=>{for(var d in l||(l={}))y.call(l,d)&&u(r,d,l[d]);if(s)for(var d of s(l))E.call(l,d)&&u(r,d,l[d]);return r},P=(r,l)=>{var d={};for(var f in r)y.call(r,f)&&l.indexOf(f)<0&&(d[f]=r[f]);if(r!=null&&s)for(var f of s(r))l.indexOf(f)<0&&E.call(r,f)&&(d[f]=r[f]);return d};const D=`${232/16}rem`,n=(0,t.default)(g.r)`
  width: ${D};
  background: ${({theme:r})=>r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
  z-index: 1;
`,i=r=>{var l=r,{ariaLabel:d}=l,f=P(l,["ariaLabel"]);return a.createElement(n,p({"aria-label":d,as:"nav"},f))};i.propTypes={ariaLabel:v.string.isRequired}},38702:(B,M,e)=>{"use strict";e.d(M,{p:()=>l});var a=e(67294),t=e(45697),v=e(71893),g=e(97184),O=e(46273),s=e(72735),y=e(12028),E=e(35961),u=e(70004),p=e(49123),P=e(8509),D=e(41762);const n=d=>{const f=(0,a.useRef)();return(0,a.useEffect)(()=>{f.current=d}),f.current};var i=e(7801);const r=(0,v.default)(u.i)`
  width: ${24/16}rem;
  background-color: ${({theme:d})=>d.colors.neutral200};
`,l=({as:d,label:f,searchLabel:_,searchable:o,onChange:c,value:m,onClear:b,onSubmit:h,id:x})=>{const[C,T]=(0,a.useState)(!1),I=n(C),K=(0,D.M)("subnav-searchbar-clear",x),$=(0,a.useRef)(),W=(0,a.useRef)();(0,a.useEffect)(()=>{C&&$.current&&$.current.focus(),I&&!C&&W.current&&W.current.focus()},[C,I]);const U=()=>{T(L=>!L)},S=L=>{b(L),$.current.focus()},w=L=>{var A;((A=L.relatedTarget)==null?void 0:A.id)!==K&&T(!1)},R=L=>{L.key===i.y.ESCAPE&&T(!1)};return C?a.createElement(E.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},a.createElement(P.U,null,a.createElement(p.w,{name:"searchbar",value:m,onChange:c,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:R,ref:$,onBlur:w,onClear:S,onSubmit:h,clearLabel:"Clear",size:"S"},_)),a.createElement(E.x,{paddingLeft:2,paddingTop:4},a.createElement(r,null))):a.createElement(E.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},a.createElement(O.k,{justifyContent:"space-between",alignItems:"flex-start"},a.createElement(s.Z,{variant:"beta",as:d},f),o&&a.createElement(y.h,{ref:W,onClick:U,label:_,icon:a.createElement(g.default,null)})),a.createElement(E.x,{paddingTop:4},a.createElement(r,null)))};l.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},l.propTypes={as:t.string,id:t.string,label:t.string.isRequired,onChange:t.func,onClear:t.func,onSubmit:t.func,searchLabel:t.string,searchable:t.bool,value:t.string}},52305:(B,M,e)=>{"use strict";e.d(M,{E:()=>_});var a=e(67294),t=e(45697),v=e(71893),g=e(71818),O=e(35961),s=e(72735),y=e(46273),E=e(63507),u=Object.defineProperty,p=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,n=(o,c,m)=>c in o?u(o,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[c]=m,i=(o,c)=>{for(var m in c||(c={}))P.call(c,m)&&n(o,m,c[m]);if(p)for(var m of p(c))D.call(c,m)&&n(o,m,c[m]);return o},r=(o,c)=>{var m={};for(var b in o)P.call(o,b)&&c.indexOf(b)<0&&(m[b]=o[b]);if(o!=null&&p)for(var b of p(o))c.indexOf(b)<0&&D.call(o,b)&&(m[b]=o[b]);return m};const l=(0,v.default)(O.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:o})=>o.colors.neutral800};
  svg > * {
    fill: ${({theme:o})=>o.colors.neutral600};
  }

  &.active {
    ${({theme:o})=>`
      background-color: ${o.colors.primary100};
      border-right: 2px solid ${o.colors.primary600};
      svg > * {
        fill: ${o.colors.primary700};
      }
      ${s.Z} {
        color: ${o.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,d=(0,v.default)(g.default)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:o,$active:c})=>c?o.colors.primary600:o.colors.neutral600};
  }
`,f=v.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,_=a.forwardRef((o,c)=>{var m=o,{children:b,icon:h,withBullet:x,as:C,isSubSectionChild:T}=m,I=r(m,["children","icon","withBullet","as","isSubSectionChild"]);return a.createElement(l,i({as:C,icon:h,background:"neutral100",paddingLeft:T?9:7,paddingBottom:2,paddingTop:2,ref:c},I),a.createElement(y.k,null,h?a.createElement(f,null,h):a.createElement(d,null),a.createElement(O.x,{paddingLeft:2},a.createElement(s.Z,{as:"span"},b))),x&&a.createElement(O.x,{as:y.k,paddingRight:4},a.createElement(d,{$active:!0})))});_.displayName="SubNavLink",_.defaultProps={as:E.f,icon:null,isSubSectionChild:!1,withBullet:!1},_.propTypes={as:t.elementType,children:t.node.isRequired,icon:t.element,isSubSectionChild:t.bool,withBullet:t.bool}},29489:(B,M,e)=>{"use strict";e.d(M,{D:()=>r});var a=e(67294),t=e(45697),v=e(71893),g=e(35961),O=e(30190),s=e(7681),y=e(12645),E=e(72735),u=e(46273);const p=(0,v.default)(u.k)`
  border: none;
  padding: 0;
  background: transparent;
`,P=v.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:l})=>l?"0deg":"180deg"});
`,D=({collapsable:l,label:d,onClick:f,ariaExpanded:_,ariaControls:o})=>l?a.createElement(p,{as:"button",onClick:f,"aria-expanded":_,"aria-controls":o,textAlign:"left"},a.createElement(g.x,{paddingRight:1},a.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},d)),l&&a.createElement(P,{rotated:_},a.createElement(y.default,{"aria-hidden":!0}))):a.createElement(p,null,a.createElement(g.x,{paddingRight:1},a.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},d)));D.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},D.propTypes={ariaControls:t.string,ariaExpanded:t.bool,collapsable:t.bool,label:t.string.isRequired,onClick:t.func};var n=e(41762);const i=(0,v.default)(g.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }
`,r=({collapsable:l,label:d,badgeLabel:f,children:_,id:o})=>{const[c,m]=(0,a.useState)(!0),b=(0,n.M)("subnav-list",o),h=()=>{m(x=>!x)};return a.createElement(s.K,{spacing:1},a.createElement(i,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},a.createElement(g.x,{position:"relative",paddingRight:f?6:0},a.createElement(D,{onClick:h,ariaExpanded:c,ariaControls:b,collapsable:l,label:d}),f&&a.createElement(O.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},f))),(!l||c)&&a.createElement("ol",{id:b},a.Children.map(_,(x,C)=>a.createElement("li",{key:C},x))))};r.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},r.propTypes={badgeLabel:t.string,children:t.node.isRequired,collapsable:t.bool,id:t.string,label:t.string.isRequired}},34446:(B,M,e)=>{"use strict";e.d(M,{Z:()=>D});var a=e(67294),t=e(45697),v=e(7681),g=e(35961),O=Object.defineProperty,s=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,u=(n,i,r)=>i in n?O(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,p=(n,i)=>{for(var r in i||(i={}))y.call(i,r)&&u(n,r,i[r]);if(s)for(var r of s(i))E.call(i,r)&&u(n,r,i[r]);return n},P=(n,i)=>{var r={};for(var l in n)y.call(n,l)&&i.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&s)for(var l of s(n))i.indexOf(l)<0&&E.call(n,l)&&(r[l]=n[l]);return r};const D=n=>{var i=n,{children:r}=i,l=P(i,["children"]);return a.createElement(g.x,{paddingTop:2,paddingBottom:4},a.createElement(v.K,p({as:"ol",spacing:2},l),a.Children.map(r,(d,f)=>a.createElement("li",{key:f},d))))};D.propTypes={children:t.node.isRequired}},67109:(B,M,e)=>{"use strict";e.d(M,{Z:()=>E});var a=e(67294),t=Object.defineProperty,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,s=(u,p,P)=>p in u?t(u,p,{enumerable:!0,configurable:!0,writable:!0,value:P}):u[p]=P,y=(u,p)=>{for(var P in p||(p={}))g.call(p,P)&&s(u,P,p[P]);if(v)for(var P of v(p))O.call(p,P)&&s(u,P,p[P]);return u};function E(u){return a.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u),a.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}}]);
