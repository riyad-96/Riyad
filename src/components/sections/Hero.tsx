import scrollToSection from '@/utils/scrollToSection';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 max-lg:pt-12 md:px-6"
    >
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
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
              <div className="mb-6 h-px w-24 bg-black"></div>
              <p className="max-w-xl text-lg text-neutral-700 sm:text-xl md:text-2xl">
                Full-Stack Developer
                <br className="hidden sm:block" />& Open Source Contributor
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Building elegant, functional web experiences with clean code and
              minimal design principles. Crafting tools that developers love to
              use.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                onClick={() => scrollToSection('projects')}
                className="border border-black px-8 py-3 text-center transition-all duration-300 hover:bg-black hover:text-white"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection('package')}
                className="border border-neutral-300 px-8 py-3 text-center transition-all duration-300 hover:border-black"
              >
                Explore Package
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 h-full w-full border border-neutral-300"></div>

              {/* Profile image container */}
              <div className="relative h-64 w-64 overflow-hidden border-2 border-black bg-white sm:h-72 sm:w-72">
                {/* Placeholder pattern - you can replace with actual image */}
                <img
                  src="/no-bg.png"
                  className="size-full object-cover brightness-115 object-center grayscale-100"
                />

                {/* Diagonal lines pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, black 0, black 2px, transparent 2px, transparent 10px)',
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
