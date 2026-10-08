import { SITE_URL } from "@/lib/utils";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shiftup Lab Private Limited",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/shiftup-logo.svg`,
    description:
      "Shiftup Lab is building the intelligence layer for the world's student ecosystem through Dino, a non-academic student digital-twin ecosystem.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
    },
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shiftup Lab",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "Shiftup Lab Private Limited",
    },
  };
}

export function dinoProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dino",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Dino is a non-academic student ecosystem built around a continuously evolving Student Digital Twin.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      description: "Early access — idea / MVP stage",
    },
    provider: {
      "@type": "Organization",
      name: "Shiftup Lab Private Limited",
    },
  };
}

export function foundersJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hemanth Kumar S",
      jobTitle: "Founder & Director",
      worksFor: { "@type": "Organization", name: "Shiftup Lab Private Limited" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jennifer Immanuale",
      jobTitle: "Co-Founder",
      worksFor: { "@type": "Organization", name: "Shiftup Lab Private Limited" },
    },
  ];
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
