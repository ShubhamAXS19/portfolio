import React from 'react';
import  styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutme}>

        <div className={styles.back}>
            <p>ABOUT ME</p>
        </div>

        <div className={styles.front}>
            <p>Hello I am a 20 yr old Developer with a passion of coding. <br />
            Looking for Internship and Freelancing Projects </p>
        </div>
    </div>
  )
}

export default About;