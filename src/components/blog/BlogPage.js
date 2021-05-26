import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import './BlogPage.css';

function BlogPage(props) {

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const getBlogData = localStorage.getItem('blogData');
        setBlog(JSON.parse(getBlogData))
    }, [])
    return (
        <div>

            <Container fluid className='article-banner-area'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="article-text">
                                <h1 className="text-center">BLOG</h1>
                                <div className="article-bar">
                                    <ul className="article">
                                        <li><NavLink to='/'>Home</NavLink></li>
                                        <li>BLOG </li>
                                        {blog ? <li>{blog.title}</li> : null}
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
                                <div className='article-title-div' >
                                    <span>
                                        {blog ? <span>{blog.title}</span> : null}
                                        {blog ? <span>{blog.timeStamp}</span> : null}
                                    </span>
                                </div>
                                <div className='latest-story'>
                                    {blog ? <img src={blog.articleImg} alt="Latest Story" /> : null}
                                </div>
                                <Row className='mt-5 article-div-main'>
                                    <Col lg={12}>
                                        {blog ? <div>{blog.para}</div> : null}
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4}>
                                <Row>
                                    <Col lg={12}>
                                        <div className='recent-articles' >
                                            <span>Recent articles</span>
                                        </div>
                                        <div className='recent-articles-link' >
                                            <span>2 Self-Marketing Tips for Freelancers</span>
                                            <span>April 28, 2021</span>
                                        </div>
                                        <div className='recent-articles-link' >
                                            <span>Freelancing Definition – What does Freelancing means?</span>
                                            <span>April 28, 2021</span>
                                        </div>
                                        <div className='recent-articles-link' >
                                            <span>How to create a personal growth plan in 2021?</span>
                                            <span>April 28, 2021</span>
                                        </div>
                                        <div className='recent-articles-link' >
                                            <span>2 Self-Marketing Tips for Freelancers</span>
                                            <span>April 28, 2021</span>
                                        </div>
                                        <div className='recent-articles-link' >
                                            <span>2 Self-Marketing Tips for Freelancers</span>
                                            <span>April 28, 2021</span>
                                        </div>
                                    </Col>

                                    <Col lg={12}>
                                        <div className='tending-now mt-5' >
                                            <span>trending now</span>
                                        </div>
                                        <div className='tending-now-articles'>
                                            <span>The importance of a website for a business in 2021</span>
                                            <span>by john</span>
                                            <span>4 days ago</span>
                                        </div>
                                        <div className='tending-now-articles'>
                                            <span>2 Self-Marketing Tips for Freelancers</span>
                                            <span>by john</span>
                                            <span>4 days ago</span>
                                        </div>
                                        <div className='tending-now-articles'>
                                            <span>Freelancing Definition – What does Freelancing means?</span>
                                            <span>by john</span>
                                            <span>4 days ago</span>
                                        </div>
                                        <div className='tending-now-articles'>
                                            <span>How to create a personal growth plan in 2021?</span>
                                            <span>by john</span>
                                            <span>4 days ago</span>
                                        </div>
                                        <div className='tending-now-articles'>
                                            <span>Why am I not getting orders on Fiverr?</span>
                                            <span>by john</span>
                                            <span>4 days ago</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Container>
                </Container>
            </div>

        </div>
    )
}

export default BlogPage;
