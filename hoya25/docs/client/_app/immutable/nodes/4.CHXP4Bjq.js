import{a as p,t as c}from"../chunks/DmCwL4lx.js";import"../chunks/CnPSaHd4.js";import{p as _,a as y,s as u,g as n,c as g,r as h,t as C,m as F,b as m,f as E}from"../chunks/hSpz0eEQ.js";import{i as D}from"../chunks/C7FqL8P0.js";import{e as r,s as M}from"../chunks/DLlVTwdE.js";import{i as N}from"../chunks/CyWEXB8q.js";import{b as O}from"../chunks/Bl0YDEcl.js";var U=c('<div class="file-name svelte-1co8651"> </div>'),Y=c("<div><p>Drag & Drop <br> ⇪ <br>to Upload File</p></div>"),j=c('<div class="drop-zone svelte-1co8651" role="button" tabindex="0"><input type="file" style="display: none;" class="svelte-1co8651"> <!></div>');function q(d,v){_(v,!1);let t=null,s=F(null),i=F(null);const k=e=>{e.preventDefault();const a=e.dataTransfer;a&&a.files.length&&(t=a.files[0],m(i,t.name),console.log("File dropped:",t.name),x(t))},w=e=>{e.preventDefault()},I=e=>{const a=e.target;a&&a.files&&a.files.length&&(t=a.files[0],m(i,t.name),console.log("File selected:",t.name),x(t))},b=()=>{n(s)&&n(s).click()},x=async e=>{new FormData().append("file",e),await new Promise(o=>setTimeout(o,1e3)),console.log("File uploaded:",e.name)};D();var l=j(),f=g(l);O(f,e=>m(s,e),()=>n(s));var T=u(f,2);{var P=e=>{var a=U(),o=g(a,!0);h(a),C(()=>M(o,n(i))),p(e,a)},z=e=>{var a=Y();p(e,a)};N(T,e=>{n(i)?e(P):e(z,!1)})}h(l),r("change",f,I),r("drop",l,k),r("dragover",l,w),r("click",l,b),r("keydown",l,e=>{(e.key==="Enter"||e.key===" ")&&b()}),p(d,l),y()}var A=c('<div class="navbar svelte-1t4e1xm"><h1 class="svelte-1t4e1xm">➪ fileMaven</h1></div> <div class="bg svelte-1t4e1xm"></div> <div class="container svelte-1t4e1xm"><h2 class="svelte-1t4e1xm">➪ Purpose</h2> <p class="svelte-1t4e1xm">This website allows you to upload a file and check its contents for any discrepancies.</p> <p class="svelte-1t4e1xm">You will receive a score and an explanation for any issues found within the file.</p> <!></div>',1);function R(d,v){_(v,!1),D();var t=A(),s=u(E(t),4),i=u(g(s),6);q(i,{}),h(s),p(d,t),y()}export{R as component};
