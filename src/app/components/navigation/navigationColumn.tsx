"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navList from "./navLinks.json";

export default function NavigationColumn() {
  const pathname = usePathname();
  return (
    <nav
      className={
        "text-white flex flex-col justify-evenly pt-10 text-2xl max-md:hidden"
      }
    >
      {navList.navLinks.map((item: any, index: number) => (
        <Link
          href={item.pagePath}
          className={
            "hover:opacity-80 border-b-2 p-2 " +
            (pathname == item.pagePath ? " border-white" : "border-transparent")
          }
          key={item.pageName}
        >
          {item.pageName}
        </Link>
      ))}
    </nav>
  );
}
