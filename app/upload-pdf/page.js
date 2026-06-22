"use client";

"use client";

import { useEffect, useState } from 'react';
import PdfTableClient from '../../components/PdfTableClient';

const HARDCODED_USERNAME = 'admin150';
const HARDCODED_PASSWORD = 'adminisok';

export default function UploadPdfPage() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [pdfs, setPdfs] = useState([]);
  const [loadingPdfs, setLoadingPdfs] = useState(false);
  const [pdfError, setPdfError] = useState('');

  function handleLoginSubmit(event) {
    event.preventDefault();
    setLoginError('');

    if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
      setIsLoggedIn(true);
      setMessage('');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  }

  async function loadPdfs() {
    setLoadingPdfs(true);
    setPdfError('');

    try {
      const response = await fetch('/api/pdfs');
      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error || 'Unable to load PDFs.');
      }
      const data = await response.json();
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
    } catch (err) {
      setPdfError(err.message || 'Failed to load PDFs.');
      setPdfs([]);
    } finally {
      setLoadingPdfs(false);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      loadPdfs();
    }
  }, [isLoggedIn]);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/upload-pdf', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || 'Unable to upload PDF files.');
      } else {
        setMessage(`Uploaded ${result.uploadedFiles.length} PDF(s) successfully.`);
        form.reset();
        await loadPdfs();
      }
    } catch (error) {
      setMessage('Upload failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDeletePdf(id) {
    setMessage('');
    try {
      const response = await fetch(`/api/pdfs/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error || 'Unable to delete the PDF.');
      } else {
        setMessage('PDF deleted successfully.');
        await loadPdfs();
      }
    } catch (error) {
      setMessage('Delete failed. Please try again.');
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Upload PDF Files</h1>

        {!isLoggedIn ? (
          <div className="space-y-6 bg-white shadow rounded-xl p-8">
            <p className="text-center text-gray-600 mb-4">
              Please sign in with the hardcoded credentials to upload and manage PDFs.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2 text-sm"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Password
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2 text-sm"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
              >
                Log in
              </button>

              {loginError ? (
                <p className="text-sm text-center text-red-600">{loginError}</p>
              ) : null}
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4 bg-white shadow rounded-xl p-8">
              <p className="text-center text-gray-600">
                You are signed in. Upload one or more PDF files and manage them below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block text-sm font-medium text-gray-700">
                  Choose PDF files
                  <input
                    name="pdfs"
                    type="file"
                    accept="application/pdf"
                    multiple
                    className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md p-2"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-blue-700 transition"
                >
                  {isSubmitting ? 'Uploading...' : 'Upload PDFs'}
                </button>

                {message ? (
                  <p className="text-center text-sm text-gray-700">{message}</p>
                ) : null}
              </form>
            </div>

            <div className="space-y-4 bg-white shadow rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-center">PDF Library</h2>
              {loadingPdfs ? (
                <p className="text-center text-gray-600">Loading PDFs…</p>
              ) : pdfError ? (
                <p className="text-center text-red-600">{pdfError}</p>
              ) : pdfs.length === 0 ? (
                <p className="text-center text-gray-600">No PDFs are available yet.</p>
              ) : (
                <PdfTableClient pdfs={pdfs} onDelete={handleDeletePdf} />
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
