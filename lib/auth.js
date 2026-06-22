import jwt from 'jsonwebtoken';
import { getDatabase } from './mongodb';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'authToken';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
};

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET environment variable.');
}

export async function hashPassword(password) {
  const { hash } = await import('bcrypt');
  return hash(password, 12);
}

export async function verifyPassword(password, passwordHash) {
  const { compare } = await import('bcrypt');
  return compare(password, passwordHash);
}

export function generateAuthToken(user) {
  return jwt.sign(
    {
      userId: user._id?.toString(),
      username: user.username,
      email: user.email,
      role: user.role || 'user',
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyAuthToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function getUserByUsername(username) {
  const db = await getDatabase();
  return db.collection('users').findOne({ username });
}

export async function getUserById(id) {
  const { ObjectId } = await import('mongodb');
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getDatabase();
  return db.collection('users').findOne({ _id: new ObjectId(id) });
}

export async function createUser({ username, email, password, role = 'user' }) {
  const db = await getDatabase();
  const existing = await db.collection('users').findOne({ username });
  if (existing) {
    throw new Error('A user with that username already exists.');
  }

  const passwordHash = await hashPassword(password);
  const result = await db.collection('users').insertOne({
    username,
    email: email || null,
    passwordHash,
    role,
    createdAt: new Date(),
  });

  return { _id: result.insertedId, username, email: email || null, role };
}

export function getAuthTokenFromRequest(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  const cookieValue = request.cookies?.get?.(COOKIE_NAME)?.value;
  if (cookieValue) {
    return cookieValue;
  }

  const rawCookie = request.headers.get('cookie');
  if (!rawCookie) {
    return null;
  }

  const cookie = rawCookie
    .split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${COOKIE_NAME}=`));

  return cookie ? cookie.split('=')[1] : null;
}

export async function requireAuth(request, requiredRole) {
  const token = getAuthTokenFromRequest(request);
  if (!token) {
    return null;
  }

  const payload = verifyAuthToken(token);
  if (!payload?.userId) {
    return null;
  }

  const user = await getUserById(payload.userId);
  if (!user) return null;
  if (requiredRole && user.role !== requiredRole) return null;
  return user;
}

export function getAuthCookieOptions() {
  return COOKIE_OPTIONS;
}

export function getLogoutCookieOptions() {
  return {
    ...COOKIE_OPTIONS,
    maxAge: 0,
  };
}
