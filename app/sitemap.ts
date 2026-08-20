import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-19");

  return [
    {
      url: "https://cwmstickydingle.co.uk/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cwmstickydingle.co.uk/guest-guide",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
