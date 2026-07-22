import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://muhammadtaha.app";
const title = "Muhammad Taha, Forward Deployed Software Engineer";
const description =
  "Portfolio of Muhammad Taha (BoltTaha), a Forward Deployed Software Engineer who partners with businesses to turn broken, time-consuming workflows into automated software systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Muhammad Taha",
    "Muhammad Taha Software Engineer",
    "Muhammad Taha Portfolio",
    "BoltTaha",
    "Bolt Taha",
    "bolttaha",
    "Forward Deployed Software Engineer",
    "Software Engineer",
    "Systems Architect",
    "Backend Infrastructure",
    "AI Systems",
    "Machine Learning",
    "Distributed Systems",
    "FAST-NUCES",
  ],
  authors: [{ name: "Muhammad Taha", url: siteUrl }],
  creator: "Muhammad Taha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Muhammad Taha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Taha",
  alternateName: ["BoltTaha", "Bolt Taha"],
  url: siteUrl,
  jobTitle: "Forward Deployed Software Engineer",
  email: "contact@muhammadtaha.app",
  sameAs: [
    "https://github.com/bolttaha",
    "https://www.linkedin.com/in/bolttaha/",
    "https://www.upwork.com/freelancers/bolttaha",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "FAST-NUCES",
  },
  knowsAbout: [
    "Software Engineering",
    "AI Systems",
    "Computer Vision",
    "Large Language Models",
    "Backend Infrastructure",
    "Distributed Systems",
    "OCR & Document Processing",
    "Time Series Forecasting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${sourceSerif4.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
