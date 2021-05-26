import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import '../icons/css/material-design-iconic-font.min.css';
import logo from '../images/logo/logo.png';
import { Link, NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Header() {
    const [displaySearch, setDisplaySearch] = useState(false);
    const [expanded, setExpanded] = useState(false);
    return (
        <header>
            <div className='header-top'>
                <Container>
                    <Row>
                        <Col lg={7} md={5} className='d-none d-lg-block d-md-block'>
                            <span>Have any question? 0123456789</span>
                        </Col>
                        <Col lg={5} md={7} sm={12}>
                            <div class="header-top-right">
                                <div class="content"><a href="#"><i class="zmdi zmdi-account"></i> My Account</a>
                                    <ul class="account-dropdown">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Log In</a></li>
                                        <li><a href="#">Register</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div class="content"><a href="#"><i class="zmdi zmdi-favorite"></i> Wishlist</a></div>
                                <div class="content"><a href="#"><i class="zmdi zmdi-shopping-basket"></i> Chechout</a></div>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>


            <div class="header-logo-menu sticker">
                <Container>
                    <Row>
                        <Col>
                            <Navbar expanded={expanded} expand="lg" className='main-nav mt-1'>
                                <Navbar.Brand><Link className='icon' to='/'> <img src={logo} alt='Logo' /></Link></Navbar.Brand>
                                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" className='b' />
                                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                                    <Nav className="ml-auto  after-responsive-inner-menu">
                                        <NavLink onClick={() => setExpanded(false)} exact activeClassName="selected-link menu-link" to='/'>home</NavLink>
                                        <NavLink onClick={() => setExpanded(false)} exact activeClassName="selected-link menu-link" to='/about'>about</NavLink>
                                        <NavLink onClick={() => setExpanded(false)} exact activeClassName="selected-link menu-link" to="/blog">blog</NavLink>
                                        <NavLink onClick={() => setExpanded(false)} exact activeClassName="selected-link menu-link" to="/contact">contact</NavLink>
                                    </Nav>
                                </Navbar.Collapse>

                                <div className='header-search-wrapper'>
                                    <div className="header-search">
                                        <li className="search-menu" onClick={() => setDisplaySearch(!displaySearch)} >
                                            <i id="toggle-search" className="zmdi zmdi-search-for"></i>
                                        </li>
                                    </div>
                                    {displaySearch && (
                                        <div className="search b">
                                            <div className="search-form">
                                                <form id="search-form" action="#">
                                                    <input type="search" placeholder="Search here..." name="search" />
                                                    <button type="submit">
                                                        <span><i className="zmdi zmdi-search"></i></span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header;
