import React from "react";
import Image from "next/image";

//Logo
import Logo from "/public/Aloalo.svg";
import Chris from "/public/chris-cybersec.dev.svg";

//Styles
import styles from "/app/styles/min/Logo.module.css";

const LogoComponent = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          alt="chris-cybersec.dev - WebDesign"
          height={100}
        />
      </div>
      <div className={styles.chrisDev}>
        <Image
          src={Chris}
          alt="chris-cybersec.dev - Web Development"
          width={180}
          height={100}
        />
      </div>
    </div>
  );
};

export default LogoComponent;
