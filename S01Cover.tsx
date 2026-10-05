import { IconPen, IconPlay, IconWordmark } from "../components/Icons";

const items = [
  { icon: <IconWordmark className="h-4 w-4" />, label: "Adobe InDesign" },
  { icon: <IconPlay className="h-4 w-4" />, label: "Adobe After Effects" },
  { icon: <IconPen className="h-4 w-4" />, label: "Logo Design" },
];

export function S01() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col justify-center px-8 pb-28 pt-24 sm:px-12 lg:px-20">
      {/* overline */}
      <div className="rise rise-1 flex items-center gap-4">
        <span className="mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-rose-300">
          Round Two · Design Assessment
        </span>
        <span className="h-px w-24 bg-gradient-to-r from-rose-400/60 to-transparent" />
      </div>

      {/* title */}
      <h1 className="rise rise-2 mt-8 text-[3.6rem] font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-[5.2rem] lg:text-[6.6rem]">
        Design that
        <br />
        <span className="serif italic text-white/45">thinks</span>{" "}
        <span className="text-white">before it</span>{" "}
        <span className="bg-gradient-to-r from-rose-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
          renders.
        </span>
      </h1>

      <p className="rise rise-3 mt-8 max-w-[62ch] text-[16px] leading-[1.8] text-white/55 sm:text-[17px]">
        Two tools, one idea. A look at how{" "}
        <span className="text-white/85">InDesign</span> and{" "}
        <span className="text-white/85">After Effects</span> shape the way we
        communicate — and the process I follow to design a{" "}
        <span className="text-white/85">logo</span> that actually lasts.
      </p>

      {/* footer row */}
      <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2.5 text-white/40">
            <span className="text-white/30">{it.icon}</span>
            <span className="text-[13px] font-medium">{it.label}</span>
          </div>
        ))}
      </div>

      <div className="rise rise-5 mt-14 flex items-center gap-3 border-t border-white/8 pt-6">
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Navigate
        </span>
        <kbd className="rounded border border-white/15 px-1.5 py-0.5 mono text-[10px] text-white/50">
          ←
        </kbd>
        <kbd className="rounded border border-white/15 px-1.5 py-0.5 mono text-[10px] text-white/50">
          →
        </kbd>
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          or use the arrows below
        </span>
      </div>
    </div>
  );
}
