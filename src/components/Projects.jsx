import React from 'react'
import styles from '../style.module.css';

const Projects = () => {
    return (
        <div className={styles.parent}>

            <h1 className={styles.header}>Projects</h1>
            
            <div className={styles.tileparent}> 

                {/* Project 1 */}
                <a href="https://github.com/sibarrol/DS210-Project">
                    <div className={styles.tile}>
                        <h2 className={styles.header}>
                            College Hockey Award Show
                        </h2>
                        <h4 className={styles.subheader}>
                            DS 210 Project
                        </h4>
                        <p className={styles.bodytext}>
                            Built a program that analyzed college hockey statistics and gave awards based on the NHL end-of-season trophies
                        </p>
                    </div>
                </a>

                {/* Project 2 */}
                <a href="https://www.bu.edu/spark/2024/10/31/bu-spark-hosts-welcome-back-mini-hack-empowering-students-to-tackle-social-challenges/">
                    <div className={styles.tile}>
                        <h2 className={styles.header}>
                            Hackathon Winner
                        </h2>
                        <h4 className={styles.subheader}>
                            BU Spark! Mini Hacks Hackathon 2024 
                        </h4>
                        <p className={styles.bodytext}>
                            Won a hackathon with my team by creating an app (ElectoRally) for voter information awareness.
                        </p>
                    </div>
                </a>

            </div>

        </div>
    )
}

export default Projects