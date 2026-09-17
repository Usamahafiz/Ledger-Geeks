const services = [
  {
    title: "Smart Contract Development",
    description:
      "Secure, gas-optimized smart contracts for DeFi, NFTs, DAOs, and tokenized assets — built with battle-tested standards and audited before launch.",
    icon: "◆",
  },
  {
    title: "On-Chain Data & Indexing",
    description:
      "Custom indexers, subgraphs, and real-time data pipelines that turn raw chain data into queryable, production-ready APIs.",
    icon: "▤",
  },
  {
    title: "Blockchain Infrastructure",
    description:
      "Node clusters, RPC endpoints, and validator setups engineered for uptime, throughput, and multi-chain reliability.",
    icon: "▣",
  },
  {
    title: "Security Audits",
    description:
      "Manual and automated smart contract audits with formal verification support, threat modeling, and post-launch monitoring.",
    icon: "◈",
  },
  {
    title: "Wallet & dApp Integration",
    description:
      "End-to-end wallet connectivity, transaction flows, and front-end integrations across EVM and non-EVM chains.",
    icon: "◫",
  },
  {
    title: "Tokenomics & Protocol Design",
    description:
      "Incentive modeling, token design, and governance architecture grounded in sustainable, real-world protocol economics.",
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
          What We Do
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Full-stack blockchain services under one roof
        </p>
        <p className="mt-4 text-base leading-7 text-muted">
          From protocol design to production infrastructure, we cover every
          layer of the on-chain stack so you can focus on your product.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-border-subtle bg-surface/50 p-6 transition-colors hover:border-border-strong hover:bg-surface"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-secondary/20 via-brand-tertiary/20 to-brand-primary/20 text-xl text-brand-secondary">
              {service.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
