const team = [
  { name: "Zain Hameed", role: "SEO" },
  { name: "Umer Shoukat", role: "Director Marketing & Tech" },
  { name: "Ali Lalhani", role: "Director Growth" },
  { name: "Shehariyar Ahmed", role: "Finance Manager" },
];

export default function Team() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p
          data-reveal="up"
          className="text-xs font-semibold uppercase tracking-widest text-brand-blue"
        >
          Team Members
        </p>
        <h2
          data-reveal="up"
          className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl"
        >
          Expert Team Members
        </h2>

        <div
          data-reveal-group=""
          data-stagger="0.1"
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {team.map((member) => (
            <div
              key={member.name}
              data-reveal="scale"
              className="group flex flex-col items-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-900 text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <p className="mt-4 text-sm font-bold text-ink">{member.name}</p>
              <p className="text-xs text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
