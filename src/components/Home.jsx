import React from 'react'
import image from '../../public/IMG_4438.jpeg'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

const Home = () => {
    return (
        <div>

            {/* Name */}
            <div>
                <h1>
                    Sophia Ibarrola
                </h1>
            </div>

            {/* Description */}
            <div>
                <h3>
                    Data Science & Media Science student at Boston University
                </h3>
            </div>

            {/* Bio */}
            <div>
                <p>
                    Hello! I'm Sophia Ibarrola, a Data Science & Media Science student at Boston University.
                    I'm a driven student interested in the intersection between data analytics and mass communication. 
                    Welcome to my portfolio!
                </p>
            </div>

            {/* Socials */}
            <div> 
                <BiLogoGithub />
                <BiLogoLinkedin />
            </div>

        </div>
    )
}

export default Home