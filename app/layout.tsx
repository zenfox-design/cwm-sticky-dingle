import type { Metadata, Viewport } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const siteUrl = "https://cwmstickydingle.co.uk";
const siteName = "Cwm Sticky Dingle";
const siteDescription =
  "Off-grid yurt and vintage bus glamping near Abergavenny, with a woodland roundhouse for retreats, celebrations and small events.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Off-grid Glamping near Abergavenny | Cwm Sticky Dingle",
    template: "%s | Cwm Sticky Dingle",
  },
  description: siteDescription,
  applicationName: siteName,
  category: "travel",
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: "Off-grid Glamping near Abergavenny | Cwm Sticky Dingle",
    description: siteDescription,
    images: [
      {
        url: "/images/cwm-sticky-dingle-glamping-social.jpg",
        width: 1200,
        height: 630,
        alt: "The yurt and private shepherd's hut at Cwm Sticky Dingle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-grid Glamping near Abergavenny | Cwm Sticky Dingle",
    description: siteDescription,
    images: ["/images/cwm-sticky-dingle-glamping-social.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/cwm-sticky-dingle-emblem.webp",
    apple: "/images/cwm-sticky-dingle-emblem.png",
  },
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#11251c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
