import Link from "next/link";
import Image from "next/image";
import React from "react";

//Styles
import styles from "/app/styles/min/Root.module.css";

//Logo
import Chris from "/public/chris-cybersec.dev.svg";
import { Suspense } from "react";
import QwikContact from "./contact";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.left}>
            <div className={styles.chrisDev}>
              <Image
                src={Chris}
                alt="chris-cybersec.dev - Web Development"
                width={180}
                height={100}
              />
            </div>
          </div>
          <div  className={styles.right}><Suspense fallback={"Loading"}><QwikContact /></Suspense></div>
        </div>
        <div className={styles.Date}>
          &copy;{new Date().getFullYear()}{" "}
          <Link href={"https://chris-cybersec.dev"}>chris-cybersec.dev</Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
