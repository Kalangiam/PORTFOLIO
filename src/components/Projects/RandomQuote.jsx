import React from 'react'
import './RandomQuote.css'
import { Link } from 'react-router-dom'
function RandomQuote() {
    return (
        <>
            <div className='bikerentalportal'>
                    <h1 className='title d-flex text-center'>Random Quote Generator</h1>
                    <Link className="link" to ='https://kalangiam-generate-random-quote.netlify.app/' target='_blank'><i><b>Go to project</b></i></Link>
                   
                    {/* Demo admin email address : admin@gmail.com password : 123 */}

                    

                    <h2 className='about'>About the Project</h2> 
                <div className='intro'><span className='start'> Crafted a Random Quote Generator aimed at promoting mental well-being and breaking barriers. Designed to inspire and uplift users with a diverse collection of motivational and </span>thought-provoking quotes.</div>

                   <h2 className='about'>Objectives</h2> 
            
                    <h2 className='about'>Technologies Used :</h2>
                    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

                    <h2 className='about'> Features: </h2>
                    💡 Unlike traditional quote generators, this innovative tool is specifically crafted with the well-being of individuals facing depression in mind. With each click, users receive a fresh dose of motivation, positivity, and empathy, helping to brighten their day and uplift their spirits.

                    <h2 className='about'> Development Process:</h2>
                    🔀 How It Works: It's as simple as clicking a button! Users can visit the website and with each click, discover a new, uplifting quote carefully curated to instill hope, resilience, and positivity. Whether it's a heartfelt reminder of self-worth or a gentle nudge towards self-care, every quote is selected with the intention of offering comfort and support.

                    <h2 className='about'>Challenges Faced:</h2>
                    Designing an intuitive user interface that provides a seamless experience for users. Implementing secure authentication and authorization mechanisms to protect user data. Optimizing database queries and ensuring efficient data retrieval for better performance. Handling concurrency and scalability issues to support a growing user base.

                    <h2 className='about'>Future Enhancements:</h2>
                    🤝 A Community of Support beyond generating quotes, this project aims to foster a sense of community and connection among individuals facing similar challenges. Through shared experiences and words of encouragement, users can find solace in knowing that they're not alone on their journey towards healing and self-discovery.


                    <h2 className='about'>References:</h2>

                    <div className='foot'>
                    ReactJS Documentation: https://reactjs.org/docs/getting-started.html <br></br>
                    Node.js Documentation: https://nodejs.org/en/docs/ <br></br>
                    MongoDB Documentation: https://docs.mongodb.com/ <br></br>
                    Mongoose Documentation: https://mongoosejs.com/docs/guide.html<br></br> 
                    Material-UI Documentation: https://material-ui.com/getting-started/installation/ <br></br>
                    JWT Documentation: https://jwt.io/introduction/
                    </div>
       
            </div>
        </>
    )
}

export default RandomQuote