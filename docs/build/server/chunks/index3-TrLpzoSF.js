import { e as escape_html } from './escaping-CqgfEcN3.js';
import { N as NO_TRANSLATE_ATTRIBUTE } from './constants-Bz9XXnp8.js';
import { g as getContext } from './index2-DWzDfzvQ.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const PARAGLIDE_CONTEXT_KEY = {};
const getParaglideContext = () => {
  return (
    /** @type { ParaglideContext<T> | undefined}*/
    getContext(PARAGLIDE_CONTEXT_KEY)
  );
};
function getTranslationFunctions() {
  const ctx = getParaglideContext();
  function translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!ctx) return value;
    return ctx.translateHref(value, lang_value);
  }
  function handleAttributes(attrs, attribute_translations) {
    if (attrs[NO_TRANSLATE_ATTRIBUTE]) return attrs;
    for (const { attribute_name, lang_attribute_name } of attribute_translations) {
      if (attribute_name in attrs) {
        const attr2 = attrs[attribute_name];
        const lang_attr = lang_attribute_name ? attrs[lang_attribute_name] : undefined;
        attrs[attribute_name] = translateAttribute(
          attr2,
          typeof lang_attr === "string" ? lang_attr : undefined
        );
      }
    }
    return attrs;
  }
  return [translateAttribute, handleAttributes];
}

export { attr as a, getTranslationFunctions as g };
//# sourceMappingURL=index3-TrLpzoSF.js.map
