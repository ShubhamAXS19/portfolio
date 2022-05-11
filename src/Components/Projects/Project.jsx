import React from 'react';
import  styles from './Project.module.css';

const Project = () => {
  return (
    <div className={styles.projects}>

    <div className={styles.top}>
      <h3><a href="https://yelpcampwithoutreact.herokuapp.com/"> YelpCamp</a></h3>
      <p>STACK USED</p>
      <p>DESC</p>
    </div>


    <div className={styles.middle}>
      <h3><a href="https://splendid-fudge-e41ead.netlify.app/"> Netflix with TMDB</a></h3>
      <p>STACK USED</p>
      <p>DESC</p>
    </div>

    
    <div className={styles.bottom}>
      <h3><a href=""> NAME</a></h3>
      <p>STACK USED</p>
      <p>DESC</p>
    </div>

        
    </div>
  )
}

export default Project;