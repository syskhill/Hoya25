import { g as getTranslationFunctions, a as attr } from './index3-TrLpzoSF.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { c as pop, p as push } from './index2-DWzDfzvQ.js';
import './constants-Bz9XXnp8.js';

function _page($$payload, $$props) {
  push();
  let { form } = $$props;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<h1>Login/Register</h1> <form method="post"${attr("action", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`?/login`, undefined))}><label>Username <input name="username"></label> <label>Password <input type="password" name="password"></label> <button>Login</button> <button${attr("formaction", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`?/register`, undefined))}>Register</button></form> <p style="color: red">${escape_html(form?.message ?? "")}</p>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-XvxKU6iI.js.map
