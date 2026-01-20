'use client';

import { Tooltip } from 'kitzo';

type positionType = ['left', 'top', 'bottom', 'right'];

export default function TooltipPreview() {
  const positions: positionType = ['left', 'top', 'bottom', 'right'];

  return (
    <div className="mt-6 border-t border-neutral-900 pt-4 text-neutral-300">
      <p className="mb-3 text-xs text-neutral-600">Hover to preview:</p>
      <div className="flex gap-3">
        {positions.map((position) => (
          <Tooltip
            content={
              <div className="bg-white px-3 py-1.5 text-sm text-black">
                Tooltip
              </div>
            }
            key={position}
            position={position}
            hideOnTouch={false}
          >
            <button className="border border-neutral-800 px-4 py-1.5 text-xs capitalize transition-colors pointer-fine:hover:bg-neutral-900">
              {position}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
