"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import navStyles from "./navigation.module.scss";
import navList from "./navLinks.json";

export const NavigationButton = ({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: any;
}) => {
  return (
    <div className={navStyles.menu_button_wrapper + " "}>
      <button
        className={
          navStyles.menu_icon + " absolute right-0 m-5 hidden max-md:block"
        }
        onClick={() => setOpenNav(!openNav)}
      >
        <span
          className={
            navStyles.menu_icon__line + " " + navStyles.menu_icon__line_left
          }
        />
        <span className={navStyles.menu_icon__line} />
        <span
          className={
            navStyles.menu_icon__line + " " + navStyles.menu_icon__line_right
          }
        />
      </button>
    </div>
  );
};

export default function NavigationMobile({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: any;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        className={navStyles.mobile_nav + " hidden max-md:block fixed"}
        key={"nav"}
      >
        <AnimatePresence>
          <motion.div
            className={navStyles.mobile_nav_content}
            key={"modal_content"}
            initial={{ scale: 0 }}
            animate={
              openNav ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ul
              className={
                navStyles.mobile_nav_list + " text-white pt-3 text-2xl"
              }
            >
              {navList.navLinks.map((item: any, index: number) => (
                <li className={"p-5"} key={item.pageName}>
                  <Link
                    href={item.pagePath}
                    className={
                      "hover:opacity-100 " +
                      (pathname == item.pagePath
                        ? navStyles.mobile_nav_list_item_active + " opacity-100"
                        : "opacity-80")
                    }
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
