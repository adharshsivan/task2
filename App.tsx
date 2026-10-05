import { useCallback, useEffect, useState } from "react";
import { slides, TOTAL } from "./slides";
import { IconArrowLeft, IconArrowRight } from "./components/Icons";

export default function App() {
  const [i, setI] = useState(0);
  const slide = slides[i];

  const go = useCallback((n: number) => setI(Math.max(0, Math.min(TOTAL - 1, n))), []);
  const next = useCallback(() => setI((p) => Math.min(TOTAL - 1, p + 1)), []);
  const prev = useCallback(() => setI((p) => Math.max(0, p - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  // scroll the slide container back to top on change
  useEffect(() => {
    document.getElementById("stage")?.scrollTo({ top: 0 });
  }, [i]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#08080a] text-white">
      {/* ---------- ambient backdrop ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="glow absolute -left-40 -top-52 h-[620px] w-[620px] rounded-full transition-colors duration-1000"
          style={{ background: slide.tint }}
        />
        <div
          className="glow absolute -bottom-64 -right-40 h-[560px] w-[560px] rounded-full opacity-[0.09] transition-colors duration-1000"
          style={{ background: slide.tint }}
        />
        <div className="stage-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ---------- slide ---------- */}
      <div key={i} id="stage" className="rise relative h-full w-full overflow-y-auto">
        <slide.component />
      </div>

      {/* ---------- top bar ---------- */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-8 py-5 sm:px-12 lg:px-20">
          <div className="pointer-events-auto flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[12px] font-semibold tracking-tight text-[#08080a]">
              D
            </div>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Design Assessment
            </span>
          </div>

          <div className="pointer-events-auto flex items-center gap-4">
            <span className="mono hidden text-[10px] uppercase tracking-[0.18em] text-white/35 sm:block">
              {slide.label}
            </span>
            <span className="mono text-[10.5px] tnum text-white/55">
              {String(i + 1).padStart(2, "0")}
              <span className="text-white/25"> / {TOTAL}</span>
            </span>
          </div>
        </div>
        {/* progress hairline */}
        <div className="mx-auto h-px max-w-[1240px] bg-white/8 px-8 sm:px-12 lg:px-20">
          <div
            className="h-px bg-white/45 transition-all duration-700 ease-out"
            style={{ width: `${((i + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </header>

      {/* ---------- bottom controls ---------- */}
      <footer className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-8 py-5 sm:px-12 lg:px-20">
          {/* prev */}
          <button
            onClick={prev}
            disabled={i === 0}
            aria-label="Previous slide"
            className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-[12px] font-medium text-white/60 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white disabled:pointer-events-none disabled:opacity-25"
          >
            <IconArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* section dots */}
          <nav className="flex items-center gap-1.5">
            {slides.map((s, n) => (
              <button
                key={n}
                onClick={() => go(n)}
                aria-label={s.label}
                title={s.label}
                className={`group relative flex h-5 items-center justify-center px-[3px]`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    n === i
                      ? "h-1.5 w-5 bg-white"
                      : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/55"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* next */}
          <button
            onClick={next}
            disabled={i === TOTAL - 1}
            className="flex h-9 items-center gap-2 rounded-lg bg-white px-3.5 text-[12px] font-semibold text-[#08080a] transition-opacity hover:opacity-85 disabled:pointer-events-none disabled:opacity-25"
          >
            <span className="hidden sm:inline">Next</span>
            <IconArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
