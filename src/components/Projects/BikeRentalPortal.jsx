import React from 'react'
import './BikeRentalPortal.css'
import { Link } from 'react-router-dom'
function BikeRentalPortal() {
    return (
        <>
            <div className='bikerentalportal'>
                    <h1 className='title d-flex text-center'>Bike Rental Portal</h1>
                    <Link className="link" to ='https://kalangiam-bike-rental-portal.netlify.app/' target='_blank'><i><b>Go to project</b></i></Link>
                   
                    {/* Demo admin email address : admin@gmail.com password : 123 */}

                    

                    <h2 className='about'>About the Project</h2> 
                <div className='intro'><span className='start'>My Bike Rental Portal is a web application developed using ReactJS for the frontend, Node.js for the backend, and Mongoose schema for database management. The purpose of this </span>portal is to provide users with a platform to rent bicycles conveniently. The portal facilitates users in browsing available bikes, making reservations, managing their bookings, and admin functionalities for managing bike listings and user bookings.</div>

                   <h2 className='about'>Objectives</h2> 
                    <ol className='list'>
                    <li>To Develop a user-friendly web portal for bike rental services.</li>
                    <li>To Implement a secure authentication system for users and administrators.</li>
                    <li>To Create a comprehensive database schema using Mongoose for efficient data management.</li>
                    <li>To Provide functionalities for users to browse available bikes, make reservations, and manage bookings.</li>
                    <li>To Implement an administrative interface for managing bike listings and user bookings.</li>
                    <li>To Ensure scalability and maintainability of the application.</li>
                    </ol>
                    <h2 className='about'>Technologies Used :</h2>
                    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

                    <h2 className='about'>System Architecture:</h2>
                    Frontend: The frontend is developed using ReactJS, a popular JavaScript library for building user interfaces. It communicates with the backend server via RESTful APIs. Backend: The backend is powered by Node.js, which handles HTTP requests from the frontend, interacts with the MongoDB database using Mongoose, and performs business logic operations. Database: MongoDB is used as the database system, with Mongoose schema defining the structure of the data. It stores information about users, bikes, reservations, and other relevant entities. Authentication: JWT (JSON Web Tokens) is employed for user authentication. Upon successful login, a token is generated and sent to the client, which is then included in subsequent requests for authentication. UI Framework: Material-UI is used for designing the user interface, providing a set of React components with a modern and visually appealing design.

                    <h2 className='about'> Features: </h2>
                    User Authentication: Users can sign up, log in, and log out securely. Browse Bikes: Users can view available bikes with details such as type, model, price, etc. Make Reservations: Users can select a bike, specify rental duration, and make reservations. Manage Bookings: Users can view their active bookings, cancel reservations, and view past rental history. Admin Panel: Administrators have access to functionalities for managing bike listings, viewing user bookings, and handling system configurations.

                    <h2 className='about'> Development Process:</h2>
                    Requirement Analysis: Gathered requirements from stakeholders to define the scope and functionalities of the portal. Design: Created wireframes and UI mockups to visualize the user interface and interactions. Implementation: Developed frontend and backend modules iteratively, integrating components and testing functionality at each stage. Testing: Conducted unit tests, integration tests, and user acceptance tests to ensure the reliability and functionality of the portal.

                    <h2 className='about'>Challenges Faced:</h2>
                    Designing an intuitive user interface that provides a seamless experience for users. Implementing secure authentication and authorization mechanisms to protect user data. Optimizing database queries and ensuring efficient data retrieval for better performance. Handling concurrency and scalability issues to support a growing user base.

                    <h2 className='about'>Future Enhancements:</h2>
                    Integration with payment gateways for online payments. Implementing geolocation-based services for locating nearby bike rental stations. Adding support for multiple languages and internationalization. Enhancing the administrative interface with advanced analytics and reporting features.

                    <h2 className='about'>Conclusion:</h2> The Bike Rental Portal is a successful project that provides users with a convenient platform for renting bicycles. By leveraging technologies like ReactJS, Node.js, and MongoDB, we have developed a scalable and efficient solution that meets the requirements of modern bike rental services. With continuous improvements and enhancements, we aim to further enhance the portal's functionality and user experience in the future.

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

export default BikeRentalPortal