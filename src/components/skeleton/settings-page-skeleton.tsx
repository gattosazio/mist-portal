export function SettingsPageSkeleton() {
  return (
    <section className="min-h-[calc(100vh-88px)] px-6 py-8">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <section className="rounded-[32px] border border-white/60 bg-white/55 p-8 shadow-[0_20px_60px_rgba(148,163,184,0.10)] backdrop-blur-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="h-4 w-28 animate-pulse rounded-full bg-sky-100" />
              <div className="mt-4 h-10 w-72 animate-pulse rounded-full bg-slate-200" />
              <div className="mt-4 h-5 w-[28rem] animate-pulse rounded-full bg-slate-100" />
            </div>
            <div className="h-16 w-72 animate-pulse rounded-[24px] bg-white/80" />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <section className="rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-[0_16px_40px_rgba(148,163,184,0.10)] backdrop-blur-xl">
              <div className="h-6 w-48 animate-pulse rounded-full bg-slate-200" />
              <div className="mt-3 h-5 w-72 animate-pulse rounded-full bg-slate-100" />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="rounded-[24px] bg-white/70 p-5">
                    <div className="h-5 w-40 animate-pulse rounded-full bg-slate-200" />
                    <div className="mt-3 h-4 w-44 animate-pulse rounded-full bg-slate-100" />
                    <div className="mt-5 space-y-3">
                      <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-100" />
                      <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-100" />
                      <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[24px] bg-white/70 p-5">
                <div className="h-5 w-40 animate-pulse rounded-full bg-slate-200" />
                <div className="mt-3 h-4 w-72 animate-pulse rounded-full bg-slate-100" />
                <div className="mt-5 flex gap-3">
                  <div className="h-11 w-44 animate-pulse rounded-full bg-slate-100" />
                  <div className="h-11 w-40 animate-pulse rounded-full bg-rose-100/70" />
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-[0_16px_40px_rgba(148,163,184,0.10)] backdrop-blur-xl">
              <div className="h-6 w-56 animate-pulse rounded-full bg-slate-200" />
              <div className="mt-3 h-5 w-72 animate-pulse rounded-full bg-slate-100" />

              <div className="mt-6 rounded-[24px] bg-white/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="h-5 w-28 animate-pulse rounded-full bg-slate-200" />
                    <div className="mt-3 h-4 w-52 animate-pulse rounded-full bg-slate-100" />
                  </div>
                  <div className="h-8 w-16 animate-pulse rounded-full bg-sky-100" />
                </div>
                <div className="mt-5 h-4 w-36 animate-pulse rounded-full bg-slate-100" />
              </div>

              <div className="mt-5 rounded-[24px] bg-white/70 p-5">
                <div className="h-5 w-36 animate-pulse rounded-full bg-slate-200" />
                <div className="mt-3 h-4 w-56 animate-pulse rounded-full bg-slate-100" />
                <div className="mt-2 h-4 w-48 animate-pulse rounded-full bg-slate-100" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
