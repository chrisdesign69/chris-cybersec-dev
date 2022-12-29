

import React from 'react'

//Styles
import styles from "/app/styles/min/Form.module.css";

const ContactForm = () => {
    return (
        <div className={styles.formInputContainer}>
            <div className={styles.input}>
                <input type="text" id='name' />
                <label htmlFor="name">Name</label>
            </div>
            <div className={styles.input}>
                <input type="text" id='email' />
                <label htmlFor="email">Email</label>
            </div>
            <div className={styles.submit}>
                <div className={styles.item}>

            Submit
                </div>
            </div>
        </div>
    )
}

export default ContactForm