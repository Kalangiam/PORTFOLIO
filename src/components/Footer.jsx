import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
        
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="footer-menu">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="index.html">KALANGIAM <span>R</span></Link>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <ul className="footer-menu-item">
                                    <li className="scroll"><Link to="/">HOME</Link></li>
                                    <li className="scroll"><Link to="/about">ABOUT ME</Link></li>
                                    <li className="scroll"><Link to="/projects">PROJECTS</Link></li>
                                    <li className="scroll"><Link to="/resume">RESUME / CV</Link></li>
                                    <li className="scroll"><Link to="/blog">BLOG</Link></li>
                                    <li className=" scroll"><Link to="">SKILLS</Link></li>
                                    <li className=" scroll"><Link to="/contact">CONTACT</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hm-footer-copyright">
                        <div className="row">
                            <div className="col-sm-5">
                                <p>
                                    &copy;copyright. designed and developed by <Link to="https://www.themesine.com/">KALANGIAM R</Link>
                                </p>
                            </div>
                            <div className="col-sm-7">
                                <div className="footer-social">
                                    <span><i className="fa fa-phone"> <b>+91 7373211012</b></i></span>
                                    <Link to="https://www.facebook.com/gladsonkalangiam/" target='_blank'><i className="fa fa-facebook"></i></Link>
                                    <Link to="https://github.com/Kalangiam" target='_blank'><i className="fa fa-github"></i></Link>
                                    <Link to="https://www.linkedin.com/in/gladsonkalangiam/" target='_blank'><i className="fa fa-linkedin"></i></Link>
                                    <Link to="https://www.instagram.com/gladsonkalangiam/" target='_blank'><i className="fa fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer