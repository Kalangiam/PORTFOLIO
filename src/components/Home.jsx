import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
       
      <section className="top-area">
        <div className="header-area">

            <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
  
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
      <section id="home" className="welcome-hero">
                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2><span style={{color:"red"}}>I'm</span> Kalangiam R <br></br><span style={{color:"yellow"}}>MERN</span> Full stack Developer</h2>
                        <p>
                        <span style={{color:"red", backgroundColor:"white"}}><b>Building Digital Experiences From End to End</b></span>
                        </p>
                    </div>
                </div>

            </section>
    </>
  )
}

export default Home