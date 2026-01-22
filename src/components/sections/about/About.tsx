import { Code2, Braces, Server, Palette, GitBranch } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React', icon: Code2 },
    { name: 'JavaScript', icon: Braces },
    { name: 'TypeScript', icon: Code2 },
    { name: 'Node.js', icon: Server },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Git & GitHub', icon: GitBranch },
  ];

  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-17.5 bg-neutral-50 dark:bg-neutral-900 px-4 py-20 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <h2 className="mb-4 text-4xl tracking-tight sm:text-5xl">
                About
              </h2>
              <div className="h-px w-16 bg-black dark:bg-white"></div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="space-y-16">
              <div className="space-y-6">
                <p className="border-l-2 border-black dark:border-white pl-6 text-xl leading-relaxed sm:text-2xl md:text-3xl">
                  I&apos;m a web developer who believes in the power of
                  simplicity.
                </p>

                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
                  My approach focuses on creating clean, efficient solutions
                  that prioritize functionality and user experience over
                  unnecessary complexity. I build web apps that are simple,
                  fast, and reliable, with clean design and smart code. I also
                  make tools that help developers get things done without the
                  headache.
                </p>
              </div>

              <div>
                <h3 className="mb-6 text-xl tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group border border-neutral-300 dark:border-neutral-700 p-5 duration-150 pointer-fine:hover:border-black dark:pointer-fine:hover:border-white"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                          {skill.name}
                        </div>
                        <div className="text-xs text-neutral-400 dark:text-neutral-600 pointer-fine:group-hover:text-neutral-600 dark:pointer-fine:group-hover:text-neutral-400">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
