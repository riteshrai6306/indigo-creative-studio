"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const featureCards = [
  { title: "AI Campaign Studio", description: "Generate visual-first Indigo assets in seconds." },
  { title: "Multi-platform Ready", description: "Auto optimize ads for Instagram, LinkedIn, Facebook, and X." },
  { title: "Brand-aware Prompts", description: "Indigo-first copy, tone, and visual identity." }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 py-10 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-1 text-sm text-indigo-200">AI-native creative platform</span>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">Indigo Creative Studio for enterprise airline campaigns.</h1>
            <p className="max-w-2xl text-lg text-slate-300">Build premium social creatives, banner campaigns, commercial storyboards and multi-platform assets with a design system built for Indigo Airlines.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">Launch Studio</Link>
              <Link href="/explore" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-indigo-300/40">Explore Templates</Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
            <div className="space-y-5">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-700 to-slate-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Preview</p>
                <h2 className="mt-3 text-3xl font-semibold">Indigo Airlines campaign concept</h2>
                <p className="mt-3 text-sm text-slate-200/80">Smart layout, brand-centric copy, and a responsive feed preview for campaign launches.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
