import React from 'react';
import styles from '../style.module.css';

const Experience = () => {
    return (
        <div className={styles.parent}>

            <h1 className={styles.header}>Work Experience</h1>

            <div className={styles.tileparent}>


            {/* Experience 1 */}
            <div className={styles.tile}>
                <h2 className={styles.header}>
                    Boston University Orientation Leader
                </h2>
                <h4 className={styles.subheader}>
                    Boston University
                </h4>
                <p className={styles.bodytext}>
                    Last summer, I worked as an Orientation Leader for Boston University!
                </p>
                <p className={styles.bodytext}>
                    - Facilitated weekly Zoom meetings involving ice breakers & virtual activities<br></br>
                    - Facilitated in-person ice breakers & campus tours
                </p>

            </div>   

            </div>
        
            
        </div>
    )
}

export default Experience