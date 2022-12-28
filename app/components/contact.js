import React from 'react'
import { Suspense } from 'react';
import ContactForm from './contactform';

//Styles
import styles from "/app/styles/min/Form.module.css";

const QwikContact = () => {
    return (
        <form className={styles.form}>
            <h3>Quick Contact</h3>
            <Suspense fallback={"Loading"}><ContactForm /></Suspense>
        </form>
    )
}

export default QwikContact