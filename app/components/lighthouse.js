import React from 'react'

//Styles
import styles from "/app/styles/min/Home.module.css";

const LightHouse = () => {
    return (
        <div className={styles.lightHouseContainer}>
            <h3>Lighthouse score</h3>
            <div className={styles.lightHouseImage}></div>
        </div>
    )
}

export default LightHouse