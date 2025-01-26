import { i as invalidateSession, d as deleteSessionTokenCookie } from './auth--rnaK4JL.js';
import { r as redirect, f as fail } from './shared-server-Bjgho-38.js';
import 'drizzle-orm';
import '@oslojs/crypto/sha2';
import '@oslojs/encoding';
import 'drizzle-orm/libsql';
import '@libsql/client';
import 'drizzle-orm/sqlite-core';

const load = async (event) => {
  if (!event.locals.user) {
    return redirect(302, "/demo/lucia/login");
  }
  return { user: event.locals.user };
};
const actions = {
  logout: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await invalidateSession(event.locals.session.id);
    deleteSessionTokenCookie(event);
    return redirect(302, "/demo/lucia/login");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-bxWlJZ06.js')).default;
const server_id = "src/routes/demo/lucia/+page.server.ts";
const imports = ["_app/immutable/nodes/6.4WXa1qr-.js","_app/immutable/chunks/DmCwL4lx.js","_app/immutable/chunks/hSpz0eEQ.js","_app/immutable/chunks/DLlVTwdE.js","_app/immutable/chunks/CCJD8-Tk.js","_app/immutable/chunks/CwjIEIhY.js","_app/immutable/chunks/QitHyaU9.js","_app/immutable/chunks/CfhBSCbw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DY8vwteB.js.map
