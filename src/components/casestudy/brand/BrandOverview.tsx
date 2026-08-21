export default function BrandOverview({ text }: { text: string }) {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-start">
        <div data-reveal="left" className="h-px w-16 shrink-0 bg-[#E4E8F3] sm:mt-3 sm:h-px sm:w-24" />
        <p data-reveal="up" className="text-sm leading-relaxed text-muted sm:ml-auto sm:max-w-xl sm:text-right sm:text-base">
          {text}
        </p>
      </div>
    </section>
  );
}
