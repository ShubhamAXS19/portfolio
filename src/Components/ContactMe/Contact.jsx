import React, { Fragment } from 'react';
import styles from './Contact.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';





const Contact = () => {
return (
        <Fragment >
            <p className={styles.fade}> CONTACT </p> 

            <div className={styles.icons}>
               {/* <a href=""> <TwitterIcon sx={{ fontSize: 100 }} />  </a> */}
               {/* <a href=""> <InstagramIcon sx={{ fontSize: 100 }} /> </a>  */}
               <a href=""> <EmailIcon sx={{ fontSize: 100 }}/> </a>
               <a href="https://github.com/ShubhamAXS19"> <GitHubIcon sx={{ fontSize: 100 }}/> </a>
               <a href="https://www.linkedin.com/in/shubham-vishwakarma-67965b239/"> <LinkedInIcon sx={{ fontSize: 100 }}/> </a>

            </div>

        </Fragment>
  )
}

export default Contact