import React from "react";
import { Suspense } from "react";
import Image1 from "./components/image1";

//Styles
import styles from "/app/styles/min/Home.module.css";

const Main = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Suspense fallback={'Loading'}>
          <div className={styles.image1}>
            <Image1 />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Main;
