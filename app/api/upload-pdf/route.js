import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'data', 'pdfs.json');
const uploadsFolder = path.join(process.cwd(), 'public');

function sanitizeFilename(filename) {
  return (
    path
      .basename(filename)
      .replace(/\s+/g, '-')
      .replace(/[^A-Za-z0-9._-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^[-.]+|[-.]+$/g, '') || 'upload.pdf'
  );
}

function generateUniqueFilename(originalName) {
  const extension = path.extname(originalName) || '.pdf';
  const nameWithoutExt = path.basename(originalName, extension);
  const safeBase = sanitizeFilename(nameWithoutExt);
  const baseFileName = `${safeBase}${extension}`;
  let finalName = baseFileName;
  let counter = 1;

  while (fs.existsSync(path.join(uploadsFolder, finalName))) {
    finalName = `${safeBase}-${counter}${extension}`;
    counter += 1;
  }

  return finalName;
}

export const runtime = 'nodejs';

export async function POST(request) {
  const formData = await request.formData();
  const files = formData.getAll('pdfs').filter((file) => file && file.name);

  if (!files.length) {
    return NextResponse.json({ error: 'Please select at least one PDF file.' }, { status: 400 });
  }

  if (!fs.existsSync(uploadsFolder)) {
    fs.mkdirSync(uploadsFolder, { recursive: true });
  }

  const pdfs = fs.existsSync(dataFilePath)
    ? JSON.parse(fs.readFileSync(dataFilePath, 'utf8'))
    : [];

  const uploadedFiles = [];

  for (const file of files) {
    const fileName = file.name;
    const fileExtension = path.extname(fileName).toLowerCase();

    if (fileExtension !== '.pdf') {
      continue;
    }

    const uniqueName = generateUniqueFilename(fileName);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadsFolder, uniqueName);

    fs.writeFileSync(filePath, fileBuffer);

    const urlPath = `/${uniqueName}`;
    const title = fileName;
    const uploadedAt = new Date().toISOString();

    if (!pdfs.some((item) => item.url === urlPath)) {
      pdfs.push({ title, url: urlPath, uploadedAt });
    }

    uploadedFiles.push({ title, url: urlPath, uploadedAt });
  }

  fs.writeFileSync(dataFilePath, JSON.stringify(pdfs, null, 2), 'utf8');

  if (!uploadedFiles.length) {
    return NextResponse.json({ error: 'No valid PDF files were uploaded.' }, { status: 400 });
  }

  return NextResponse.json({ uploadedFiles });
}
