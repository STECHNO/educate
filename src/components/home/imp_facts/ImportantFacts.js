import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ImportantFacts.css';
// import CountUp from 'react-countup';

function ImportantFacts() {



    return (
        <Container fluid className="fun-factor-area">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-title-wrapper white">
                            <div className="section-title s-t-if">
                                <h3>IMPORTANT FACTS</h3>
                                <p>There are many variations of passages of Lorem Ipsum</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={3} sm={12}>
                        <div className="single-fun-factor" >
                            <h4>Teachers</h4>
                            <h2><span className="counter">79</span>+</h2>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className="single-fun-factor">
                            <h4>Members</h4>
                            <h2><span className="counter">120</span>+</h2>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className="single-fun-factor">
                            <h4>Courses</h4>
                            <h2><span className="counter">36</span>+</h2>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className="single-fun-factor">
                            <h4>Countries</h4>
                            <h2><span className="counter">20</span>+</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ImportantFacts;
