"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * Allow us to use the Next.js theme provider in our app.
 * The component is a wrapper around the Next.js theme provider,
 * and it must be designated as a client component.
 */

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
