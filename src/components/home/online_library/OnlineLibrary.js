import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OnlineLibrary.css';
import ProductImg1 from '../../images/product/1.jpg';
import ProductImg2 from '../../images/product/2.jpg';
import ProductImg3 from '../../images/product/3.jpg';
import ProductImg4 from '../../images/product/4.jpg';

function OnlineLibrary() {
    return (
        <Container fluid className="product-area section-bottom-padding bg-white">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-title-wrapper">
                            <div className="section-title">
                                <h3>Online Library</h3>
                                <p>There are many variations of passages</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="single-product-item">
                            <div className="single-product-image">
                                <a href="#"><img src={ProductImg1} alt="" /></a>
                            </div>
                            <div className="single-product-text">
                                <h4><a href="#">Title Product Here</a></h4>
                                <h5>Book</h5>
                                <div className="product-price">
                                    <h3>$ 28</h3>
                                    <div className="single-item-rating">
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star-half"></i>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <button type="button" className="button-default cart-btn">ADD TO CART</button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-favorite"></i></button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-refresh-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="single-product-item">
                            <div className="single-product-image">
                                <a href="#"><img src={ProductImg2} alt="" /></a>
                            </div>
                            <div className="single-product-text">
                                <h4><a href="#">Title Product Here</a></h4>
                                <h5>Book</h5>
                                <div className="product-price">
                                    <h3>$ 28</h3>
                                    <div className="single-item-rating">
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star-half"></i>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <button type="button" className="button-default cart-btn">ADD TO CART</button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-favorite"></i></button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-refresh-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="single-product-item">
                            <div className="single-product-image">
                                <a href="#"><img src={ProductImg3} alt="" /></a>
                            </div>
                            <div className="single-product-text">
                                <h4><a href="#">Title Product Here</a></h4>
                                <h5>Book</h5>
                                <div className="product-price">
                                    <h3>$ 28</h3>
                                    <div className="single-item-rating">
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star-half"></i>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <button type="button" className="button-default cart-btn">ADD TO CART</button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-favorite"></i></button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-refresh-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="single-product-item">
                            <div className="single-product-image">
                                <a href="#"><img src={ProductImg4} alt="" /></a>
                            </div>
                            <div className="single-product-text">
                                <h4><a href="#">Title Product Here</a></h4>
                                <h5>Book</h5>
                                <div className="product-price">
                                    <h3>$ 28</h3>
                                    <div className="single-item-rating">
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star"></i>
                                        <i className="zmdi zmdi-star-half"></i>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <button type="button" className="button-default cart-btn">ADD TO CART</button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-favorite"></i></button>
                                    <button type="button" className="button-default"><i className="zmdi zmdi-refresh-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OnlineLibrary;
