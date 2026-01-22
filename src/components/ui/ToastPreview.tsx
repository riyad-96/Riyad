'use client';

import { toast } from 'kitzo';
import { X } from 'lucide-react';

export default function ToastPreview() {
  return (
    <div className="mt-6 border-t border-neutral-900 pt-4 text-neutral-300 dark:border-neutral-100 dark:text-neutral-700">
      <p className="mb-3 text-xs text-neutral-600 dark:text-neutral-400">
        Try it:
      </p>
      <div className="flex gap-2">
        <button
          onClick={() =>
            toast.custom(
              (dismiss) => (
                <div className="flex items-center gap-2 border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-black">
                  <span className="text-sm">Toast Message</span>
                  <button
                    onClick={dismiss}
                    className="grid size-6 place-items-center bg-neutral-100 dark:bg-neutral-900 pointer-fine:hover:bg-neutral-200 dark:pointer-fine:hover:bg-neutral-800"
                  >
                    <X size="16" />
                  </button>
                </div>
              ),
              {
                duration: 5000,
                position: 'bottom-left',
              },
            )
          }
          className="border border-neutral-800 px-4 py-1.5 text-xs dark:border-neutral-200 pointer-fine:hover:bg-neutral-900 dark:pointer-fine:hover:bg-neutral-100"
        >
          Toast it
        </button>
      </div>
    </div>
  );
}
