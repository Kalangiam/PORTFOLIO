import React from 'react'
import ResumePDF from '../../assets/pdf/Kalangiam.pdf';
import { Link } from 'react-router-dom';





function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        
        <div>
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
            <iframe
                src={ResumePDF}
                title="Resume"
                width="100%"
                height="500px"
            ></iframe>
            <button className="btn" style={{color:"red"}} onClick={handleDownload}>Download Resume</button>
           
        </div>
        
    )
}

export default Resume