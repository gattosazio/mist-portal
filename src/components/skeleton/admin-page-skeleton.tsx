export function AdminPageSkeleton() {
  return (
    <section className="min-h-[calc(100vh-88px)] px-6 py-8">
      <div className="mx-auto grid w-full max-w-[1440px] gap-5 xl:grid-cols-[1.65fr_0.95fr]">
        <div className="space-y-5">
          <section className="rounded-[32px] border border-white/60 bg-white/55 p-7 shadow-[0_20px_60px_rgba(148,163,184,0.10)] backdrop-blur-xl">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="h-4 w-32 animate-pulse rounded-full bg-sky-100" />
                <div className="mt-4 h-10 w-96 animate-pulse rounded-full bg-slate-200" />
              </div>

              <div className="flex gap-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="w-24 rounded-[24px] bg-white/80 p-4">
                    <div className="h-6 w-12 animate-pulse rounded-full bg-slate-200" />
                    <div className="mt-3 h-4 w-14 animate-pulse rounded-full bg-slate-100" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <section
                key={index}
                className="rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.10)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="h-4 w-28 animate-pulse rounded-full bg-sky-100" />
                    <div className="mt-3 h-6 w-56 animate-pulse rounded-full bg-slate-200" />
                  </div>
                  <div className="h-10 w-24 animate-pulse rounded-full bg-white/80" />
                </div>

                <div className="mt-6 space-y-4">
                  <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-100" />
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="h-11 animate-pulse rounded-2xl bg-slate-100" />
                    <div className="h-11 animate-pulse rounded-2xl bg-slate-100" />
                    <div className="h-11 animate-pulse rounded-2xl bg-slate-100" />
                    <div className="h-11 animate-pulse rounded-2xl bg-slate-100" />
                  </div>
                  <div className="h-40 w-full animate-pulse rounded-[24px] bg-slate-100" />
                  <div className="flex gap-3">
                    <div className="h-11 w-36 animate-pulse rounded-full bg-sky-100" />
                    <div className="h-11 w-36 animate-pulse rounded-full bg-white/80" />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <section
              key={index}
              className="rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.10)] backdrop-blur-xl"
            >
              <div className="h-4 w-28 animate-pulse rounded-full bg-sky-100" />
              <div className="mt-3 h-6 w-56 animate-pulse rounded-full bg-slate-200" />

              <div className="mt-5 space-y-4">
                {Array.from({ length: index === 0 ? 3 : 3 }).map((__, itemIndex) => (
                  <div key={itemIndex} className="rounded-[22px] bg-white/70 p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-20 animate-pulse rounded-full bg-sky-100" />
                      <div className="h-4 w-14 animate-pulse rounded-full bg-slate-100" />
                    </div>
                    <div className="mt-4 h-5 w-11/12 animate-pulse rounded-full bg-slate-100" />
                    <div className="mt-2 h-5 w-3/4 animate-pulse rounded-full bg-slate-100" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </aside>
      </div>
    </section>
  );
}
