import fs from 'fs';
import path from 'path';
import PdfTableClient from '../../components/PdfTableClient';

const pdfDataPath = path.join(process.cwd(), 'data', 'pdfs.json');

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const pdfs = JSON.parse(fs.readFileSync(pdfDataPath, 'utf8'));
  const order = params?.order === 'asc' ? 'asc' : 'desc';

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">PDF Library</h1>

        {pdfs.length === 0 ? (
          <p className="text-center text-gray-600">No PDFs are available yet.</p>
        ) : (
          <div className="space-y-4">
            <PdfTableClient pdfs={pdfs} initialOrder={order} />
          </div>
        )}
      </div>
    </main>
  );
}
