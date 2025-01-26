import { i as i18n } from './i18n-oiH3siJZ.js';
import { s as sessionCookieName, v as validateSessionToken, a as setSessionTokenCookie, d as deleteSessionTokenCookie } from './auth--rnaK4JL.js';
import './exports-B0-_ODdN.js';
import './constants-Bz9XXnp8.js';
import './index2-DWzDfzvQ.js';
import 'drizzle-orm';
import '@oslojs/crypto/sha2';
import '@oslojs/encoding';
import 'drizzle-orm/libsql';
import '@libsql/client';
import './shared-server-Bjgho-38.js';
import 'drizzle-orm/sqlite-core';

function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const handleAuth = async ({ event, resolve }) => {
  const sessionToken = event.cookies.get(sessionCookieName);
  if (!sessionToken) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }
  const { session, user } = await validateSessionToken(sessionToken);
  if (session) {
    setSessionTokenCookie(event, sessionToken, session.expiresAt);
  } else {
    deleteSessionTokenCookie(event);
  }
  event.locals.user = user;
  event.locals.session = session;
  return resolve(event);
};
const handleParaglide = i18n.handle();
const handle = sequence(handleAuth, handleParaglide);

export { handle };
//# sourceMappingURL=hooks.server-DpDMY-Iw.js.map
