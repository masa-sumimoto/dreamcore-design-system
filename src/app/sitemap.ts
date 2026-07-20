import type { MetadataRoute } from "next";

const BASE_URL = "https://dreamcore.xpadding.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/foundations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/foundations/colors`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/foundations/effects`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/foundations/motion`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/foundations/spacing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/foundations/typography`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/components`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/showcase`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/showcase/blog`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/showcase/dashboard`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/showcase/profile`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
