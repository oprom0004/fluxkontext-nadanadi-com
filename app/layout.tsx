import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nadanadi.com'),
  title: {
    default: "FLUX Kontext - Editing di Immagini AI Gratuito | Trasferimento di Stile e Trasformazioni",
    template: "%s | FLUX Kontext Italia"
  },
  description: "FLUX Kontext offre editing professionale di immagini AI con trasferimento di stile e trasformazioni consapevoli del contesto. Prova gratuitamente il miglior modello di editing AI.",
  keywords: "FLUX Kontext, editing immagini AI, trasferimento stile, trasformazione immagini, AI gratuito, Black Forest Labs, FLUX.1, intelligenza artificiale, photo editing, image transformation, style transfer, AI art, generative AI, machine learning, deep learning, neural networks, computer vision, image processing, foto ritocco, elaborazione immagini, arte digitale",
  authors: [{ name: "FLUX Kontext Team" }],
  creator: "Black Forest Labs",
  publisher: "FLUX Kontext Italia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FLUX Kontext - Editing di Immagini AI Gratuito",
    description: "Editing professionale di immagini AI con trasferimento di stile e trasformazioni consapevoli del contesto.",
    url: "https://nadanadi.com",
    siteName: "FLUX Kontext Italia",
    images: [
      {
        url: "https://nadanadi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FLUX Kontext - AI Image Editing",
        type: "image/jpeg",
      },
      {
        url: "https://nadanadi.com/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "FLUX Kontext Logo",
        type: "image/jpeg",
      }
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLUX Kontext - Editing di Immagini AI Gratuito",
    description: "Editing professionale di immagini AI con trasferimento di stile e trasformazioni consapevoli del contesto.",
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
    // 这是一个纯意大利语网站，没有其他语言版本
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
    <html lang="it" prefix="og: http://ogp.me/ns#">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/icon.svg" color="#a855f7" />
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
