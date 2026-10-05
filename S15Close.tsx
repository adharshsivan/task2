import { IconPen, IconPlay, IconWordmark, IconArrowRight } from "../components/Icons";

export function S15() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col justify-center px-8 pb-28 pt-24 sm:px-12 lg:px-20">
      <div className="rise rise-1 flex items-center gap-4">
        <span className="mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-violet-300">
          Thank you
        </span>
        <span className="h-px w-24 bg-gradient-to-r from-violet-400/60 to-transparent" />
      </div>

      <h1 className="rise rise-2 mt-8 text-[3.2rem] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-[4.6rem] lg:text-[5.6rem]">
        Questions,
        <br />
        <span className="serif italic text-white/45">or a brief to</span>{" "}
        <span className="bg-gradient-to-r from-rose-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
          test this on.
        </span>
      </h1>

      <p className="rise rise-3 mt-8 max-w-[58ch] text-[16px] leading-[1.8] text-white/55">
        Thank you for your time. I would genuinely welcome pushback on any part
        of this — the process, the tools, or the checklist — and I am happy to
        walk through a live example if that is more useful.
      </p>

      <div className="rise rise-4 mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { icon: <IconWordmark className="h-4 w-4" />, k: "Topic 01", v: "Adobe InDesign", s: "Layout, typography, print" },
          { icon: <IconPlay className="h-4 w-4" />, k: "Topic 01", v: "Adobe After Effects", s: "Motion, compositing, time" },
          { icon: <IconPen className="h-4 w-4" />, k: "Topic 02", v: "Logo design", s: "Process, anatomy, checklist" },
        ].map((c) => (
          <div key={c.v} className="surface rounded-2xl p-5">
            <span className="text-white/30">{c.icon}</span>
            <div className="mono mt-4 text-[9.5px] uppercase tracking-[0.16em] text-white/30">
              {c.k}
            </div>
            <div className="mt-1 text-[14.5px] font-semibold text-white">{c.v}</div>
            <div className="mt-0.5 text-[12px] text-white/45">{c.s}</div>
          </div>
        ))}
      </div>

      <div className="rise rise-5 mt-12 flex items-center gap-3 border-t border-white/8 pt-6">
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Think clearly
        </span>
        <IconArrowRight className="h-3.5 w-3.5 text-white/25" />
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          sketch honestly
        </span>
        <IconArrowRight className="h-3.5 w-3.5 text-white/25" />
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          then execute carefully
        </span>
      </div>
    </div>
  );
}
