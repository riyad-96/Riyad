import { ArrowUpRight } from 'lucide-react';
import ToastPreview from '../ui/toast-preview';
import TooltipPreview from '../ui/tooltip-preview';

type Feature = {
  id: number;
  title: string;
  description: string;
  highlights: string[];
};

export default function Package() {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Toast System',
      description:
        'An enriched toast notification system with advanced features for modern React applications.',
      highlights: [
        'Live update toasts in real-time',
        'Remove toasts by specific IDs',
        'Fully customizable toast components',
        'Queue management & positioning',
      ],
    },
    {
      id: 2,
      title: 'Tooltip Component',
      description:
        'Pure CSS tooltip wrapper that delivers exceptional performance without JavaScript overhead.',
      highlights: [
        'Zero JavaScript dependency',
        'Smart hover detection',
        'Lightweight & performant',
        'Full customization support',
      ],
    },
    {
      id: 3,
      title: 'Utility Hooks',
      description:
        'Essential React hooks to simplify common development patterns and enhance performance.',
      highlights: [
        'useWindowSize() - Live viewport dimensions',
        'Size update delay option',
        'useDebounce() - Value debouncing',
        'Configurable delay timing',
      ],
    },
  ];

  return (
    <section
      id="package"
      className="min-h-screen scroll-mt-17.5 bg-black px-4 py-20 text-white md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl tracking-tight sm:text-5xl">
            Open Source
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            A comprehensive utility package designed for React developers who
            value performance, flexibility, and clean implementations.
          </p>
        </div>

        <div className="mb-16 space-y-12">
          {features.map((feature, index) => (
            <div key={feature.id} className="border-t border-neutral-800 pt-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                <div className="sm:col-span-2">
                  <span className="text-5xl font-light text-neutral-700 sm:text-6xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-4 sm:col-span-10">
                  <h3 className="text-xl sm:text-2xl">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-neutral-500"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-neutral-600"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Toast Demo */}
                  {feature.id === 1 && <ToastPreview />}

                  {/* Tooltip Demo */}
                  {feature.id === 2 && <TooltipPreview />}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-neutral-800 p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <h4 className="mb-3 text-lg sm:text-xl">Install the package</h4>
              <code className="font-mono text-base text-neutral-400">
                npm install kitzo
              </code>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://kitzo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-neutral-800 px-6 py-3 text-center text-sm transition-colors hover:bg-white hover:text-black"
              >
                <span>Kitzo docs</span>
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="https://github.com/riyad-96/kitzo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-neutral-800 px-6 py-3 text-center text-sm transition-colors hover:bg-white hover:text-black"
              >
                <span>GitHub Repository</span>
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="https://www.npmjs.com/package/kitzo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-neutral-800 px-6 py-3 text-center text-sm transition-colors hover:bg-white hover:text-black"
              >
                <span>View on NPM</span>
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
