import { NextResponse } from 'next/server';
import { getAllPdfs } from '../../../lib/mongodb';

export const runtime = 'nodejs';

export async function GET(request) {
  try {
    const pdfs = await getAllPdfs();
    return NextResponse.json({ pdfs });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Failed to fetch PDFs' }, { status: 500 });
  }
}
