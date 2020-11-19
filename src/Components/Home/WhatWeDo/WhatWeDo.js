import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WhatWeDo.css';

import logo1 from '../../../Images/logo1.png';
import logo2 from '../../../Images/logo2.png';
import logo3 from '../../../Images/logo3.png';
import logo4 from '../../../Images/logo4.png';

const WhatWeDo = () => {
    return (
        <Container fluid className="bg-color pb-5">
           <Row className="justify-content-md-center justify-content-sm-center pt-5 title">
               <Col sm ="auto">
                   <h1 className="text-center">What we do</h1>
                   <h6 className="text pt-3">Our main focus is to make the User Experience <br/>
                   very simple and easy. Simplicity is our Strength.</h6> 
              </Col>
           </Row>
           <Row className="mt-5 pb-5">
               <Col sm={12} md={3}> 
                   <div className="text-center card-style p-4">
                       <img src={logo1} alt=""/>
                       <h5 className="pt-4">Experience Design</h5>
                       <p className="pt-1"> The point of using Lorem <br/>Ipsum is that it has a more-or- <br/>less normal.</p>
                   </div>
               </Col>
               <Col sm={12} md={3}> 
                   <div className="text-center card-style p-4">
                   <img src={logo2} alt=""/>
                   <h3 className="pt-4">Interface Design</h3>
                   <p className="pt-1"> The point of using Lorem <br/>Ipsum is that it has a more-or- <br/>less normal.</p>
                   </div>
               </Col>
               <Col sm={12} md={3}> 
                   <div className="text-center card-style p-4">
                   <img src={logo3} alt=""/>
                   <h3 className="pt-4">Prototyping</h3>
                   <p className="pt-1"> The point of using Lorem <br/>Ipsum is that it has a more-or- <br/>less normal.</p>
                   </div>
               </Col>
               <Col sm={12}  md={3}> 
                   <div className="text-center card-style p-4">
                   <img src={logo4} alt=""/>
                   <h3 className="pt-4">Illustration</h3>
                   <p className="pt-1"> The point of using Lorem <br/>Ipsum is that it has a more-or- <br/>less normal.</p>
                   </div>
               </Col>
           </Row>

        </Container>    

    );
};

export default WhatWeDo;