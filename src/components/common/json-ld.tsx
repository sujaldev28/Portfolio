import React from "react";
import { personalData } from "@/data/personal";
import { seoData } from "@/data/seo";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "jobTitle": personalData.title,
    "url": personalData.socials.website,
    "sameAs": [
      personalData.socials.linkedin,
      personalData.socials.github
    ],
    "description": seoData.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Jhulelal Institute of Technology, Nagpur"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
