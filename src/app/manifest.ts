import { MetadataRoute } from "next";
import { seoData } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sujal Pradeep Hadge Portfolio",
    short_name: "Sujal Hadge",
    description: seoData.description,
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
