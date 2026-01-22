import Image from 'next/image';
import HeroButton from './HeroButton';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-4 max-lg:pt-8 md:px-6 dark:bg-neutral-950"
    >
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0 [--line-clr:black] dark:[--line-clr:white]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--line-clr) 1px, transparent 1px), linear-gradient(to bottom, var(--line-clr) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl py-20">
        <div className="flex items-center gap-12 max-lg:flex-col-reverse lg:flex">
          <div className="w-full space-y-6">
            <div>
              <h1 className="mb-6 text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Riyad
              </h1>
              <div className="mb-6 h-px w-24 bg-black dark:bg-white"></div>
              <p className="max-w-xl text-lg text-neutral-700 sm:text-xl md:text-2xl dark:text-neutral-300">
                Junior MERN-stack Developer
                <br className="hidden sm:block" />& Open Source Contributor
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
              Building elegant, functional web experiences with clean code and
              minimal design principles. Crafting tools that developers love to
              use.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <HeroButton
                sectionName="projects"
                className="border border-black px-8 py-3 text-center dark:border-white pointer-fine:hover:bg-black pointer-fine:hover:text-white dark:pointer-fine:hover:bg-white dark:pointer-fine:hover:text-black"
              >
                View Work
              </HeroButton>
              <HeroButton
                sectionName="package"
                className="border border-neutral-300 px-8 py-3 text-center dark:border-neutral-700 pointer-fine:hover:border-black dark:pointer-fine:hover:border-white"
              >
                Explore Package
              </HeroButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 h-full w-full border border-neutral-300 dark:border-neutral-700"></div>

              {/* Profile image container */}
              <div className="relative h-64 w-64 overflow-hidden border-2 border-black bg-white sm:h-72 sm:w-72 dark:border-white dark:bg-black">
                <Image
                  src="/me-no-bg.png"
                  alt="Riyad avatar"
                  width="300"
                  height="300"
                  draggable={false}
                  className="relative z-2 size-full object-cover object-center brightness-115 grayscale-100 select-none"
                  loading="eager"
                />

                {/* Diagonal lines pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04] [--black:black] dark:[--black:white]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, var(--black) 0, var(--black) 2px, transparent 2px, transparent 15px)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
