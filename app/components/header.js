import React from 'react'

import Link from 'next/link';

//Styles
import styles from "/app/styles/min/Home.module.css";
import Nav from './nav';
import { Suspense } from 'react';
import LogoComponent from './logo';

const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.logo}><Link href={'/'}> <Suspense fallback={"Loading Logo"}><LogoComponent /></Suspense></Link></div>
        </div>
    )
}

export default Header