import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Achievements.css';

const Achievements = () => {
    return (
        <div className="section">
            <Container>
                <Row>
                    <Col md={5}>
                        <h2 className="font-weight-bold">Our Achievements</h2>
                        <p className="mt-3 text-secondary">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letter
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Achievements;