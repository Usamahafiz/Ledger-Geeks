const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map your protocol requirements, chain constraints, and security needs before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, tokenomics, and contract structure are drafted and reviewed against real attack surfaces.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Contracts, indexers, and infrastructure are developed in the open with continuous testing on testnets.",
  },
  {
    step: "04",
    title: "Audit & Ship",
    description:
      "Independent audits, gas optimization, and a staged mainnet rollout with monitoring from day one.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-border-subtle bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-tertiary">
            How We Work
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A process built for on-chain accountability
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <span className="text-4xl font-bold text-transparent [-webkit-text-stroke:1px_var(--border-strong)]">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
