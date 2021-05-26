import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eventImg1 from '../images/event/1.jpg'
import eventImg2 from '../images/event/2.jpg'
import eventImg3 from '../images/event/3.jpg'
import './Event.css';

function Event() {
    return (
        <Container fluid className='py-5'>
            <div className='py-5' >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div class="section-title-wrapper">
                                <div class="section-title section-title-event">
                                    <h3 style={{color: '#2d3e50'}} >OUR EVENTS</h3>
                                    <p>There are many variations of passages</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6}>
                            <div class="single-event-item e-item">
                                <div class="single-event-image">
                                    <a href="#">
                                        <img src={eventImg1} alt="" />
                                        <span><span>15</span>Jun</span>
                                    </a>
                                </div>
                                <div class="single-event-text">
                                    <h3><a href="#">Learn English in ease</a></h3>
                                    <div class="single-item-comment-view">
                                        <span><i class="zmdi zmdi-time pr-2"></i>4.00 pm - 8.00 pm</span>
                                        <span><i class="zmdi zmdi-pin pr-2"></i>Dhaka Bangladesh</span>
                                    </div>
                                    <p>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr sarata din megla....</p>
                                    <a class="button-default" href="#">LEARN Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div class="single-event-item e-item">
                                    <div class="single-event-image">
                                        <a href="#">
                                            <img src={eventImg2} alt="" />
                                            <span><span>20</span>Apr</span>
                                        </a>
                                    </div>
                                    <div class="single-event-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div class="single-item-comment-view">
                                           <span><i class="zmdi zmdi-time pr-2"></i>4.00 pm - 8.00 pm</span>
                                           <span><i class="zmdi zmdi-pin pr-2"></i>Jessore Bangladesh</span>
                                       </div>
                                       <p>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr sarata din megla....</p>
                                       <a class="button-default" href="#">LEARN Now</a>
                                    </div>
                                </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div class="single-event-item e-item">
                                    <div class="single-event-image">
                                        <a href="#">
                                            <img src={eventImg3} alt=""/>
                                            <span><span>06</span>Dec</span>
                                        </a>
                                    </div>
                                    <div class="single-event-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div class="single-item-comment-view">
                                           <span><i class="zmdi zmdi-time pr-2"></i>4.00 pm - 8.00 pm</span>
                                           <span><i class="zmdi zmdi-pin pr-2"></i>Dhaka. Bangladesh</span>
                                       </div>
                                       <p>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr sarata din megla....</p>
                                       <a class="button-default" href="#">LEARN Now</a>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}

export default Event;