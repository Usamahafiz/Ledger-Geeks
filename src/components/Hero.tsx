import NetworkGlobeClient from "./NetworkGlobeClient";

const chains = ["Ethereum", "Solana", "Polygon", "Arbitrum", "Base", "Avalanche"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="grid-overlay absolute inset-0 h-full w-full" aria-hidden />
      <div className="absolute inset-0 z-0">
        <NetworkGlobeClient />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            "radial-gradient(45% 55% at 50% 38%, var(--background) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
            Trusted blockchain engineering partner
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Building the{" "}
            <span className="text-gradient">on-chain future</span>, one
            protocol at a time
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Ledger Geeks designs and ships smart contracts, blockchain
            infrastructure, and on-chain data systems for teams that need
            security, speed, and scale — from audit to mainnet.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-primary px-7 py-3 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="w-full rounded-full border border-border-strong px-7 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-surface sm:w-auto"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Building across every major network
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {chains.map((chain) => (
                <span
                  key={chain}
                  className="text-sm font-medium text-muted/80"
                >
                  {chain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
