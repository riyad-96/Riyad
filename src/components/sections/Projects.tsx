import { GithubSvg } from '@/assets/Svgs';
import { LinkPreview } from '../ui/link-preview';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: string;
  imageSrc: string;
  liveUrl: string;
  repoUrl: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'kitzo',
      description:
        'Kitzo is a modular utility library offering finely controlled primitives for toasts and interactions, built with TypeScript for predictable behavior, smooth animations, and full customization.',
      tech: [
        'React',
        'TypeScript'
      ],
      year: '2026',
      imageSrc: '/kitzo-ss.png',
      liveUrl: 'https://kitzo.vercel.app/',
      repoUrl: 'https://github.com/riyad-96/kitzo',
    },
    {
      id: 2,
      title: 'CodexSnip',
      description:
        'A code snippet manager where users can save valuable code blocks with broad support for multiple languages and themes. Never search for that snippet again.',
      tech: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Firebase Auth',
      ],
      year: '2025',
      imageSrc: '/codexsnip-ss.png',
      liveUrl: 'https://codexsnip.vercel.app/',
      repoUrl: 'https://github.com/riyad-96/CodexSnip',
    },
    {
      id: 3,
      title: 'TicketBari',
      description:
        'Online travel ticket purchasing platform with three distinct roles (user, admin, vendor). Features include Stripe payment integration, ticket booking system, vendor management, and fraud detection capabilities.',
      tech: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Firebase Auth',
        'MongoDB',
      ],
      year: '2025',
      imageSrc: '/ticketbari-ss.png',
      liveUrl: 'https://ticketbari.vercel.app/',
      repoUrl: 'https://github.com/riyad-96/ph-assignment-11-frontend',
    },
    {
      id: 4,
      title: 'BazarioX',
      description:
        'Smart shopping session manager that syncs between local storage and cloud. Unauthorized users can save sessions locally and back them up upon login. Includes comprehensive reporting and admin dashboard.',
      tech: ['React', 'Firebase Auth', 'Firebase Storage'],
      year: '2025',
      imageSrc: '/bazariox-ss.png',
      liveUrl: 'https://bazariox.vercel.app/',
      repoUrl: 'https://github.com/riyad-96/BazarioX',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-17.5 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl tracking-tight sm:text-5xl">Projects</h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            A selection of recent work demonstrating full-stack capabilities,
            clean architecture, and user-focused solutions.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border border-neutral-200 bg-white p-6 transition-all duration-150 hover:border-black sm:p-8"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-light text-neutral-300 transition-colors group-hover:text-black sm:text-4xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-400 sm:ml-4">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black px-3 py-1.5 text-xs text-white sm:text-sm md:px-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <LinkPreview
                    url={project.liveUrl}
                    isStatic={true}
                    imageSrc={project.imageSrc}
                  >
                    <span className="pointer-events-none group/link inline-flex items-center gap-2 border border-black px-6 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white">
                      View Live
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </LinkPreview>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    className="group/repo flex w-12.5 items-center overflow-x-hidden border border-black text-sm transition-[color,background-color,width] duration-[150ms,150ms,300ms] hover:bg-black hover:text-white pointer-fine:hover:w-33.5"
                  >
                    <span className="px-3">
                      <GithubSvg size="24" />
                    </span>
                    <span className="-ml-1 text-nowrap opacity-0 transition-opacity duration-150 pointer-fine:group-hover/repo:opacity-100">
                      {' '}
                      Repository
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
