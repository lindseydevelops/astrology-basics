import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationHome from "./components/navigation/navigationHome";
import { Viewport } from "next";

const bodyFont = localFont({ src: "./Andalemo.ttf" });

export const metadata: Metadata = {
  title: "Astrology Basics",
  description: "Astrology Basics Learning Material",
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
      <body className={bodyFont.className + " bg-base text-white"}>
        <div className={"overflow-x-clip"}>
          <NavigationHome />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
