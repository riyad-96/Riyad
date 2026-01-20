'use client';

import { toast } from 'kitzo';
import { X } from 'lucide-react';

export default function ToastPreview() {
  return (
    <div className="mt-6 border-t border-neutral-900 pt-4 text-neutral-300">
      <p className="mb-3 text-xs text-neutral-600">Try it:</p>
      <div className="flex gap-2">
        <button
          onClick={() =>
            toast.custom(
              (dismiss) => (
                <div className="flex items-center gap-2 bg-white px-3 py-2 outline">
                  <span className="text-sm">Toast Message</span>
                  <button
                    onClick={dismiss}
                    className="grid size-6 place-items-center bg-neutral-100 pointer-fine:hover:bg-neutral-200"
                  >
                    <X size="16" />
                  </button>
                </div>
              ),
              {
                duration: 5000,
                position:
                  window.innerWidth <= 500 ? 'top-right' : 'bottom-left',
              },
            )
          }
          className="border border-neutral-800 px-4 py-1.5 text-xs transition-colors pointer-fine:hover:bg-neutral-900"
        >
          Toast it
        </button>
      </div>
    </div>
  );
}
