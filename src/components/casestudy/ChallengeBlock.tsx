export default function ChallengeBlock({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div className="rounded-2xl border border-[#E4E8F3] bg-surface p-6 sm:p-7">
      <h3 className="text-sm font-bold text-ink sm:text-base">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        <span className="font-bold text-ink">Problem:</span> {problem}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        <span className="font-bold text-ink">Solution:</span> {solution}
      </p>
    </div>
  );
}
