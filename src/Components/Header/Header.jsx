/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';



const Header = () => {

    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Green Cookers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none m-2' to='/'>Home</Link >
                        <Link className='text-decoration-none m-2' to='/blog'>Blog</Link>
                        {user &&
                            <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                        }
                        {user ?
                            <Button className='text-decoration-none m-2' variant="outline-dark">LogOut</Button>
                            :
                            <Link to="/login">
                                <Button variant="outline-dark" to='/login'>Login</Button>
                            </Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;