'use client'

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [mounted, setMounted] = useState(false);

  // Solo renderiza el ThemeProvider después de montar en el cliente
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
