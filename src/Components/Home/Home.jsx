import React from 'react';
import Fade from 'react-reveal/Fade';
import  styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.home}>
        <Fade bottom duration={3000}> <h1>Shubham Vishwakarma</h1> </Fade>
        <Fade bottom delay={2000}> <h4>Full Stack / React Developer</h4> </Fade>
    </div>
  )
}

export default Home;