export default function Home() {
  const keyword = "niche-bot-005";

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
            AI niche app starter
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {keyword} 向けの 1ページ完結型アプリ雛形
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            このテンプレートは、マスターボットから自動生成・自動デプロイされる前提で設計された
            Next.js + Tailwind CSS の最小構成です。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-300">
              Start Free
            </button>
            <button className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900">
              Upgrade
            </button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <p className="text-sm text-zinc-400">Mode</p>
              <p className="mt-2 text-xl font-semibold">Free / Pro 切替</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <p className="text-sm text-zinc-400">Monetize</p>
              <p className="mt-2 text-xl font-semibold">Stripe 導線差し込み余地</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <p className="text-sm text-zinc-400">Deploy</p>
              <p className="mt-2 text-xl font-semibold">GitHub / Vercel 前提</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
