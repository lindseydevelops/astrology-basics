"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import styles from "../houses.module.scss";
import PageIntro from "@/app/components/pageIntro";
import aspects from "../../data/aspects.json";

const AspectTabs = () => {
  return (
    <Tab.List className={"w-full flex flex-row justify-center pb-10"}>
      {aspects.aspects.map((item: any, index: number) => (
        <Tab as={Fragment} key={item.aspect}>
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
      {aspects.aspects.map((item: any, index: number) => (
        <Tab.Panel className={"flex flex-col"} key={item.aspect}>
          <div className={"w-full flex justify-center items-center"}>
            <div className={styles.houses}>
              <div className={styles.houses_divided}>
                {[...Array(12)].map((value: undefined, index: number) => (
                  <div
                    className={styles.divider + " " + styles.house}
                    key={item.aspect}
                  />
                ))}
              </div>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity }}
              className={"absolute"}
            >
              <div className={styles.aspect_image}>
                <Image
                  src={item.imgAngleSrc}
                  width={560}
                  height={560}
                  objectFit="contain"
                  alt="aspect angle view"
                />
              </div>
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
    <main className="flex flex-col items-center justify-between p-10 max-md:p-5 mb-20">
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
