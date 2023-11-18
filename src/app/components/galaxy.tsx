"use client";
import galaxyStyles from "./galaxy.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const home_page_planets = [
  {
    planet: "Sun",
    planetImgSrc: "/planets/Planet_Sun.png",
    ringStyle: galaxyStyles.ring_0,
    iconWrapperStyle: galaxyStyles.planet_0,
    duration: 0,
  },
  {
    planet: "Mercury",
    planetImgSrc: "/planets/Planet_Mercury.png",
    ringStyle: galaxyStyles.ring_1,
    iconWrapperStyle: galaxyStyles.planet_1,
    duration: 3,
  },
  {
    planet: "Venus",
    planetImgSrc: "/planets/Planet_Venus.png",
    ringStyle: galaxyStyles.ring_2,
    iconWrapperStyle: galaxyStyles.planet_2,
    duration: 5,
  },
  {
    planet: "Moon",
    planetImgSrc: "/planets/Planet_Moon.png",
    ringStyle: galaxyStyles.ring_3,
    iconWrapperStyle: galaxyStyles.planet_3,
    duration: 7,
  },
  {
    planet: "Mars",
    planetImgSrc: "/planets/Planet_Mars.png",
    ringStyle: galaxyStyles.ring_4,
    iconWrapperStyle: galaxyStyles.planet_4,
    duration: 9,
  },
  {
    planet: "Jupiter",
    planetImgSrc: "/planets/Planet_Jupiter.png",
    ringStyle: galaxyStyles.ring_5,
    iconWrapperStyle: galaxyStyles.planet_5,
    duration: 15,
  },
];

export default function Galaxy() {
  return (
    <div className={"relative"}>
      <div className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_backdrop}>
        {home_page_planets.map((item: any, index: number) => (
          <div
            className={
              galaxyStyles.circle +
              " " +
              galaxyStyles.ring +
              " " +
              item.ringStyle
            }
          ></div>
        ))}
      </div>
      <div
        className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_foreground}
      >
        {home_page_planets.map((item: any, index: number) => (
          <motion.div
            className={
              galaxyStyles.circle +
              " " +
              galaxyStyles.ring +
              " " +
              item.ringStyle
            }
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: item.duration, repeat: Infinity }}
          >
            {index == 3 ? (
              <motion.div
                className={
                  item.iconWrapperStyle + " border-2 border-white rounded-full"
                }
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: item.duration, repeat: Infinity }}
              >
                <motion.div
                  className={galaxyStyles.planet_inner}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 720 }}
                  transition={{
                    duration: item.duration,
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src={item.planetImgSrc}
                    width={25}
                    height={25}
                    alt={item.planet + " symbol"}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className={item.iconWrapperStyle}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                }}
              >
                <Image
                  src={item.planetImgSrc}
                  width={50}
                  height={50}
                  alt={item.planet + " symbol"}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
