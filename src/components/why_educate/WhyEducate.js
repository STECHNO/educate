import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WhyEducate.css';

function WhyEducate() {
    return (
        <Container fluid className="about-area">
            <Container>
                <Row>
                    <Col lg={8} md={12}>
                        <div className="about-container">
                            <h3>WHY EDUCAT ?</h3>
                            <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text
                            amr songr balga ami toami valo lasi ciri din akr dali</p>
                            <a className="button-default" href="#">Learn Now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default WhyEducate
