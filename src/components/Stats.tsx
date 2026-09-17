const stats = [
  { value: "120+", label: "Smart contracts shipped" },
  { value: "$2.4B+", label: "On-chain value secured" },
  { value: "35+", label: "Protocols audited" },
  { value: "99.98%", label: "Node & indexer uptime" },
];

export default function Stats() {
  return (
    <section className="border-y border-border-subtle bg-surface/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
