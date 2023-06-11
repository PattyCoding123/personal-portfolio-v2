import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";

import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  creator: "Patrick",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
