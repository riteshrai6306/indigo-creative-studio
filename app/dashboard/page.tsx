"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Explore", href: "/explore" },
  { label: "Studio", href: "/studio" }
];

export default function DashboardPage() {

  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  fetchProjects();
}, []);

async function fetchProjects() {
  try {
    const res = await fetch("/api/projects");

    const data = await res.json();

    setProjects(data.projects || []);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100 md:px-12">
      <section className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Marketing command center</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-100 transition hover:bg-indigo-500/20">{item.label}</Link>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl">
            <div>
              <p className="text-sm text-indigo-300">Recent projects</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Your latest Indigo campaigns</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">

  {loading ? (
    <p className="text-slate-400">
      Loading projects...
    </p>
  ) : projects.length === 0 ? (
    <p className="text-slate-400">
      No projects found.
    </p>
  ) : (
    projects.map((project) => (
      <div
        key={project.id}
        className="rounded-3xl border border-white/10 bg-slate-950/80 p-4"
      >
        <p className="text-sm text-slate-400">
          {project.type}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {project.description}
        </p>
      </div>
    ))
  )}

</div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl">
            <p className="text-sm text-indigo-300">AI Copilot</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Command bar</h2>
            <p className="mt-3 text-sm text-slate-300">Use prompt presets to generate campaign hooks, storyboards, and banner headlines at scale.</p>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
