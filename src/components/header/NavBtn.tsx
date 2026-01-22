'use client';

export default function NavBtn({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`group ${className}`}>
      <span className="group relative flex overflow-hidden">
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
