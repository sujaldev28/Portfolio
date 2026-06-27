import { MetadataRoute } from "next";
import { seoData } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoData.siteUrl}/sitemap.xml`,
  };
}
