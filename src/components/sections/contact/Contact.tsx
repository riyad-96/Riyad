import { Mail, Github, Linkedin } from 'lucide-react';
import CopyButton from './CopyButton';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'riyadofficial.dev@gmail.com',
      href: 'mailto:riyadofficial.dev@gmail.com',
      copyValue: 'riyadofficial.dev@gmail.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'github.com/riyad-96',
      href: 'https://github.com/riyad-96/',
      copyValue: 'https://github.com/riyad-96/',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/riyadofficial-dev',
      href: 'https://www.linkedin.com/in/riyadofficial-dev/',
      copyValue: 'https://www.linkedin.com/in/riyadofficial-dev/',
      icon: Linkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-17.5 bg-neutral-50 px-4 pt-30 pb-20 md:px-6 dark:bg-neutral-950"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl tracking-tight sm:text-5xl">Contact</h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Let&rsquo;s work together. Feel free to reach out for collaborations
            or just a friendly hello.
          </p>
        </div>

        <div className="divide-y divide-neutral-200 border border-neutral-200 bg-white dark:divide-neutral-800 dark:border-neutral-800 dark:bg-black">
          {contactLinks.map((link, index) => (
            <div
              key={link.label}
              className="group pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-950"
            >
              <div className="flex items-stretch">
                <div className="flex w-16 items-center justify-center border-r border-neutral-200 text-lg text-neutral-400 sm:w-20 sm:text-xl dark:border-neutral-800 dark:text-neutral-600">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 sm:p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 text-base tracking-wide text-neutral-500 uppercase sm:text-lg dark:text-neutral-400">
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </div>
                    <div className="font-mono text-sm break-all sm:text-base">
                      {link.value}
                    </div>
                  </div>
                </a>
                <CopyButton text={link.href} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-26 text-center">
          <div className="mb-16 h-px w-full bg-neutral-300 dark:bg-neutral-700"></div>
          <p className="text-xs tracking-wide text-neutral-400 sm:text-sm dark:text-neutral-600">
            © 2026 Riyad. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
