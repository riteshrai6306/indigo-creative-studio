import Link from "next/link";

const platforms = ["Instagram", "LinkedIn", "Facebook", "Twitter/X"];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100 md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Projects</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Content generator modules</h1>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {platforms.map((platform) => (
              <Link key={platform} href="/studio" className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 transition hover:border-indigo-400/40">
                <h2 className="text-xl font-semibold text-white">{platform}</h2>
                <p className="mt-2 text-sm text-slate-300">Generate platform-aware campaigns, copy, visuals, and export-ready assets.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
