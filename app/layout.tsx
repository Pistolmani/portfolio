import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CommandPalette } from "./components/CommandPalette";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pirosmani.dev"),
  title: {
    default: "Otar Pirosmanashvili — .NET Backend Engineer",
    template: "%s · Otar Pirosmanashvili",
  },
  description:
    "Backend engineer building production banking systems with .NET, Clean Architecture, and CQRS. EU citizen, based in Tbilisi, open to remote roles.",
  authors: [{ name: "Otar Pirosmanashvili" }],
  creator: "Otar Pirosmanashvili",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Otar Pirosmanashvili — .NET Backend Engineer",
    description:
      "Backend engineer building production banking systems. Clean Architecture, CQRS, .NET 8, ASP.NET Core. Open to remote roles in the US & EU.",
    siteName: "otarp.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otar Pirosmanashvili — .NET Backend Engineer",
    description:
      "Backend engineer building production banking systems. Clean Architecture, CQRS, .NET 8.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/40">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
