import { useState } from "react";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Testimonial.css';
import testImg1 from '../images/testimonial/1.jpg';
import testImg2 from '../images/testimonial/2.jpg';
import testImg3 from '../images/testimonial/3.jpg';

const products = [
    {
        img: testImg1,
        name: 'M S Nawaz',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'
    },
    {
        img: testImg2,
        name: 'Chowchilla Madera',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'
    },
    {
        img: testImg3,
        name: 'Kattie Luis',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'
    },
    {
        img: testImg1,
        name: 'M S Nawaz',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'
    },
    {
        img: testImg2,
        name: 'Chowchilla Madera',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'
    }
]

function Testimonial() {
    const [imageIndex, setImageIndex] = useState(0);


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <i class="zmdi zmdi-chevron-right"></i>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <i class="zmdi zmdi-chevron-left"></i>
            </div>
        );
    };

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <Container fluid className="testimonial-area">
            <Container>
                <Row>
                    <div className="col-lg-12 offset-lg-0 col-md-12 col-12">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <div className="testimonial-image-slider text-center">
                                    <div aria-live="polite" className="slick-list draggable" style={{ padding: '0px 10px' }}>
                                        <Slider {...settings}>
                                            {products.map((v, i) => (
                                                <div className={i === imageIndex ? "testimonial activeSlide" : "testimonial"}>
                                                    <Row>
                                                        <Col md={12}>
                                                            <img src={v.img} alt={v.title} />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={12}>
                                                            <div className='testimonial-text' >
                                                                <div><h2>{v.name}</h2></div>
                                                                <div><p>{v.text}</p></div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default Testimonial;
