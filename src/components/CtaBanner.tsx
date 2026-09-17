export default function CtaBanner() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface px-8 py-16 text-center sm:px-16">
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to build on-chain?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            Tell us about your protocol, your chain, and your timeline. We&apos;ll
            reply within one business day with next steps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@ledgergeeks.io"
              className="w-full rounded-full bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-primary px-7 py-3 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              hello@ledgergeeks.io
            </a>
            <a
              href="#services"
              className="w-full rounded-full border border-border-strong px-7 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-background sm:w-auto"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
