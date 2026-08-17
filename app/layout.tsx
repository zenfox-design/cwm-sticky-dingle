import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cwmstickydingle.co.uk"),
  title: {
    default: "Cwm Sticky Dingle",
    template: "%s | Cwm Sticky Dingle",
  },
  description: "Off-grid stays and woodland gatherings in a hidden Welsh valley near Abergavenny.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
