export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nadanadi.com/#website",
        "url": "https://nadanadi.com/",
        "name": "FLUX Kontext France",
        "description": "Édition professionnelle d'images IA avec transfert de style et transformations contextuelles",
        "inLanguage": "fr-FR",
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
        "name": "FLUX Kontext - Édition d'Images IA Gratuite | Transfert de Style",
        "isPartOf": {
          "@id": "https://nadanadi.com/#website"
        },
        "about": {
          "@id": "https://nadanadi.com/#organization"
        },
        "description": "FLUX Kontext offre une édition professionnelle d'images IA avec transfert de style et transformations contextuelles. Essayez gratuitement.",
        "inLanguage": "fr-FR",
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
        "description": "Logiciel d'édition d'images basé sur l'IA pour des transformations professionnelles",
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
          "Transfert de style IA",
          "Édition contextuelle",
          "Traitement en temps réel",
          "API pour développeurs",
          "Support multilingue",
          "Qualité professionnelle"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que FLUX Kontext?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FLUX Kontext est un modèle IA avancé pour l'édition d'images qui utilise des prompts textuels pour transformer et modifier des images avec des résultats professionnels."
            }
          },
          {
            "@type": "Question",
            "name": "FLUX Kontext est-il gratuit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, FLUX Kontext offre une version gratuite (dev) pour l'expérimentation et l'usage personnel, ainsi que des versions pro et max pour un usage commercial."
            }
          },
          {
            "@type": "Question",
            "name": "Quelles transformations puis-je faire avec FLUX Kontext?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez faire du transfert de style, modifier les activités dans les images, remplacer du texte, convertir des photos en croquis ou peintures, et bien plus encore."
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
