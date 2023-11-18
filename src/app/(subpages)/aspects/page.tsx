"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import styles from "../houses.module.scss";
import PageIntro from "@/app/components/pageIntro";

const houses = [
  {
    house: "12",
    houseStyle: styles.house_12,
  },
  {
    house: "11",
    houseStyle: styles.house_11,
  },
  {
    house: "10",
    houseStyle: styles.house_10,
  },
  {
    house: "9",
    houseStyle: styles.house_9,
  },
  {
    house: "8",
    houseStyle: styles.house_8,
  },
  {
    house: "7",
    houseStyle: styles.house_7,
  },
  {
    house: "6",
    houseStyle: styles.house_6,
  },
  {
    house: "5",
    houseStyle: styles.house_5,
  },
  {
    house: "4",
    houseStyle: styles.house_4,
  },
  {
    house: "3",
    houseStyle: styles.house_3,
  },
  {
    house: "2",
    houseStyle: styles.house_2,
  },
  {
    house: "1",
    houseStyle: styles.house_1,
  },
];

const aspects = [
  {
    aspect: "Conjunction",
    imgIconSrc: "/aspects/Aspect_Conjunction.svg",
    imgAngleSrc: "/aspects/Aspect_Ex_Conjunction_2.svg",
    degrees: "0°-10°",
    traits: "Blended, United, Coupled",
    find: "Each Point can be within 0°-10° away from your planet, asteroid, node, etc (whatever you are tracking).",
  },
  {
    aspect: "Square",
    imgIconSrc: "/aspects/Aspect_Square.svg",
    imgAngleSrc: "/aspects/Aspect_Ex_Square_2.svg",
    degrees: "90°",
    traits: "Challenge, Tension, Strength",
    find: "Each Point can be found 90° away from your planet, asteroid, node, etc (whatever you are tracking).",
  },
  {
    aspect: "Trine",
    imgIconSrc: "/aspects/Aspect_Trine.svg",
    imgAngleSrc: "/aspects/Aspect_Ex_Trine_2.svg",
    degrees: "120°",
    traits: "Flow, Harmony, Support",
    find: "Each Point can be found 120° away from your planet, asteroid, node, etc (whatever you are tracking).",
  },
  {
    aspect: "Sextile",
    imgIconSrc: "/aspects/Aspect_Sextile.svg",
    imgAngleSrc: "/aspects/Aspect_Ex_Sextile_2.svg",
    degrees: "60°",
    traits: "Stimulating, Creative, Compatible",
    find: "Each Point can be found 60° away from your planet, asteroid, node, etc (whatever you are tracking).",
  },
  {
    aspect: "Opposition",
    imgIconSrc: "/aspects/Aspect_Opposition.svg",
    imgAngleSrc: "/aspects/Aspect_Ex_Opposition_2.svg",
    degrees: "180°",
    traits: "Inner Conflict, Opposite, Duality",
    find: "Each Point can be found exactly 180° away from your planet, asteroid, node, etc (whatever you are tracking).",
  },
];

const AspectTabs = () => {
  return (
    <Tab.List className={"w-full flex flex-row justify-center pb-10 "}>
      {aspects.map((item: any, index: number) => (
        <Tab as={Fragment}>
          {({ selected }) => (
            <div className={"w-28 max-md:w-20"}>
              <Image
                src={item.imgIconSrc}
                width={100}
                height={100}
                objectFit="contain"
                className={
                  "aspect-icon border-b-2 p-5 " +
                  (selected ? "border-white" : "border-transparent")
                }
                alt="aspect icon button tab"
              />
            </div>
          )}
        </Tab>
      ))}
    </Tab.List>
  );
};

const AspectContent = () => {
  return (
    <Tab.Panels className={"w-full pt-10"}>
      {aspects.map((item: any, index: number) => (
        <Tab.Panel className={"flex flex-col"}>
          <div className={"w-full flex justify-center items-center"}>
            <div className={styles.houses}>
              <div className={styles.houses_divided}>
                {houses.map((item: any, index: number) => (
                  <div className={styles.divider + " " + item.houseStyle} />
                ))}
              </div>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity }}
              className={"absolute"}
            >
              <Image
                src={item.imgAngleSrc}
                width={560}
                height={560}
                alt="aspect angle view"
              />
            </motion.div>
          </div>
          <div className={"flex flex-col w-full pt-10 text-xl"}>
            <span>{"Aspect: " + item.aspect}</span>
            <span>{"Degrees: " + item.degrees}</span>
            <br />
            <span>{"Traits: " + item.traits}</span>
            <br />
            <span>{"How to Find: " + item.find}</span>
          </div>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  );
};

export default function Aspects() {
  return (
    <main className="flex flex-col items-center justify-between p-10 max-md:p-5">
      <PageIntro
        header={"The Aspects"}
        content={
          "See all those lines in your chart? Those are aspects. The Aspects represent the interactions between the planets' positions relative to each other in your chart. The five major aspects in astrology are conjunctions, sextiles, squares, trines, and oppositions."
        }
      />
      <Tab.Group>
        <AspectTabs />
        <AspectContent />
      </Tab.Group>
    </main>
  );
}
