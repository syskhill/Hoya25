import { e as ensure_array_like } from './index2-DWzDfzvQ.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload) {
  let safetyScore = "85";
  let tests = [
    { name: "Test 1", passed: true },
    { name: "Test 2", passed: false },
    { name: "Test 3", passed: true }
  ];
  const each_array = ensure_array_like(tests);
  $$payload.out += `<div class="navbar svelte-h59udd"><h1 class="svelte-h59udd">➪ fileMaven</h1></div> <div class="container svelte-h59udd"><h2 class="svelte-h59udd">➪Safety Score: <i class="underline svelte-h59udd">${escape_html(safetyScore)}</i></h2> <h3 class="svelte-h59udd">Checklist</h3> <ul class="svelte-h59udd"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let test = each_array[$$index];
    $$payload.out += `<li class="svelte-h59udd">${escape_html(test.name)} : <i class="svelte-h59udd">${escape_html(test.passed ? "Passed" : "Failed")}</i></li>`;
  }
  $$payload.out += `<!--]--></ul> <button class="home-button svelte-h59udd">Go Back to Home</button></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DU7tllSI.js.map
