import { verify, hash } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { r as redirect, f as fail } from './shared-server-Bjgho-38.js';
import { eq } from 'drizzle-orm';
import { b as db, u as user, g as generateSessionToken, c as createSession, a as setSessionTokenCookie } from './auth--rnaK4JL.js';
import '@oslojs/crypto/sha2';
import 'drizzle-orm/libsql';
import '@libsql/client';
import 'drizzle-orm/sqlite-core';

const load = async (event) => {
  if (event.locals.user) {
    return redirect(302, "/demo/lucia");
  }
  return {};
};
const actions = {
  login: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (!validateUsername(username)) {
      return fail(400, {
        message: "Invalid username (min 3, max 31 characters, alphanumeric only)"
      });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: "Invalid password (min 6, max 255 characters)" });
    }
    const results = await db.select().from(user).where(eq(user.username, username));
    const existingUser = results.at(0);
    if (!existingUser) {
      return fail(400, { message: "Incorrect username or password" });
    }
    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });
    if (!validPassword) {
      return fail(400, { message: "Incorrect username or password" });
    }
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    setSessionTokenCookie(event, sessionToken, session.expiresAt);
    return redirect(302, "/demo/lucia");
  },
  register: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (!validateUsername(username)) {
      return fail(400, { message: "Invalid username" });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: "Invalid password" });
    }
    const userId = generateUserId();
    const passwordHash = await hash(password, {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });
    try {
      await db.insert(user).values({ id: userId, username, passwordHash });
      const sessionToken = generateSessionToken();
      const session = await createSession(sessionToken, userId);
      setSessionTokenCookie(event, sessionToken, session.expiresAt);
    } catch (e) {
      return fail(500, { message: "An error has occurred" });
    }
    return redirect(302, "/demo/lucia");
  }
};
function generateUserId() {
  const bytes = crypto.getRandomValues(new Uint8Array(15));
  const id = encodeBase32LowerCase(bytes);
  return id;
}
function validateUsername(username) {
  return typeof username === "string" && username.length >= 3 && username.length <= 31 && /^[a-z0-9_-]+$/.test(username);
}
function validatePassword(password) {
  return typeof password === "string" && password.length >= 6 && password.length <= 255;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-XvxKU6iI.js')).default;
const server_id = "src/routes/demo/lucia/login/+page.server.ts";
const imports = ["_app/immutable/nodes/7.Cf976t27.js","_app/immutable/chunks/DmCwL4lx.js","_app/immutable/chunks/hSpz0eEQ.js","_app/immutable/chunks/DLlVTwdE.js","_app/immutable/chunks/CCJD8-Tk.js","_app/immutable/chunks/CwjIEIhY.js","_app/immutable/chunks/QitHyaU9.js","_app/immutable/chunks/CfhBSCbw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-Bv-YxVBf.js.map
