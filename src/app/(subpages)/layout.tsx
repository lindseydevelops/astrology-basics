"use client";
import Navigation from "../components/navigation/navigation";
import "../globals.css";
import Link from "next/link";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      <div className={""}>{children}</div>
      <footer className={"w-full flex justify-center align-center "}>
        <div className={"w-full p-5 text-center hover:opacity-80"}>
          <Link
            href={"/"}
            className={"p-3 border-b border-transparent hover:border-white"}
          >
            Return Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
