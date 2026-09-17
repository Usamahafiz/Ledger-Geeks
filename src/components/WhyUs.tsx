const points = [
  {
    title: "Security-first engineering",
    description:
      "Every contract goes through internal review, static analysis, and a documented threat model before external audit.",
  },
  {
    title: "Multi-chain expertise",
    description:
      "Deep experience across EVM chains, Solana, and emerging L2s — we pick the right chain for your use case, not the trendiest one.",
  },
  {
    title: "Transparent delivery",
    description:
      "Weekly on-chain and off-chain progress reports, open repos, and direct access to the engineers building your protocol.",
  },
  {
    title: "Post-launch support",
    description:
      "Monitoring, incident response, and upgrade paths so your protocol stays resilient long after mainnet launch.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Why Ledger Geeks
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Engineers who understand both code and consensus
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            We&apos;re not a generalist agency bolting on Web3 buzzwords. Every
            engineer on our team ships and maintains production blockchain
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border-subtle p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
