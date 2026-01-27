import React from 'react';
import styles from '../style.module.css';

const Experience = () => {
    return (
        <div className={styles.parent}>

            <h1 className={styles.header}>Coding Experience</h1>

            <div className={styles.tileparent}>


            {/* Experience 1 */}
            <div className={styles.tile}>
                <h2 className={styles.header}>
                    Data Science Undergrad
                </h2>
                <h4 className={styles.subheader}>
                    Boston University
                </h4>
                <p className={styles.bodytext}>
                    DS 110: Python<br></br>
                    DS 210: Rust<br></br>
                    MA 214: R<br></br>
                </p>
            </div>

            {/* Experience 2 */}
            <div className={styles.tile}>
                <h2 className={styles.header}>
                    Personal Projects!
                </h2>
                <p className={styles.bodytext}>
                    I used some basic HTML, CSS, and JavaScript/JavaScriptXML & React to create this portfolio!
                </p>
            </div>      
            
            {/* Experience 3 */}
            <div className={styles.tile}>
                <h2 className={styles.header}>
                    Syracuse Sports Analytics Summer Program
                </h2>
                <h4 className={styles.subheader}>
                    Syracuse University
                </h4>
                <p className={styles.bodytext}>
                    Gained experience in R at Syracuse Pre-College Sports Analytics Program
                </p>
            </div> 

            </div>
        
            
        </div>
    )
}

export default Experience