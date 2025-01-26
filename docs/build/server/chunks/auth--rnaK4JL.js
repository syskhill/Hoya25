import { eq } from 'drizzle-orm';
import { sha256 } from '@oslojs/crypto/sha2';
import { encodeBase64url, encodeHexLowerCase } from '@oslojs/encoding';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { d as private_env } from './shared-server-Bjgho-38.js';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

if (!private_env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const client = createClient({ url: private_env.DATABASE_URL });
const db = drizzle(client);
const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  age: integer("age"),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull()
});
const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => user.id),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
});
const DAY_IN_MS = 1e3 * 60 * 60 * 24;
const sessionCookieName = "auth-session";
function generateSessionToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(18));
  const token = encodeBase64url(bytes);
  return token;
}
async function createSession(token, userId) {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session$1 = {
    id: sessionId,
    userId,
    expiresAt: new Date(Date.now() + DAY_IN_MS * 30)
  };
  await db.insert(session).values(session$1);
  return session$1;
}
async function validateSessionToken(token) {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const [result] = await db.select({
    // Adjust user table here to tweak returned data
    user: { id: user.id, username: user.username },
    session
  }).from(session).innerJoin(user, eq(session.userId, user.id)).where(eq(session.id, sessionId));
  if (!result) {
    return { session: null, user: null };
  }
  const { session: session$1, user: user$1 } = result;
  const sessionExpired = Date.now() >= session$1.expiresAt.getTime();
  if (sessionExpired) {
    await db.delete(session).where(eq(session.id, session$1.id));
    return { session: null, user: null };
  }
  const renewSession = Date.now() >= session$1.expiresAt.getTime() - DAY_IN_MS * 15;
  if (renewSession) {
    session$1.expiresAt = new Date(Date.now() + DAY_IN_MS * 30);
    await db.update(session).set({ expiresAt: session$1.expiresAt }).where(eq(session.id, session$1.id));
  }
  return { session: session$1, user: user$1 };
}
async function invalidateSession(sessionId) {
  await db.delete(session).where(eq(session.id, sessionId));
}
function setSessionTokenCookie(event, token, expiresAt) {
  event.cookies.set(sessionCookieName, token, {
    expires: expiresAt,
    path: "/"
  });
}
function deleteSessionTokenCookie(event) {
  event.cookies.delete(sessionCookieName, {
    path: "/"
  });
}

export { setSessionTokenCookie as a, db as b, createSession as c, deleteSessionTokenCookie as d, generateSessionToken as g, invalidateSession as i, sessionCookieName as s, user as u, validateSessionToken as v };
//# sourceMappingURL=auth--rnaK4JL.js.map
