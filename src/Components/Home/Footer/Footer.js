import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../Images/Logo.png';
import facebook from '../../../Images/facebook.png';
import twitter from '../../../Images/twitter.png';
import linkedin from '../../../Images/linkedin.png';
import dribble from '../../../Images/dribble.png';

const Footer = () => {
    return (
        <div className="section">
           <Container className="my-3">
               <Row>
                   <Col md={5} className="px-5">
                       <img style={{width:"120px"}} src={logo} alt=""/>
                       <p className="iconStyle">
                           <a href="#"><img src={facebook} alt=""/></a>
                           <a href="#"><img src={twitter} alt=""/></a>
                           <a href="#"><img src={linkedin} alt=""/></a>
                           <a href="#"><img src={dribble} alt=""/></a>
                       </p>
                   </Col>
                   <Col md={7}>
                        <Row className="text-secondary">
                            <Col sm={12} md={4}>
                                <span>Feature</span> <br/>
                                <span>Enterprise</span> <br/>
                                <span>Pricing</span>
                            </Col>
                            <Col sm={12} md={4}>
                                <span>About Us</span> <br/>
                                <span>Terms of Service</span> <br/>
                                <span>Security</span> <br/>
                                <span>Login</span>
                            </Col>
                            <Col sm={12} md={4}>
                                <span>Blog</span> <br/>
                                <span>Helo Center</span> <br/>
                                <span>Contact Us</span> <br/>
                                <span>Status</span>                            
                            </Col>
                        </Row>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Footer;