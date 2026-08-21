"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Cpu,
  Wrench,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Rss,
  Bot,
  Mail,
  Bell,
  ShoppingBag,
} from "lucide-react";
import BackToPortfolio from "../casestudy/BackToPortfolio";

const APP_ICONS = { Rss, Bot, Mail, Bell, ShoppingBag } as const;

export type AppIconKey = keyof typeof APP_ICONS;

export type AppChallenge = {
  title: string;
  problem: string;
  solution: string;
};

export type AppCaseStudyContent = {
  eyebrow: string;
  title: string;
  overview: string;
  icon: AppIconKey;
  gradient: string;
  goals: { heading: string; intro: string; items: string[] };
  features: { heading: string; intro: string; items: string[] };
  challenges: { heading: string; items: AppChallenge[] };
  results: { heading: string; items: string[] };
  finalThoughts: { heading: string; paragraphs: string[] };
  cta: { label: string; href: string };
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => {
        const [lead, ...rest] = item.split(" – ");
        return (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <span className="text-sm leading-relaxed text-muted sm:text-base">
              {rest.length ? (
                <>
                  <span className="font-bold text-ink">{lead}</span>
                  {" – " + rest.join(" – ")}
                </>
              ) : (
                item
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function AppCaseStudy({ content }: { content: AppCaseStudyContent }) {
  const Icon = APP_ICONS[content.icon];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#E38A19]/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 self-start">
            <BackToPortfolio variant="dark" />
          </div>
          <div
            data-reveal="up"
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${content.gradient} shadow-xl shadow-brand-900/30`}
          >
            <Icon className="h-8 w-8 text-white" strokeWidth={1.6} />
          </div>
          <p data-reveal="up" className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-blue-light">
            {content.eyebrow}
          </p>
          <h1 data-reveal="up" className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            {content.title}
          </h1>
          <p data-reveal="up" className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {content.overview}
          </p>
          <Link
            data-reveal="up"
            href={content.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            {content.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div data-reveal="up" className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-ink sm:text-2xl">{content.goals.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{content.goals.intro}</p>
            </div>
          </div>
          <BulletList items={content.goals.items} />
        </div>
      </section>

      <section className="bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div data-reveal="up" className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
              <Cpu className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-ink sm:text-2xl">{content.features.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{content.features.intro}</p>
            </div>
          </div>
          <BulletList items={content.features.items} />
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div data-reveal="up" className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <Wrench className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-extrabold text-ink sm:text-2xl">{content.challenges.heading}</h2>
          </div>

          <div data-reveal-group="" data-stagger="0.08" className="mt-8 space-y-5">
            {content.challenges.items.map((c) => (
              <div
                key={c.title}
                data-reveal="up"
                className="rounded-2xl border border-[#E4E8F3] bg-surface p-6 sm:p-7"
              >
                <h3 className="text-sm font-bold text-ink sm:text-base">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.problem}</p>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-ink">
                  <span className="font-bold text-brand-blue">Solution:</span>
                  <span>{c.solution}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div data-reveal="up" className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <TrendingUp className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-extrabold text-ink sm:text-2xl">{content.results.heading}</h2>
          </div>
          <BulletList items={content.results.items} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E38A19]">
            <Sparkles className="h-6 w-6" />
          </span>
          <h2 data-reveal="up" className="mt-5 text-xl font-extrabold text-white sm:text-2xl">
            {content.finalThoughts.heading}
          </h2>
          {content.finalThoughts.paragraphs.map((p) => (
            <p key={p} data-reveal="up" className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {p}
            </p>
          ))}
          <Link
            data-reveal="up"
            href={content.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
          >
            {content.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
