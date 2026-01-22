'use client';

export default function NavBtn({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group grid place-items-center px-2 py-1 text-xs uppercase md:px-3.5 md:text-sm"
    >
      <span className="relative overflow-hidden leading-4">
        <span className="absolute">
          {text.split('').map((t, i) => (
            <span
              key={`u${t}n${i}`}
              className="inline-block -translate-y-1/1 transition-transform duration-250 group-hover:translate-y-0"
              style={{
                transitionDelay: `${i * 15}ms`,
              }}
            >
              {t}
            </span>
          ))}
        </span>

        <span className="">
          {text.split('').map((t, i) => (
            <span
              key={`u${t}n${i}`}
              className="inline-block transition-transform duration-250 group-hover:translate-y-1/1"
              style={{
                transitionDelay: `${i * 15}ms`,
              }}
            >
              {t}
            </span>
          ))}
        </span>
      </span>
    </button>
  );
}
