import { NextResponse } from 'next/server';
import { getUserByUsername, verifyPassword, generateAuthToken, getAuthCookieOptions } from '../../../../lib/auth';

export const runtime = 'nodejs';

export async function POST(request) {
  const body = await request.json();
  const username = body?.username?.trim();
  const password = body?.password;

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
  }

  const user = await getUserByUsername(username);
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
  }

  const passwordIsValid = await verifyPassword(password, user.passwordHash);
  if (!passwordIsValid) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
  }

  const token = generateAuthToken(user);
  const response = NextResponse.json({
    success: true,
    user: {
      username: user.username,
      email: user.email || null,
      role: user.role || 'user',
    },
  });

  response.cookies.set('authToken', token, getAuthCookieOptions());
  return response;
}
