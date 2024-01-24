import{g as nr,h as or,r as F,i as ar,k as sr,_ as Ot,j as n,l as k,m as _e,n as Bt,p as rt,q as Ft,t as Et,v as ir,w as gt,x as yt,y as jt,z as Rt,A as lr,T as cr,C as ur,B as At,D as Yt,E as Le,F as Ee,G as dr,H as pr,I as wt,J as Vt,K as Xt,M as Ut,N as We,O as Qt,P as Kt,R as fr,S as It,U as dt,u as Y,s as He,V as hr,W as Re,X as Jt,Y as mr,Z as Gt,b as Pt,$ as Te,a0 as vr,a1 as br,a2 as Dt,a3 as xr,a4 as Lt,a5 as Zt,a6 as ot,a7 as at,a8 as $t,a9 as Ke}from"./index-3hR12qFU.js";const gr={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},yr=gr,Ar=["className","component"];function wr(e={}){const{themeId:t,defaultTheme:s,defaultClassName:P="MuiBox-root",generateClassName:O}=e,J=nr("div",{shouldForwardProp:x=>x!=="theme"&&x!=="sx"&&x!=="as"})(or);return F.forwardRef(function(r,o){const A=ar(s),w=sr(r),{className:S,component:i="div"}=w,l=Ot(w,Ar);return n.jsx(J,k({as:i,ref:o,className:_e(S,O?O(P):P),theme:t&&A[t]||A},l))})}function Tr(e,t,s=(P,O)=>P===O){return e.length===t.length&&e.every((P,O)=>s(P,t[O]))}const Pr=2;function qt(e,t){return e-t}function Wt(e,t){var s;const{index:P}=(s=e.reduce((O,J,te)=>{const x=Math.abs(t-J);return O===null||x<O.distance||x===O.distance?{distance:x,index:te}:O},null))!=null?s:{};return P}function pt(e,t){if(t.current!==void 0&&e.changedTouches){const s=e;for(let P=0;P<s.changedTouches.length;P+=1){const O=s.changedTouches[P];if(O.identifier===t.current)return{x:O.clientX,y:O.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Tt(e,t,s){return(e-t)*100/(s-t)}function Sr(e,t,s){return(s-t)*e+t}function kr(e){if(Math.abs(e)<1){const s=e.toExponential().split("e-"),P=s[0].split(".")[1];return(P?P.length:0)+parseInt(s[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function _r(e,t,s){const P=Math.round((e-s)/t)*t+s;return Number(P.toFixed(kr(t)))}function zt({values:e,newValue:t,index:s}){const P=e.slice();return P[s]=t,P.sort(qt)}function ft({sliderRef:e,activeIndex:t,setActive:s}){var P,O;const J=yt(e.current);if(!((P=e.current)!=null&&P.contains(J.activeElement))||Number(J==null||(O=J.activeElement)==null?void 0:O.getAttribute("data-index"))!==t){var te;(te=e.current)==null||te.querySelector(`[type="range"][data-index="${t}"]`).focus()}s&&s(t)}function ht(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?Tr(e,t):!1}const jr={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Cr=e=>e;let mt;function Nt(){return mt===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?mt=CSS.supports("touch-action","none"):mt=!0),mt}function Mr(e){const{"aria-labelledby":t,defaultValue:s,disabled:P=!1,disableSwap:O=!1,isRtl:J=!1,marks:te=!1,max:x=100,min:r=0,name:o,onChange:A,onChangeCommitted:w,orientation:S="horizontal",rootRef:i,scale:l=Cr,step:c=1,tabIndex:p,value:u}=e,f=F.useRef(),[_,d]=F.useState(-1),[C,W]=F.useState(-1),[R,Q]=F.useState(!1),b=F.useRef(0),[j,B]=Bt({controlled:u,default:s??r,name:"Slider"}),I=A&&((v,T,$)=>{const X=v.nativeEvent||v,ae=new X.constructor(X.type,X);Object.defineProperty(ae,"target",{writable:!0,value:{value:T,name:o}}),A(ae,T,$)}),M=Array.isArray(j);let K=M?j.slice().sort(qt):[j];K=K.map(v=>v==null?r:rt(v,r,x));const se=te===!0&&c!==null?[...Array(Math.floor((x-r)/c)+1)].map((v,T)=>({value:r+c*T})):te||[],re=se.map(v=>v.value),{isFocusVisibleRef:Pe,onBlur:me,onFocus:ue,ref:Ie}=Ft(),[Ae,we]=F.useState(-1),ie=F.useRef(),be=Et(Ie,ie),Se=Et(i,be),de=v=>T=>{var $;const X=Number(T.currentTarget.getAttribute("data-index"));ue(T),Pe.current===!0&&we(X),W(X),v==null||($=v.onFocus)==null||$.call(v,T)},ve=v=>T=>{var $;me(T),Pe.current===!1&&we(-1),W(-1),v==null||($=v.onBlur)==null||$.call(v,T)};ir(()=>{if(P&&ie.current.contains(document.activeElement)){var v;(v=document.activeElement)==null||v.blur()}},[P]),P&&_!==-1&&d(-1),P&&Ae!==-1&&we(-1);const pe=v=>T=>{var $;($=v.onChange)==null||$.call(v,T);const X=Number(T.currentTarget.getAttribute("data-index")),ae=K[X],ne=re.indexOf(ae);let G=T.target.valueAsNumber;if(se&&c==null){const Z=re[re.length-1];G>Z?G=Z:G<re[0]?G=re[0]:G=G<ae?re[ne-1]:re[ne+1]}if(G=rt(G,r,x),M){O&&(G=rt(G,K[X-1]||-1/0,K[X+1]||1/0));const Z=G;G=zt({values:K,newValue:G,index:X});let ee=X;O||(ee=G.indexOf(Z)),ft({sliderRef:ie,activeIndex:ee})}B(G),we(X),I&&!ht(G,j)&&I(T,G,X),w&&w(T,G)},le=F.useRef();let a=S;J&&S==="horizontal"&&(a+="-reverse");const h=({finger:v,move:T=!1})=>{const{current:$}=ie,{width:X,height:ae,bottom:ne,left:G}=$.getBoundingClientRect();let Z;a.indexOf("vertical")===0?Z=(ne-v.y)/ae:Z=(v.x-G)/X,a.indexOf("-reverse")!==-1&&(Z=1-Z);let ee;if(ee=Sr(Z,r,x),c)ee=_r(ee,c,r);else{const Me=Wt(re,ee);ee=re[Me]}ee=rt(ee,r,x);let xe=0;if(M){T?xe=le.current:xe=Wt(K,ee),O&&(ee=rt(ee,K[xe-1]||-1/0,K[xe+1]||1/0));const Me=ee;ee=zt({values:K,newValue:ee,index:xe}),O&&T||(xe=ee.indexOf(Me),le.current=xe)}return{newValue:ee,activeIndex:xe}},H=gt(v=>{const T=pt(v,f);if(!T)return;if(b.current+=1,v.type==="mousemove"&&v.buttons===0){L(v);return}const{newValue:$,activeIndex:X}=h({finger:T,move:!0});ft({sliderRef:ie,activeIndex:X,setActive:d}),B($),!R&&b.current>Pr&&Q(!0),I&&!ht($,j)&&I(v,$,X)}),L=gt(v=>{const T=pt(v,f);if(Q(!1),!T)return;const{newValue:$}=h({finger:T,move:!0});d(-1),v.type==="touchend"&&W(-1),w&&w(v,$),f.current=void 0,y()}),g=gt(v=>{if(P)return;Nt()||v.preventDefault();const T=v.changedTouches[0];T!=null&&(f.current=T.identifier);const $=pt(v,f);if($!==!1){const{newValue:ae,activeIndex:ne}=h({finger:$});ft({sliderRef:ie,activeIndex:ne,setActive:d}),B(ae),I&&!ht(ae,j)&&I(v,ae,ne)}b.current=0;const X=yt(ie.current);X.addEventListener("touchmove",H,{passive:!0}),X.addEventListener("touchend",L,{passive:!0})}),y=F.useCallback(()=>{const v=yt(ie.current);v.removeEventListener("mousemove",H),v.removeEventListener("mouseup",L),v.removeEventListener("touchmove",H),v.removeEventListener("touchend",L)},[L,H]);F.useEffect(()=>{const{current:v}=ie;return v.addEventListener("touchstart",g,{passive:Nt()}),()=>{v.removeEventListener("touchstart",g),y()}},[y,g]),F.useEffect(()=>{P&&y()},[P,y]);const D=v=>T=>{var $;if(($=v.onMouseDown)==null||$.call(v,T),P||T.defaultPrevented||T.button!==0)return;T.preventDefault();const X=pt(T,f);if(X!==!1){const{newValue:ne,activeIndex:G}=h({finger:X});ft({sliderRef:ie,activeIndex:G,setActive:d}),B(ne),I&&!ht(ne,j)&&I(T,ne,G)}b.current=0;const ae=yt(ie.current);ae.addEventListener("mousemove",H,{passive:!0}),ae.addEventListener("mouseup",L)},z=Tt(M?K[0]:r,r,x),N=Tt(K[K.length-1],r,x)-z,V=(v={})=>{const T=jt(v),$={onMouseDown:D(T||{})},X=k({},T,$);return k({},v,{ref:Se},X)},E=v=>T=>{var $;($=v.onMouseOver)==null||$.call(v,T);const X=Number(T.currentTarget.getAttribute("data-index"));W(X)},m=v=>T=>{var $;($=v.onMouseLeave)==null||$.call(v,T),W(-1)};return{active:_,axis:a,axisProps:jr,dragging:R,focusedThumbIndex:Ae,getHiddenInputProps:(v={})=>{var T;const $=jt(v),X={onChange:pe($||{}),onFocus:de($||{}),onBlur:ve($||{})},ae=k({},$,X);return k({tabIndex:p,"aria-labelledby":t,"aria-orientation":S,"aria-valuemax":l(x),"aria-valuemin":l(r),name:o,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(T=e.step)!=null?T:void 0,disabled:P},v,ae,{style:k({},yr,{direction:J?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:V,getThumbProps:(v={})=>{const T=jt(v),$={onMouseOver:E(T||{}),onMouseLeave:m(T||{})};return k({},v,T,$)},marks:se,open:C,range:M,rootRef:Se,trackLeap:N,trackOffset:z,values:K,getThumbStyle:v=>({pointerEvents:_!==-1&&_!==v?"none":void 0})}}const Er=Rt("MuiBox",["root"]),Or=Er,Rr=lr(),Lr=wr({themeId:cr,defaultTheme:Rr,defaultClassName:Or.root,generateClassName:ur.generate}),Ir=Lr,Dr=e=>!e||!At(e);function $r(e){return Yt("MuiSlider",e)}const je=Rt("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Wr=e=>{const{open:t}=e;return{offset:_e(t&&je.valueLabelOpen),circle:je.valueLabelCircle,label:je.valueLabelLabel}};function zr(e){const{children:t,className:s,value:P}=e,O=Wr(e);return t?F.cloneElement(t,{className:_e(t.props.className)},n.jsxs(F.Fragment,{children:[t.props.children,n.jsx("span",{className:_e(O.offset,s),"aria-hidden":!0,children:n.jsx("span",{className:O.circle,children:n.jsx("span",{className:O.label,children:P})})})]})):null}const Nr=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function Ht(e){return e}const Hr=Le("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`color${Ee(s.color)}`],s.size!=="medium"&&t[`size${Ee(s.size)}`],s.marked&&t.marked,s.orientation==="vertical"&&t.vertical,s.track==="inverted"&&t.trackInverted,s.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>k({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&k({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&k({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${je.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${je.dragging}`]:{[`& .${je.thumb}, & .${je.track}`]:{transition:"none"}}})),Br=Le("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>k({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),Fr=Le("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const s=e.palette.mode==="light"?dr(e.palette[t.color].main,.62):pr(e.palette[t.color].main,.5);return k({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:s,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:s})}),Yr=Le("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.thumb,t[`thumbColor${Ee(s.color)}`],s.size!=="medium"&&t[`thumbSize${Ee(s.size)}`]]}})(({theme:e,ownerState:t})=>k({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&::before":k({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${je.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:wt(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${je.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:wt(e.palette[t.color].main,.16)}`},[`&.${je.disabled}`]:{"&:hover":{boxShadow:"none"}}})),Vr=Le(zr,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>k({[`&.${je.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),Xr=Le("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Vt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:s}=e;return[t.mark,s&&t.markActive]}})(({theme:e,ownerState:t,markActive:s})=>k({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},s&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Ur=Le("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Vt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:s})=>k({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},s&&{color:(e.vars||e).palette.text.primary})),Qr=e=>{const{disabled:t,dragging:s,marked:P,orientation:O,track:J,classes:te,color:x,size:r}=e,o={root:["root",t&&"disabled",s&&"dragging",P&&"marked",O==="vertical"&&"vertical",J==="inverted"&&"trackInverted",J===!1&&"trackFalse",x&&`color${Ee(x)}`,r&&`size${Ee(r)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",r&&`thumbSize${Ee(r)}`,x&&`thumbColor${Ee(x)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Qt(o,$r,te)},Kr=({children:e})=>e,Jr=F.forwardRef(function(t,s){var P,O,J,te,x,r,o,A,w,S,i,l,c,p,u,f,_,d,C,W,R,Q,b,j;const B=Xt({props:t,name:"MuiSlider"}),M=Ut().direction==="rtl",{"aria-label":K,"aria-valuetext":se,"aria-labelledby":re,component:Pe="span",components:me={},componentsProps:ue={},color:Ie="primary",classes:Ae,className:we,disableSwap:ie=!1,disabled:be=!1,getAriaLabel:Se,getAriaValueText:de,marks:ve=!1,max:pe=100,min:le=0,orientation:a="horizontal",size:h="medium",step:H=1,scale:L=Ht,slotProps:g,slots:y,track:D="normal",valueLabelDisplay:z="off",valueLabelFormat:N=Ht}=B,V=Ot(B,Nr),E=k({},B,{isRtl:M,max:pe,min:le,classes:Ae,disabled:be,disableSwap:ie,orientation:a,marks:ve,color:Ie,size:h,step:H,scale:L,track:D,valueLabelDisplay:z,valueLabelFormat:N}),{axisProps:m,getRootProps:q,getHiddenInputProps:fe,getThumbProps:Ce,open:v,active:T,axis:$,focusedThumbIndex:X,range:ae,dragging:ne,marks:G,values:Z,trackOffset:ee,trackLeap:xe,getThumbStyle:Me}=Mr(k({},E,{rootRef:s}));E.marked=G.length>0&&G.some(oe=>oe.label),E.dragging=ne,E.focusedThumbIndex=X;const he=Qr(E),Be=(P=(O=y==null?void 0:y.root)!=null?O:me.Root)!=null?P:Hr,Je=(J=(te=y==null?void 0:y.rail)!=null?te:me.Rail)!=null?J:Br,st=(x=(r=y==null?void 0:y.track)!=null?r:me.Track)!=null?x:Fr,it=(o=(A=y==null?void 0:y.thumb)!=null?A:me.Thumb)!=null?o:Yr,lt=(w=(S=y==null?void 0:y.valueLabel)!=null?S:me.ValueLabel)!=null?w:Vr,Fe=(i=(l=y==null?void 0:y.mark)!=null?l:me.Mark)!=null?i:Xr,Ye=(c=(p=y==null?void 0:y.markLabel)!=null?p:me.MarkLabel)!=null?c:Ur,Ge=(u=(f=y==null?void 0:y.input)!=null?f:me.Input)!=null?u:"input",Ve=(_=g==null?void 0:g.root)!=null?_:ue.root,ct=(d=g==null?void 0:g.rail)!=null?d:ue.rail,Xe=(C=g==null?void 0:g.track)!=null?C:ue.track,Ze=(W=g==null?void 0:g.thumb)!=null?W:ue.thumb,qe=(R=g==null?void 0:g.valueLabel)!=null?R:ue.valueLabel,St=(Q=g==null?void 0:g.mark)!=null?Q:ue.mark,et=(b=g==null?void 0:g.markLabel)!=null?b:ue.markLabel,kt=(j=g==null?void 0:g.input)!=null?j:ue.input,ze=We({elementType:Be,getSlotProps:q,externalSlotProps:Ve,externalForwardedProps:V,additionalProps:k({},Dr(Be)&&{as:Pe}),ownerState:k({},E,Ve==null?void 0:Ve.ownerState),className:[he.root,we]}),tt=We({elementType:Je,externalSlotProps:ct,ownerState:E,className:he.rail}),ge=We({elementType:st,externalSlotProps:Xe,additionalProps:{style:k({},m[$].offset(ee),m[$].leap(xe))},ownerState:k({},E,Xe==null?void 0:Xe.ownerState),className:he.track}),De=We({elementType:it,getSlotProps:Ce,externalSlotProps:Ze,ownerState:k({},E,Ze==null?void 0:Ze.ownerState),className:he.thumb}),_t=We({elementType:lt,externalSlotProps:qe,ownerState:k({},E,qe==null?void 0:qe.ownerState),className:he.valueLabel}),$e=We({elementType:Fe,externalSlotProps:St,ownerState:E,className:he.mark}),Ne=We({elementType:Ye,externalSlotProps:et,ownerState:E,className:he.markLabel}),ut=We({elementType:Ge,getSlotProps:fe,externalSlotProps:kt,ownerState:E});return n.jsxs(Be,k({},ze,{children:[n.jsx(Je,k({},tt)),n.jsx(st,k({},ge)),G.filter(oe=>oe.value>=le&&oe.value<=pe).map((oe,ce)=>{const Ue=Tt(oe.value,le,pe),Qe=m[$].offset(Ue);let ke;return D===!1?ke=Z.indexOf(oe.value)!==-1:ke=D==="normal"&&(ae?oe.value>=Z[0]&&oe.value<=Z[Z.length-1]:oe.value<=Z[0])||D==="inverted"&&(ae?oe.value<=Z[0]||oe.value>=Z[Z.length-1]:oe.value>=Z[0]),n.jsxs(F.Fragment,{children:[n.jsx(Fe,k({"data-index":ce},$e,!At(Fe)&&{markActive:ke},{style:k({},Qe,$e.style),className:_e($e.className,ke&&he.markActive)})),oe.label!=null?n.jsx(Ye,k({"aria-hidden":!0,"data-index":ce},Ne,!At(Ye)&&{markLabelActive:ke},{style:k({},Qe,Ne.style),className:_e(he.markLabel,Ne.className,ke&&he.markLabelActive),children:oe.label})):null]},ce)}),Z.map((oe,ce)=>{const Ue=Tt(oe,le,pe),Qe=m[$].offset(Ue),ke=z==="off"?Kr:lt;return n.jsx(ke,k({},!At(ke)&&{valueLabelFormat:N,valueLabelDisplay:z,value:typeof N=="function"?N(L(oe),ce):N,index:ce,open:v===ce||T===ce||z==="on",disabled:be},_t,{children:n.jsx(it,k({"data-index":ce},De,{className:_e(he.thumb,De.className,T===ce&&he.active,X===ce&&he.focusVisible),style:k({},Qe,Me(ce),De.style),children:n.jsx(Ge,k({"data-index":ce,"aria-label":Se?Se(ce):K,"aria-valuenow":L(oe),"aria-labelledby":re,"aria-valuetext":de?de(L(oe),ce):se,value:Z[ce]},ut))}))}),ce)})]}))}),Gr=Jr;function Zr(e){return Yt("MuiTooltip",e)}const Oe=Rt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),qr=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function en(e){return Math.round(e*1e5)/1e5}const tn=e=>{const{classes:t,disableInteractive:s,arrow:P,touch:O,placement:J}=e,te={popper:["popper",!s&&"popperInteractive",P&&"popperArrow"],tooltip:["tooltip",P&&"tooltipArrow",O&&"touch",`tooltipPlacement${Ee(J.split("-")[0])}`],arrow:["arrow"]};return Qt(te,Zr,t)},rn=Le(Kt,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.popper,!s.disableInteractive&&t.popperInteractive,s.arrow&&t.popperArrow,!s.open&&t.popperClose]}})(({theme:e,ownerState:t,open:s})=>k({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${Oe.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Oe.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Oe.arrow}`]:k({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Oe.arrow}`]:k({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),nn=Le("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.tooltip,s.touch&&t.touch,s.arrow&&t.tooltipArrow,t[`tooltipPlacement${Ee(s.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>k({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:wt(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${en(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${Oe.popper}[data-popper-placement*="left"] &`]:k({transformOrigin:"right center"},t.isRtl?k({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):k({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${Oe.popper}[data-popper-placement*="right"] &`]:k({transformOrigin:"left center"},t.isRtl?k({marginRight:"14px"},t.touch&&{marginRight:"24px"}):k({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${Oe.popper}[data-popper-placement*="top"] &`]:k({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${Oe.popper}[data-popper-placement*="bottom"] &`]:k({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),on=Le("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:wt(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let vt=!1,Ct=null,nt={x:0,y:0};function bt(e,t){return s=>{t&&t(s),e(s)}}const an=F.forwardRef(function(t,s){var P,O,J,te,x,r,o,A,w,S,i,l,c,p,u,f,_,d,C;const W=Xt({props:t,name:"MuiTooltip"}),{arrow:R=!1,children:Q,components:b={},componentsProps:j={},describeChild:B=!1,disableFocusListener:I=!1,disableHoverListener:M=!1,disableInteractive:K=!1,disableTouchListener:se=!1,enterDelay:re=100,enterNextDelay:Pe=0,enterTouchDelay:me=700,followCursor:ue=!1,id:Ie,leaveDelay:Ae=0,leaveTouchDelay:we=1500,onClose:ie,onOpen:be,open:Se,placement:de="bottom",PopperComponent:ve,PopperProps:pe={},slotProps:le={},slots:a={},title:h,TransitionComponent:H=It,TransitionProps:L}=W,g=Ot(W,qr),y=F.isValidElement(Q)?Q:n.jsx("span",{children:Q}),D=Ut(),z=D.direction==="rtl",[N,V]=F.useState(),[E,m]=F.useState(null),q=F.useRef(!1),fe=K||ue,Ce=F.useRef(),v=F.useRef(),T=F.useRef(),$=F.useRef(),[X,ae]=Bt({controlled:Se,default:!1,name:"Tooltip",state:"open"});let ne=X;const G=fr(Ie),Z=F.useRef(),ee=F.useCallback(()=>{Z.current!==void 0&&(document.body.style.WebkitUserSelect=Z.current,Z.current=void 0),clearTimeout($.current)},[]);F.useEffect(()=>()=>{clearTimeout(Ce.current),clearTimeout(v.current),clearTimeout(T.current),ee()},[ee]);const xe=U=>{clearTimeout(Ct),vt=!0,ae(!0),be&&!ne&&be(U)},Me=gt(U=>{clearTimeout(Ct),Ct=setTimeout(()=>{vt=!1},800+Ae),ae(!1),ie&&ne&&ie(U),clearTimeout(Ce.current),Ce.current=setTimeout(()=>{q.current=!1},D.transitions.duration.shortest)}),he=U=>{q.current&&U.type!=="touchstart"||(N&&N.removeAttribute("title"),clearTimeout(v.current),clearTimeout(T.current),re||vt&&Pe?v.current=setTimeout(()=>{xe(U)},vt?Pe:re):xe(U))},Be=U=>{clearTimeout(v.current),clearTimeout(T.current),T.current=setTimeout(()=>{Me(U)},Ae)},{isFocusVisibleRef:Je,onBlur:st,onFocus:it,ref:lt}=Ft(),[,Fe]=F.useState(!1),Ye=U=>{st(U),Je.current===!1&&(Fe(!1),Be(U))},Ge=U=>{N||V(U.currentTarget),it(U),Je.current===!0&&(Fe(!0),he(U))},Ve=U=>{q.current=!0;const ye=y.props;ye.onTouchStart&&ye.onTouchStart(U)},ct=he,Xe=Be,Ze=U=>{Ve(U),clearTimeout(T.current),clearTimeout(Ce.current),ee(),Z.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",$.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Z.current,he(U)},me)},qe=U=>{y.props.onTouchEnd&&y.props.onTouchEnd(U),ee(),clearTimeout(T.current),T.current=setTimeout(()=>{Me(U)},we)};F.useEffect(()=>{if(!ne)return;function U(ye){(ye.key==="Escape"||ye.key==="Esc")&&Me(ye)}return document.addEventListener("keydown",U),()=>{document.removeEventListener("keydown",U)}},[Me,ne]);const St=Et(y.ref,lt,V,s);!h&&h!==0&&(ne=!1);const et=F.useRef(),kt=U=>{const ye=y.props;ye.onMouseMove&&ye.onMouseMove(U),nt={x:U.clientX,y:U.clientY},et.current&&et.current.update()},ze={},tt=typeof h=="string";B?(ze.title=!ne&&tt&&!M?h:null,ze["aria-describedby"]=ne?G:null):(ze["aria-label"]=tt?h:null,ze["aria-labelledby"]=ne&&!tt?G:null);const ge=k({},ze,g,y.props,{className:_e(g.className,y.props.className),onTouchStart:Ve,ref:St},ue?{onMouseMove:kt}:{}),De={};se||(ge.onTouchStart=Ze,ge.onTouchEnd=qe),M||(ge.onMouseOver=bt(ct,ge.onMouseOver),ge.onMouseLeave=bt(Xe,ge.onMouseLeave),fe||(De.onMouseOver=ct,De.onMouseLeave=Xe)),I||(ge.onFocus=bt(Ge,ge.onFocus),ge.onBlur=bt(Ye,ge.onBlur),fe||(De.onFocus=Ge,De.onBlur=Ye));const _t=F.useMemo(()=>{var U;let ye=[{name:"arrow",enabled:!!E,options:{element:E,padding:4}}];return(U=pe.popperOptions)!=null&&U.modifiers&&(ye=ye.concat(pe.popperOptions.modifiers)),k({},pe.popperOptions,{modifiers:ye})},[E,pe]),$e=k({},W,{isRtl:z,arrow:R,disableInteractive:fe,placement:de,PopperComponentProp:ve,touch:q.current}),Ne=tn($e),ut=(P=(O=a.popper)!=null?O:b.Popper)!=null?P:rn,oe=(J=(te=(x=a.transition)!=null?x:b.Transition)!=null?te:H)!=null?J:It,ce=(r=(o=a.tooltip)!=null?o:b.Tooltip)!=null?r:nn,Ue=(A=(w=a.arrow)!=null?w:b.Arrow)!=null?A:on,Qe=dt(ut,k({},pe,(S=le.popper)!=null?S:j.popper,{className:_e(Ne.popper,pe==null?void 0:pe.className,(i=(l=le.popper)!=null?l:j.popper)==null?void 0:i.className)}),$e),ke=dt(oe,k({},L,(c=le.transition)!=null?c:j.transition),$e),tr=dt(ce,k({},(p=le.tooltip)!=null?p:j.tooltip,{className:_e(Ne.tooltip,(u=(f=le.tooltip)!=null?f:j.tooltip)==null?void 0:u.className)}),$e),rr=dt(Ue,k({},(_=le.arrow)!=null?_:j.arrow,{className:_e(Ne.arrow,(d=(C=le.arrow)!=null?C:j.arrow)==null?void 0:d.className)}),$e);return n.jsxs(F.Fragment,{children:[F.cloneElement(y,ge),n.jsx(ut,k({as:ve??Kt,placement:de,anchorEl:ue?{getBoundingClientRect:()=>({top:nt.y,left:nt.x,right:nt.x,bottom:nt.y,width:0,height:0})}:N,popperRef:et,open:N?ne:!1,id:G,transition:!0},De,Qe,{popperOptions:_t,children:({TransitionProps:U})=>n.jsx(oe,k({timeout:D.transitions.duration.shorter},U,ke,{children:n.jsxs(ce,k({},tr,{children:[h,R?n.jsx(Ue,k({},rr,{ref:m})):null]}))}))}))]})}),sn=an,ln=Y.button`
  display: flex;
  padding: 10px 29px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  color: var(--white);

  border: none;
  border-radius: 10px;
  background: var(--dark-blue);
  width: 280px;
  height: 44px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  transition: box-shadow var(--transition);

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`,cn=({onClick:e})=>n.jsxs(ln,{onClick:e,children:[n.jsx("svg",{width:"24px",height:"24px",children:n.jsx("use",{href:He+"#icon-water-plus"})}),"Add Water"]});var er={exports:{}};(function(e,t){(function(P,O){e.exports=O(F)})(hr,s=>(()=>{var P={"./node_modules/css-mediaquery/index.js":(x,r)=>{r.match=l,r.parse=c;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,A=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,w=/^(?:(min|max)-)?(.+)/,S=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function l(_,d){return c(_).some(function(C){var W=C.inverse,R=C.type==="all"||d.type===C.type;if(R&&W||!(R||W))return!1;var Q=C.expressions.every(function(b){var j=b.feature,B=b.modifier,I=b.value,M=d[j];if(!M)return!1;switch(j){case"orientation":case"scan":return M.toLowerCase()===I.toLowerCase();case"width":case"height":case"device-width":case"device-height":I=f(I),M=f(M);break;case"resolution":I=u(I),M=u(M);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":I=p(I),M=p(M);break;case"grid":case"color":case"color-index":case"monochrome":I=parseInt(I,10)||1,M=parseInt(M,10)||0;break}switch(B){case"min":return M>=I;case"max":return M<=I;default:return M===I}});return Q&&!W||!Q&&W})}function c(_){return _.split(",").map(function(d){d=d.trim();var C=d.match(o),W=C[1],R=C[2],Q=C[3]||"",b={};return b.inverse=!!W&&W.toLowerCase()==="not",b.type=R?R.toLowerCase():"all",Q=Q.match(/\([^\)]+\)/g)||[],b.expressions=Q.map(function(j){var B=j.match(A),I=B[1].toLowerCase().match(w);return{modifier:I[1],feature:I[2],value:B[2]}}),b})}function p(_){var d=Number(_),C;return d||(C=_.match(/^(\d+)\s*\/\s*(\d+)$/),d=C[1]/C[2]),d}function u(_){var d=parseFloat(_),C=String(_).match(i)[1];switch(C){case"dpcm":return d/2.54;case"dppx":return d*96;default:return d}}function f(_){var d=parseFloat(_),C=String(_).match(S)[1];switch(C){case"em":return d*16;case"rem":return d*16;case"cm":return d*96/2.54;case"mm":return d*96/2.54/10;case"in":return d*96;case"pt":return d*72;case"pc":return d*72/12;default:return d}}},"./node_modules/hyphenate-style-name/index.js":(x,r,o)=>{o.r(r),o.d(r,{default:()=>c});var A=/[A-Z]/g,w=/^ms-/,S={};function i(p){return"-"+p.toLowerCase()}function l(p){if(S.hasOwnProperty(p))return S[p];var u=p.replace(A,i);return S[p]=w.test(u)?"-"+u:u}const c=l},"./node_modules/matchmediaquery/index.js":(x,r,o)=>{var A=o("./node_modules/css-mediaquery/index.js").match,w=typeof window<"u"?window.matchMedia:null;function S(l,c,p){var u=this;if(w&&!p){var f=w.call(window,l);this.matches=f.matches,this.media=f.media,f.addListener(C)}else this.matches=A(l,c),this.media=l;this.addListener=_,this.removeListener=d,this.dispose=W;function _(R){f&&f.addListener(R)}function d(R){f&&f.removeListener(R)}function C(R){u.matches=R.matches,u.media=R.media}function W(){f&&f.removeListener(C)}}function i(l,c,p){return new S(l,c,p)}x.exports=i},"./node_modules/object-assign/index.js":x=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;function w(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function S(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var l={},c=0;c<10;c++)l["_"+String.fromCharCode(c)]=c;var p=Object.getOwnPropertyNames(l).map(function(f){return l[f]});if(p.join("")!=="0123456789")return!1;var u={};return"abcdefghijklmnopqrst".split("").forEach(function(f){u[f]=f}),Object.keys(Object.assign({},u)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}x.exports=S()?Object.assign:function(i,l){for(var c,p=w(i),u,f=1;f<arguments.length;f++){c=Object(arguments[f]);for(var _ in c)o.call(c,_)&&(p[_]=c[_]);if(r){u=r(c);for(var d=0;d<u.length;d++)A.call(c,u[d])&&(p[u[d]]=c[u[d]])}}return p}},"./node_modules/prop-types/checkPropTypes.js":(x,r,o)=>{var A=function(){};{var w=o("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),S={},i=o("./node_modules/prop-types/lib/has.js");A=function(c){var p="Warning: "+c;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}}}function l(c,p,u,f,_){for(var d in c)if(i(c,d)){var C;try{if(typeof c[d]!="function"){var W=Error((f||"React class")+": "+u+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw W.name="Invariant Violation",W}C=c[d](p,d,f,u,null,w)}catch(Q){C=Q}if(C&&!(C instanceof Error)&&A((f||"React class")+": type specification of "+u+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof C+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),C instanceof Error&&!(C.message in S)){S[C.message]=!0;var R=_?_():"";A("Failed "+u+" type: "+C.message+(R??""))}}}l.resetWarningCache=function(){S={}},x.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":(x,r,o)=>{var A=o("./node_modules/react-is/index.js"),w=o("./node_modules/object-assign/index.js"),S=o("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i=o("./node_modules/prop-types/lib/has.js"),l=o("./node_modules/prop-types/checkPropTypes.js"),c=function(){};c=function(u){var f="Warning: "+u;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function p(){return null}x.exports=function(u,f){var _=typeof Symbol=="function"&&Symbol.iterator,d="@@iterator";function C(a){var h=a&&(_&&a[_]||a[d]);if(typeof h=="function")return h}var W="<<anonymous>>",R={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:I(),arrayOf:M,element:K(),elementType:se(),instanceOf:re,node:Ie(),objectOf:me,oneOf:Pe,oneOfType:ue,shape:we,exact:ie};function Q(a,h){return a===h?a!==0||1/a===1/h:a!==a&&h!==h}function b(a,h){this.message=a,this.data=h&&typeof h=="object"?h:{},this.stack=""}b.prototype=Error.prototype;function j(a){var h={},H=0;function L(y,D,z,N,V,E,m){if(N=N||W,E=E||z,m!==S){if(f){var q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw q.name="Invariant Violation",q}else if(typeof console<"u"){var fe=N+":"+z;!h[fe]&&H<3&&(c("You are manually calling a React.PropTypes validation function for the `"+E+"` prop on `"+N+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),h[fe]=!0,H++)}}return D[z]==null?y?D[z]===null?new b("The "+V+" `"+E+"` is marked as required "+("in `"+N+"`, but its value is `null`.")):new b("The "+V+" `"+E+"` is marked as required in "+("`"+N+"`, but its value is `undefined`.")):null:a(D,z,N,V,E)}var g=L.bind(null,!1);return g.isRequired=L.bind(null,!0),g}function B(a){function h(H,L,g,y,D,z){var N=H[L],V=de(N);if(V!==a){var E=ve(N);return new b("Invalid "+y+" `"+D+"` of type "+("`"+E+"` supplied to `"+g+"`, expected ")+("`"+a+"`."),{expectedType:a})}return null}return j(h)}function I(){return j(p)}function M(a){function h(H,L,g,y,D){if(typeof a!="function")return new b("Property `"+D+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var z=H[L];if(!Array.isArray(z)){var N=de(z);return new b("Invalid "+y+" `"+D+"` of type "+("`"+N+"` supplied to `"+g+"`, expected an array."))}for(var V=0;V<z.length;V++){var E=a(z,V,g,y,D+"["+V+"]",S);if(E instanceof Error)return E}return null}return j(h)}function K(){function a(h,H,L,g,y){var D=h[H];if(!u(D)){var z=de(D);return new b("Invalid "+g+" `"+y+"` of type "+("`"+z+"` supplied to `"+L+"`, expected a single ReactElement."))}return null}return j(a)}function se(){function a(h,H,L,g,y){var D=h[H];if(!A.isValidElementType(D)){var z=de(D);return new b("Invalid "+g+" `"+y+"` of type "+("`"+z+"` supplied to `"+L+"`, expected a single ReactElement type."))}return null}return j(a)}function re(a){function h(H,L,g,y,D){if(!(H[L]instanceof a)){var z=a.name||W,N=le(H[L]);return new b("Invalid "+y+" `"+D+"` of type "+("`"+N+"` supplied to `"+g+"`, expected ")+("instance of `"+z+"`."))}return null}return j(h)}function Pe(a){if(!Array.isArray(a))return arguments.length>1?c("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):c("Invalid argument supplied to oneOf, expected an array."),p;function h(H,L,g,y,D){for(var z=H[L],N=0;N<a.length;N++)if(Q(z,a[N]))return null;var V=JSON.stringify(a,function(m,q){var fe=ve(q);return fe==="symbol"?String(q):q});return new b("Invalid "+y+" `"+D+"` of value `"+String(z)+"` "+("supplied to `"+g+"`, expected one of "+V+"."))}return j(h)}function me(a){function h(H,L,g,y,D){if(typeof a!="function")return new b("Property `"+D+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var z=H[L],N=de(z);if(N!=="object")return new b("Invalid "+y+" `"+D+"` of type "+("`"+N+"` supplied to `"+g+"`, expected an object."));for(var V in z)if(i(z,V)){var E=a(z,V,g,y,D+"."+V,S);if(E instanceof Error)return E}return null}return j(h)}function ue(a){if(!Array.isArray(a))return c("Invalid argument supplied to oneOfType, expected an instance of array."),p;for(var h=0;h<a.length;h++){var H=a[h];if(typeof H!="function")return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+pe(H)+" at index "+h+"."),p}function L(g,y,D,z,N){for(var V=[],E=0;E<a.length;E++){var m=a[E],q=m(g,y,D,z,N,S);if(q==null)return null;q.data&&i(q.data,"expectedType")&&V.push(q.data.expectedType)}var fe=V.length>0?", expected one of type ["+V.join(", ")+"]":"";return new b("Invalid "+z+" `"+N+"` supplied to "+("`"+D+"`"+fe+"."))}return j(L)}function Ie(){function a(h,H,L,g,y){return be(h[H])?null:new b("Invalid "+g+" `"+y+"` supplied to "+("`"+L+"`, expected a ReactNode."))}return j(a)}function Ae(a,h,H,L,g){return new b((a||"React class")+": "+h+" type `"+H+"."+L+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+g+"`.")}function we(a){function h(H,L,g,y,D){var z=H[L],N=de(z);if(N!=="object")return new b("Invalid "+y+" `"+D+"` of type `"+N+"` "+("supplied to `"+g+"`, expected `object`."));for(var V in a){var E=a[V];if(typeof E!="function")return Ae(g,y,D,V,ve(E));var m=E(z,V,g,y,D+"."+V,S);if(m)return m}return null}return j(h)}function ie(a){function h(H,L,g,y,D){var z=H[L],N=de(z);if(N!=="object")return new b("Invalid "+y+" `"+D+"` of type `"+N+"` "+("supplied to `"+g+"`, expected `object`."));var V=w({},H[L],a);for(var E in V){var m=a[E];if(i(a,E)&&typeof m!="function")return Ae(g,y,D,E,ve(m));if(!m)return new b("Invalid "+y+" `"+D+"` key `"+E+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(H[L],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(a),null,"  "));var q=m(z,E,g,y,D+"."+E,S);if(q)return q}return null}return j(h)}function be(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(be);if(a===null||u(a))return!0;var h=C(a);if(h){var H=h.call(a),L;if(h!==a.entries){for(;!(L=H.next()).done;)if(!be(L.value))return!1}else for(;!(L=H.next()).done;){var g=L.value;if(g&&!be(g[1]))return!1}}else return!1;return!0;default:return!1}}function Se(a,h){return a==="symbol"?!0:h?h["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&h instanceof Symbol:!1}function de(a){var h=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":Se(h,a)?"symbol":h}function ve(a){if(typeof a>"u"||a===null)return""+a;var h=de(a);if(h==="object"){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return h}function pe(a){var h=ve(a);switch(h){case"array":case"object":return"an "+h;case"boolean":case"date":case"regexp":return"a "+h;default:return h}}function le(a){return!a.constructor||!a.constructor.name?W:a.constructor.name}return R.checkPropTypes=l,R.resetWarningCache=l.resetWarningCache,R.PropTypes=R,R}},"./node_modules/prop-types/index.js":(x,r,o)=>{{var A=o("./node_modules/react-is/index.js"),w=!0;x.exports=o("./node_modules/prop-types/factoryWithTypeCheckers.js")(A.isElement,w)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":x=>{var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";x.exports=r},"./node_modules/prop-types/lib/has.js":x=>{x.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(x,r)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var o=typeof Symbol=="function"&&Symbol.for,A=o?Symbol.for("react.element"):60103,w=o?Symbol.for("react.portal"):60106,S=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,f=o?Symbol.for("react.concurrent_mode"):60111,_=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,C=o?Symbol.for("react.suspense_list"):60120,W=o?Symbol.for("react.memo"):60115,R=o?Symbol.for("react.lazy"):60116,Q=o?Symbol.for("react.block"):60121,b=o?Symbol.for("react.fundamental"):60117,j=o?Symbol.for("react.responder"):60118,B=o?Symbol.for("react.scope"):60119;function I(m){return typeof m=="string"||typeof m=="function"||m===S||m===f||m===l||m===i||m===d||m===C||typeof m=="object"&&m!==null&&(m.$$typeof===R||m.$$typeof===W||m.$$typeof===c||m.$$typeof===p||m.$$typeof===_||m.$$typeof===b||m.$$typeof===j||m.$$typeof===B||m.$$typeof===Q)}function M(m){if(typeof m=="object"&&m!==null){var q=m.$$typeof;switch(q){case A:var fe=m.type;switch(fe){case u:case f:case S:case l:case i:case d:return fe;default:var Ce=fe&&fe.$$typeof;switch(Ce){case p:case _:case R:case W:case c:return Ce;default:return q}}case w:return q}}}var K=u,se=f,re=p,Pe=c,me=A,ue=_,Ie=S,Ae=R,we=W,ie=w,be=l,Se=i,de=d,ve=!1;function pe(m){return ve||(ve=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),le(m)||M(m)===u}function le(m){return M(m)===f}function a(m){return M(m)===p}function h(m){return M(m)===c}function H(m){return typeof m=="object"&&m!==null&&m.$$typeof===A}function L(m){return M(m)===_}function g(m){return M(m)===S}function y(m){return M(m)===R}function D(m){return M(m)===W}function z(m){return M(m)===w}function N(m){return M(m)===l}function V(m){return M(m)===i}function E(m){return M(m)===d}r.AsyncMode=K,r.ConcurrentMode=se,r.ContextConsumer=re,r.ContextProvider=Pe,r.Element=me,r.ForwardRef=ue,r.Fragment=Ie,r.Lazy=Ae,r.Memo=we,r.Portal=ie,r.Profiler=be,r.StrictMode=Se,r.Suspense=de,r.isAsyncMode=pe,r.isConcurrentMode=le,r.isContextConsumer=a,r.isContextProvider=h,r.isElement=H,r.isForwardRef=L,r.isFragment=g,r.isLazy=y,r.isMemo=D,r.isPortal=z,r.isProfiler=N,r.isStrictMode=V,r.isSuspense=E,r.isValidElementType=I,r.typeOf=M})()},"./node_modules/react-is/index.js":(x,r,o)=>{x.exports=o("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(x,r,o)=>{o.r(r),o.d(r,{shallowEqualArrays:()=>w,shallowEqualObjects:()=>A});function A(S,i){if(S===i)return!0;if(!S||!i)return!1;var l=Object.keys(S),c=Object.keys(i),p=l.length;if(c.length!==p)return!1;for(var u=0;u<p;u++){var f=l[u];if(S[f]!==i[f]||!Object.prototype.hasOwnProperty.call(i,f))return!1}return!0}function w(S,i){if(S===i)return!0;if(!S||!i)return!1;var l=S.length;if(i.length!==l)return!1;for(var c=0;c<l;c++)if(S[c]!==i[c])return!1;return!0}},"./src/Component.ts":function(x,r,o){var A=this&&this.__rest||function(l,c){var p={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&c.indexOf(u)<0&&(p[u]=l[u]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,u=Object.getOwnPropertySymbols(l);f<u.length;f++)c.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(l,u[f])&&(p[u[f]]=l[u[f]]);return p},w=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(r,"__esModule",{value:!0});var S=w(o("./src/useMediaQuery.ts")),i=function(l){var c=l.children,p=l.device,u=l.onChange,f=A(l,["children","device","onChange"]),_=(0,S.default)(f,p,u);return typeof c=="function"?c(_):_?c:null};r.default=i},"./src/Context.ts":(x,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0});var A=o("react"),w=(0,A.createContext)(void 0);r.default=w},"./src/index.ts":function(x,r,o){var A=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var w=A(o("./src/useMediaQuery.ts"));r.useMediaQuery=w.default;var S=A(o("./src/Component.ts"));r.default=S.default;var i=A(o("./src/toQuery.ts"));r.toQuery=i.default;var l=A(o("./src/Context.ts"));r.Context=l.default},"./src/mediaQuery.ts":function(x,r,o){var A=this&&this.__assign||function(){return A=Object.assign||function(d){for(var C,W=1,R=arguments.length;W<R;W++){C=arguments[W];for(var Q in C)Object.prototype.hasOwnProperty.call(C,Q)&&(d[Q]=C[Q])}return d},A.apply(this,arguments)},w=this&&this.__rest||function(d,C){var W={};for(var R in d)Object.prototype.hasOwnProperty.call(d,R)&&C.indexOf(R)<0&&(W[R]=d[R]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,R=Object.getOwnPropertySymbols(d);Q<R.length;Q++)C.indexOf(R[Q])<0&&Object.prototype.propertyIsEnumerable.call(d,R[Q])&&(W[R[Q]]=d[R[Q]]);return W},S=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(r,"__esModule",{value:!0});var i=S(o("./node_modules/prop-types/index.js")),l=i.default.oneOfType([i.default.string,i.default.number]),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},p={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:l,type:Object.keys(c)};p.type;var u=w(p,["type"]),f=A({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:l,maxResolution:l},u),_=A(A({},c),f);r.default={all:_,types:c,matchers:p,features:f}},"./src/toQuery.ts":function(x,r,o){var A=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(r,"__esModule",{value:!0});var w=A(o("./node_modules/hyphenate-style-name/index.js")),S=A(o("./src/mediaQuery.ts")),i=function(u){return"not ".concat(u)},l=function(u,f){var _=(0,w.default)(u);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?_:f===!1?i(_):"(".concat(_,": ").concat(f,")")},c=function(u){return u.join(" and ")},p=function(u){var f=[];return Object.keys(S.default.all).forEach(function(_){var d=u[_];d!=null&&f.push(l(_,d))}),c(f)};r.default=p},"./src/useMediaQuery.ts":function(x,r,o){var A=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(r,"__esModule",{value:!0});var w=o("react"),S=A(o("./node_modules/matchmediaquery/index.js")),i=A(o("./node_modules/hyphenate-style-name/index.js")),l=o("./node_modules/shallow-equal/dist/index.esm.js"),c=A(o("./src/toQuery.ts")),p=A(o("./src/Context.ts")),u=function(b){return b.query||(0,c.default)(b)},f=function(b){if(b){var j=Object.keys(b);return j.reduce(function(B,I){return B[(0,i.default)(I)]=b[I],B},{})}},_=function(){var b=(0,w.useRef)(!1);return(0,w.useEffect)(function(){b.current=!0},[]),b.current},d=function(b){var j=(0,w.useContext)(p.default),B=function(){return f(b)||f(j)},I=(0,w.useState)(B),M=I[0],K=I[1];return(0,w.useEffect)(function(){var se=B();(0,l.shallowEqualObjects)(M,se)||K(se)},[b,j]),M},C=function(b){var j=function(){return u(b)},B=(0,w.useState)(j),I=B[0],M=B[1];return(0,w.useEffect)(function(){var K=j();I!==K&&M(K)},[b]),I},W=function(b,j){var B=function(){return(0,S.default)(b,j||{},!!j)},I=(0,w.useState)(B),M=I[0],K=I[1],se=_();return(0,w.useEffect)(function(){if(se){var re=B();return K(re),function(){re&&re.dispose()}}},[b,j]),M},R=function(b){var j=(0,w.useState)(b.matches),B=j[0],I=j[1];return(0,w.useEffect)(function(){var M=function(K){I(K.matches)};return b.addListener(M),I(b.matches),function(){b.removeListener(M)}},[b]),B},Q=function(b,j,B){var I=d(j),M=C(b);if(!M)throw new Error("Invalid or missing MediaQuery!");var K=W(M,I),se=R(K),re=_();return(0,w.useEffect)(function(){re&&B&&B(se)},[se]),(0,w.useEffect)(function(){return function(){K&&K.dispose()}},[]),se};r.default=Q},react:x=>{x.exports=s}},O={};function J(x){var r=O[x];if(r!==void 0)return r.exports;var o=O[x]={exports:{}};return P[x].call(o.exports,o,o.exports,J),o.exports}J.d=(x,r)=>{for(var o in r)J.o(r,o)&&!J.o(x,o)&&Object.defineProperty(x,o,{enumerable:!0,get:r[o]})},J.o=(x,r)=>Object.prototype.hasOwnProperty.call(x,r),J.r=x=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})};var te=J("./src/index.ts");return te})())})(er);var un=er.exports;const dn=Y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,pn=Y.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`,fn=Y.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  gap: 12px;
`,hn=Y.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 26px;
  width: 264px;

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 20px 34px;
  }
  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`,mn=Y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`,vn=Y.li`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  margin-bottom: 4px;

  border-radius: 50%;
  /* border: 1px solid blue; */
  background-color: var(--white);
  /* border-radius: ${e=>e.$borderMarker?"20px":null}; */
  outline: ${e=>e.$borderMarker?"1px solid var(--orange)":null};

  @media screen and (min-width: 1440px) {
    width: 34px;
    height: 34px;
  }
`,bn=Y.div`
  color: var(--light-blue-3);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,xn=Y.div`
  color: var(--dark-blue);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,gn=Y.button`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  border: none;
  background-color: transparent;
  width: 14px;
  height: 14px;
  padding: 0;
`,yn=Y.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  width: 14px;
  height: 14px;
  padding: 0;
`,An=Y.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  display: flex;
  justify-content: space-between;

  color: var(--dark-blue);
`,Mt=Y.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,xt=Y.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  margin-left: 6px;

  color: var(--dark-blue);
`,wn=Y.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 254px;

  @media screen and (min-width: 768px) {
    width: 262px;
  }
`,Tn=Y(({className:e,...t})=>n.jsx(sn,{...t,classes:{popper:e}}))({[`& .${Oe.tooltip}`]:{width:292,height:188,backgroundColor:"#fff",borderRadius:"10px",boxShadow:"0px 4px 4px 0px rgba(64, 123, 255, 0.30)",display:"flex",padding:"24px 16px",flexDirection:"column",alignItems:"flex-start",gap:"16px",color:"var(--dark-blue)"},"@media screen and (min-width: 320px)":{[`& .${Oe.tooltip}`]:{width:280,padding:"24px 13px"}}}),Pn=()=>{const e=Re(Jt),t=Re(mr),s=Re(Gt),P=Pt(),[O,J]=F.useState(Te().daysInMonth()),[te,x]=F.useState(!1),[r,o]=F.useState(null),A=un.useMediaQuery({maxWidth:767}),w=p=>{o(r===p?null:p)},S=()=>{o(null)};F.useEffect(()=>{J(Te(e).daysInMonth());const p=Te();x(p.isSame(e,"month")),P(vr({year:Te(e).year().toString(),month:(Te(e).month()+1).toString().padStart(2,"0")}))},[e]);const i=()=>{const p=Te(e).clone().subtract(1,"months").toISOString();P(Dt(p))},l=()=>{const p=Te(e).clone().add(1,"months").toISOString();P(Dt(p))},c=Array.from({length:O},(p,u)=>u+1);return n.jsxs("div",{children:[n.jsxs(dn,{children:[n.jsx(pn,{children:"Month"}),n.jsxs(fn,{children:[n.jsx(gn,{onClick:i,children:n.jsx("svg",{width:"16px",height:"16px",children:n.jsx("use",{href:He+"#icon-left"})})}),n.jsx(xn,{children:Te(e).format("MMMM YYYY")}),n.jsx(yn,{onClick:l,disabled:te,children:n.jsx("svg",{width:"16px",height:"16px",children:n.jsx("use",{href:He+"#icon-right"})})})]})]}),n.jsx(hn,{children:c.map(p=>{let u=0,f=0;if(t.length){let C=t.find(W=>W.date===p);u=C?C.percentDailyNorm:0}const _=A&&[3,8,13,18,23,28].includes(p),d=A?_?"top":[1,2,3,7,11,12,13,17,21,22,23,27,31].includes(p)?"top-start":"top-end":[1,2,3,4,11,12,13,14,21,22,23,24,31].includes(p)?"top-start":"top-end";return n.jsx(Tn,{disableHoverListener:!0,title:n.jsxs(wn,{children:[n.jsxs(An,{children:[p+", "+Te(e).format("MMMM"),n.jsx(br,{width:"24",height:"24",onClick:S,children:n.jsx("use",{href:`${He}#icon-outline`})})]}),n.jsxs(Mt,{children:["Daily norma:",n.jsxs(xt,{children:[(s/1e3).toFixed(1),n.jsx(xt,{children:"L"})]})]}),n.jsxs(Mt,{children:["Fulfillment of the daily norm:",n.jsxs(xt,{children:[u,"%"]})]}),n.jsxs(Mt,{children:["How many servings of water:",n.jsx(xt,{children:f})]})]}),placement:d,open:r===p,onClose:()=>o(null),children:n.jsxs(mn,{onClick:()=>w(p),children:[n.jsx(vn,{$borderMarker:u<100,children:p}),n.jsxs(bn,{children:[u,"%"]})]},p)},p)})})]})},Sn=Y.button`
  border: none;
  background-color: transparent;
  color: var(--dark-blue);

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 114px;
  height: 24px;

  &:hover {
    color: var(--orange);
    transition: var(--transition);
  }
`,kn=({onClick:e})=>n.jsx(Sn,{onClick:e,children:"+ Add Water"}),_n=Y.button`
  position: relative;
  border: none;
  background-color: transparent;
  width: 16px;
  height: 16px;

  &:hover::after {
    content: "";
    position: absolute;
    left: 5px;
    bottom: -6px;
    width: 100%;
    height: 1px;
    background-color: var(--red);
    border-radius: 1px;
  }
`,jn=({onClick:e})=>n.jsx(_n,{onClick:e,children:n.jsx("svg",{width:"16px",height:"16px",children:n.jsx("use",{href:He+"#trash"})})}),Cn=Y.button`
  position: relative;
  border: none;
  background-color: transparent;
  width: 16px;
  height: 16px;

  &:hover::after {
    content: "";
    position: absolute;
    left: 5px;
    bottom: -6px;
    width: 100%;
    height: 1px;
    background-color: var(--light-blue-3);
    border-radius: 1px;
  }
`,Mn=({onClick:e})=>n.jsx(Cn,{onClick:e,children:n.jsx("svg",{width:"16px",height:"16px",children:n.jsx("use",{href:He+"#icon-edit"})})}),En=Y.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  height: 260px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`,On=Y.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
`,Rn=Y.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 12px;

  //Firefox
  scrollbar-color: var(--light-blue-3) transparent;
  scrollbar-width: thin;

  //Chrome, Safari, Opera)
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--light-blue-2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--light-blue-3);
    border-radius: 4px;
  }
`,Ln=Y.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  padding: 12px 4px;
  border-bottom: 1px solid var(--light-blue-2);
`,In=Y.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Dn=Y.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 70px;
  color: var(--dark-blue);
`,$n=Y.div`
  display: flex;
  gap: 18px;
`,Wn=()=>{var r;const e=Pt(),t=Re(Jt);Te(t).year().toString(),(Te(t).month()+1).toString().padStart(2,0),F.useEffect(()=>{e(xr())},[]);const s=Re(Lt),P=Re(Zt),O=o=>{e(ot(!s)),e(at("EditWaterForm")),e($t(o))},J=o=>{e(ot(!s)),e(at("Delete")),e($t(o))},te=()=>{e(ot(!s)),e(at("Add water"))},x=(r=P.userWaterDay)==null?void 0:r.map(({_id:o,waterVolume:A,date:w})=>n.jsxs(Ln,{children:[n.jsxs(In,{children:[n.jsx("svg",{width:"36px",height:"36px",children:n.jsx("use",{href:He+"#icon-water-glass"})}),n.jsxs(Dn,{children:[A," ml"]})," ",Te(w).utc().format("LT")]}),n.jsxs($n,{children:[n.jsx(Mn,{onClick:()=>O(o)}),n.jsx(jn,{onClick:()=>J(o)})]})]},o));return n.jsxs(En,{children:[n.jsx(On,{children:"Today"}),n.jsx(Rn,{children:x}),n.jsx(kn,{onClick:te})]})},zn=Y.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 280px;

  @media screen and (min-width: 768px) {
    width: 356px;
  }
`,Nn=Y.div`
  color: var(--dark-blue);

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,Hn=({value:e})=>{const t=[{value:0,label:n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx(Ke,{variant:"caption",children:"|"},"label1"),n.jsx(Ke,{variant:"caption",sx:{color:"var(--dark-blue)"},children:"0%"},"label2")]})},{value:50,label:n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx(Ke,{variant:"caption",children:"|"},"label1"),n.jsx(Ke,{variant:"caption",sx:{color:"var(--dark-blue)"},children:"50%"},"label2")]})},{value:100,label:n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx(Ke,{variant:"caption",children:"|"},"label1"),n.jsx(Ke,{variant:"caption",sx:{color:"var(--dark-blue)"},children:"100%"},"label2")]})}];function s(P){return`${P}%`}return n.jsxs(zn,{children:[n.jsx(Nn,{children:"Today"}),n.jsx(Ir,{sx:{marginLeft:"11px"},children:n.jsx(Gr,{sx:{margin:0,"@media screen and (min-width: 320px)":{width:"256px","& .custom-line-break":{height:"0px"}},"@media screen and (min-width: 768px)":{width:"360px","& .custom-line-break":{height:"0px"}},color:"var(--light-blue-3)","& .MuiSlider-markLabel":{color:"var(--dark-blue)"},"&.Mui-disabled":{color:"var(--light-blue-3)","& .MuiSlider-markLabel":{color:"var(--light-blue-2)",top:"19px",height:"8px"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8},"& .MuiSlider-thumb":{color:"var(--white)",border:"1px solid var(--dark-blue)",width:14,height:14},"& .MuiSlider-mark":{display:"none"}}},"aria-label":"Custom marks",value:e||0,getAriaValueText:s,marks:t,size:"small",readOnly:!0,disabled:!0})})]})},Bn="/node_front_bc_59_AnastasiiaKrtsk/assets/Desk-Botle-Home-screen@1x-5CLqQk0w.png",Fn="/node_front_bc_59_AnastasiiaKrtsk/assets/Tablet-Bottle-Home-Screen@1x-Utm8LHDz.png",Yn="/node_front_bc_59_AnastasiiaKrtsk/assets/Mobile-Bottle-home-screen@1x-LslFPxIb.png",Vn=Y.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    overflow: hidden;
    justify-content: center;
    // padding: 30px 112px;
    padding-top: 30px;
    gap: 36px;
    flex-direction: row;
  }
`,Xn=Y.div`
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 232px;

  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Yn});

  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding: 40px 32px;
    gap: 326px;

    background-position: center;
    background-image: url(${Fn});
  }

  @media screen and (min-width: 1440px) {
    padding: 0px;
    gap: 446px;
    background-position: top;
    background-image: url(${Bn});
  }
`,Un=Y.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 32px 0 40px;

  padding: 24px 8px;
  width: 280px;

  border-radius: 10px;
  background: var(--light-blue-1);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    margin: 0px;
    margin-bottom: 44px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`,Qn=Y.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 43px;
  height: 90px;

  margin: auto 0 56px;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    flex-direction: row;
    margin: 0;
  }
`,Kn=Y.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--light-blue-2);
  background: var(--white);
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  width: fit-content;
`,Jn=Y.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,Gn=Y.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 124px;
`,Zn=Y.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: var(--dark-blue);
`,qn=Y.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--light-blue-4);
  border: none;
  background: transparent;
  padding: 0;
  &:hover {
    color: var(--orange);
  }
  transition: color var(--transition);
`,eo=()=>{const e=Pt(),t=Re(Lt),s=Re(Gt),P=()=>{e(ot(!t)),e(at("DailyNorma"))},O=s/1e3;return n.jsxs(Kn,{children:[n.jsx(Gn,{children:"My daily norma"}),n.jsxs(Jn,{children:[n.jsxs(Zn,{children:[s?O:0," L"]}),n.jsx(qn,{onClick:P,children:" Edit"})]})]})},to=()=>{const e=Re(Zt),t=Pt(),s=Re(Lt),P=()=>{t(ot(!s)),t(at("Add water"))},O=(e==null?void 0:e.percentDailyNormaUser)>100?100:e==null?void 0:e.percentDailyNormaUser;return n.jsx(n.Fragment,{children:n.jsxs(Vn,{children:[n.jsxs(Xn,{children:[n.jsx(eo,{}),n.jsxs(Qn,{children:[n.jsx(Hn,{value:O}),n.jsx(cn,{onClick:P})]})]}),n.jsxs(Un,{children:[n.jsx(Wn,{}),n.jsx(Pn,{})]})]})})},ro="/node_front_bc_59_AnastasiiaKrtsk/assets/Not-Found-Bg2@1x-aD8k50Sn.png",no="/node_front_bc_59_AnastasiiaKrtsk/assets/Tablet-Background-element-Home-Screen@1x-yW-cpx_w.png",oo="data:image/png;base64,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",ao=Y.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${oo});

  @media screen and (min-width: 768px) {
    background-position: top center;
    background-image: url(${no});
  }

  @media screen and (min-width: 1440px) {
    background-position: top center;
    background-image: url(${ro});
  }
`,io=()=>n.jsx(ao,{children:n.jsx(to,{})});export{io as default};
