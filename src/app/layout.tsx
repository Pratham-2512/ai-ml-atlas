import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI/ML Atlas — 227 hand-verified AI/ML resources",
  description:
    "A hand-verified index of the best courses, papers, frameworks, and blogs in AI/ML — sorted into 30 categories, with live search, bookmarks, and no signup wall.",
};

const THEME_INIT = `
try {
  var t = localStorage.getItem('atlas.theme');
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${jbMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
