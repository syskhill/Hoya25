import { c as pop, p as push } from './index2-DWzDfzvQ.js';

function DropIn($$payload, $$props) {
  push();
  $$payload.out += `<div class="drop-zone svelte-1co8651" role="button" tabindex="0"><input type="file" style="display: none;" class="svelte-1co8651"> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div><p>Drag &amp; Drop <br> ⇪ <br>to Upload File</p></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="navbar svelte-1t4e1xm"><h1 class="svelte-1t4e1xm">➪ fileMaven</h1></div> <div class="bg svelte-1t4e1xm"></div> <div class="container svelte-1t4e1xm"><h2 class="svelte-1t4e1xm">➪ Purpose</h2> <p class="svelte-1t4e1xm">This website allows you to upload a file and check its contents for any discrepancies.</p> <p class="svelte-1t4e1xm">You will receive a score and an explanation for any issues found within the file.</p> `;
  DropIn($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BO_2dmf-.js.map
