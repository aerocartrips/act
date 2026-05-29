"use client";

import { useState } from 'react';

export default function UploadPdfPage() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setMessage(`Uploaded ${result.uploadedFiles.length} PDF(s) successfully. Refresh /pdf to view them.`);
        form.reset();
      }
    } catch (error) {
      setMessage('Upload failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Upload PDF Files</h1>
        <p className="text-center text-gray-600 mb-8">
          Select one or more PDF files and upload them. Uploaded PDFs are stored in the public folder and listed on the&nbsp;
          <a href="/pdf" className="text-blue-600 underline">/pdf</a> page.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow rounded-xl p-8">
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
    </main>
  );
}
