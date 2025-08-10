export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nadanadi.com/#website",
        "url": "https://nadanadi.com/",
        "name": "FLUX Kontext Italia",
        "description": "Editing professionale di immagini AI con trasferimento di stile e trasformazioni consapevoli del contesto",
        "inLanguage": "it-IT",
        "publisher": {
          "@id": "https://nadanadi.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://nadanadi.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://nadanadi.com/#organization",
        "name": "FLUX Kontext",
        "url": "https://nadanadi.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nadanadi.com/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://flux1kontextai.com",
          "https://twitter.com/fluxkontext",
          "https://facebook.com/fluxkontext",
          "https://github.com/fluxkontext"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://nadanadi.com/#webpage",
        "url": "https://nadanadi.com/",
        "name": "FLUX Kontext - Editing di Immagini AI Gratuito | Trasferimento di Stile",
        "isPartOf": {
          "@id": "https://nadanadi.com/#website"
        },
        "about": {
          "@id": "https://nadanadi.com/#organization"
        },
        "description": "FLUX Kontext offre editing professionale di immagini AI con trasferimento di stile e trasformazioni consapevoli del contesto. Prova gratuitamente.",
        "inLanguage": "it-IT",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://nadanadi.com/og-image.jpg",
          "width": 1200,
          "height": 630
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://nadanadi.com/#software",
        "name": "FLUX Kontext",
        "description": "Software di editing immagini basato su AI per trasformazioni professionali",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "2450",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Trasferimento di stile AI",
          "Editing consapevole del contesto",
          "Elaborazione in tempo reale",
          "API per sviluppatori",
          "Supporto multilingua",
          "Qualità professionale"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Cos'è FLUX Kontext?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FLUX Kontext è un modello AI avanzato per l'editing di immagini che utilizza prompt di testo per trasformare e modificare immagini con risultati professionali."
            }
          },
          {
            "@type": "Question",
            "name": "FLUX Kontext è gratuito?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sì, FLUX Kontext offre una versione gratuita (dev) per sperimentazione e uso personale, oltre a versioni pro e max per uso commerciale."
            }
          },
          {
            "@type": "Question",
            "name": "Quali trasformazioni posso fare con FLUX Kontext?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puoi fare trasferimento di stile, modificare attività nelle immagini, sostituire testo, convertire foto in schizzi o pitture, e molto altro."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
