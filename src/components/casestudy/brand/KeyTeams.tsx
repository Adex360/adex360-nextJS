export type Team = { title: string; description: string };

export default function KeyTeams({ teams }: { teams: Team[] }) {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
      <div data-reveal-group="" className="relative mx-auto max-w-5xl text-center">
        <h2 data-reveal="up" className="text-xl font-extrabold text-white sm:text-2xl">
          Key Teams &amp; Expertise
        </h2>
        <div data-reveal="up" data-reveal-delay="0.1" className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {teams.map((team) => (
            <div key={team.title}>
              <h3 className="text-sm font-bold text-brand-blue-light">{team.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
