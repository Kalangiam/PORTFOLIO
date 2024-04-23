import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import exploreImage from './assets/images/explore/e1.jpg';
function Projects() {
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
            <section id="explore" className="explore">
                <div className="container">
                    <div className="section-header">
                        <h2>Projects</h2>
                      
                        <p>handed-on projects to contribute effectively to innovative web
                            development initiatives</p>
                    </div>
                    <div className="explore-content">
                        <div className="row">
                            <div className=" col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        {/* <img src="assets/images/explore/e1.jpg" alt="explore image" /> */}
                                        <img src={exploreImage} alt="explore image" />
                                        <div className="single-explore-img-info">
                                            <button onClick={()=>{navigate('/projects/bikerentalportal')}}>view</button>
                                            
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-1" >
                                        <h2><Link to="/projects/bikerentalportal">Bike Rental Portal</Link></h2>
                                        <p className="explore-rating-price">
                                            
                                            <span className="explore-price-box">
                                            
                                                <span className="explore-price">Bikes</span>
                                            </span>
                                            <Link to="#">Status</Link>
                                            
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                               
                                                <div className="col-sm-10">
                                                    <p>
                                                        The purpose of this portal is to provide users with a platform to rent bikes conveniently.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick={()=>{navigate('/projects/bikerentalportal')}}>Read more</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <Link to="#"><i data-feather="map-pin"></i></Link>
                                                        <Link to="#"><i data-feather="upload"></i></Link>
                                                        <Link to="#"><i data-feather="heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src="assets/images/explore/e2.jpg" alt="explore image" />
                                        <div className="single-explore-img-info">
                                            <button onClick={()=>{navigate('/projects/bikerentalportal')}}>view</button>
                                            
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-2">
                                        <h2><Link to="/projects/BlogHolder">Blog Holder admin panel</Link></h2>
                                        <p className="explore-rating-price">
                                            
                                            
                                            <span className="explore-price-box">
                                            
                                                <span className="explore-price">CRUD</span>
                                            </span>
                                            <Link to="#">Mock API</Link>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                               
                                                <div className="col-sm-10">
                                                    <p>
                                                        All CRUD operations related to blog posts are handled. It allows administrators to perform the operations                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn open-btn" onClick={()=>{navigate('/projects/BlogHolder')}}>Read more</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <Link to="#"><i data-feather="map-pin"></i></Link>
                                                        <Link to="#"><i data-feather="upload"></i></Link>
                                                        <Link to="#"><i data-feather="heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src="assets/images/explore/e3.jpg" alt="explore image" />
                                        <div className="single-explore-img-info">
                                            <button onClick={()=>{navigate('/projects/bikerentalportal')}}>view</button>
                                            
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-3">
                                        <h2><Link to="/projects/CovidTracker">Covid Tracker</Link></h2>
                                        <p className="explore-rating-price">
                                            
                                            <span className="explore-price-box">
                                                <span className="explore-price">India</span>
                                            </span>
                                            <Link to="#">Confirmed Cases</Link>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                               
                                                <div className="col-sm-10">
                                                    <p>
                                                        Provided real-time updates and visualizations to facilitate informed decision-making during the pandemic.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick={()=>{navigate('/projects/CovidTracker')}}>Read more</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <Link to="#"><i data-feather="map-pin"></i></Link>
                                                        <Link to="#"><i data-feather="upload"></i></Link>
                                                        <Link to="#"><i data-feather="heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src="assets/images/explore/e4.jpg" alt="explore image" />
                                        <div className="single-explore-img-info">
                                            <button onClick={()=>{navigate('/projects/bikerentalportal')}}>view</button>
                                            
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-4">
                                        <h2><Link to="/projects/RandomQuote">Random Quote Generator</Link></h2>
                                        <p className="explore-rating-price">
                                            
                          
                                            <span className="explore-price-box">
                           
                                                <span className="explore-price">Quotes</span>
                                            </span>
                                            <Link to="#">Random </Link>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                               
                                                <div className="col-sm-10">
                                                    <p>
                                                        This project aims to foster a sense of community and connection among individuals facing similar challenges.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick={()=>{navigate('/projects/RandomQuote')}}>Read more</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <Link to="#"><i data-feather="map-pin"></i></Link>
                                                        <Link to="#"><i data-feather="upload"></i></Link>
                                                        <Link to="#"><i data-feather="heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src="assets/images/explore/e5.jpg" alt="explore image" />
                                        <div className="single-explore-img-info">
                                            <button onClick={()=>{navigate('/projects/bikerentalportal')}}>view</button>
                                            
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-2">
                                        <h2><Link to="/projects/Library">Library Management System</Link></h2>
                                        <p className="explore-rating-price">
                                            
                                            <span className="explore-price-box">
                                                <span className="explore-price">Records</span>
                                            </span>
                                            <Link to="#">Mock API</Link>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                               
                                                <div className="col-sm-10">
                                                    <p>
                                                        Hold Book records with ISBN, author details and Publication Date. Admin can add, edit or remove Books
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn open-btn" onClick={()=>{navigate('/projects/Library')}}>Read more</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <Link to="#"><i data-feather="map-pin"></i></Link>
                                                        <Link to="#"><i data-feather="upload"></i></Link>
                                                        <Link to="#"><i data-feather="heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src="assets/images/explore/e6.jpg" alt="explore image" />
                                        <div className="single-explore-img-info">
                                            <button onClick={()=>{navigate('/projects/bikerentalportal')}}>view</button>
                                            
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-5">
                                        <h2><Link to="/projects/ShoppingCart">Shopping Cart</Link></h2>
                                        <p className="explore-rating-price">
                                            
                                            <span className="explore-price-box">
                     
                                                <span className="explore-price">Shop</span>
                                            </span>
                                            <Link to="#">Cart</Link>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                               
                                                <div className="col-sm-10">
                                                    <p>
                                                        Purchase Several items and can view the per item price, total item price and the same for Quantity
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick={()=>{navigate('/projects/ShoppingCart')}}>Read more</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <Link to="#"><i data-feather="map-pin"></i></Link>
                                                        <Link to="#"><i data-feather="upload"></i></Link>
                                                        <Link to="#"><i data-feather="heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Projects