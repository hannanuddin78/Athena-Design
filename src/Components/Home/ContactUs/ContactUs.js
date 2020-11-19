import React from 'react';
import './ContactUs.css';
import image2 from '../../../Images/image2.png';
import { Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="section">
            <Container className="my-2">
                <Row>
                    <Col md={6}>
                        <div className="p-3">
                            <img className="img-fluid" src={image2} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-4">
                            <h2 className="mt-5 pt-5 font-weight-bold">Stay Running and Project</h2>
                            <p className="mt-3 text-secondary">
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letter.
                            </p>
                            <button className="contactBtn mt-3">Contact Us</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;