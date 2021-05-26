import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import { NavLink } from 'react-router-dom';
import Map from './google_map/Map';

function Contact() {
    return (
        <>
            <Container fluid className='breadcrumb-banner-area'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="breadcrumb-text">
                                <h1 className="text-center">Contact us</h1>
                                <div className="breadcrumb-bar">
                                    <ul className="breadcrumb">
                                        <li><NavLink to='/'>Home</NavLink></li>
                                        <li>CONTACT US</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Map />

            <div class="contact-form-area section-padding">
                <Container>
                    <Row>
                        <Col lg={4} md={12}>
                            <h4 class="contact-title">contact info</h4>
                            <div class="contact-text">
                                <p><span class="c-icon"><i class="zmdi zmdi-phone"></i></span><span class="c-text">0123456789</span></p>
                                <p><span class="c-icon"><i class="zmdi zmdi-email"></i></span><span class="c-text">info@example.com</span></p>
                                <p><span class="c-icon"><i class="zmdi zmdi-pin"></i></span><span class="c-text">Your address goes here.</span></p>
                            </div>
                            <h4 class="contact-title">social media</h4>
                            <div class="link-social">
                                <a to='#'><i class="zmdi zmdi-facebook"></i></a>
                                <a to='#'><i class="zmdi zmdi-rss"></i></a>
                                <a to='#'><i class="zmdi zmdi-google-plus"></i></a>
                                <a to='#'><i class="zmdi zmdi-pinterest"></i></a>
                                <a to='#'><i class="zmdi zmdi-instagram"></i></a>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <h4 class="contact-title">send your massage</h4>
                            <form id="contact-form" action="https://htmldemo.hasthemes.com/educat-preview/educat/mail.php" method="post">
                                <Row>
                                    <Col md={6}>
                                        <input type="text" name="name" placeholder="Name" />
                                    </Col>
                                    <Col md={6}>
                                        <input type="email" name="email" placeholder="Email" />
                                    </Col>
                                    <Col md={12}>
                                        <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        <button type="submit" class="button-default">SUBMIT</button>
                                    </Col>
                                </Row>
                            </form>
                            <p class="form-messege"></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;