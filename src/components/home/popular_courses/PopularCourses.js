import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseImg1 from '../../images/course/1.jpg';
import CourseImg2 from '../../images/course/2.jpg';
import CourseImg3 from '../../images/course/3.jpg';
import './PopularCourses.css';

function PopularCourses() {
    return (
        <Container fluid>
            <div className="course-area section-padding bg-white">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="section-title-wrapper">
                                    <div className="section-title">
                                        <h3>POPULAR COURSES</h3>
                                        <p>There are many variations of passages of Lorem Ipsum</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="single-item">
                                    <div className="single-item-image overlay-effect">
                                        <a href="#"><img src={CourseImg1} alt=""/></a>
                                    </div>
                                    <div className="single-item-text">
                                        <h4><a href="#">Photoshop CC 2017</a></h4>
                                        <div className="single-item-text-info">
                                            <span>By: <span>M S Nawaz</span></span>
                                            <span>Date: <span>20.5.15</span></span>
                                        </div>
                                        <p>There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm, by injected humo ur,There are many but the mri have suffered alteration in some </p>
                                        <div className="single-item-content">
                                           <div className="single-item-comment-views">
                                               <span><i className="zmdi zmdi-eye"></i>59</span>
                                               <span><i className="zmdi zmdi-comments"></i>19</span>
                                           </div>
                                           <div className="single-item-rating">
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star-half"></i>
                                           </div>
                                        </div>   
                                    </div>
                                    <div className="button-bottom">
                                        <a href="#" className="button-default">Learn Now</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="single-item">
                                    <div className="single-item-image overlay-effect">
                                        <a href="#"><img src={CourseImg2} alt=""/></a>
                                    </div>
                                    <div className="single-item-text">
                                        <h4><a href="#">Illustrator CC 2017</a></h4>
                                        <div className="single-item-text-info">
                                            <span>By: <span>Subas Das</span></span>
                                            <span>Date: <span>20.5.15</span></span>
                                        </div>
                                        <p>There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm, by injected humo ur,There are many but the mri have suffered alteration in some </p>
                                        <div className="single-item-content">
                                           <div className="single-item-comment-views">
                                               <span><i className="zmdi zmdi-eye"></i>59</span>
                                               <span><i className="zmdi zmdi-comments"></i>19</span>
                                           </div>
                                           <div className="single-item-rating">
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star-half"></i>
                                           </div>
                                        </div>   
                                    </div>
                                    <div className="button-bottom">
                                        <a href="#" className="button-default">Learn Now</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="single-item">
                                    <div className="single-item-image overlay-effect">
                                        <a href="#"><img src={CourseImg3} alt=""/></a>
                                    </div>
                                    <div className="single-item-text">
                                        <h4><a href="#">Indesign CC 2017</a></h4>
                                        <div className="single-item-text-info">
                                            <span>By: <span>Momin Boss</span></span>
                                            <span>Date: <span>20.5.15</span></span>
                                        </div>
                                        <p>There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm, by injected humo ur,There are many but the mri have suffered alteration in some </p>
                                        <div className="single-item-content">
                                           <div className="single-item-comment-views">
                                               <span><i className="zmdi zmdi-eye"></i>59</span>
                                               <span><i className="zmdi zmdi-comments"></i>19</span>
                                           </div>
                                           <div className="single-item-rating">
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star"></i>
                                               <i className="zmdi zmdi-star-half"></i>
                                           </div>
                                        </div>   
                                    </div>
                                    <div className="button-bottom">
                                        <a href="#" className="button-default">Learn Now</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} sm={12} className='button-large text-center'>
                                <a href="#" className="button-large-a">Browse All Courses<i className="zmdi zmdi-chevron-right"></i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </Container>
    )
}

export default PopularCourses;
