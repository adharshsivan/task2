import type { ComponentType } from "react";
import { Slide01Cover } from "./Slide01Cover";
import { Slide02Agenda } from "./Slide02Agenda";
import { Slide03WhyDesign } from "./Slide03WhyDesign";
import { Slide04IndesignIntro } from "./Slide04IndesignIntro";
import { Slide05IndesignFeatures } from "./Slide05IndesignFeatures";
import { Slide06IndesignWorkflow } from "./Slide06IndesignWorkflow";
import { Slide07AEIntro } from "./Slide07AEIntro";
import { Slide08AEFeatures } from "./Slide08AEFeatures";
import { Slide09AEWorkflow } from "./Slide09AEWorkflow";
import { Slide10LogoPhilosophy } from "./Slide10LogoPhilosophy";
import { Slide11LogoProcess } from "./Slide11LogoProcess";
import { Slide12LogoPrinciples } from "./Slide12LogoPrinciples";
import { Slide13CaseStudy } from "./Slide13CaseStudy";
import { Slide14Tips } from "./Slide14Tips";
import { Slide15ThankYou } from "./Slide15ThankYou";

export type SlideDef = {
  label: string;
  bg: string;
  accent1: string;
  accent2: string;
  component: ComponentType;
};

export const slides: SlideDef[] = [
  { label: "Cover", bg: "radial-gradient(circle at 20% 20%, #2a0845 0%, #0b0613 55%, #000 100%)", accent1: "#ff3cac", accent2: "#2b86c5", component: Slide01Cover },
  { label: "Agenda", bg: "radial-gradient(circle at 80% 30%, #1a0b3d 0%, #0b0613 60%, #000 100%)", accent1: "#a855f7", accent2: "#ec4899", component: Slide02Agenda },
  { label: "Why Design", bg: "radial-gradient(circle at 30% 70%, #0f172a 0%, #0b0613 60%, #000 100%)", accent1: "#38bdf8", accent2: "#f472b6", component: Slide03WhyDesign },
  { label: "InDesign Intro", bg: "radial-gradient(circle at 25% 30%, #4a0d2e 0%, #1a0918 55%, #000 100%)", accent1: "#ff308f", accent2: "#7b2dff", component: Slide04IndesignIntro },
  { label: "InDesign Features", bg: "radial-gradient(circle at 70% 40%, #3b0a24 0%, #120414 60%, #000 100%)", accent1: "#ec4899", accent2: "#8b5cf6", component: Slide05IndesignFeatures },
  { label: "InDesign Workflow", bg: "radial-gradient(circle at 20% 80%, #2d0a3e 0%, #0e0515 60%, #000 100%)", accent1: "#d946ef", accent2: "#f59e0b", component: Slide06IndesignWorkflow },
  { label: "After Effects Intro", bg: "radial-gradient(circle at 75% 25%, #0c1d4d 0%, #050914 55%, #000 100%)", accent1: "#4f46e5", accent2: "#06b6d4", component: Slide07AEIntro },
  { label: "AE Features", bg: "radial-gradient(circle at 30% 50%, #0b2a4a 0%, #040810 60%, #000 100%)", accent1: "#22d3ee", accent2: "#6366f1", component: Slide08AEFeatures },
  { label: "AE Workflow", bg: "radial-gradient(circle at 80% 80%, #11314a 0%, #020617 60%, #000 100%)", accent1: "#38bdf8", accent2: "#a855f7", component: Slide09AEWorkflow },
  { label: "Logo Philosophy", bg: "radial-gradient(circle at 40% 20%, #3d1f00 0%, #140a03 55%, #000 100%)", accent1: "#f59e0b", accent2: "#ef4444", component: Slide10LogoPhilosophy },
  { label: "Logo Process", bg: "radial-gradient(circle at 60% 60%, #2a1a05 0%, #0a0602 60%, #000 100%)", accent1: "#f59e0b", accent2: "#10b981", component: Slide11LogoProcess },
  { label: "Logo Principles", bg: "radial-gradient(circle at 25% 40%, #0f2b1c 0%, #040c08 60%, #000 100%)", accent1: "#10b981", accent2: "#eab308", component: Slide12LogoPrinciples },
  { label: "Case Study", bg: "radial-gradient(circle at 70% 50%, #3a0a4a 0%, #0f0316 60%, #000 100%)", accent1: "#d946ef", accent2: "#22d3ee", component: Slide13CaseStudy },
  { label: "Pro Tips", bg: "radial-gradient(circle at 30% 30%, #1a1a3a 0%, #06060f 60%, #000 100%)", accent1: "#818cf8", accent2: "#f472b6", component: Slide14Tips },
  { label: "Thank You", bg: "radial-gradient(circle at 50% 50%, #2a0845 0%, #0b0613 55%, #000 100%)", accent1: "#ff3cac", accent2: "#2b86c5", component: Slide15ThankYou },
];
