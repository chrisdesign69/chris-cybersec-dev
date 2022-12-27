"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";

import lighthouse from "/public/lighthouse.png";

//Styles
import styles from "/app/styles/min/Home.module.css";

const LightHouse = () => {
  return (
    <>
      <div className={styles.lightHouseContainer}>
        <h3>Lighthouse score</h3>
        <div className={styles.lightHouseImage}>
          <CldImage
            width="320"
            height="80"
            src="lighthouse_vg5bie"
            alt="chris-cybersec.dev | Home for best Responsive Design"
            crop="fill"
          />
        </div>
        <span>source: <Link href={"https://chris-cybersec.dev"}>https://chris-cybersec.dev</Link></span>
      </div>
    </>
  );
};

export default LightHouse;
