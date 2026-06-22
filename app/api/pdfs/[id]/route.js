import { NextResponse } from 'next/server';
import { getPdfById, gunzipBuffer } from '../../../../lib/mongodb';

export const runtime = 'nodejs';

export async function GET(request, { params }) {
  const { id } = params || {};
  const pdf = await getPdfById(id);

  if (!pdf) {
    return NextResponse.json({ error: 'PDF not found.' }, { status: 404 });
  }

  const compressedBuffer = Buffer.isBuffer(pdf.compressedData)
    ? pdf.compressedData
    : pdf.compressedData?.buffer
      ? Buffer.from(pdf.compressedData.buffer)
      : Buffer.from(pdf.compressedData);

  let decompressed;
  try {
    decompressed = gunzipBuffer(compressedBuffer);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to decompress PDF data.' }, { status: 500 });
  }

  const headers = new Headers({
    'Content-Type': pdf.contentType || 'application/pdf',
  });

  return new NextResponse(decompressed, {
    status: 200,
    headers,
  });
}
