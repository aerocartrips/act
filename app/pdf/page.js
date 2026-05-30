import fs from 'fs';
import path from 'path';

const pdfDataPath = path.join(process.cwd(), 'data', 'pdfs.json');

export default function Page() {
  const pdfs = JSON.parse(fs.readFileSync(pdfDataPath, 'utf8'));
  

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">PDF Library</h1>

        {pdfs.length === 0 ? (
          <p className="text-center text-gray-600">No PDFs are available yet.</p>
        ) : (
          <div className="grid gap-4">
            {pdfs.map((pdf, index) => (
              <a
                key={index}
                href={`https://aerocartrips.com${pdf.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-gray-200 hover:border-blue-500"
              >
                <h2 className="text-lg font-semibold text-blue-600">{index+1} {pdf.title}</h2>
                <p className="text-sm text-gray-500 mt-1 break-all">{pdf.url}</p>
              </a>
            ))}
          </div>
        )}

        
      </div>
    </main>
  );
}
