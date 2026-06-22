"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PdfTableClient from '../../components/PdfTableClient';

export default function Page() {
  const searchParams = useSearchParams();
  const order = searchParams?.get?.('order') === 'asc' ? 'asc' : 'desc';

  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('/api/pdfs')
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`API error ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const pdfDocs = data?.pdfs || [];
        const items = pdfDocs.map((doc) => ({
          id: doc._id?.toString?.() || doc._id,
          title: doc.title,
          url: `/api/pdfs/${doc._id}`,
          uploadedAt: doc.uploadedAt,
          originalSize: doc.originalSize,
          compressedSize: doc.compressedSize,
        }));
        setPdfs(items);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || 'Failed to load PDFs');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

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
