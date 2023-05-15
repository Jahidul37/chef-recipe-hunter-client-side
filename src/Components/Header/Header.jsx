/* eslint-disable no-unused-vars */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Green Cookers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><Link className='text-decoration-none' to='/'>Home</Link ></Nav.Link>
                        <Nav.Link href="#memes"><Link className='text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#memes"><Link className='text-decoration-none' to='/profile'><FaUserCircle></FaUserCircle></Link></Nav.Link>
                        <Nav.Link href="#memes"><Link className='text-decoration-none' to='/login'>Login</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;