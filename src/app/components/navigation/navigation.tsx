"use client";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { NavigationButton } from "./navigationMobile";
import NavigationMobile from "./navigationMobile";
import navStyles from "./navigation.module.scss";
import navList from "./navLinks.json";

export default function Navigation() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);

  const onNavOpen = () => {
    document.body.classList.add(navStyles.nav_active);
    document.body.style.overflow = "hidden";
  };
  const onNavClose = () => {
    document.body.classList.remove(navStyles.nav_active);
    document.body.style.overflowY = "auto";
  };
  React.useEffect(() => {
    openNav ? onNavOpen() : onNavClose();
  }, [openNav]);
  return (
    <header>
      <nav className={"text-white flex flex-row"}>
        <ul
          className={
            "flex max-md:hidden justify-evenly items-center w-full pt-5"
          }
        >
          {navList.navLinks.map((item: any, index: number) => (
            <li>
              <Link
                href={item.pagePath}
                className={
                  "my-3 hover:opacity-80 border-b-2 p-2 " +
                  (pathname == item.pagePath
                    ? " border-white"
                    : "border-transparent")
                }
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
        <NavigationButton openNav={openNav} setOpenNav={setOpenNav} />
      </nav>
      {openNav ? (
        <NavigationMobile openNav={openNav} setOpenNav={setOpenNav} />
      ) : null}
    </header>
  );
}
