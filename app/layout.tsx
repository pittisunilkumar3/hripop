import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const base = host ? `${protocol}://${host}` : "https://hripop.media";

  return {
    metadataBase: new URL(base),
    title: "HRIPOP Media — Imagination, Hybridized Into Reality",
    description:
      "HRIPOP Media creates extraordinary experiences across creative industries, events, destinations, media, talent and image management.",
    openGraph: {
      title: "HRIPOP Media — Imagination, Hybridized Into Reality",
      description: "You bring the imagination. We build the experience.",
      type: "website",
      images: [{ url: `${base}/og.png`, width: 1731, height: 909, alt: "HRIPOP Media" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HRIPOP Media — Imagination, Hybridized Into Reality",
      description: "You bring the imagination. We build the experience.",
      images: [`${base}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
