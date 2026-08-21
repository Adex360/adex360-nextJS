import Image, { type StaticImageData } from "next/image";
import { AlertTriangle, TrendingUp, Wrench } from "lucide-react";

const STEP_STYLE = [
  { icon: AlertTriangle, bg: "bg-[#E38A19]/10", text: "text-[#C26F0B]" },
  { icon: Wrench, bg: "bg-brand-blue/10", text: "text-brand-blue" },
  { icon: TrendingUp, bg: "bg-emerald-500/10", text: "text-emerald-600" },
];

export default function ChallengeSolutionResult({
  image,
  imageAlt,
  items,
}: {
  image: StaticImageData;
  imageAlt: string;
  items: [string, string, string];
}) {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" data-stagger="0.1" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div data-reveal="left" className="relative aspect-[721/548] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/10">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>

        <div className="space-y-5">
          {items.map((text, i) => {
            const { icon: Icon, bg, text: iconText } = STEP_STYLE[i];
            return (
              <div
                key={text}
                data-reveal="up"
                className="flex items-start gap-4 rounded-2xl border border-[#E4E8F3] bg-white p-6 shadow-lg shadow-brand-900/5"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg} ${iconText}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-ink sm:text-base">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
