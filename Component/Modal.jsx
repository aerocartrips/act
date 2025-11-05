import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">Agency Contact</h3>
          <button
            className="ml-2 rounded-full px-2 py-1 text-sm hover:bg-gray-100"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
