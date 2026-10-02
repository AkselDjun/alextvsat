import { company, faq, messengers, phones, services, siteUrl } from "./site";

export const buildStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: company.brand,
      inLanguage: "ru",
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: `${company.brand} — ремонт телевизоров в Новогрудке`,
      alternateName: company.brand,
      description:
        "Ремонт ЖК, LED и кинескопных телевизоров, установка и настройка спутникового и цифрового ТВ, скупка телевизоров на запчасти в Новогрудке и Новогрудском районе. Бесплатный выезд мастера и диагностика, гарантия на работы.",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/img/icons/logo512.png`,
      image: `${siteUrl}/img/og.jpg`,
      telephone: phones.map((p) => p.href.replace("tel:", "")),
      address: {
        "@type": "PostalAddress",
        addressLocality: company.city,
        addressRegion: company.oblast,
        addressCountry: "BY",
      },
      areaServed: [
        { "@type": "City", name: company.city },
        { "@type": "AdministrativeArea", name: company.district },
      ],
      sameAs: messengers.filter((m) => m.href.startsWith("https://")).map((m) => m.href),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.content,
            areaServed: company.district,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
});
