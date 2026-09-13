import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { personSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              personSchema,
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: `${site.name} Portfolio`,
                publisher: { "@id": `${site.url}/#person` },
              },
            ],
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
