import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contactLinks = [
    {
      label: 'Email',
      value: 'riyadofficial.ide@gmail.com',
      href: 'mailto:riyadofficial.ide@gmail.com',
      copyValue: 'riyadofficial.ide@gmail.com',
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
      value: 'linkedin.com/in/riyadofficial-webdev',
      href: 'https://www.linkedin.com/in/riyadofficial-webdev/',
      copyValue: 'https://www.linkedin.com/in/riyadofficial-webdev/',
      icon: Linkedin,
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="min-h-screen bg-neutral-50 px-4 md:px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl tracking-tight sm:text-5xl">Contact</h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Let's work together. Feel free to reach out for collaborations or
            just a friendly hello.
          </p>
        </div>

        <div className="divide-y divide-neutral-200 border border-neutral-200 bg-white">
          {contactLinks.map((link, index) => (
            <div
              key={link.label}
              className="group transition-colors hover:bg-neutral-50"
            >
              <div className="flex items-stretch">
                <div className="flex w-16 items-center justify-center border-r border-neutral-200 text-lg text-neutral-400 sm:w-20 sm:text-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 sm:p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 text-base tracking-wide text-neutral-500 uppercase sm:text-lg">
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </div>
                    <div className="font-mono text-sm break-all sm:text-base">
                      {link.value}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(link.copyValue, index)}
                  className="flex w-12 items-center justify-center border-l border-neutral-200 text-sm transition-all duration-300 hover:bg-black hover:text-white sm:w-16"
                  title="Copy to clipboard"
                >
                  {copiedIndex === index ? (
                    <Check size="16" />
                  ) : (
                    <Copy size="16" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-26 text-center">
          <div className="mb-16 h-px w-full bg-neutral-300"></div>
          <p className="text-xs tracking-wide text-neutral-400 sm:text-sm">
            © 2026 Riyad. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
