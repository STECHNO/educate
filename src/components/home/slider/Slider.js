import React from 'react';
import './Slider.css';
import Slider1 from '../../images/slider/1.jpg';
import Slider2 from '../../images/slider/2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Slider() {
    return (
        <div className='slider-area'>
            <Carousel interval={null} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                nextIcon={<span aria-hidden="false" className="carousel-control-next-icon" />}>
                <Carousel.Item>
                    <div className='layer'>
                        <img
                            className="d-block w-100"
                            src={Slider1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <Row>
                            <Col lg={7} md={9} sm={12} className='offset-lg-5 offset-md-3' >
                                <div className='carousel-text'>
                                    <h1>Education Needs<br />Complete Solution</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.</p>
                                    <a class="button-slider" href="#">View Courses</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='layer'>
                        <img
                            className="d-block w-100"
                            src={Slider2}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <Row>
                            <Col lg={7} md={7} sm={12} className='offset-lg-5 offset-md-5' >
                                <div className='carousel-text'>
                                    <h1>Education Needs<br /> Complete Solution</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable.</p>
                                    <a class="button-slider" href="#">View Courses</a>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;
