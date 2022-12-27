import Link from "next/link";
import React from "react";
import { Suspense } from "react";

//Fonts
import { Raleway } from "@next/font/google";
const raleway = Raleway({ weight: "400", subsets: ['latin'] });

//Styles
import styles from "/app/styles/min/Home.module.css";

//Components
import LightHouse from "./components/lighthouse";
import TypeWriterPage from "./components/typewriter";

const Main = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headerContent}>
          <h2>Hey I&apos;m <span className={raleway.className}>Chris</span>,</h2>
          <p>Welcome to my World of</p>
          <Suspense fallback={"Loading"}><TypeWriterPage /></Suspense>
        </div>
        <Suspense fallback={"Loading"}>
          <LightHouse />
        </Suspense>
      </div>
    </>
  );
};

export default Main;
