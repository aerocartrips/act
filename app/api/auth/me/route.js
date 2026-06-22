import { NextResponse } from 'next/server';
import { requireAuth } from '../../../../lib/auth';

export const runtime = 'nodejs';

export async function GET(request) {
  const user = await requireAuth(request);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      username: user.username,
      email: user.email || null,
      role: user.role || 'user',
    },
  });
}

