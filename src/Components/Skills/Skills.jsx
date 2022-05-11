import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import  styles from './Skills.module.css';
import LightSpeed from 'react-reveal/LightSpeed';

const Skills = () => {
    return (
    <div className={styles.skills}>
            

        <p>SKILLS</p>

        <Container>
            <Row>

                <Row className={styles.Web}>
                    <LightSpeed left >
                            <ul>
                                <p>WEB TOOLS</p>
                                <img src="https://img.icons8.com/color/144/000000/html-5--v1.png"/>
                                <img src="https://img.icons8.com/color/144/000000/css3.png"/>
                                <img src="https://img.icons8.com/color/144/000000/nodejs.png"/>
                                <img src="https://img.icons8.com/color/144/000000/typescript.png"/>

                            </ul>

                    </LightSpeed>
                </Row>


            <Row className={styles.Framework}>
                <LightSpeed left>
                        <p>FRAMEWORK</p>
                    <ul>
                        <img src="https://img.icons8.com/office/160/000000/react.png"/> 
                        <img src="https://expressjs.com/images/express-facebook-share.png" alt="" />
                        <img src="https://img.icons8.com/color/144/000000/bootstrap.png"/>
                        
                    </ul> 
                </LightSpeed>
            </Row>



            <Row className={styles.Database}>
                <LightSpeed left>
                        <p>DATABASE</p>
                        
                        <ul>
                        <img src="https://img.icons8.com/color/144/000000/mongodb.png"/>
                        <img src="https://img.icons8.com/color/144/000000/mysql-logo.png"/>
                        </ul>
                        
                </LightSpeed>
            </Row>

                
            
            

            

            <Col className={styles.extra}> <p>Familier with Python,C++,Java and few Animation Packages</p> </Col>
        </Row>

        </Container>
        </div>
        )
    }
    
    export default Skills;
    