import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/SP-main-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-green-200 font-sans antialiased ",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
         
          <main className="overflow-y-auto">
          {children}
          </main>
         
        </Providers>
      </body>
    </html>
  );
}
