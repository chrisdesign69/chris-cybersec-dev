import Link from "next/link";
import React from "react";

//Styles
import styles from "/app/styles/min/Home.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navItems}> <Link href={'/'}>live demo</Link></div>
      <div className={styles.navItems}> <Link href={'/'}>let&apos;s talk</Link></div>
    </div>
  );
};

export default Nav;
