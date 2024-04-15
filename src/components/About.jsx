import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function About() {
    let navigate = useNavigate()
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
            <section id="works" className="works">
                <div className="container">
                    <div className="section-header">
                        <h2>About Me</h2>
                        <p>Want to know Who I am ?</p>
                    </div>
                    <div className="works-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">MERN
                                        {/* <i className="flaticon-lightbulb-idea"></i> */}
                                    </div>
                                    <h2><Link to="/aboutme">MERN fULL STACK DEVELOPER</Link></h2>
                                    <p>
                                        Dedicated, Fervent and enthusiastic fresher aspiring to kickstart a
                                        rewarding career as a MERN Full Stack Developer.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onClick={()=>navigate('/aboutme')}>
                                        read more
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                       API
                                    </div>
                                    <h2><Link to="/api">API ENDPOINTS</Link></h2>
                                    <p>
                                    I've gained valuable experience working with API((Application Programming Interfaces) )endpoints to exchange data and functionality.  
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onClick={()=>navigate('/api')}>
                                        read more
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        UI
                                    </div>
                                    <h2><Link to="/Framework">FRONTEND FRAMEWORKS</Link></h2>
                                    <p>
                                    Worked with a variety of frontend frameworks and libraries to create engaging and responsive user interfaces           </p>
                                    <button className="welcome-hero-btn how-work-btn" onClick={()=>navigate('/Framework')}>
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About