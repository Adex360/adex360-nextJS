import { Gauge, Rocket, Target, Users } from "lucide-react";

const ARC_R = 32;
const ARC_CIRC = 2 * Math.PI * ARC_R;
const ARC_TARGET = ARC_CIRC * 0.1; // 90% filled

export default function AboutPerfectFit() {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          data-reveal="left"
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 45%, #C7D6F7 100%)",
            borderRadius: "48% 52% 42% 58% / 54% 46% 54% 46%",
          }}
        >
          <Rocket className="h-24 w-24 text-ink/70" strokeWidth={1.1} />
          <span className="absolute -left-2 top-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-blue shadow-lg shadow-brand-900/10">
            <Target className="h-5 w-5" />
          </span>
          <span className="absolute -right-2 bottom-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#C26F0B] shadow-lg shadow-brand-900/10">
            <Users className="h-5 w-5" />
          </span>
        </div>

        <div data-reveal="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Why We&rsquo;re Your Perfect Fit
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            Reach Every Marketing Milestone for Success
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            With 8+ years of experience, Adex360 excels in digital marketing with innovative
            strategies and bold execution. We craft engaging campaigns that resonate with your
            audience, leveraging the latest tools to drive measurable success.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <ul className="flex-1 space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Gauge className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Growth Rate</h3>
                  <p className="text-sm text-muted">Upto 90%</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E38A19]/10 text-[#C26F0B]">
                  <Users className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Active Clients</h3>
                  <p className="text-sm text-muted">150-200 International and local active clients</p>
                </div>
              </li>
            </ul>

            <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-lg shadow-brand-900/5">
              <div className="relative h-20 w-20">
                <svg viewBox="0 0 76 76" className="h-full w-full -rotate-90">
                  <circle cx="38" cy="38" r={ARC_R} fill="none" stroke="#eef1fb" strokeWidth="8" />
                  <circle
                    data-svg-arc=""
                    cx="38"
                    cy="38"
                    r={ARC_R}
                    fill="none"
                    stroke="#2f6bff"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={ARC_CIRC}
                    strokeDashoffset={ARC_TARGET}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-ink">
                  90%
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-muted">Growth Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
