import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { PROJECTS } from "../content/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const base = host ? `${protocol}://${host}` : "https://hripop.media";

  const routes: [string, number, boolean][] = [
    ["", 1, true],
    ["/creative-industries", 0.9, true],
    ["/experiences", 0.9, true],
    ["/destinations", 0.9, true],
    ["/media-talent", 0.9, true],
    ["/image-pr", 0.9, true],
    ["/work", 0.9, true],
    ["/ecosystem", 0.7, true],
    ["/insights", 0.6, true],
    ["/about", 0.7, true],
    ["/contact", 0.9, true],
    ["/privacy", 0.2, false],
    ["/terms", 0.2, false],
    ["/disclaimer", 0.2, false],
  ];

  const projectRoutes = PROJECTS.map(
    (project) => [`/work/${project.slug}`, project.status === "upcoming" ? 0.9 : 0.8, true] as [string, number, boolean],
  );

  return [...routes, ...projectRoutes].map(([path, priority, changeFrequency]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency ? ("monthly" as const) : ("yearly" as const),
    priority,
  }));
}
