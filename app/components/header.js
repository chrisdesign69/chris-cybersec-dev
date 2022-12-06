import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

//Logo
import Logo from '/public/chris-cybersec.dev.svg'
import Aloalo from '/public/Aloalo.svg'

//Styles
import styles from "/app/styles/min/Home.module.css";
import Nav from './nav';
import { Suspense } from 'react';

const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.logo}><Link href={'/'}><Image src={Logo} alt='chris-cybersec.dev - Logo' width={180}/></Link></div>
             <Suspense fallback={"Loading Nav"}><Nav /></Suspense>
        </div>
    )
}

export default Header