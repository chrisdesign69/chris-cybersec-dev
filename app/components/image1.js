'use client'

import React from 'react'
import { CldImage } from 'next-cloudinary';

const img1 = process.env.PUBLIC_ID1

//Styles
import styles from "/app/styles/min/Home.module.css";

const Image1 = () => {
    return (
        <CldImage 
        width="867"
        height="633"
        src={img1}
        sizes="100vw"
        alt='my cloudinary Image'
        />
    )
}

export default Image1