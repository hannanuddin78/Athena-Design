import React from 'react';
import './NavigationBar.css';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import logo from '../../../Images/Group 86.png';

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="link">Home</Nav.Link>
                    <Nav.Link className="link">About</Nav.Link>
                    <Nav.Link className="link">Services</Nav.Link>
                    <Nav.Link className="link">Pricing</Nav.Link>
                    <Nav.Link className="link">Our Team</Nav.Link>
                    <Nav.Link><button className="contactBtn">Contact us</button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;