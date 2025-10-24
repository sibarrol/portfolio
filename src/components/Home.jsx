import React from 'react';
import styles from '../style.module.css';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

const Home = () => {
    return (
        <div>

            {/* Name */}
            <div>
                <h1 className={styles.header}>
                    Sophia Ibarrola
                </h1>
            </div>

            {/* Description */}
            <div className={styles.subheader}>
                <h3>
                    Data Science & Media Science student at Boston University
                </h3>
            </div>

            {/* Bio */}
            <div>
                <p className={styles.bodytext}>
                    Hello! I'm Sophia Ibarrola, a Data Science & Media Science student at Boston University.
                    I'm a driven student interested in the intersection between data analytics and mass communication. 
                    Welcome to my portfolio!
                </p>
            </div>

            {/* Socials */}
            <div className={styles.parent}> 
                <a href="https://github.com/sibarrol">
                    <BiLogoGithub className={styles.logo}/>
                </a>
                <a href="www.linkedin.com/in/sophia-ibarrola-6ba418356">
                <BiLogoLinkedin className={styles.logo}/>
                </a>
            </div>

        </div>
    )
}

export default Home