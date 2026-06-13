interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "button" | "section";
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  as: Component = "div",
  onClick,
}: GlassCardProps) {
  return (
    <Component
      onClick={onClick}
      className={`glass-card rounded-xl ${hover ? "hover:border-white/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%),rgba(20,19,19,0.7)]" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
