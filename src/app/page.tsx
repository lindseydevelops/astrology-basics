"use client";
import NavigationColumn from "./components/navigation/navigationColumn";
import Galaxy from "./components/galaxy";
import * as React from "react";

export default function Home() {
  return (
    <main className="flex items-center">
      <div className={"flex flex-row max-md:flex-col w-full home-temp-contain"}>
        <div
          className={
            "w-1/2 max-md:w-full p-10 bg-base/80 z-1 shadow-xl max-md:shadow-none flex flex-col justify-center intro"
          }
        >
          <h1 className={"text-5xl max-md:my-10 max-sm:mb-5"}>
            You are more than your Sun sign.
          </h1>
          <NavigationColumn />
        </div>
        <div className={"w-1/2 max-md:w-full flex items-center"}>
          <Galaxy />
        </div>
      </div>
    </main>
  );
}
