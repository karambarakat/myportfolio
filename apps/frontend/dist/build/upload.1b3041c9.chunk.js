"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3650],{17316:(q,w,t)=>{t.r(w),t.d(w,{default:()=>ya});var e=t(67294),A=t(49656),l=t(97132),D=t(15482),o=t(68547),B=t(185),T=t(71893),I=t(80129),d=t(17034),u=t(36989),h=t(49066),G=t(35961),L=t(70004),S=t(41451),R=t(63237),F=t(12028),W=t(72735),ce=t(74571),ne=t(46273),ye=t(4585),te=t(78114),he=t(29729),_=t(50738),s=t(33012),f=t(78971),v=t(11900),p=t(92585),j=t(24652),K=t(11357),J=t(27954),ue=t(45697),C=t.n(ue);const re=({pagination:r})=>e.createElement(G.x,{paddingTop:6},e.createElement(ne.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(o.PageSizeURLQuery,null),e.createElement(o.PaginationURLQuery,{pagination:r})));re.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},re.propTypes={pagination:C().shape({page:C().number,pageCount:C().number,pageSize:C().number,total:C().number})};var ae=t(7681),x=t(49826),ut=t(15537),k=t(29728),mt=t(20022),ft=t(2967),vt=(r,a,n)=>new Promise((g,c)=>{var P=m=>{try{E(n.next(m))}catch(y){c(y)}},M=m=>{try{E(n.throw(m))}catch(y){c(y)}},E=m=>m.done?g(m.value):Promise.resolve(m.value).then(P,M);E((n=n.apply(r,a)).next())});const Ie=({selected:r,onSuccess:a})=>{const{formatMessage:n}=(0,l.useIntl)(),[g,c]=(0,e.useState)(!1),{isLoading:P,remove:M}=(0,ft.K)(),E=()=>vt(void 0,null,function*(){yield M(r),a()});return e.createElement(e.Fragment,null,e.createElement(k.z,{variant:"danger-light",size:"S",startIcon:e.createElement(mt.default,null),onClick:()=>c(!0)},n({id:"global.delete",defaultMessage:"Delete"})),e.createElement(o.ConfirmDialog,{isConfirmButtonLoading:P,isOpen:g,onToggleDialog:()=>c(!1),onConfirm:E}))};Ie.propTypes={selected:C().arrayOf(x.pw,x.nx).isRequired,onSuccess:C().func.isRequired};var pt=t(32605),gt=t(80831),Et=t(41609),yt=t.n(Et),ht=t(11276),Ot=t(88655),Te=t(42866),Fe=t(59946),Pt=t(24969),Mt=t(36856),bt=t(64777),je=t(23724),oe=t(55994),O=t(57197),Lt=Object.defineProperty,Ct=Object.defineProperties,At=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,Ue=(r,a,n)=>a in r?Lt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,Ze=(r,a)=>{for(var n in a||(a={}))Bt.call(a,n)&&Ue(r,n,a[n]);if(we)for(var n of we(a))St.call(a,n)&&Ue(r,n,a[n]);return r},ze=(r,a)=>Ct(r,At(a));const Dt=()=>{const r=(0,o.useNotification)(),a=(0,je.useQueryClient)(),n=(0,O.IF)("actions/bulk-move"),g=({destinationFolderId:M,filesAndFolders:E})=>{const m=E.reduce((y,H)=>{const{id:U,type:Z}=H,X=Z==="asset"?"fileIds":"folderIds";return y[X]||(y[X]=[]),y[X].push(U),y},{});return O.be.post(n,ze(Ze({},m),{destinationFolderId:M}))},c=(0,je.useMutation)(g,{onSuccess(M){var E;const{data:{data:m}}=M;((E=m==null?void 0:m.files)==null?void 0:E.length)>0&&(a.refetchQueries([oe.Z,"assets"],{active:!0}),a.refetchQueries([oe.Z,"asset-count"],{active:!0})),a.refetchQueries([oe.Z,"folders"],{active:!0}),r({type:"success",message:{id:(0,O.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}}),P=(M,E)=>c.mutateAsync({destinationFolderId:M,filesAndFolders:E});return ze(Ze({},c),{move:P})};var Rt=t(66951),xt=t(20796),It=(r,a,n)=>new Promise((g,c)=>{var P=m=>{try{E(n.next(m))}catch(y){c(y)}},M=m=>{try{E(n.throw(m))}catch(y){c(y)}},E=m=>m.done?g(m.value):Promise.resolve(m.value).then(P,M);E((n=n.apply(r,a)).next())});const Oe=({onClose:r,selected:a,currentFolder:n})=>{const{formatMessage:g}=(0,l.useIntl)(),{data:c,isLoading:P}=(0,xt.v)(),{move:M}=Dt();if(!c)return null;const E=(H,U)=>It(void 0,[H,U],function*(Z,{setErrors:X}){try{yield M(Z.destination.value,a),r()}catch(Ce){const le=(0,o.getAPIInnerErrors)(Ce,{getTrad:O.OB}),N=Object.entries(le).reduce((Y,[pe,b])=>(Y[pe||"destination"]=b.defaultMessage,Y),{});yt()(N)||X(N)}}),m=()=>{r()};if(P)return e.createElement(Te.P,{onClose:m,labelledBy:"title"},e.createElement(Fe.f,null,e.createElement(ne.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(Ot.a,null,g({id:(0,O.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const y={destination:{value:(n==null?void 0:n.id)||"",label:(n==null?void 0:n.name)||c[0].label}};return e.createElement(Te.P,{onClose:m,labelledBy:"title"},e.createElement(gt.Formik,{validateOnChange:!1,onSubmit:E,initialValues:y},({values:H,errors:U,setFieldValue:Z})=>e.createElement(o.Form,{noValidate:!0},e.createElement(Pt.x,null,e.createElement(W.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},g({id:(0,O.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(Fe.f,null,e.createElement(ht.r,{gap:4},e.createElement(ce.P,{xs:12,col:12},e.createElement(ae.K,{spacing:1},e.createElement(bt.Q,{htmlFor:"folder-destination"},g({id:(0,O.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(Rt.Z,{options:c,onChange:X=>{Z("destination",X)},defaultValue:H.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:U==null?void 0:U.destination,ariaErrorMessage:"destination-error"}),U.destination&&e.createElement(W.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},U.destination))))),e.createElement(Mt.m,{startActions:e.createElement(k.z,{onClick:m,variant:"tertiary",name:"cancel"},g({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(k.z,{type:"submit",loading:P},g({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};Oe.defaultProps={currentFolder:void 0},Oe.propTypes={onClose:C().func.isRequired,currentFolder:x.nx,selected:C().arrayOf(x.nx,x.pw).isRequired};const Pe=({selected:r,onSuccess:a,currentFolder:n})=>{const{formatMessage:g}=(0,l.useIntl)(),[c,P]=(0,e.useState)(!1),M=()=>{P(!1),a()};return e.createElement(e.Fragment,null,e.createElement(k.z,{variant:"secondary",size:"S",startIcon:e.createElement(pt.Z,null),onClick:()=>P(!0)},g({id:"global.move",defaultMessage:"Move"})),c&&e.createElement(Oe,{currentFolder:n,onClose:M,selected:r}))};Pe.defaultProps={currentFolder:void 0},Pe.propTypes={onSuccess:C().func.isRequired,currentFolder:x.nx,selected:C().arrayOf(x.pw,x.nx).isRequired};const Me=({selected:r,onSuccess:a,currentFolder:n})=>{const{formatMessage:g}=(0,l.useIntl)();return e.createElement(ae.K,{horizontal:!0,spacing:2,paddingBottom:5},e.createElement(W.Z,{variant:"epsilon",textColor:"neutral600"},g({id:(0,ut.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:r.filter(({type:c})=>c==="folder").length,numberAssets:r.filter(({type:c})=>c==="asset").length})),e.createElement(Ie,{selected:r,onSuccess:a}),e.createElement(Pe,{currentFolder:n,selected:r,onSuccess:a}))};Me.defaultProps={currentFolder:void 0},Me.propTypes={onSuccess:C().func.isRequired,currentFolder:x.nx,selected:C().arrayOf(x.pw,x.nx).isRequired};var Tt=t(65169),be=t(96315),Ft=t(70088),jt=Object.defineProperty,wt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,Ne=(r,a,n)=>a in r?jt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,Ht=(r,a)=>{for(var n in a||(a={}))Zt.call(a,n)&&Ne(r,n,a[n]);if(He)for(var n of He(a))zt.call(a,n)&&Ne(r,n,a[n]);return r},Nt=(r,a)=>wt(r,Ut(a));const Wt=({isFiltering:r,canCreate:a,canRead:n})=>r?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:n?a?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},We=({canCreate:r,isFiltering:a,canRead:n,onActionClick:g})=>{const{formatMessage:c}=(0,l.useIntl)(),P=Wt({isFiltering:a,canCreate:r,canRead:n});return e.createElement(Ft.i,{icon:n?null:Tt.default,action:r&&!a&&e.createElement(k.z,{variant:"secondary",startIcon:e.createElement(be.default,null),onClick:g},c({id:(0,O.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:c(Nt(Ht({},P),{id:(0,O.OB)(P.id)}))})};We.propTypes={canCreate:C().bool.isRequired,canRead:C().bool.isRequired,isFiltering:C().bool.isRequired,onActionClick:C().func.isRequired};var me=t(98101),Kt=t(89597),Qt=t(51386),Vt=t(45219),Ke=t(97581);const $t=()=>{var r;const a=(0,e.useRef)(null),[n,g]=(0,e.useState)(!1),{formatMessage:c}=(0,l.useIntl)(),{trackUsage:P}=(0,o.useTracking)(),[{query:M},E]=(0,o.useQueryParams)(),m=((r=M==null?void 0:M.filters)==null?void 0:r.$and)||[],y=()=>g(Z=>!Z),H=Z=>{E({filters:{$and:Z},page:1})},U=Z=>{P("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(Z[Z.length-1])[0]}),E({filters:{$and:Z},page:1})};return e.createElement(e.Fragment,null,e.createElement(k.z,{variant:"tertiary",ref:a,startIcon:e.createElement(Kt.Z,null),onClick:y,size:"S"},c({id:"app.utils.filters",defaultMessage:"Filters"})),n&&e.createElement(Vt.Z,{displayedFilters:Ke.Z,filters:m,onSubmit:U,onToggle:y,source:a}),e.createElement(Qt.Z,{appliedFilters:m,filtersSchema:Ke.Z,onRemoveFilter:H}))};var Gt=t(67838),Jt=t(23620),Xt=t(67109),Yt=t(67851),kt=Object.defineProperty,qt=Object.defineProperties,_t=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,ea=Object.prototype.hasOwnProperty,ta=Object.prototype.propertyIsEnumerable,Ve=(r,a,n)=>a in r?kt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,aa=(r,a)=>{for(var n in a||(a={}))ea.call(a,n)&&Ve(r,n,a[n]);if(Qe)for(var n of Qe(a))ta.call(a,n)&&Ve(r,n,a[n]);return r},na=(r,a)=>qt(r,_t(a));const Le=({breadcrumbs:r,canCreate:a,folder:n,onToggleEditFolderDialog:g,onToggleUploadAssetDialog:c})=>{var P,M;const{formatMessage:E}=(0,l.useIntl)(),{pathname:m}=(0,A.useLocation)(),[{query:y}]=(0,o.useQueryParams)(),H=na(aa({},y),{folder:(M=(P=n==null?void 0:n.parent)==null?void 0:P.id)!=null?M:void 0});return e.createElement(Gt.T,{title:E({id:(0,O.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:r&&n&&e.createElement(Yt.O,{as:"nav",label:E({id:(0,O.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:r,currentFolderId:n==null?void 0:n.id}),navigationAction:n&&e.createElement(Jt.r,{startIcon:e.createElement(Xt.Z,null),to:`${m}?${(0,I.stringify)(H,{encode:!1})}`},E({id:(0,O.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:a&&e.createElement(ae.K,{horizontal:!0,spacing:2},e.createElement(k.z,{startIcon:e.createElement(be.default,null),variant:"secondary",onClick:g},E({id:(0,O.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(k.z,{startIcon:e.createElement(be.default,null),onClick:c},E({id:(0,O.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};Le.defaultProps={breadcrumbs:!1,folder:null},Le.propTypes={breadcrumbs:C().oneOfType([x.Fv,C().bool]),canCreate:C().bool.isRequired,folder:x.nx,onToggleEditFolderDialog:C().func.isRequired,onToggleUploadAssetDialog:C().func.isRequired};var ra=t(73817),oa=t(44466),la=t(31817),sa=t(42047),ia=t(16838),da=Object.defineProperty,ca=Object.defineProperties,ua=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,fa=Object.prototype.propertyIsEnumerable,Ge=(r,a,n)=>a in r?da(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,fe=(r,a)=>{for(var n in a||(a={}))ma.call(a,n)&&Ge(r,n,a[n]);if($e)for(var n of $e(a))fa.call(a,n)&&Ge(r,n,a[n]);return r},ve=(r,a)=>ca(r,ua(a));const va=(0,T.default)(G.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Je=(0,T.default)(W.Z)`
  max-width: 100%;
`,Xe=(0,T.default)(G.x)`
  svg {
    path {
      fill: ${({theme:r})=>r.colors.neutral500};
    }
  }
`,pa=()=>{var r,a,n,g,c,P,M,E;const{push:m}=(0,A.useHistory)(),{canRead:y,canCreate:H,canUpdate:U,canCopyLink:Z,canDownload:X,isLoading:Ce}=(0,la.y)(),le=(0,e.useRef)(),{formatMessage:N}=(0,l.useIntl)(),{pathname:Y}=(0,A.useLocation)(),{trackUsage:pe}=(0,o.useTracking)(),[{query:b},Ae]=(0,o.useQueryParams)(),se=Boolean(b._q||b.filters),[ha,Oa]=(0,o.usePersistentState)(x.uf.view,x.Uk.GRID),ee=ha===x.Uk.GRID,{data:z,isLoading:Pa,errors:Ma}=(0,ra.L)({skipWhen:!y,query:b}),{data:Ye,isLoading:ba,errors:La}=(0,oa.j)({enabled:y&&((r=z==null?void 0:z.pagination)==null?void 0:r.page)===1&&!(0,O.rV)(b),query:b}),{data:Be,isLoading:ke,error:qe}=(0,sa.W)(b==null?void 0:b.folder,{enabled:y&&!!(b!=null&&b.folder)});((a=qe==null?void 0:qe.response)==null?void 0:a.status)===404&&m(Y);const ie=(n=Ye==null?void 0:Ye.map(i=>ve(fe({},i),{type:"folder",folderURL:(0,O.Km)(Y,b,i.id),isSelectable:U})))!=null?n:[],Q=(ie==null?void 0:ie.length)||0,de=((g=z==null?void 0:z.results)==null?void 0:g.map(i=>ve(fe({},i),{type:"asset",isSelectable:U})))||[],V=(c=de==null?void 0:de.length)!=null?c:0,Ca=(P=z==null?void 0:z.pagination)==null?void 0:P.total,_e=ke||ba||Ce||Pa,[Aa,Ba]=(0,e.useState)(!1),[Sa,et]=(0,e.useState)(!1),[tt,Se]=(0,e.useState)(void 0),[De,at]=(0,e.useState)(void 0),[$,{selectOne:ge,selectAll:nt}]=(0,o.useSelectionState)(["type","id"],[]),rt=($==null?void 0:$.length)>0&&($==null?void 0:$.length)!==V+Q,Re=()=>Ba(i=>!i),ot=({created:i=!1}={})=>{i&&(b==null?void 0:b.page)!=="1"&&Ae(ve(fe({},b),{page:1})),et(Ee=>!Ee)},lt=(i,Ee)=>{i.target.checked&&pe("didSelectAllMediaLibraryElements"),nt(Ee)},st=i=>{pe("didSortMediaLibraryElements",{location:"upload",sort:i}),Ae({sort:i})},it=i=>{at(i),et(!0)},Da=i=>{at(null),ot(i),le.current&&le.current.focus()},dt=i=>{i===V&&z.pagination.page===z.pagination.pageCount&&z.pagination.page>1&&Ae(ve(fe({},b),{page:z.pagination.page-1}))},Ra=()=>{nt(),dt($.length)};return(0,o.useFocusWhenNavigate)(),e.createElement(d.A,null,e.createElement(B.o,{"aria-busy":_e},e.createElement(Le,{breadcrumbs:!ke&&(0,O.M4)(Be,{pathname:Y,query:b}),canCreate:H,onToggleEditFolderDialog:ot,onToggleUploadAssetDialog:Re,folder:Be}),e.createElement(u.Z,{startActions:e.createElement(e.Fragment,null,U&&ee&&(V>0||Q>0)&&e.createElement(va,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(S.C,{"aria-label":N({id:(0,O.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:rt,value:(V>0||Q>0)&&$.length===V+Q,onChange:i=>lt(i,[...de,...ie])})),y&&ee&&e.createElement(J.Z,{onChangeSort:st}),y&&e.createElement($t,null)),endActions:e.createElement(e.Fragment,null,e.createElement(o.CheckPermissions,{permissions:ia.Z.configureView},e.createElement(Xe,{paddingTop:1,paddingBottom:1},e.createElement(F.h,{forwardedAs:A.Link,to:{pathname:`${Y}/configuration`,search:(0,I.stringify)(b,{encode:!1})},icon:e.createElement(te.Z,null),label:N({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Xe,{paddingTop:1,paddingBottom:1},e.createElement(F.h,{icon:ee?e.createElement(_.Z,null):e.createElement(he.Z,null),label:N(ee?{id:"view-switch.list",defaultMessage:"List View"}:{id:"view-switch.grid",defaultMessage:"Grid View"}),onClick:()=>Oa(ee?x.Uk.LIST:x.Uk.GRID)})),e.createElement(o.SearchURLQuery,{label:N({id:(0,O.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(h.D,null,$.length>0&&e.createElement(Me,{currentFolder:Be,selected:$,onSuccess:Ra}),_e&&e.createElement(o.LoadingIndicatorPage,null),(Ma||La)&&e.createElement(o.AnErrorOccurred,null),Q===0&&V===0&&e.createElement(We,{canCreate:H,canRead:y,isFiltering:se,onActionClick:Re}),y&&!ee&&(V>0||Q>0)&&e.createElement(K.b,{assetCount:V,folderCount:Q,indeterminate:rt,onChangeSort:st,onChangeFolder:i=>m((0,O.Km)(Y,b,i)),onEditAsset:Se,onEditFolder:it,onSelectOne:ge,onSelectAll:lt,rows:[...ie,...de],selected:$,shouldDisableBulkSelect:!U,sortQuery:(M=b==null?void 0:b.sort)!=null?M:""}),y&&ee&&e.createElement(e.Fragment,null,Q>0&&e.createElement(j.a,{title:(se&&V>0||!se)&&N({id:(0,O.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:Q})||""},ie.map(i=>{const xa=!!$.filter(({type:xe})=>xe==="folder").find(xe=>xe.id===i.id),ct=(0,O.Km)(Y,b,i==null?void 0:i.id);return e.createElement(ce.P,{col:3,key:`folder-${i.id}`},e.createElement(me.Ac,{ref:De&&i.id===De.id?le:void 0,ariaLabel:i.name,id:`folder-${i.id}`,to:ct,startAction:ge&&i.isSelectable?e.createElement(me.MM,{"data-testid":`folder-checkbox-${i.id}`,value:xa,onChange:()=>ge(i)}):null,cardActions:e.createElement(F.h,{icon:e.createElement(ye.Z,null),"aria-label":N({id:(0,O.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>it(i)})},e.createElement(me.Bu,null,e.createElement(me.u6,{to:ct},e.createElement(ne.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(Je,{fontWeight:"semiBold",ellipsis:!0},i.name,e.createElement(R.T,null,":")),e.createElement(Je,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},N({id:(0,O.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:i.children.count,filesCount:i.files.count})))))))})),V>0&&Q>0&&e.createElement(G.x,{paddingTop:6,paddingBottom:4},e.createElement(L.i,null)),V>0&&e.createElement(p.r,{assets:de,onEditAsset:Se,onSelectAsset:ge,selectedAssets:$.filter(({type:i})=>i==="asset"),title:(!se||se&&Q>0)&&((E=z==null?void 0:z.pagination)==null?void 0:E.page)===1&&N({id:(0,O.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:Ca})||""})),(z==null?void 0:z.pagination)&&e.createElement(re,{pagination:z.pagination}))),Aa&&e.createElement(s.x,{onClose:Re,trackedLocation:"upload",folderId:b==null?void 0:b.folder}),Sa&&e.createElement(f.f,{onClose:Da,folder:De,parentFolderId:b==null?void 0:b.folder,location:"upload"}),tt&&e.createElement(v.s,{onClose:i=>{i===null&&dt(1),Se(void 0)},asset:tt,canUpdate:U,canCopyLink:Z,canDownload:X,trackedLocation:"upload"}))};var ga=t(60862);const Ea=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),ya=()=>{const{config:{isLoading:r,isError:a,data:n}}=(0,ga.Z)(),[{rawQuery:g},c]=(0,o.useQueryParams)(),{formatMessage:P}=(0,l.useIntl)(),M=P({id:(0,O.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{r||a||g||c({sort:n.sort,page:1,pageSize:n.pageSize})},[r,a,n,g,c]),(0,o.useFocusWhenNavigate)(),e.createElement(B.o,{"aria-busy":r},e.createElement(D.Helmet,{title:M}),r&&e.createElement(o.LoadingIndicatorPage,null),g?e.createElement(e.Suspense,{fallback:e.createElement(o.LoadingIndicatorPage,null)},e.createElement(A.Switch,null,e.createElement(A.Route,{exact:!0,path:`/plugins/${oe.Z}`,component:pa}),e.createElement(A.Route,{exact:!0,path:`/plugins/${oe.Z}/configuration`,render:()=>e.createElement(Ea,{config:n})}))):null)}},36989:(q,w,t)=>{t.d(w,{Z:()=>I});var e=t(67294),A=t(45697),l=t(71893),D=t(35961),o=t(46273);const B=(0,l.default)(o.k)`
  & > * + * {
    margin-left: ${({theme:d})=>d.spaces[2]};
  }

  margin-left: ${({pullRight:d})=>d?"auto":void 0};
`,T=(0,l.default)(B)`
  flex-shrink: 0;
`,I=({startActions:d,endActions:u})=>d||u?e.createElement(D.x,{paddingLeft:10,paddingRight:10},e.createElement(D.x,{paddingBottom:4},e.createElement(o.k,{justifyContent:"space-between",alignItems:"flex-start"},d&&e.createElement(B,{wrap:"wrap"},d),u&&e.createElement(T,{pullRight:!0},u)))):null;I.defaultProps={endActions:void 0,startActions:void 0},I.propTypes={endActions:A.node,startActions:A.node}},49066:(q,w,t)=>{t.d(w,{D:()=>D});var e=t(67294),A=t(45697),l=t(35961);const D=({children:o})=>e.createElement(l.x,{paddingLeft:10,paddingRight:10},o);D.propTypes={children:A.node.isRequired}},67838:(q,w,t)=>{t.d(w,{T:()=>te});var e=t(67294),A=t(71893),l=t(45697),D=t(72735),o=t(35961),B=t(46273);const T=s=>{const f=(0,e.useRef)(null),[v,p]=(0,e.useState)(!0),j=([K])=>{p(K.isIntersecting)};return(0,e.useEffect)(()=>{const K=f.current,J=new IntersectionObserver(j,s);return K&&J.observe(f.current),()=>{K&&J.disconnect()}},[f,s]),[f,v]};var I=t(98402);const d=(s,f)=>{const v=(0,I.useCallbackRef)(f);(0,e.useLayoutEffect)(()=>{const p=new ResizeObserver(v);return Array.isArray(s)?s.forEach(j=>{j.current&&p.observe(j.current)}):s.current&&p.observe(s.current),()=>{p.disconnect()}},[s,v])};var u=Object.defineProperty,h=Object.defineProperties,G=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,F=(s,f,v)=>f in s?u(s,f,{enumerable:!0,configurable:!0,writable:!0,value:v}):s[f]=v,W=(s,f)=>{for(var v in f||(f={}))S.call(f,v)&&F(s,v,f[v]);if(L)for(var v of L(f))R.call(f,v)&&F(s,v,f[v]);return s},ce=(s,f)=>h(s,G(f)),ne=(s,f)=>{var v={};for(var p in s)S.call(s,p)&&f.indexOf(p)<0&&(v[p]=s[p]);if(s!=null&&L)for(var p of L(s))f.indexOf(p)<0&&R.call(s,p)&&(v[p]=s[p]);return v};const ye=()=>{const s=(0,e.useRef)(null),[f,v]=(0,e.useState)(null),[p,j]=T({root:null,rootMargin:"0px",threshold:0});return d(p,()=>{p.current&&v(p.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{s.current&&v(s.current.getBoundingClientRect())},[s]),{containerRef:p,isVisible:j,baseHeaderLayoutRef:s,headerSize:f}},te=s=>{const{containerRef:f,isVisible:v,baseHeaderLayoutRef:p,headerSize:j}=ye();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:j==null?void 0:j.height},ref:f},v&&e.createElement(_,W({ref:p},s))),!v&&e.createElement(_,ce(W({},s),{sticky:!0,width:j==null?void 0:j.width})))};te.displayName="HeaderLayout";const he=(0,A.default)(o.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${s=>s.width}px;
  z-index: 4;
  box-shadow: ${({theme:s})=>s.shadows.tableShadow};
`,_=e.forwardRef((s,f)=>{var v=s,{navigationAction:p,primaryAction:j,secondaryAction:K,subtitle:J,title:ue,sticky:C,width:re}=v,ae=ne(v,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const x=typeof J=="string";return C?e.createElement(he,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:re,"data-strapi-header-sticky":!0},e.createElement(B.k,{justifyContent:"space-between"},e.createElement(B.k,null,p&&e.createElement(o.x,{paddingRight:3},p),e.createElement(o.x,null,e.createElement(D.Z,W({variant:"beta",as:"h1"},ae),ue),x?e.createElement(D.Z,{variant:"pi",textColor:"neutral600"},J):J),K?e.createElement(o.x,{paddingLeft:4},K):null),e.createElement(B.k,null,j?e.createElement(o.x,{paddingLeft:2},j):void 0))):e.createElement(o.x,{ref:f,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:p?6:8,background:"neutral100","data-strapi-header":!0},p?e.createElement(o.x,{paddingBottom:2},p):null,e.createElement(B.k,{justifyContent:"space-between"},e.createElement(B.k,null,e.createElement(D.Z,W({as:"h1",variant:"alpha"},ae),ue),K?e.createElement(o.x,{paddingLeft:4},K):null),j),x?e.createElement(D.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},J):J)});_.displayName="BaseHeaderLayout",_.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},_.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,sticky:l.bool,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired,width:l.number},te.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},te.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired}},17034:(q,w,t)=>{t.d(w,{A:()=>T});var e=t(67294),A=t(45697),l=t(71893),D=t(35961);const o=(0,l.default)(D.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:I})=>I?"auto 1fr":"1fr"};
`,B=(0,l.default)(D.x)`
  overflow-x: hidden;
`,T=({sideNav:I,children:d})=>e.createElement(o,{hasSideNav:Boolean(I)},I,e.createElement(B,{paddingBottom:10},d));T.defaultProps={sideNav:void 0},T.propTypes={children:A.node.isRequired,sideNav:A.node}},185:(q,w,t)=>{t.d(w,{o:()=>G});var e=t(67294),A=t(45697),l=t(71893),D=Object.defineProperty,o=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,I=(L,S,R)=>S in L?D(L,S,{enumerable:!0,configurable:!0,writable:!0,value:R}):L[S]=R,d=(L,S)=>{for(var R in S||(S={}))B.call(S,R)&&I(L,R,S[R]);if(o)for(var R of o(S))T.call(S,R)&&I(L,R,S[R]);return L},u=(L,S)=>{var R={};for(var F in L)B.call(L,F)&&S.indexOf(F)<0&&(R[F]=L[F]);if(L!=null&&o)for(var F of o(L))S.indexOf(F)<0&&T.call(L,F)&&(R[F]=L[F]);return R};const h=l.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,G=L=>{var S=L,{labelledBy:R}=S,F=u(S,["labelledBy"]);const W=R||"main-content-title";return e.createElement(h,d({"aria-labelledby":W,id:"main-content",tabIndex:-1},F))};G.defaultProps={labelledBy:void 0},G.propTypes={labelledBy:A.string}},67109:(q,w,t)=>{t.d(w,{Z:()=>I});var e=t(67294),A=Object.defineProperty,l=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,B=(d,u,h)=>u in d?A(d,u,{enumerable:!0,configurable:!0,writable:!0,value:h}):d[u]=h,T=(d,u)=>{for(var h in u||(u={}))D.call(u,h)&&B(d,h,u[h]);if(l)for(var h of l(u))o.call(u,h)&&B(d,h,u[h]);return d};function I(d){return e.createElement("svg",T({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},78114:(q,w,t)=>{t.d(w,{Z:()=>I});var e=t(67294),A=Object.defineProperty,l=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,B=(d,u,h)=>u in d?A(d,u,{enumerable:!0,configurable:!0,writable:!0,value:h}):d[u]=h,T=(d,u)=>{for(var h in u||(u={}))D.call(u,h)&&B(d,h,u[h]);if(l)for(var h of l(u))o.call(u,h)&&B(d,h,u[h]);return d};function I(d){return e.createElement("svg",T({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"}))}}}]);
