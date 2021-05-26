import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import { Link, NavLink } from 'react-router-dom';
import AboutReception from '../images/banner/6.jpg';
import AboutTeacher1 from '../images/teacher/l-1.jpg';
import AboutTeacher2 from '../images/teacher/l-2.jpg';
import AboutTeacher3 from '../images/teacher/l-3.jpg';
import AboutTeacher4 from '../images/teacher/l-4.jpg';

function About() {
    return (
        <>
            <Container fluid className='breadcrumb-banner-area'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="breadcrumb-text">
                                <h1 className="text-center">ABOUT US</h1>
                                <div className="breadcrumb-bar">
                                    <ul className="breadcrumb">
                                        <li><NavLink to='/'>Home</NavLink></li>
                                        <li>ABOUT US</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <div class="about-page-area section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div class="section-title-wrapper">
                                <div class="section-title">
                                    <h3>Who we are</h3>
                                    <p>There are many variations of passages</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div class="about-text-container">
                                <p><span>Well come to Educat</span> come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community, tolerance and develop something which the modern world is desperate for norem ipsum dolor sit amet desperate.<br />
                                    Adipiscing signiferumque vix et. No alii docendi usu, pri graeco possim percipit ne.</p>
                                <div class="about-us">
                                    <span>Nam gravida magna vitae ante dignissim</span>
                                    <span>Duis rhoncus lectus at velit hendrerit quis</span>
                                    <span>Sed fringilla tempor arcu feugiat risus</span>
                                    <span>Vivamus semper odio in nibh ultricies</span>
                                </div>
                                <p>Snos trud exerci tation ullorper suscipit lobo maeisrn roester maeoirqs iserrtis nisl ut aliq poerwse thesr oper balinp asein hoinws mawsoib equat. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more tolerance and develop obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through makin of the word in classical literature.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div class="skill-image">
                                <img src={AboutReception} alt="About Reception" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>




            <div class="skill-and-experience-area">
                <Container className='about-container-trans' >
                    <Row>
                        <Col md={12}>
                            <div class="section-title-wrapper">
                                <div class="section-title">
                                    <h3>Skills and Experience</h3>
                                    <p>There are many variations of passages</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div class="experience-skill-wrapper">
                                <div class="skill-bar-item">
                                    <span>Programming</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-progress="80%" style={{ width: '80%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Designing</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft pro-bar-style2" data-progress="75%" style={{ width: '75%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">75%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Creative Writing</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft pro-bar-style3" data-progress="90%" style={{ width: '90%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>English Lessons</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft pro-bar-style4" data-progress="70%" style={{ width: '70%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div class="experience-skill-wrapper">
                                <div class="skill-bar-item">
                                    <span>Programming</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-progress="75%" style={{ width: '75%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">75%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Creative Writing</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-progress="90%" style={{ width: '90%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Designing</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-progress="80%" style={{ width: '80%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>English Lessons</span>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-progress="100%" style={{ width: '100%', visibility: 'visible', animationDuration: '1.5s', animationDelay: '1.2s', animationName: 'fadeInLeft' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                                            <span class="text-top">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div class="teachers-area padding-top">
                <Container>
                    <Row className='row-trans' >
                        <div className="col-md-12">
                            <div className="section-title-wrapper">
                                <div className="section-title">
                                    <h3>OUR TEACHERS</h3>
                                    <p>There are many variations of passages of Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div className="single-teacher-item">
                                <div className="single-teacher-image">
                                    <Link to='#' className='a-link' ><img src={AboutTeacher1} alt="" /></Link>
                                </div>
                                <div className="single-teacher-text">
                                    <h3><Link to='#' style={{ color: 'black' }} >Louis Smith</Link></h3>
                                    <h4>Teacher</h4>
                                    <p className='hide'>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr</p>
                                    <div className="social-links">
                                        <Link to='#'><i class="zmdi zmdi-facebook"></i></Link>
                                        <Link to='#'><i class="zmdi zmdi-twitter"></i></Link>
                                        <Link to='#'><i class="zmdi zmdi-google-old"></i></Link>
                                        <Link to='#'><i class="zmdi zmdi-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="single-teacher-item">
                                <div className="single-teacher-image">
                                    <Link to='#' className='a-link'><img src={AboutTeacher2} alt="" /></Link>
                                </div>
                                <div className="single-teacher-text">
                                    <h3><Link to='#' style={{ color: 'black' }}>Louis Smith</Link></h3>
                                    <h4>Teacher</h4>
                                    <p className='hide'>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr</p>
                                    <div className="social-links">
                                        <Link to='#'><i className="zmdi zmdi-facebook"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-twitter"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-google-old"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="single-teacher-item">
                                <div className="single-teacher-image">
                                    <Link to='#' className='a-link'><img src={AboutTeacher3} alt="" /></Link>
                                </div>
                                <div class="single-teacher-text">
                                    <h3><Link to='#' style={{ color: 'black' }}>Louis Smith</Link></h3>
                                    <h4>Teacher</h4>
                                    <p  className='hide'>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr</p>
                                    <div class="social-links">
                                        <Link to='#'><i className="zmdi zmdi-facebook"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-twitter"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-google-old"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="single-teacher-item">
                                <div className="single-teacher-image">
                                    <Link to='#' className='a-link'><img src={AboutTeacher4} alt="" /></Link>
                                </div>
                                <div className="single-teacher-text">
                                    <h3><Link to='#' style={{ color: 'black' }}>Louis Smith</Link></h3>
                                    <h4>Teacher</h4>
                                    <p  className='hide'>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr</p>
                                    <div className="social-links">
                                        <Link to='#'><i className="zmdi zmdi-facebook"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-twitter"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-google-old"></i></Link>
                                        <Link to='#'><i className="zmdi zmdi-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About;
