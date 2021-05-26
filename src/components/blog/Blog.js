import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import './Blog.css';
import Avatar from '../images/testimonial/2.jpg';
import Story from '../images/ec-background/bg-1.jpg';
import articlesData from './BlogData';

function Blog() {

    return (
        <>
            <Container fluid className='breadcrumb-banner-area'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="breadcrumb-text">
                                <h1 className="text-center">BLOG</h1>
                                <div className="breadcrumb-bar">
                                    <ul className="breadcrumb">
                                        <li><NavLink to='/'>Home</NavLink></li>
                                        <li>BLOG</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <div className='blog'>
                <Container fluid>
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <div className='featured-blog' >
                                    <span>latest stories</span>
                                </div>
                                <div className='latest-story'>
                                    <img src={Story} alt="Latest Story" />
                                    <span className='latest-story-heading' ><a href="#">High rise mountains in dangerous</a> </span>
                                </div>


                                <Row className='mt-5 latest-blog-main'>
                                    <Col lg={12}>
                                        <Row>
                                            <Col lg={12}>
                                                <div className='latest-blog' >
                                                    <span>latest blog</span>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                {articlesData.map((v, i) => {
                                                    return (
                                                        <Link
                                                            key={i}
                                                            onClick={() => localStorage.setItem('blogData', JSON.stringify(v))
                                                            }
                                                            to={{
                                                                pathname: '/article',
                                                                blogProps: {
                                                                    data: v,
                                                                }
                                                            }}>
                                                            <div className='articles'>
                                                                <div className='article-img'>
                                                                    <img src={v.articleImg} alt="Article 1" />
                                                                </div>
                                                                <div className='article-snap '>
                                                                    <span>{v.timeStamp}</span>
                                                                    <span>
                                                                        <h3>{v.title}</h3>
                                                                    </span>
                                                                    <span>
                                                                        <p>{v.paraSnap}</p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4}>
                                <Row>
                                    <Col lg={12}>
                                        <div className='about-me-section' >
                                            <span>about me</span>
                                        </div>
                                        <div className='about-me-section-img' >
                                            <img src={Avatar} alt="" />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Quae natus perspiciatis quis neque sunt odit, </p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className='about-me-section mt-5' >
                                            <span>follow me</span>
                                        </div>
                                        <div className='about-me-follow'>
                                            <div className='social-item' >
                                                <i class="zmdi zmdi-facebook"></i>
                                                <p>Facebook</p>
                                                <span>Like</span>
                                            </div>
                                            <div className='social-item'>
                                                <i class="zmdi zmdi-twitter"></i>
                                                <p>Twitter</p>
                                                <span>Follow</span>
                                            </div>
                                            <div className='social-item'>
                                                <i class="zmdi zmdi-instagram"></i>
                                                <p>Facebook</p>
                                                <span>Follow</span>
                                            </div>
                                            <div className='social-item'>
                                                <i class="zmdi zmdi-pinterest"></i>
                                                <p>Pinterest</p>
                                                <span>Follow</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default Blog;