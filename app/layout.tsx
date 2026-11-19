import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nadanadi.com"),
  title: {
    default: "FLUX Kontext - Édition d'Images IA Gratuite | Transformations Instantanées",
    template: "%s | FLUX Kontext France"
  },
  description: "Édition professionnelle d'images IA avec transfert de style et transformations contextuelles. Aucune inscription requise. Essayez FLUX Kontext gratuitement!",
  keywords: "FLUX Kontext, édition images IA, transfert de style, transformation d'images, IA gratuite, édition photo, intelligence artificielle, traitement d'images, photos IA, édition professionnelle",
  authors: [{ name: "FLUX Kontext Team" }],
  creator: "FLUX Kontext",
  publisher: "FLUX Kontext",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FLUX Kontext - Édition d'Images IA Gratuite",
    description: "Édition professionnelle d'images IA avec transfert de style et transformations contextuelles.",
    url: "https://nadanadi.com",
    siteName: "FLUX Kontext France",
    images: [
      {
        url: "https://nadanadi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FLUX Kontext - Édition d'Images IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLUX Kontext - Édition d'Images IA Gratuite",
    description: "Édition professionnelle d'images IA avec transfert de style et transformations contextuelles.",
    images: ["https://nadanadi.com/og-image.jpg"],
    creator: "@fluxkontext",
    site: "@fluxkontext",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nadanadi.com",
    // 这是一个纯法语网站，没有其他语言版本
    // 其他语言的用户应访问主站 flux1kontextai.com
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["your-email@example.com", "https://nadanadi.com"],
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" prefix="og: http://ogp.me/ns#">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/icon.svg" color="#a855f7" />
        <link rel="canonical" href="https://nadanadi.com" />
        <meta name="msapplication-TileColor" content="#a855f7" />
        <meta name="theme-color" content="#030712" />
        
        {/* Verification Codes */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-code" />
        <meta name="p:domain_verify" content="your-pinterest-code" />
        <meta name="norton-safeweb-site-verification" content="your-norton-code" />
        
        {/* Structured Data */}
        <StructuredData />
        <script defer src="https://umamimy.vercel.app/script.js" data-website-id="092bb1cd-8fc2-4a1d-b0e3-0637783cb533" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
