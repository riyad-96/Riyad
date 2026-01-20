'use client';

import { useCopy } from 'kitzo';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ text }: { text: string }) {
  const { copy, isCopied } = useCopy(2000);

  return (
    <button
      onClick={() => copy(text)}
      className="flex w-12 items-center justify-center border-l border-neutral-200 text-sm transition-all duration-300 pointer-fine:hover:bg-black pointer-fine:hover:text-white sm:w-16"
      title="Copy to clipboard"
    >
      {isCopied ? <Check size="16" /> : <Copy size="16" />}
    </button>
  );
}
