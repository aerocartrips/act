"use client";

import { useEffect, useMemo, useState } from "react";

export default function PdfTableClient({ pdfs = [], initialOrder = "desc", onDelete }) {
  const [order, setOrder] = useState(initialOrder === "asc" ? "asc" : "desc");
  const [selected, setSelected] = useState({});
  const [copyMessage, setCopyMessage] = useState("");

  useEffect(() => {
    setOrder(initialOrder === "asc" ? "asc" : "desc");
  }, [initialOrder]);

  const sorted = useMemo(() => {
    return [...pdfs].sort((a, b) => {
      const aTime = new Date(a.uploadedAt || a.createdAt || 0).getTime();
      const bTime = new Date(b.uploadedAt || b.createdAt || 0).getTime();
      return order === "asc" ? aTime - bTime : bTime - aTime;
    });
  }, [pdfs, order]);

  const toggleSelect = (key) => {
    setSelected((s) => ({ ...s, [key]: !s[key] }));
  };

  const allSelected = sorted.length > 0 && sorted.every((_, i) => selected[i]);

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelected({});
    } else {
      const newSel = {};
      sorted.forEach((_, i) => (newSel[i] = true));
      setSelected(newSel);
    }
  };

  const selectedCount = Object.values(selected).filter(Boolean).length;

  const copySelected = async () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aerocartrips.com';
    const urls = sorted
      .map((p, i) => ({ p, i }))
      .filter(({ i }) => selected[i])
      .map(({ p }) => new URL(p.url, origin).toString());

    if (!urls.length) return;

    try {
      await navigator.clipboard.writeText(urls.join("\n"));
      setCopyMessage(`Copied ${urls.length} URL(s)`);
      setTimeout(() => setCopyMessage(""), 2000);
    } catch (err) {
      setCopyMessage("Copy failed");
      setTimeout(() => setCopyMessage(""), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow border border-gray-200">
        <div className="flex items-center gap-4 flex-wrap">
          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
            Select all
          </label>
          <button
            type="button"
            onClick={copySelected}
            disabled={!selectedCount}
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            Copy {selectedCount ? `(${selectedCount})` : "selected"}
          </button>
          {copyMessage ? <span className="text-sm text-gray-600">{copyMessage}</span> : null}
        </div>

        <div>
          <button
            type="button"
            onClick={() => setOrder((o) => (o === "desc" ? "asc" : "desc"))}
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
            title="Toggle sort order"
          >
            Uploaded
            <span className="ml-1 text-xs">{order === "desc" ? "▼" : "▲"}</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">#</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">URL</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Uploaded</th>
              {onDelete ? (
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {sorted.map((pdf, index) => (
              <tr key={`${pdf.url}-${index}`}>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={!!selected[index]}
                      onChange={() => toggleSelect(index)}
                    />
                    <span>{index + 1}</span>
                  </label>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{pdf.title}</td>
                <td className="px-4 py-4 text-sm text-blue-600 hover:text-blue-800 break-all">
                  <a href={pdf.url} target="_blank" rel="noreferrer">
                    {pdf.url}
                  </a>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{pdf.uploadedAt ? new Date(pdf.uploadedAt).toLocaleString() : 'Unknown'}</td>
                {onDelete ? (
                  <td className="px-4 py-4 text-sm text-gray-700">
                    <button
                      type="button"
                      onClick={() => onDelete(pdf.id)}
                      className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
