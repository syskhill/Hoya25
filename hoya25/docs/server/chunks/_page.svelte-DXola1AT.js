import { e as escape_html } from './escaping-CqgfEcN3.js';
import { c as pop, p as push } from './index2-DWzDfzvQ.js';
import { l as languageTag } from './i18n-oiH3siJZ.js';
import './exports-B0-_ODdN.js';
import './constants-Bz9XXnp8.js';

const hello_world$1 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Hello, ${params.name} from en!`;
const hello_world = /* @__NO_SIDE_EFFECTS__ */ (params, options = {}) => {
  return {
    en: hello_world$1
  }[options.languageTag ?? languageTag()](params);
};
function _page($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(/* @__PURE__ */ hello_world({ name: "SvelteKit User" }))}</h1> <div><button>en</button></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DXola1AT.js.map
