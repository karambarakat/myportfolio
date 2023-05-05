"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5905],{76761:(te,B,a)=>{a.r(B),a.d(B,{default:()=>ln});var t=a(67294),c=a(68547),m=a(96315),A=a(67109),L=a(85018),M=a(4585),D=a(29728),k=a(46273),f=a(7681),s=a(35961),v=a(67838),pe=a(49066),J=a(27361),$=a.n(J),ne=a(18721),oe=a.n(ne),Q=a(18446),re=a.n(Q),ue=a(11700),ae=a.n(ue),I=a(97132),Y=a(49656),K=a(45697),r=a.n(K),l=a(72735),p=a(11057),u=a(63985),T=a(47144),Z=a(18374),j=a(49386),q=a(26478),U=a(13588),w=a(71893),b=a(5002),N=a(28702),qe=a(70968);const _e=(0,w.default)(N.Flex)`
  border-radius: 50%;
  color: ${({theme:e,isActive:n})=>n?e.colors.primary600:e.colors.neutral600};
  height: ${({theme:e})=>e.spaces[8]};
  width: ${({theme:e})=>e.spaces[8]};

  svg {
    height: ${({theme:e})=>e.spaces[5]};
    width: ${({theme:e})=>e.spaces[5]};
  }
`;function me({isActive:e}){return t.createElement(_e,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",isActive:e},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}me.defaultProps={isActive:!1},me.propTypes={isActive:r().bool};const Oe=(0,w.default)(N.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,et=(0,w.default)(N.Flex)`
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${Oe} {
      display: block;
    }

    ${N.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`;function fe({component:e,dzName:n,index:o,isActive:i,isInDevelopmentMode:g,onClick:d}){const{modifiedData:E,removeComponentFromDynamicZone:R}=(0,U.Z)(),{schema:{displayName:h}}=$()(E,["components",e],{schema:{}}),O=x=>{x.stopPropagation(),R(n,o)};return t.createElement(et,{as:"button",alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:d},t.createElement(me,{isActive:i}),t.createElement(N.Box,{marginTop:1,maxWidth:"100%"},t.createElement(N.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},h)),g&&t.createElement(Oe,{as:"button",onClick:O,type:"button"},t.createElement(qe.default,null)))}fe.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},fe.propTypes={component:r().string,dzName:r().string.isRequired,index:r().number.isRequired,isActive:r().bool,isInDevelopmentMode:r().bool,onClick:r().func};const tt=fe,xe=w.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function ge({customRowComponent:e,component:n,isFromDynamicZone:o,isNestedInDZComponent:i,firstLoopComponentUid:g}){const{modifiedData:d}=(0,U.Z)(),{schema:{attributes:E}}=$()(d,["components",n],{schema:{attributes:[]}});return t.createElement(xe,{isChildOfDynamicZone:o,className:"component-row"},t.createElement("td",{colSpan:12},t.createElement(Be,{customRowComponent:e,items:E,targetUid:n,firstLoopComponentUid:g||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:g?n:null})))}ge.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},ge.propTypes={component:r().string,customRowComponent:r().func,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool};const Pe=ge;var nt=Object.defineProperty,ot=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,Le=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Re=(e,n,o)=>n in e?nt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,it=(e,n)=>{for(var o in n||(n={}))at.call(n,o)&&Re(e,o,n[o]);if(Le)for(var o of Le(n))lt.call(n,o)&&Re(e,o,n[o]);return e},st=(e,n)=>ot(e,rt(n));const ct=(0,w.default)(m.default)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,dt=(0,w.default)(s.x)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,pt=(0,w.default)(f.K)`
  width: 100%;
  overflow-x: auto;
`,ut=(0,w.default)(s.x)`
  padding-top: ${(0,c.pxToRem)(90)};
`,mt=(0,w.default)(f.K)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function ye({customRowComponent:e,components:n,addComponent:o,name:i,targetUid:g}){const{isInDevelopmentMode:d}=(0,U.Z)(),[E,R]=(0,t.useState)(0),{formatMessage:h}=(0,I.useIntl)(),O=y=>{E!==y&&R(y)},x=()=>{o(i)};return t.createElement(xe,{className:"dynamiczone-row",isFromDynamicZone:!0},t.createElement("td",{colSpan:12},t.createElement(dt,{paddingLeft:8},t.createElement(pt,{horizontal:!0,spacing:2},d&&t.createElement("button",{type:"button",onClick:x},t.createElement(mt,{spacing:1},t.createElement(ct,null),t.createElement(l.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},h({id:(0,b.Z)("button.component.add"),formatMessage:"Add a component"})))),n.map((y,C)=>t.createElement(tt,{key:y,dzName:i,index:C,component:y,isActive:E===C,isInDevelopmentMode:d,onClick:()=>O(C)})))),t.createElement(ut,null,n.map((y,C)=>{const P={customRowComponent:e,component:y};return t.createElement(s.x,{tabId:`${C}`,key:y,style:{display:E===C?"block":"none"}},t.createElement("table",null,t.createElement("tbody",null,t.createElement(Pe,st(it({},P),{isFromDynamicZone:!0,targetUid:g,key:y})))))}))))}ye.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ye.propTypes={addComponent:r().func,components:r().instanceOf(Array),customRowComponent:r().func,name:r().string,targetUid:r().string.isRequired};const ft=ye,gt=(0,w.default)(s.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`;var yt=Object.defineProperty,le=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Ze=(e,n,o)=>n in e?yt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,vt=(e,n)=>{for(var o in n||(n={}))Me.call(n,o)&&Ze(e,o,n[o]);if(le)for(var o of le(n))$e.call(n,o)&&Ze(e,o,n[o]);return e},ht=(e,n)=>{var o={};for(var i in e)Me.call(e,i)&&n.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&le)for(var i of le(e))n.indexOf(i)<0&&$e.call(e,i)&&(o[i]=e[i]);return o};const bt=(0,w.default)(s.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:n})=>e.colors[`${n}600`]};
  }
`,Et=(0,w.default)(s.x)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Ae=e=>{var n=e,{children:o,icon:i,color:g}=n,d=ht(n,["children","icon","color"]);return t.createElement(Et,vt({paddingBottom:4,paddingTop:4,as:"button",type:"button"},d),t.createElement(k.k,null,t.createElement(bt,{color:g,"aria-hidden":!0,background:`${g}200`},i),t.createElement(s.x,{paddingLeft:3},t.createElement(l.Z,{variant:"pi",fontWeight:"bold",textColor:`${g}600`},o))))};Ae.propTypes={color:r().string.isRequired,children:r().string.isRequired,icon:r().node.isRequired};const Tt=Ae;var Ct=Object.defineProperty,wt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,Ie=(e,n,o)=>n in e?Ct(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,ie=(e,n)=>{for(var o in n||(n={}))xt.call(n,o)&&Ie(e,o,n[o]);if(De)for(var o of De(n))Pt.call(n,o)&&Ie(e,o,n[o]);return e},ve=(e,n)=>wt(e,Ot(n));function he({addComponentToDZ:e,customRowComponent:n,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:g,isMain:d,isNestedInDZComponent:E,isSub:R,items:h,secondLoopComponentUid:O,targetUid:x}){const{formatMessage:y}=(0,I.useIntl)(),{trackUsage:C}=(0,c.useTracking)(),{isInDevelopmentMode:P,modifiedData:X,isInContentTypeView:V}=(0,U.Z)(),{onOpenModalAddField:W}=(0,q.Z)(),S=()=>{C("hasClickedCTBAddFieldBanner"),W({forTarget:o,targetUid:x})};return x?h.length===0&&d?t.createElement(p.i,{colCount:2,rowCount:2},t.createElement(u.h,null,t.createElement(T.Tr,null,t.createElement(Z.Th,null,t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.name",defaultMessage:"Name"}))),t.createElement(Z.Th,null,t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.type",defaultMessage:"Type"}))))),t.createElement(c.EmptyBodyTable,{action:t.createElement(D.z,{onClick:S,size:"L",startIcon:t.createElement(m.default,null),variant:"secondary"},y({id:(0,b.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:V?{id:(0,b.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,b.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):t.createElement(gt,null,t.createElement(s.x,ie({paddingLeft:6,paddingRight:d?6:0},d&&{style:{overflowX:"auto"}}),t.createElement("table",null,d&&t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.name",defaultMessage:"Name"}))),t.createElement("th",{colSpan:"2"},t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.type",defaultMessage:"Type"}))))),t.createElement("tbody",null,h.map(z=>{const{type:G}=z,_=n;return t.createElement(t.Fragment,{key:z.name},t.createElement(_,ve(ie({},z),{isNestedInDZComponent:E,targetUid:x,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:g,secondLoopComponentUid:O})),G==="component"&&t.createElement(Pe,ve(ie({},z),{customRowComponent:n,targetUid:x,isNestedInDZComponent:g,editTarget:o,firstLoopComponentUid:i})),G==="dynamiczone"&&t.createElement(ft,ve(ie({},z),{customRowComponent:n,addComponent:e,targetUid:x})))})))),d&&P&&t.createElement(j.c,{icon:t.createElement(m.default,null),onClick:S},y({id:(0,b.Z)(`form.button.add.field.to.${X.contentType?X.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})),R&&P&&t.createElement(Tt,{icon:t.createElement(m.default,null),onClick:S,color:g?"primary":"neutral"},y({id:(0,b.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):t.createElement(p.i,{colCount:2,rowCount:2},t.createElement(u.h,null,t.createElement(T.Tr,null,t.createElement(Z.Th,null,t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.name",defaultMessage:"Name"}))),t.createElement(Z.Th,null,t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.type",defaultMessage:"Type"}))))),t.createElement(c.EmptyBodyTable,{colSpan:2,content:{id:(0,b.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}he.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},he.propTypes={addComponentToDZ:r().func,customRowComponent:r().func,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool,isMain:r().bool,items:r().instanceOf(Array),secondLoopComponentUid:r().string,targetUid:r().string,isSub:r().bool};const Be=he;var je=a(12028),Lt=Object.defineProperty,Se=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,Fe=(e,n,o)=>n in e?Lt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,$t=(e,n)=>{for(var o in n||(n={}))Rt.call(n,o)&&Fe(e,o,n[o]);if(Se)for(var o of Se(n))Mt.call(n,o)&&Fe(e,o,n[o]);return e};function Zt(e){return t.createElement("svg",$t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),t.createElement("path",{d:"M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",fill:"#8E8EA9"}))}var At=a(20022),Dt=Object.defineProperty,ke=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable,Ne=(e,n,o)=>n in e?Dt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,jt=(e,n)=>{for(var o in n||(n={}))It.call(n,o)&&Ne(e,o,n[o]);if(ke)for(var o of ke(n))Bt.call(n,o)&&Ne(e,o,n[o]);return e};const St=(0,w.default)(s.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:n})=>e.colors[n]};
    display: block;
  }
`,Ft=w.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:n})=>e.colors[n]};
  }
`,Ve=e=>t.createElement(St,null,t.createElement(Ft,jt({width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ve.propTypes={color:r().string.isRequired};const kt=Ve,be=({content:e})=>ae()(e);be.defaultProps={content:null},be.propTypes={content:r().string};const Nt=be,Vt=(0,w.default)(s.x)`
  position: relative;
`;var zt=a(66848);const Ee=({type:e,customField:n,repeatable:o})=>{const{formatMessage:i}=(0,I.useIntl)();let g=e;return["integer","biginteger","float","decimal"].includes(e)?g="number":["string"].includes(e)&&(g="text"),n?t.createElement(l.Z,null,i({id:(0,b.Z)("attribute.customField"),defaultMessage:"Custom field"})):t.createElement(l.Z,null,i({id:(0,b.Z)(`attribute.${g}`),defaultMessage:e}),"\xA0",o&&i({id:(0,b.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};Ee.defaultProps={customField:null,repeatable:!1},Ee.propTypes={type:r().string.isRequired,customField:r().string,repeatable:r().bool};const Ut=Ee;var Wt=Object.defineProperty,ze=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Ue=(e,n,o)=>n in e?Wt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,We=(e,n)=>{for(var o in n||(n={}))Ht.call(n,o)&&Ue(e,o,n[o]);if(ze)for(var o of ze(n))Kt.call(n,o)&&Ue(e,o,n[o]);return e};function Te({configurable:e,customField:n,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:g,name:d,onClick:E,relation:R,repeatable:h,secondLoopComponentUid:O,target:x,targetUid:y,type:C}){const{contentTypes:P,isInDevelopmentMode:X,removeAttribute:V}=(0,U.Z)(),{formatMessage:W}=(0,I.useIntl)(),S=C==="relation"&&R.includes("morph"),z=["integer","biginteger","float","decimal"].includes(C)?"number":C,G=$()(P,[x],{}),_=$()(G,["schema","displayName"],""),ee=$()(G,"plugin"),we=x?"relation":z,se=()=>{S||e!==!1&&E(o,O||i||y,d,C,n)};let H;return O&&i?H=2:i?H=1:H=0,t.createElement(Vt,We({as:"tr"},(0,c.onRowClick)({fn:se,condition:X&&e&&!S})),t.createElement("td",{style:{position:"relative"}},H!==0&&t.createElement(kt,{color:g?"primary200":"neutral150"}),t.createElement(f.K,{paddingLeft:2,spacing:4,horizontal:!0},t.createElement(zt.Z,{type:we,customField:n}),t.createElement(l.Z,{fontWeight:"bold"},d))),t.createElement("td",null,x?t.createElement(l.Z,null,W({id:(0,b.Z)(`modelPage.attribute.${S?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",t.createElement("span",{style:{fontStyle:"italic"}},t.createElement(Nt,{content:_}),"\xA0",ee&&`(${W({id:(0,b.Z)("from"),defaultMessage:"from"})}: ${ee})`)):t.createElement(Ut,{type:C,customField:n,repeatable:h})),t.createElement("td",null,X?t.createElement(k.k,We({justifyContent:"flex-end"},c.stopPropagation),e?t.createElement(f.K,{horizontal:!0,spacing:1},!S&&t.createElement(je.h,{onClick:se,label:`${W({id:"app.utils.edit",defaultMessage:"Edit"})} ${d}`,noBorder:!0,icon:t.createElement(M.Z,null)}),t.createElement(je.h,{onClick:ce=>{ce.stopPropagation(),V(o,d,O||i||"")},label:`${W({id:"global.delete",defaultMessage:"Delete"})} ${d}`,noBorder:!0,icon:t.createElement(At.default,null)})):t.createElement(Zt,null)):t.createElement(s.x,{height:(0,c.pxToRem)(32)})))}Te.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},Te.propTypes={configurable:r().bool,customField:r().string,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,name:r().string.isRequired,onClick:r().func,relation:r().string,repeatable:r().bool,secondLoopComponentUid:r().string,target:r().string,targetUid:r().string,type:r().string};const Xt=(0,t.memo)(Te),Gt=e=>{let n;switch(e){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=e}return n};var Jt=a(98432);const Qt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ce=({disabled:e,isTemporary:n,isInContentTypeView:o,contentTypeKind:i,targetUid:g})=>{const{formatMessage:d}=(0,I.useIntl)(),{push:E}=(0,Y.useHistory)(),{collectionTypesConfigurations:R,componentsConfigurations:h,singleTypesConfigurations:O}=Qt,x=d({id:"content-type-builder.form.button.configure-view"});let y=R;const C=()=>(n||E(o?`/content-manager/collectionType/${g}/configurations/edit`:`/content-manager/components/${g}/configurations/edit`),!1);return o&&i==="singleType"&&(y=O),o||(y=h),t.createElement(c.CheckPermissions,{permissions:y},t.createElement(D.z,{startIcon:t.createElement(Jt.Z,null),variant:"tertiary",onClick:C,disabled:n||e},x))};Ce.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},Ce.propTypes={disabled:r().bool.isRequired,contentTypeKind:r().string,isInContentTypeView:r().bool,isTemporary:r().bool,targetUid:r().string};const Yt=(0,t.memo)(Ce);var qt=Object.defineProperty,_t=Object.defineProperties,en=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,Ke=(e,n,o)=>n in e?qt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,on=(e,n)=>{for(var o in n||(n={}))tn.call(n,o)&&Ke(e,o,n[o]);if(He)for(var o of He(n))nn.call(n,o)&&Ke(e,o,n[o]);return e},rn=(e,n)=>_t(e,en(n)),an=(e,n,o)=>new Promise((i,g)=>{var d=h=>{try{R(o.next(h))}catch(O){g(O)}},E=h=>{try{R(o.throw(h))}catch(O){g(O)}},R=h=>h.done?i(h.value):Promise.resolve(h.value).then(d,E);R((o=o.apply(e,n)).next())});const ln=()=>{const{initialData:e,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:i,submitData:g}=(0,U.Z)(),{formatMessage:d}=(0,I.useIntl)(),{trackUsage:E}=(0,c.useTracking)(),R=(0,Y.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:h,onOpenModalAddField:O,onOpenModalEditField:x,onOpenModalEditSchema:y,onOpenModalEditCustomField:C}=(0,q.Z)(),P=i?"contentType":"component",X=[P,"schema","attributes"],V=$()(n,[P,"uid"]),W=$()(n,[P,"isTemporary"],!1),S=$()(n,[P,"schema","kind"],null),z=$()(n,X,[]),G=oe()(e,[P,"plugin"]),_=!re()(n,e),ee=i?"contentType":"component",we=F=>{h({dynamicZoneTarget:F,targetUid:V})},se=(F,Xe,Ge,Je,Qe)=>an(void 0,null,function*(){const Ye=Gt(Je);Qe?C({forTarget:F,targetUid:Xe,attributeName:Ge,attributeType:Ye,customFieldUid:Qe}):x({forTarget:F,targetUid:Xe,attributeName:Ge,attributeType:Ye,step:Je==="component"?"2":null})});let H=$()(n,[P,"schema","displayName"],"");const ce=$()(n,[P,"schema","kind"],""),de=(R==null?void 0:R.params.currentUID)==="create-content-type";!H&&de&&(H=d({id:(0,b.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const sn=()=>{const F=ce||P;F==="collectionType"&&E("willEditNameOfContentType"),F==="singleType"&&E("willEditNameOfSingleType"),y({modalType:P,forTarget:P,targetUid:V,kind:F})};return t.createElement(t.Fragment,null,t.createElement(Y.Prompt,{message:d({id:(0,b.Z)("prompt.unsaved")}),when:_}),t.createElement(v.T,{id:"title",primaryAction:o&&t.createElement(f.K,{horizontal:!0,spacing:2},!de&&t.createElement(D.z,{startIcon:t.createElement(m.default,null),variant:"secondary",onClick:()=>{O({forTarget:ee,targetUid:V})}},d({id:(0,b.Z)("button.attributes.add.another")})),t.createElement(D.z,{startIcon:t.createElement(L.Z,null),onClick:()=>g(),type:"submit",disabled:re()(n,e)},d({id:"global.save",defaultMessage:"Save"}))),secondaryAction:o&&!G&&!de&&t.createElement(D.z,{startIcon:t.createElement(M.Z,null),variant:"tertiary",onClick:sn},d({id:"app.utils.edit",defaultMessage:"Edit"})),title:ae()(H),subtitle:d({id:(0,b.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:t.createElement(c.Link,{startIcon:t.createElement(A.Z,null),to:"/plugins/content-type-builder/"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(pe.D,null,t.createElement(f.K,{spacing:4},t.createElement(k.k,{justifyContent:"flex-end"},t.createElement(f.K,{horizontal:!0,spacing:2},t.createElement(Yt,{key:"link-to-cm-settings-view",targetUid:V,isTemporary:W,isInContentTypeView:i,contentTypeKind:S,disabled:de}))),t.createElement(s.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},t.createElement(Be,{items:z,customRowComponent:F=>t.createElement(Xt,rn(on({},F),{onClick:se})),addComponentToDZ:we,targetUid:V,editTarget:ee,isMain:!0})))))}},49066:(te,B,a)=>{a.d(B,{D:()=>A});var t=a(67294),c=a(45697),m=a(35961);const A=({children:L})=>t.createElement(m.x,{paddingLeft:10,paddingRight:10},L);A.propTypes={children:c.node.isRequired}},67838:(te,B,a)=>{a.d(B,{T:()=>I});var t=a(67294),c=a(71893),m=a(45697),A=a(72735),L=a(35961),M=a(46273);const D=r=>{const l=(0,t.useRef)(null),[p,u]=(0,t.useState)(!0),T=([Z])=>{u(Z.isIntersecting)};return(0,t.useEffect)(()=>{const Z=l.current,j=new IntersectionObserver(T,r);return Z&&j.observe(l.current),()=>{Z&&j.disconnect()}},[l,r]),[l,p]};var k=a(98402);const f=(r,l)=>{const p=(0,k.useCallbackRef)(l);(0,t.useLayoutEffect)(()=>{const u=new ResizeObserver(p);return Array.isArray(r)?r.forEach(T=>{T.current&&u.observe(T.current)}):r.current&&u.observe(r.current),()=>{u.disconnect()}},[r,p])};var s=Object.defineProperty,v=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,oe=(r,l,p)=>l in r?s(r,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):r[l]=p,Q=(r,l)=>{for(var p in l||(l={}))$.call(l,p)&&oe(r,p,l[p]);if(J)for(var p of J(l))ne.call(l,p)&&oe(r,p,l[p]);return r},re=(r,l)=>v(r,pe(l)),ue=(r,l)=>{var p={};for(var u in r)$.call(r,u)&&l.indexOf(u)<0&&(p[u]=r[u]);if(r!=null&&J)for(var u of J(r))l.indexOf(u)<0&&ne.call(r,u)&&(p[u]=r[u]);return p};const ae=()=>{const r=(0,t.useRef)(null),[l,p]=(0,t.useState)(null),[u,T]=D({root:null,rootMargin:"0px",threshold:0});return f(u,()=>{u.current&&p(u.current.getBoundingClientRect())}),(0,t.useEffect)(()=>{r.current&&p(r.current.getBoundingClientRect())},[r]),{containerRef:u,isVisible:T,baseHeaderLayoutRef:r,headerSize:l}},I=r=>{const{containerRef:l,isVisible:p,baseHeaderLayoutRef:u,headerSize:T}=ae();return t.createElement(t.Fragment,null,t.createElement("div",{style:{height:T==null?void 0:T.height},ref:l},p&&t.createElement(K,Q({ref:u},r))),!p&&t.createElement(K,re(Q({},r),{sticky:!0,width:T==null?void 0:T.width})))};I.displayName="HeaderLayout";const Y=(0,c.default)(L.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${r=>r.width}px;
  z-index: 4;
  box-shadow: ${({theme:r})=>r.shadows.tableShadow};
`,K=t.forwardRef((r,l)=>{var p=r,{navigationAction:u,primaryAction:T,secondaryAction:Z,subtitle:j,title:q,sticky:U,width:w}=p,b=ue(p,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const N=typeof j=="string";return U?t.createElement(Y,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:w,"data-strapi-header-sticky":!0},t.createElement(M.k,{justifyContent:"space-between"},t.createElement(M.k,null,u&&t.createElement(L.x,{paddingRight:3},u),t.createElement(L.x,null,t.createElement(A.Z,Q({variant:"beta",as:"h1"},b),q),N?t.createElement(A.Z,{variant:"pi",textColor:"neutral600"},j):j),Z?t.createElement(L.x,{paddingLeft:4},Z):null),t.createElement(M.k,null,T?t.createElement(L.x,{paddingLeft:2},T):void 0))):t.createElement(L.x,{ref:l,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0},u?t.createElement(L.x,{paddingBottom:2},u):null,t.createElement(M.k,{justifyContent:"space-between"},t.createElement(M.k,null,t.createElement(A.Z,Q({as:"h1",variant:"alpha"},b),q),Z?t.createElement(L.x,{paddingLeft:4},Z):null),T),N?t.createElement(A.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},j):j)});K.displayName="BaseHeaderLayout",K.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},K.propTypes={navigationAction:m.node,primaryAction:m.node,secondaryAction:m.node,sticky:m.bool,subtitle:m.oneOfType([m.string,m.node]),title:m.string.isRequired,width:m.number},I.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},I.propTypes={navigationAction:m.node,primaryAction:m.node,secondaryAction:m.node,subtitle:m.oneOfType([m.string,m.node]),title:m.string.isRequired}},67109:(te,B,a)=>{a.d(B,{Z:()=>k});var t=a(67294),c=Object.defineProperty,m=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,M=(f,s,v)=>s in f?c(f,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):f[s]=v,D=(f,s)=>{for(var v in s||(s={}))A.call(s,v)&&M(f,v,s[v]);if(m)for(var v of m(s))L.call(s,v)&&M(f,v,s[v]);return f};function k(f){return t.createElement("svg",D({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),t.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},98432:(te,B,a)=>{a.d(B,{Z:()=>k});var t=a(67294),c=Object.defineProperty,m=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,M=(f,s,v)=>s in f?c(f,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):f[s]=v,D=(f,s)=>{for(var v in s||(s={}))A.call(s,v)&&M(f,v,s[v]);if(m)for(var v of m(s))L.call(s,v)&&M(f,v,s[v]);return f};function k(f){return t.createElement("svg",D({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),t.createElement("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"}))}}}]);
