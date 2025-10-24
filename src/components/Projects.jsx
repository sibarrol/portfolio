import React from 'react'
import styles from '../style.module.css';

const Projects = () => {
    return (
        <div>
            
            {/* Project 1 */}
            <div className={styles.header}>
                <h2>
                    College Hockey Award Show
                </h2>
                <h4 className={styles.subheader}>
                    DS 210 Project
                </h4>
                <p className={styles.bodytext}>
                    Built a program that analyzed college hockey statistics and gave awards based on the NHL end-of-season trophies
                </p>
            </div>

            {/* Project 2 */}
            <div>
                <h2 className={styles.header}>
                    Hackathon Winner
                </h2>
                <h4 className={styles.subheader}>
                    BU Spark! Mini Hacks Hackathon 2024 
                </h4>
                <p className={styles.bodytext}>
                    Won a hackathon with my team by creating an app for voter information awareness.
                </p>
            </div>

        </div>
    )
}

export default Projects