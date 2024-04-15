import React from 'react'
import './CovidTracker.css'
import { Link } from 'react-router-dom'
function CovidTracker() {
    return (
        <>
            <div className='bikerentalportal'>
                    <h1 className='title d-flex text-center'>Covid Tracker</h1>
                    <Link className="link" to ='https://kalangiam-covid-status.netlify.app/' target='_blank'><i><b>Go to project</b></i></Link>
                   
                    {/* Demo admin email address : admin@gmail.com password : 123 */}

                    

                    <h2 className='about'>About the Project</h2> 
                <div className='intro'><span className='start'>A dedicated COVID-19 confirmed cases tracker tailored for India utilizing Public API data. Provided real-time updates and visualizations to facilitate informed decision-making during the pandemic.</span></div>

                   <h2 className='about'>Objectives</h2> 
                    <div>
                    💊 This project is a simple yet effective COVID-19 confirmed cases tracker specifically designed for India. It utilizes HTML, CSS, and JavaScript to create an interactive web interface. Users can select a specific location from a dropdown menu, click a check button, and receive real-time confirmed COVID-19 cases information via an alert box.
                    </div>
                    <h2 className='about'>Technologies Used :</h2>
                    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

                    <h2 className='about'> Features: </h2>
                    📡 The project integrates with a COVID-19 data API to dynamically fetch and display up-to-date confirmed cases information for the selected location. The project is designed to be responsive, ensuring a seamless experience across various devices and screen sizes. The dropdown menu provides a list of locations within India, allowing users to easily choose the area of interest. 

                    <h2 className='about'> Development Process:</h2>
                    ⏹ The check button serves as a user-triggered action to initiate the retrieval of confirmed COVID-19 cases. Users are prompted with an alert box displaying the total confirmed cases of the selected place.

                    <h2 className='about'>Challenges Faced:</h2>
                    Designing an intuitive user interface that provides a seamless experience for users. Implementing secure authentication and authorization mechanisms to protect user data. Optimizing database queries and ensuring efficient data retrieval for better performance. Handling concurrency and scalability issues to support a growing user base.


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

export default CovidTracker