const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B2c3Hku4.js","../chunks/DmCwL4lx.js","../chunks/hSpz0eEQ.js","../nodes/1.DSoyZxZ3.js","../chunks/CnPSaHd4.js","../chunks/DLlVTwdE.js","../chunks/C7FqL8P0.js","../chunks/BhBc5qiS.js","../chunks/CwjIEIhY.js","../chunks/QitHyaU9.js","../nodes/2.BkCtIf-I.js","../chunks/CyWEXB8q.js","../chunks/Bl0YDEcl.js","../assets/2.CbUwVaNH.css","../nodes/3.mFwgvC9M.js","../nodes/4.CHXP4Bjq.js","../assets/4.D88pvtLg.css","../nodes/5.B70sKLX1.js","../chunks/CfhBSCbw.js","../nodes/6.4WXa1qr-.js","../chunks/CCJD8-Tk.js","../nodes/7.Cf976t27.js","../nodes/8.Y84DSZ5v.js","../chunks/CZXav-bp.js","../nodes/9.BO_oCCJ0.js","../assets/9.6JC33wJW.css"])))=>i.map(i=>d[i]);
var $=t=>{throw TypeError(t)};var p=(t,e,i)=>e.has(t)||$("Cannot "+i);var P=(t,e,i)=>(p(t,e,"read from private field"),i?i.call(t):e.get(t)),G=(t,e,i)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),M=(t,e,i,d)=>(p(t,e,"write to private field"),d?d.call(t,i):e.set(t,i),i);import{i as oe}from"../chunks/CZXav-bp.js";import{S as Y,al as le,am as ce,a4 as x,an as de,b as w,ao as z,U as R,g as y,W as X,ap as _e,O as ve,a0 as me,i as ee,j as he,h as ge,E as ye,v as Ee,x as be,w as Pe,aq as Re,ar as we,as as Oe,at as Ie,u as te,au as Ae,av as Te,aa as re,aw as Se,J as Le,ax as De,ay as xe,az as ie,G as j,y as Ce,a3 as ue,aA as Ne,aB as Ve,ac as ke,p as Be,z as je,A as qe,aC as Ue,f as U,s as Fe,a as Ye,aD as K,c as ze,r as Ge,t as Me}from"../chunks/hSpz0eEQ.js";import{h as Ke,m as We,u as Ze,s as He}from"../chunks/DLlVTwdE.js";import{a as V,t as fe,c as W,d as Je}from"../chunks/DmCwL4lx.js";import{i as Z}from"../chunks/CyWEXB8q.js";import{b as H}from"../chunks/Bl0YDEcl.js";import{o as Qe}from"../chunks/QitHyaU9.js";function C(t,e=null,i){if(typeof t!="object"||t===null||Y in t)return t;const d=ve(t);if(d!==le&&d!==ce)return t;var s=new Map,v=me(t),u=x(0);v&&s.set("length",x(t.length));var a;return new Proxy(t,{defineProperty(f,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&de();var o=s.get(r);return o===void 0?(o=x(n.value),s.set(r,o)):w(o,C(n.value,a)),!0},deleteProperty(f,r){var n=s.get(r);if(n===void 0)r in f&&s.set(r,x(R));else{if(v&&typeof r=="string"){var o=s.get("length"),l=Number(r);Number.isInteger(l)&&l<o.v&&w(o,l)}w(n,R),ne(u)}return!0},get(f,r,n){var h;if(r===Y)return t;var o=s.get(r),l=r in f;if(o===void 0&&(!l||(h=z(f,r))!=null&&h.writable)&&(o=x(C(l?f[r]:R,a)),s.set(r,o)),o!==void 0){var c=y(o);return c===R?void 0:c}return Reflect.get(f,r,n)},getOwnPropertyDescriptor(f,r){var n=Reflect.getOwnPropertyDescriptor(f,r);if(n&&"value"in n){var o=s.get(r);o&&(n.value=y(o))}else if(n===void 0){var l=s.get(r),c=l==null?void 0:l.v;if(l!==void 0&&c!==R)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return n},has(f,r){var c;if(r===Y)return!0;var n=s.get(r),o=n!==void 0&&n.v!==R||Reflect.has(f,r);if(n!==void 0||X!==null&&(!o||(c=z(f,r))!=null&&c.writable)){n===void 0&&(n=x(o?C(f[r],a):R),s.set(r,n));var l=y(n);if(l===R)return!1}return o},set(f,r,n,o){var b;var l=s.get(r),c=r in f;if(v&&r==="length")for(var h=n;h<l.v;h+=1){var _=s.get(h+"");_!==void 0?w(_,R):h in f&&(_=x(R),s.set(h+"",_))}l===void 0?(!c||(b=z(f,r))!=null&&b.writable)&&(l=x(void 0),w(l,C(n,a)),s.set(r,l)):(c=l.v!==R,w(l,C(n,a)));var m=Reflect.getOwnPropertyDescriptor(f,r);if(m!=null&&m.set&&m.set.call(o,n),!c){if(v&&typeof r=="string"){var I=s.get("length"),A=Number(r);Number.isInteger(A)&&A>=I.v&&w(I,A+1)}ne(u)}return!0},ownKeys(f){y(u);var r=Reflect.ownKeys(f).filter(l=>{var c=s.get(l);return c===void 0||c.v!==R});for(var[n,o]of s)o.v!==R&&!(n in f)&&r.push(n);return r},setPrototypeOf(){_e()}})}function ne(t,e=1){w(t,t.v+e)}function J(t,e,i){ee&&he();var d=t,s,v;ge(()=>{s!==(s=e())&&(v&&(Pe(v),v=null),s&&(v=Ee(()=>i(d,s))))},ye),ee&&(d=be)}let F=!1;function Xe(t){var e=F;try{return F=!1,[t(),F]}finally{F=e}}function ae(t){for(var e=X,i=X;e!==null&&!(e.f&(Ae|Te));)e=e.parent;try{return re(e),t()}finally{re(i)}}function Q(t,e,i,d){var k;var s=(i&Se)!==0,v=!Le||(i&De)!==0,u=(i&xe)!==0,a=(i&Ne)!==0,f=!1,r;u?[r,f]=Xe(()=>t[e]):r=t[e];var n=Y in t||ie in t,o=u&&(((k=z(t,e))==null?void 0:k.set)??(n&&e in t&&(g=>t[e]=g)))||void 0,l=d,c=!0,h=!1,_=()=>(h=!0,c&&(c=!1,a?l=te(d):l=d),l);r===void 0&&d!==void 0&&(o&&v&&Re(),r=_(),o&&o(r));var m;if(v)m=()=>{var g=t[e];return g===void 0?_():(c=!0,h=!1,g)};else{var I=ae(()=>(s?j:Ce)(()=>t[e]));I.f|=we,m=()=>{var g=y(I);return g!==void 0&&(l=void 0),g===void 0?l:g}}if(!(i&Oe))return m;if(o){var A=t.$$legacy;return function(g,D){return arguments.length>0?((!v||!D||A||f)&&o(D?m():g),g):m()}}var b=!1,S=!1,E=ue(r),N=ae(()=>j(()=>{var g=m(),D=y(E);return b?(b=!1,S=!0,D):(S=!1,E.v=g)}));return s||(N.equals=Ie),function(g,D){if(arguments.length>0){const B=D?y(N):v&&u?C(g):g;return N.equals(B)||(b=!0,w(E,B),h&&l!==void 0&&(l=B),te(()=>y(N))),g}return y(N)}}function $e(t){return class extends pe{constructor(e){super({component:t,...e})}}}var L,O;class pe{constructor(e){G(this,L);G(this,O);var v;var i=new Map,d=(u,a)=>{var f=ue(a);return i.set(u,f),f};const s=new Proxy({...e.props||{},$$events:{}},{get(u,a){return y(i.get(a)??d(a,Reflect.get(u,a)))},has(u,a){return a===ie?!0:(y(i.get(a)??d(a,Reflect.get(u,a))),Reflect.has(u,a))},set(u,a,f){return w(i.get(a)??d(a,f),f),Reflect.set(u,a,f)}});M(this,O,(e.hydrate?Ke:We)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((v=e==null?void 0:e.props)!=null&&v.$$host)||e.sync===!1)&&Ve(),M(this,L,s.$$events);for(const u of Object.keys(P(this,O)))u==="$set"||u==="$destroy"||u==="$on"||ke(this,u,{get(){return P(this,O)[u]},set(a){P(this,O)[u]=a},enumerable:!0});P(this,O).$set=u=>{Object.assign(s,u)},P(this,O).$destroy=()=>{Ze(P(this,O))}}$set(e){P(this,O).$set(e)}$on(e,i){P(this,L)[e]=P(this,L)[e]||[];const d=(...s)=>i.call(this,...s);return P(this,L)[e].push(d),()=>{P(this,L)[e]=P(this,L)[e].filter(s=>s!==d)}}$destroy(){P(this,O).$destroy()}}L=new WeakMap,O=new WeakMap;const et="modulepreload",tt=function(t,e){return new URL(t,e).href},se={},T=function(e,i,d){let s=Promise.resolve();if(i&&i.length>0){const u=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(i.map(r=>{if(r=tt(r,d),r in se)return;se[r]=!0;const n=r.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(!!d)for(let h=u.length-1;h>=0;h--){const _=u[h];if(_.href===r&&(!n||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":et,n||(c.as="script"),c.crossOrigin="",c.href=r,f&&c.setAttribute("nonce",f),document.head.appendChild(c),n)return new Promise((h,_)=>{c.addEventListener("load",h),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})}))}function v(u){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=u,window.dispatchEvent(a),!a.defaultPrevented)throw u}return s.then(u=>{for(const a of u||[])a.status==="rejected"&&v(a.reason);return e().catch(v)})},rt=oe.reroute(),ht={};var nt=fe('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),at=fe("<!> <!>",1);function st(t,e){Be(e,!0);let i=Q(e,"components",23,()=>[]),d=Q(e,"data_0",3,null),s=Q(e,"data_1",3,null);je(()=>e.stores.page.set(e.page)),qe(()=>{e.stores,e.page,e.constructors,i(),e.form,d(),s(),e.stores.page.notify()});let v=K(!1),u=K(!1),a=K(null);Qe(()=>{const _=e.stores.page.subscribe(()=>{y(v)&&(w(u,!0),Ue().then(()=>{w(a,C(document.title||"untitled page"))}))});return w(v,!0),_});const f=j(()=>e.constructors[1]);var r=at(),n=U(r);{var o=_=>{var m=W();const I=j(()=>e.constructors[0]);var A=U(m);J(A,()=>y(I),(b,S)=>{H(S(b,{get data(){return d()},get form(){return e.form},children:(E,N)=>{var k=W(),g=U(k);J(g,()=>y(f),(D,B)=>{H(B(D,{get data(){return s()},get form(){return e.form}}),q=>i()[1]=q,()=>{var q;return(q=i())==null?void 0:q[1]})}),V(E,k)},$$slots:{default:!0}}),E=>i()[0]=E,()=>{var E;return(E=i())==null?void 0:E[0]})}),V(_,m)},l=_=>{var m=W();const I=j(()=>e.constructors[0]);var A=U(m);J(A,()=>y(I),(b,S)=>{H(S(b,{get data(){return d()},get form(){return e.form}}),E=>i()[0]=E,()=>{var E;return(E=i())==null?void 0:E[0]})}),V(_,m)};Z(n,_=>{e.constructors[1]?_(o):_(l,!1)})}var c=Fe(n,2);{var h=_=>{var m=nt(),I=ze(m);{var A=b=>{var S=Je();Me(()=>He(S,y(a))),V(b,S)};Z(I,b=>{y(u)&&b(A)})}Ge(m),V(_,m)};Z(c,_=>{y(v)&&_(h)})}V(t,r),Ye()}const gt=$e(st),yt=[()=>T(()=>import("../nodes/0.B2c3Hku4.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>T(()=>import("../nodes/1.DSoyZxZ3.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9]),import.meta.url),()=>T(()=>import("../nodes/2.BkCtIf-I.js"),__vite__mapDeps([10,1,2,4,6,5,9,8,11,12,13]),import.meta.url),()=>T(()=>import("../nodes/3.mFwgvC9M.js"),__vite__mapDeps([14,1,2,4,5,11,6,9]),import.meta.url),()=>T(()=>import("../nodes/4.CHXP4Bjq.js"),__vite__mapDeps([15,1,2,4,6,5,11,12,16]),import.meta.url),()=>T(()=>import("../nodes/5.B70sKLX1.js"),__vite__mapDeps([17,1,2,4,18,6]),import.meta.url),()=>T(()=>import("../nodes/6.4WXa1qr-.js"),__vite__mapDeps([19,1,2,5,20,8,9,18]),import.meta.url),()=>T(()=>import("../nodes/7.Cf976t27.js"),__vite__mapDeps([21,1,2,5,20,8,9,18]),import.meta.url),()=>T(()=>import("../nodes/8.Y84DSZ5v.js"),__vite__mapDeps([22,1,2,4,5,6,23,8,9,7]),import.meta.url),()=>T(()=>import("../nodes/9.BO_oCCJ0.js"),__vite__mapDeps([24,1,2,4,5,25]),import.meta.url)],Et=[],bt={"/":[2],"/backendTest":[3],"/dataTransfer":[4],"/demo":[5],"/demo/lucia":[-7],"/demo/lucia/login":[-8],"/demo/paraglide":[8],"/results":[9]},it={handleError:({error:t})=>{console.error(t)},reroute:rt,transport:{}},ut=Object.fromEntries(Object.entries(it.transport).map(([t,e])=>[t,e.decode])),Pt=!1,Rt=(t,e)=>ut[t](e);export{Rt as decode,ut as decoders,bt as dictionary,Pt as hash,it as hooks,ht as matchers,yt as nodes,gt as root,Et as server_loads};
