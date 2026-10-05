import { SlideShell, Label, Tag } from "../components/ui";
import { CaseSketch } from "../components/Marks";

const palette = [
  { hex: "#2f2118", name: "Roast" },
  { hex: "#8b5e3c", name: "Clay" },
  { hex: "#4f772d", name: "Leaf" },
  { hex: "#f2e8cf", name: "Linen" },
];

export function S13() {
  return (
    <SlideShell
      eyebrow="Topic Two · Worked example"
      page={13}
      total={15}
      accent="amber"
      title={
        <>
          Case study:{" "}
          <span className="serif italic text-amber-300">Bloom &amp; Brew</span>
        </>
      }
      lede="A fictional neighbourhood café serving specialty coffee and selling houseplants. Same seven steps, condensed — this is how thinking becomes a mark."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* brief column */}
        <div className="flex flex-col gap-4 lg:col-span-4">
          <div className="surface rounded-2xl p-5">
            <Label>The brief</Label>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/60">
              Small, warm, carefully made. Audience is 25–40, creative,
              allergic to anything that feels corporate. It has to work on a
              cup, a paper bag, an awning and an Instagram avatar.
            </p>
          </div>

          <div className="surface rounded-2xl p-5">
            <Label>Personality words</Label>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["organic", "hand-made", "warm", "unhurried", "hopeful"].map((w) => (
                <Tag key={w} accent="amber">
                  {w}
                </Tag>
              ))}
            </div>
            <div className="mt-5">
              <Label>Chosen concept</Label>
            </div>
            <p className="mt-2 text-[13px] leading-[1.7] text-white/60">
              The <b className="text-white/85">steam rising from a cup</b>{" "}
              becomes a <b className="text-white/85">leaf</b>. Coffee and plants
              in one gesture — no illustration of either.
            </p>
          </div>

          <div className="surface rounded-2xl p-5">
            <Label>Palette &amp; type</Label>
            <div className="mt-3 flex gap-2">
              {palette.map((c) => (
                <div key={c.hex} className="flex-1">
                  <div
                    className="h-10 w-full rounded-lg border border-white/10"
                    style={{ background: c.hex }}
                  />
                  <div className="mono mt-1.5 text-[9px] uppercase tracking-[0.1em] text-white/35">
                    {c.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-white/8 pt-4">
              <Label>Lockup</Label>
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="serif text-[26px] leading-none text-white/90">
                Bloom
              </span>
              <span className="serif text-[22px] italic leading-none text-amber-300">
                &amp;
              </span>
              <span
                className="text-[19px] leading-none tracking-[0.02em] text-white/75"
                style={{ font: "500 19px Inter, sans-serif" }}
              >
                BREW
              </span>
            </div>
          </div>
        </div>

        {/* process + result */}
        <div className="flex flex-col gap-4 lg:col-span-8">
          {/* three iterations */}
          <div className="surface rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <Label>Sketch to refine to final</Label>
              <span className="mono text-[9.5px] uppercase tracking-[0.14em] text-white/30">
                three of thirty
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {([1, 2, 3] as const).map((s, i) => (
                <div key={s} className="flex flex-col items-center">
                  <div
                    className={`flex aspect-square w-full items-center justify-center rounded-xl border ${
                      i === 2
                        ? "border-amber-300/25 bg-amber-400/[0.05]"
                        : "border-dashed border-white/12 bg-white/[0.02]"
                    }`}
                  >
                    <CaseSketch
                      stage={s}
                      className={`h-3/4 w-3/4 ${i === 2 ? "" : "text-white/55"}`}
                    />
                  </div>
                  <div className="mono mt-2.5 text-[9.5px] uppercase tracking-[0.14em] text-white/35">
                    {i === 0 ? "01 · thumbnail" : i === 1 ? "02 · structure" : "03 · final"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* versatility strip */}
          <div className="surface rounded-2xl p-6">
            <Label>One mark, four contexts</Label>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#f2e8cf]">
                <CaseSketch stage={3} className="h-14 w-14" />
              </div>
              <div className="flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-xl bg-[#2f2118]">
                <CaseSketch stage={3} className="h-14 w-14" />
              </div>
              <div className="flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-xl bg-white/[0.04]">
                <svg viewBox="0 0 120 120" className="h-14 w-14 text-white/85">
                  <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M38 62h44v12a18 18 0 0 1-18 18h-8a18 18 0 0 1-18-18V62Z" />
                    <path d="M82 67a10 10 0 0 1 0 19M60 54V40" />
                    <path d="M60 44c0-10 9-12 11-21-11 0-15 9-11 21Z" />
                  </g>
                </svg>
                <span className="mono text-[8.5px] uppercase tracking-[0.12em] text-white/35">
                  mono
                </span>
              </div>
              <div className="flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-xl bg-white/[0.04]">
                <svg viewBox="0 0 120 120" className="h-8 w-8 text-white/85">
                  <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M38 62h44v12a18 18 0 0 1-18 18h-8a18 18 0 0 1-18-18V62Z" />
                    <path d="M82 67a10 10 0 0 1 0 19M60 54V40" />
                    <path d="M60 44c0-10 9-12 11-21-11 0-15 9-11 21Z" />
                  </g>
                </svg>
                <span className="mono text-[8.5px] uppercase tracking-[0.12em] text-white/35">
                  16 px
                </span>
              </div>
            </div>
            <p className="mt-4 border-t border-white/8 pt-3.5 text-[12.5px] leading-[1.65] text-white/50">
              It survives light and dark backgrounds, a single colour, and a
              16-pixel favicon. That is the versatility test from the previous
              slide, passed.
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
