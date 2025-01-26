import { g as getTranslationFunctions, a as attr } from './index3-TrLpzoSF.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { c as pop, p as push } from './index2-DWzDfzvQ.js';
import './constants-Bz9XXnp8.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<h1>Hi, ${escape_html(data.user.username)}!</h1> <p>Your user ID is ${escape_html(data.user.id)}.</p> <form method="post"${attr("action", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`?/logout`, undefined))}><button>Sign out</button></form>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-bxWlJZ06.js.map
