import Link from "next/link";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  columns?: FooterColumn[];
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Marketplace", href: "/marketplace" },
      { label: "Documentation", href: "#" },
      { label: "Creators", href: "#" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Stellar Network", href: "#" },
      { label: "Governance", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer({ columns = defaultColumns }: FooterProps) {
  return (
    <footer className="w-full py-xl bg-background border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row justify-between gap-lg">
        <div>
          <div className="flex items-center gap-base mb-sm">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">
                auto_awesome
              </span>
            </div>
            <span className="font-headline-md text-headline-md font-bold text-primary">
              AgentVerse
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md max-w-xs">
            The decentralized marketplace for sovereign intelligence and
            autonomous workflows.
          </p>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-lg opacity-60">
            &copy; 2024 AgentVerse. Powered by Stellar.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-lg">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-base">
              <span className="text-primary font-bold font-label-sm text-label-sm">
                {col.title}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
