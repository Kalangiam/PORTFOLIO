import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <section className="top-area">
                <div className="header-area">

                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div className="container">


                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <Link className="navbar-brand" to="/">KALANGIAM <span>R</span></Link>

                            </div>
                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className=" scroll active"><Link to="/">home</Link></li>
                                    <li className="scroll"><Link to="/about">About Me</Link></li>
                                    <li className="scroll"><Link to="/projects">Projects</Link></li>
                                    <li className="scroll"><Link to="/resume">Resume/CV</Link></li>
                                    <li className="scroll"><Link to="/blog">blog</Link></li>
                                    <li className="scroll"><Link to="#contact">Skills</Link></li>
                                    <li className="scroll"><Link to="/contact">contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="clearfix"></div>

            </section>
            <section id="blog" className="blog" >
                <div className="container">
                    <div className="section-header">
                        <h2>news and articles</h2>
                        <p>Always upto date with our latest News and Articles </p>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src="assets/images/blog/b1.jpg" alt="blog image" />
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src="assets/images/blog/b2.jpg" alt="blog image" />
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src="assets/images/blog/b3.jpg" alt="blog image" />
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Blog