'use client';

import { Tooltip } from 'kitzo';

type positionType = ['top', 'bottom', 'right'];

export default function TooltipPreview() {
  const positions: positionType = ['top', 'bottom', 'right'];

  return (
    <div className="mt-6 border-t border-neutral-900 pt-4 text-neutral-300 dark:border-neutral-100 dark:text-neutral-700">
      <p className="mb-3 text-xs text-neutral-600 dark:text-neutral-400">
        Hover to preview:
      </p>
      <div className="flex gap-3">
        {positions.map((position) => (
          <Tooltip
            content={
              <div className="bg-white px-3 py-1.5 text-sm text-black dark:bg-black dark:text-white">
                Tooltip
              </div>
            }
            key={position}
            position={position}
            hideOnTouch={false}
          >
            <button className="border border-neutral-800 px-4 py-1.5 text-xs capitalize dark:border-neutral-200 pointer-fine:hover:bg-neutral-900 dark:pointer-fine:hover:bg-neutral-100">
              {position}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
