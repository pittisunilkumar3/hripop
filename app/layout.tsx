import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { BRAND } from "../content/site";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const base = host ? `${protocol}://${host}` : "https://hripop.media";

  return {
    metadataBase: new URL(base),
    title: {
      default: "HRIPOP Media — Imagination, Hybridized into Reality",
      template: "%s — HRIPOP Media",
    },
    description: BRAND.descriptionShort,
    keywords: [
      "experience company",
      "creative industries",
      "event management",
      "destination weddings",
      "film PR",
      "image management",
      "talent management",
      "AVGC-XR",
      "business matchmaking",
      "summits",
    ],
    openGraph: {
      title: "HRIPOP Media — Imagination, Hybridized into Reality",
      description: BRAND.descriptionShort,
      type: "website",
      siteName: "HRIPOP Media",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "HRIPOP Media" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HRIPOP Media — Imagination, Hybridized into Reality",
      description: BRAND.descriptionShort,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HRIPOP Media",
  slogan: BRAND.tagline,
  description: BRAND.descriptionMaster,
  email: BRAND.email,
  sameAs: [BRAND.socials.instagram, BRAND.socials.linkedin, BRAND.socials.youtube],
  knowsAbout: [
    "Creative Industries",
    "Events & Experiences",
    "Media Management",
    "Image Management",
    "Talent Management",
    "Destination Experiences",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <div id="main">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
