// components/ui/Button.tsx
'use client'

import Link from "next/link";
import { cn } from "@/lib/utils"; // utilidad para combinar clases

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition px-6 py-3";

const variants = {
  primary: "bg-primary text-contrast hover:bg-primary/90",
  secondary: "bg-secondary text-contrast hover:bg-secondary/90",
  outline:
    "border border-current text-foreground hover:bg-foreground hover:text-background",
};

export function Button({
  children,
  href,
  onClick,
  className,
  variant = "primary",
}: ButtonProps) {
  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    // Usa Link para navegación interna
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}