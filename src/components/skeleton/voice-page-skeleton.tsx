export function VoicePageSkeleton() {
  return (
    <section className="min-h-[calc(100vh-88px)] px-6 py-8">
      <div className="mx-auto grid w-full max-w-[1400px] gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.62),rgba(255,255,255,0.34))] p-6 shadow-[0_20px_60px_rgba(148,163,184,0.14)] backdrop-blur-[28px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(191,219,254,0.35),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(186,230,253,0.22),transparent_35%)]" />
            <div className="absolute left-[8%] top-0 h-px w-[44%] bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.8)]" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="h-7 w-48 animate-pulse rounded-full bg-slate-200" />
                  <div className="mt-3 h-5 w-80 animate-pulse rounded-full bg-slate-100" />
                </div>
                <div className="h-10 w-28 animate-pulse rounded-full bg-white/80" />
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/60 bg-white/55 p-6">
                  <div className="mx-auto h-5 w-12 animate-pulse rounded-full bg-sky-100" />
                  <div className="mx-auto mt-6 h-[122px] w-[122px] animate-pulse rounded-full bg-slate-100" />
                  <div className="mx-auto mt-4 h-[86px] w-[164px] animate-pulse rounded-[24px] bg-slate-100" />
                  <div className="mx-auto mt-8 h-[88px] w-[88px] animate-pulse rounded-full bg-sky-100/80" />
                  <div className="mx-auto mt-5 h-5 w-56 animate-pulse rounded-full bg-slate-100" />
                </div>

                <div className="rounded-[28px] border border-white/60 bg-white/55 p-6">
                  <div className="mx-auto h-5 w-16 animate-pulse rounded-full bg-sky-100" />
                  <div className="mx-auto mt-8 h-[220px] w-[220px] animate-pulse rounded-full bg-slate-100" />
                  <div className="mx-auto mt-6 h-8 w-24 animate-pulse rounded-full bg-white/80" />
                  <div className="mx-auto mt-4 h-5 w-64 animate-pulse rounded-full bg-slate-100" />
                  <div className="mx-auto mt-2 h-5 w-56 animate-pulse rounded-full bg-slate-100" />
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-white/60 bg-white/60 p-5">
                <div className="h-4 w-36 animate-pulse rounded-full bg-sky-100" />
                <div className="mt-4 h-5 w-3/4 animate-pulse rounded-full bg-slate-100" />
                <div className="mt-2 h-5 w-2/3 animate-pulse rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[32px] border border-white/60 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.62),rgba(255,255,255,0.34))] p-5 shadow-[0_20px_60px_rgba(148,163,184,0.14)] backdrop-blur-[28px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(191,219,254,0.35),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(186,230,253,0.22),transparent_35%)]" />
          <div className="absolute left-[8%] top-0 h-px w-[44%] bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.8)]" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />
              <div className="h-8 w-20 animate-pulse rounded-full bg-sky-100" />
            </div>

            <div className="mt-5 space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-[22px] border border-white/60 bg-white/60 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-16 animate-pulse rounded-full bg-sky-100" />
                    <div className="h-4 w-14 animate-pulse rounded-full bg-slate-100" />
                  </div>
                  <div className="mt-4 h-5 w-11/12 animate-pulse rounded-full bg-slate-100" />
                  <div className="mt-2 h-5 w-3/4 animate-pulse rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
