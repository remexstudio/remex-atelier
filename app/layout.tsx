import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://remex-atelier.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Remex Studio",
    template: "%s · Remex Studio",
  },
  description: "Agents, built to the brief.",
  openGraph: {
    title: "Remex Studio",
    description: "Agents, built to the brief.",
    url: "/",
    siteName: "Remex Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Remex Studio",
    description: "Agents, built to the brief.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full`}
    >
      <body className="type-body min-h-full bg-gutter text-ink antialiased [scroll-padding-top:var(--nav-height)]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
