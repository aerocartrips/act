import path from 'path';
import { NextResponse } from 'next/server';
import { savePdf } from '../../../lib/mongodb';

export const runtime = 'nodejs';

export async function POST(request) {
  const formData = await request.formData();
  const files = formData.getAll('pdfs').filter((file) => file && file.name);

  if (!files.length) {
    return NextResponse.json({ error: 'Please select at least one PDF file.' }, { status: 400 });
  }

  const uploadedFiles = [];

  for (const file of files) {
    const fileName = file.name;
    const fileExtension = path.extname(fileName).toLowerCase();

    if (fileExtension !== '.pdf') {
      continue;
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const saved = await savePdf({
      title: fileName,
      filename: fileName,
      contentType: file.type || 'application/pdf',
      buffer: fileBuffer,
    });

    uploadedFiles.push({
      title: saved.title,
      id: saved._id.toString(),
      url: `/api/pdfs/${saved._id.toString()}`,
      uploadedAt: saved.uploadedAt.toISOString(),
    });
  }

  if (!uploadedFiles.length) {
    return NextResponse.json({ error: 'No valid PDF files were uploaded.' }, { status: 400 });
  }

  return NextResponse.json({ uploadedFiles });
}
