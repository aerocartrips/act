import { NextResponse } from 'next/server';
import { getLogoutCookieOptions } from '../../../../lib/auth';

export const runtime = 'nodejs';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('authToken', '', getLogoutCookieOptions());
  return response;
}
