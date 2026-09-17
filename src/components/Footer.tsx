const columns = [
  {
    title: "Services",
    links: [
      "Smart Contracts",
      "On-Chain Data",
      "Infrastructure",
      "Security Audits",
    ],
  },
  {
    title: "Company",
    links: ["About", "Process", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Docs", "Status"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-sm font-bold text-background">
                LG
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Ledger Geeks
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              Blockchain and on-chain engineering for teams building the
              decentralized future.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Ledger Geeks. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
