"use client";
import galaxyStyles from "./galaxy.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import planets from "../data/planets.json";

export default function Galaxy() {
  return (
    <div className={"relative"}>
      <div className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_backdrop}>
        {planets.planets.map((item: any, index: number) => (
          <div
            className={galaxyStyles.circle + " " + galaxyStyles.ring}
            key={item.planet}
          />
        ))}
      </div>
      <div
        className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_foreground}
      >
        {planets.planets.map((item: any, index: number) => (
          <motion.div
            className={galaxyStyles.circle + " " + galaxyStyles.ring}
            key={item.planet}
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: item.duration, repeat: Infinity }}
          >
            {index == 3 ? (
              <motion.div
                className={
                  galaxyStyles.planet + " border-2 border-white rounded-full"
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
                className={galaxyStyles.planet}
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
