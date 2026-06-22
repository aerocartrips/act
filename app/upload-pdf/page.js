"use client";

import { useEffect, useState } from 'react';
import PdfTableClient from '../../components/PdfTableClient';

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
  const [user, setUser] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(true);

  async function loadSession() {
    setSessionLoading(true);
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        setIsLoggedIn(false);
        setUser(null);
        return;
      }

      const data = await response.json();
      if (data?.user) {
        setIsLoggedIn(true);
        setUser(data.user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setSessionLoading(false);
    }
  }

  async function loadPdfs() {
    setLoadingPdfs(true);
    setPdfError('');

    try {
      const response = await fetch('/api/pdfs', { credentials: 'include' });
      if (!response.ok) {
        if (response.status === 401) {
          setIsLoggedIn(false);
          setUser(null);
          setPdfError('Your session has expired. Please sign in again.');
          setPdfs([]);
          return;
        }

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
    loadSession();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      loadPdfs();
    }
  }, [isLoggedIn]);

  async function handleLoginSubmit(event) {
    event.preventDefault();
    setLoginError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username: username.trim(), password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setLoginError(data.error || 'Invalid username or password.');
        return;
      }

      setIsLoggedIn(true);
      setUser(data.user || { username: username.trim() });
      setUsername('');
      setPassword('');
      setMessage('');
      await loadPdfs();
    } catch (error) {
      setLoginError('Unable to sign in. Please try again.');
    }
  }

  async function handleLogout() {
    setMessage('');
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      setIsLoggedIn(false);
      setUser(null);
      setPdfs([]);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/upload-pdf', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setIsLoggedIn(false);
          setUser(null);
          setLoginError('Authentication required. Please sign in again.');
          return;
        }

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
      const response = await fetch(`/api/pdfs/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          setIsLoggedIn(false);
          setUser(null);
          setLoginError('Authentication required. Please sign in again.');
          return;
        }

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

        {sessionLoading ? (
          <div className="space-y-6 bg-white shadow rounded-xl p-8 text-center text-gray-600">
            Checking authentication…
          </div>
        ) : !isLoggedIn ? (
          <div className="space-y-6 bg-white shadow rounded-xl p-8">
            <p className="text-center text-gray-600 mb-4">
              Sign in with your username and password to upload and manage PDFs.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
                <input
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2 text-sm"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Password
                <input
                  autoComplete="current-password"
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
        ) : !(user?.role === 'admin') ? (
          <div className="space-y-6 bg-white shadow rounded-xl p-8 text-center text-gray-600">
            You are signed in but do not have administrator access.
            <div className="mt-4">
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4 bg-white shadow rounded-xl p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-gray-600">
                  Signed in as <strong>{user?.username || 'unknown'}</strong>.
                </p>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Sign out
                </button>
              </div>

              <p className="text-center text-gray-600">
                Upload one or more PDF files and manage them below.
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
