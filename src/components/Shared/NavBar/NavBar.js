import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
import logo from '../../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant='dark'>
                <Container>
                    <div>
                        <Navbar.Brand href="#home" className='nav-img'>
                            <img src={logo} alt="" srcset="" />
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-link">
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/services'
                            >
                                Services
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/about'
                            >
                                About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/contact'
                            >
                                Contact
                            </NavLink>
                        </Nav>
                        <Nav>
                        <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/login'
                            >
                                Login
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                eventKey={2} to='/register'
                            >
                                Register
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                eventKey={2} to='/cart'
                            >
                               Cart <span className='font-icon'> <FontAwesomeIcon  icon={faShoppingCart}/></span>  
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default NavBar;