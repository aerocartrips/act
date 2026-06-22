import React, { Suspense } from 'react';
import PdfPageClient from './PdfPageClient';

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-100 py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">PDF Library</h1>
            <p className="text-center text-gray-600">Loading PDF library...</p>
          </div>
        </main>
      }
    >
      <PdfPageClient />
    </Suspense>
  );
}
