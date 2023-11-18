"use client";
import * as React from "react";
import { NavigationButton } from "./navigationMobile";
import NavigationMobile from "./navigationMobile";
import navStyles from "./navigation.module.scss";
import { usePathname } from "next/navigation";

export default function NavigationHome() {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

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
        <NavigationButton openNav={openNav} setOpenNav={setOpenNav} />
      </nav>
      {openNav ? (
        <NavigationMobile openNav={openNav} setOpenNav={setOpenNav} />
      ) : null}
    </header>
  );
}
