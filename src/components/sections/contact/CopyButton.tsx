'use client';

import { useCopy } from 'kitzo';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ text }: { text: string }) {
  const { copy, isCopied } = useCopy(2000);

  return (
    <button
      onClick={() => copy(text)}
      className="flex w-12 items-center justify-center border-l border-neutral-200 text-sm transition-colors sm:w-16 dark:border-neutral-800 pointer-fine:hover:bg-black pointer-fine:hover:text-white dark:pointer-fine:hover:bg-white dark:pointer-fine:hover:text-black"
      title="Copy to clipboard"
    >
      {isCopied ? <Check size="16" /> : <Copy size="16" />}
    </button>
  );
}
