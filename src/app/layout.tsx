import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import FogBackground from "@/components/FogBackground";
import SiteHeader from "@/components/SiteHeader";
import { ViewTransitionsProvider } from "@/components/ViewTransitionsProvider";
import "./globals.css";

// Dreamcore: our own display serif, generated in the ai-fonts project (SIL OFL 1.1)
const dreamcore = localFont({
  src: [
    { path: "./fonts/Dreamcore-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Dreamcore-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-dreamcore",
  adjustFontFallback: "Times New Roman",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamcore.xpadding.com"),
  title: "Dreamcore Design System",
  description:
    "A surreal, emotional, and nostalgic design system. Liminal spaces, late-90s digital memories, and a permanent sunset in a dream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dreamcore.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-MN2KHLCK" />
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MN2KHLCK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ViewTransitionsProvider>
          <FogBackground />
          <SiteHeader />
          {children}
        </ViewTransitionsProvider>
      </body>
    </html>
  );
}
