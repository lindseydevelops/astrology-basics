import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationHome from "./components/navigation/navigationHome";
import { Viewport } from "next";

const bodyFont = localFont({ src: "./Andalemo.ttf" });

export const metadata: Metadata = {
  title: "Astrology Basics",
  description: "Astrology Basics Learning Material",
  metadataBase: new URL("https://astrology-basics.web.app/"),
  openGraph: {
    title: "Astrology Basics",
    description: "Astrology Basics Learning Material",
    url: "https://astrology-basics.web.app/",
    siteName: "Astrology Basics",
    images: [
      {
        url: "Astro_OGP.png",
        width: 1600,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "Astro_LaunchIcon.png",
    shortcut: "Astro_LaunchIcon.png",
    apple: "Astro_LaunchIcon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={bodyFont.className + " bg-base text-white overflow-x-clip"}
      >
        <div className={"overflow-x-clip"}>
          <NavigationHome />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
