import React from 'react';
import styles from '../style.module.css';
import image from '../../public/IMG_1454.jpeg';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

const Home = () => {
    return (
        <div className={styles.parent}>
            
            <img src={image} className={styles.image} />

            {/* Name */}
            <div>
                <h1 className={styles.header}>
                    Sophia Ibarrola
                </h1>
            </div>

            <div className={styles.tileparent}>

                {/* Bio Tile */}
                <div className={styles.tile}>
                    {/* Description */}
                    <div className={styles.subheader}>
                        <h3>
                            Data Science & Media Science student at Boston University
                        </h3>
                    </div>

                    {/* Bio */}
                    <div>
                        <p className={styles.bodytext}>
                            Hello! I'm Sophia Ibarrola, a Data & Media Science dual degree student studying at Boston University.<br></br>
                            I'm interested in the intersection between data analysis and mass media and communication.<br></br>
                            Welcome to my portfolio!
                        </p>
                    </div>
                </div>

                {/* Socials Tile */}
                <div className={styles.tile}>
                    <div className={styles.subheader}>
                        <h3>
                            Socials: LinkedIn and GitHub!
                        </h3>
                    </div>

                    <div className={styles.logoparent}> 
                        <a href="https://github.com/sibarrol">
                            <BiLogoGithub className={styles.logo}/>
                        </a>
                        <a href="https://www.linkedin.com/in/sophia-ibarrola-6ba418356">
                            <BiLogoLinkedin className={styles.logo}/>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home