import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LatestImg1 from '../../images/latest/1.jpg';
import LatestImg2 from '../../images/latest/2.jpg';
import LatestImg3 from '../../images/latest/3.jpg';
import LatestImg4 from '../../images/latest/4.jpg';
import './LatestNews.css';

function LatestNews() {
    return (
        <Container fluid className="latest-area section-padding bg-white">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-title-wrapper">
                            <div className="section-title">
                                <h3>Latest News</h3>
                                <p>There are many variations of passages</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12}>






                        <div className="single-latest-item">
                            <div className="single-latest-image">
                                <a href="#"><img src={LatestImg1} alt="" /></a>
                            </div>
                            <div className="single-latest-text">
                                <h3><a href="#">Learn English in ease</a></h3>
                                <div className="single-item-comment-view">
                                    <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                    <span><i className="zmdi zmdi-eye"></i>59</span>
                                    <span><i className="zmdi zmdi-comments"></i>19</span>
                                </div>
                                <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour, </p>
                                <a href="#" className="button-default">LEARN Now</a>
                            </div>
                        </div>






                        
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="single-latest-item">
                            <div className="single-latest-image">
                                <a href="#"><img src={LatestImg2} alt="" /></a>
                            </div>
                            <div className="single-latest-text">
                                <h3><a href="#">Learn English in ease</a></h3>
                                <div className="single-item-comment-view">
                                    <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                    <span><i className="zmdi zmdi-eye"></i>59</span>
                                    <span><i className="zmdi zmdi-comments"></i>19</span>
                                </div>
                                <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour, </p>
                                <a href="#" className="button-default">LEARN Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="single-latest-item">
                            <div className="single-latest-image">
                                <a href="#"><img src={LatestImg3} alt="" /></a>
                            </div>
                            <div className="single-latest-text">
                                <h3><a href="#">Learn English in ease</a></h3>
                                <div className="single-item-comment-view">
                                    <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                    <span><i className="zmdi zmdi-eye"></i>59</span>
                                    <span><i className="zmdi zmdi-comments"></i>19</span>
                                </div>
                                <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour, </p>
                                <a href="#" className="button-default">LEARN Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="single-latest-item">
                            <div className="single-latest-image">
                                <a href="#"><img src={LatestImg4} alt="" /></a>
                            </div>
                            <div className="single-latest-text">
                                <h3><a href="#">Learn English in ease</a></h3>
                                <div className="single-item-comment-view">
                                    <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                    <span><i className="zmdi zmdi-eye"></i>59</span>
                                    <span><i className="zmdi zmdi-comments"></i>19</span>
                                </div>
                                <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour, </p>
                                <a href="#" className="button-default">LEARN Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default LatestNews;
