import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerLogo from '../images/logo/footer.png';
import footerImg1 from '../images/footer/1.jpg';
import footerImg2 from '../images/footer/2.jpg';
import footerImg3 from '../images/footer/3.jpg';
import footerImg4 from '../images/footer/4.jpg';
import footerImg5 from '../images/footer/5.jpg';
import footerImg6 from '../images/footer/6.jpg';
import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <Container fluid className='top-footer news-area'>
                <Container>
                    <Row>
                        <Col lg={5} md={12} sm={12}>
                            <div className="newsletter-content ">
                                <h3>SUBSCRIBE</h3>
                                <h2>TO OUR NEWSLETTER</h2>
                            </div>
                        </Col>
                        <Col lg={7} md={12} sm={12}>
                            <div className="newsletter-form angle ">
                                <form action="#" id="mc-form" class="mc-form footer-newsletter fix" novalidate="true">
                                    <div className="subscribe-form">
                                        <input id="mc-email" type="email" name="EMAIL" placeholder="Enter your email address..." />
                                        <button id="mc-submit" type="submit">SUBSCRIBE</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='middle-footer'>
                <Container className='py-5'>
                    <Row  >
                        <Col lg={3} md={6}>
                            <div className="single-footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={footerLogo} alt="" /></a>
                                </div>
                                <p>There are many variations of passg of Lorem Ipsum available, but thmajority have suffered altem, </p>
                                <div className="social-icons">
                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                    <a href="#"><i className="zmdi zmdi-rss"></i></a>
                                    <a href="#"><i className="zmdi zmdi-google-plus"></i></a>
                                    <a href="#"><i className="zmdi zmdi-pinterest"></i></a>
                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="single-footer-widget">
                                <h3>GET IN TOUCH</h3>
                                <a href="tel:0123-456-789">
                                    <i className="zmdi zmdi-phone"></i>0123-456-789</a>
                                <span><i className="zmdi zmdi-email"></i>info@example.com</span>
                                <span><i className="zmdi zmdi-globe"></i>www.example.com</span>
                                <span><i className="zmdi zmdi-pin"></i>Your address goes here.</span>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="single-footer-widget">
                                <h3>Useful Links</h3>
                                <ul class="footer-list">
                                    <li><a href="#">Teachers &amp; Staff</a></li>
                                    <li><a href="#">Our Courses</a></li>
                                    <li><a href="#">Courses Categories</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='single-footer-widget-main'>
                            <div class="single-footer-widget">
                                <h3>Instagram</h3>
                                <div className="instagram-image">
                                    <div className="footer-img">
                                        <a href="#"><img src={footerImg1} alt="" /></a>
                                    </div>
                                    <div className="footer-img">
                                        <a href="#"><img src={footerImg2} alt="" /></a>
                                    </div>
                                    <div class="footer-img">
                                        <a href="#"><img src={footerImg3} alt="" /></a>
                                    </div>
                                    <div className="footer-img">
                                        <a href="#"><img src={footerImg4} alt="" /></a>
                                    </div>
                                    <div className="footer-img">
                                        <a href="#"><img src={footerImg5} alt="" /></a>
                                    </div>
                                    <div className="footer-img">
                                        <a href="#"><img src={footerImg6} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='bottom-footer-main'>
                <Container>
                    <Row className='py-4'>
                        {/* <Col lg={6} md={7} sm={12}>
                            <span>©  2021 Educat Mede with ❤️ by  <a href="https://hasthemes.com/" target="_blank">HasThemes</a></span>
                        </Col>
                        <Col lg={6} md={5} sm={12}>
                            <div className="footer-right">
                                <span >Privacy Policy , Terms &amp; Conditions</span>
                            </div>
                        </Col> */}
                        <Col lg={12} md={12} sm={12}>
                            <div className='bottom-footer'>
                                <span>©  2021 Educat Mede with ❤️ by  <a href="https://hasthemes.com/" target="_blank">HasThemes</a></span>
                                <span >Privacy Policy , Terms &amp; Conditions</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Footer;
