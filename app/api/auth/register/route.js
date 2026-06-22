import { NextResponse } from 'next/server';
import { createUser } from '../../../../lib/auth';

export const runtime = 'nodejs';

export async function POST(request) {
  const ADMIN_SECRET = process.env.ADMIN_REGISTRATION_SECRET;
  if (!ADMIN_SECRET) {
    return NextResponse.json({ error: 'Registration is disabled.' }, { status: 403 });
  }

  const body = await request.json();
  const provided = body?.secret || request.headers.get('x-admin-secret');
  if (!provided || provided !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Invalid registration secret.' }, { status: 403 });
  }

  const username = body?.username?.trim();
  const password = body?.password;
  const email = body?.email?.trim?.() || null;
  const role = body?.role || 'admin';

  if (!username || !password) {
    return NextResponse.json({ error: 'username and password required.' }, { status: 400 });
  }

  try {
    const user = await createUser({ username, email, password, role });
    return NextResponse.json({ success: true, user: { username: user.username, role: user.role } });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Failed to create user' }, { status: 400 });
  }
}
