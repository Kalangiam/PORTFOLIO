import React from 'react'
// import Header from './components/Header'
import Home from './components/Home'
// import Welcome from './components/Welcome'
// import List from './components/List'
import About from './components/About'
import Projects from './components/Projects'
// // import Review from './components/Review'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
// import Subscription from './components/Subscription'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BikeRentalPortal from './components/Projects/BikeRentalPortal'
import BlogHolder from './components/Projects/BlogHolder'
import CovidTracker from './components/Projects/CovidTracker'
import RandomQuote from './components/Projects/RandomQuote'
import Library from './components/Projects/Library'
import ShoppingCart from './components/Projects/ShoppingCart'
import Resume from './components/Resume'
import Aboutme from './components/Aboutme/Aboutme'
import API from './components/Aboutme/API'
import Framework from './components/Aboutme/Framework'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                      {/* <Header/> */}
          <Route path='/' element={<Home />} />
                      {/* <Welcome /> */}
                      {/* <List /> */}
          <Route path='/about' element={<About />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/api' element={<API />} />
          <Route path='/Framework' element={<Framework />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/bikerentalportal' element={<BikeRentalPortal/>}/>
          <Route path='/projects/BlogHolder' element={<BlogHolder/>}/>
          <Route path='/projects/CovidTracker' element={<CovidTracker/>}/>
          <Route path='/projects/RandomQuote' element={<RandomQuote/>}/>
          <Route path='/projects/Library' element={<Library/>}/>
          <Route path='/projects/ShoppingCart' element={<ShoppingCart/>}/>
                       {/* <Review/> */}
                       {/* <Statistics /> */}
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/blog' element={<Blog />}/>
                      {/* <Subscription /> */}
          <Route path='/contact' element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App