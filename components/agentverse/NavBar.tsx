'use client';

import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface NavBarProps {
  links?: NavLink[];
  rightContent?: React.ReactNode;
}

const defaultLinks: NavLink[] = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Documentation", href: "#" },
  { label: "Creators", href: "#" },
];

export default function NavBar({
  links = defaultLinks,
  rightContent,
}: NavBarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-md h-20 flex items-center justify-between">
        <div className="flex items-center gap-base">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-lg">
              auto_awesome
            </span>
          </div>
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">
            AgentVerse
          </span>
        </div>
        <div className="hidden md:flex items-center gap-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-primary font-bold border-b-2 border-primary py-xs transition-colors duration-300"
                  : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </Link>
          ))}
          {rightContent || (
            <button className="bg-primary text-background px-md py-base font-body-md font-semibold hover:opacity-90 active:scale-95 transition-all h-10 rounded-sm">
              Launch App
            </button>
          )}
        </div>
        <div className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </nav>
  );
}
