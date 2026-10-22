import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Scroll reveal leve com IntersectionObserver (fade + slide-up + scale). */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function SectionHead({ tag, title, text }: { tag: string; title: ReactNode; text?: string }) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
      <Reveal>
        <span className="pill-tag">{tag}</span>
        <h2 className="display mt-5 text-4xl font-bold md:text-6xl">{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={150}>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
