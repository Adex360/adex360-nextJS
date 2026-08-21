export default function StrategyQuote({ quote }: { quote: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
      <p
        data-reveal="scale"
        className="relative mx-auto max-w-2xl text-center text-lg font-semibold leading-relaxed text-white sm:text-xl"
      >
        {quote}
      </p>
    </section>
  );
}
