import React from 'react'
import './Library.css'
import { Link } from 'react-router-dom'
function Library() {
    return (
        <>
            <div className='bikerentalportal'>
                    <h1 className='title d-flex text-center'>Library Management System</h1>
                    <Link className="link" to ='https://kalangiam-react-formik-library.netlify.app/' target='_blank'><i><b>Go to project</b></i></Link>
                   
                    {/* Demo admin email address : admin@gmail.com password : 123 */}

                    

                    <h2 className='about'>About the Project</h2> 
                <div className='intro'><span className='start'>My Bike Rental Portal is a web application developed using ReactJS for the frontend, Node.js for the backend, and Mongoose schema for database management. The purpose of this </span>portal is to provide users with a platform to rent bicycles conveniently. The portal facilitates users in browsing available bikes, making reservations, managing their bookings, and admin functionalities for managing bike listings and user bookings.</div>

                   <h2 className='about'>Objectives</h2> 
                    <ol className='list'>
                    <li>Improve efficiency in managing library resources and member information.</li>
                    <li>Enhance user experience by providing a user-friendly interface for both librarians and members.</li>  
                    <li>Ensure data security and privacy through robust authentication and access control mechanisms.</li>  
                    <li>Enable scalability and flexibility to accommodate future enhancements and changes in library </li>    
                    <li>To Ensure scalability and maintainability of the application.</li>
                    </ol>
                    <h2 className='about'>Technologies Used :</h2>
                    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

                    <h2 className='about'> Features: </h2>
                    User Authentication and Authorization:

                        Users can register for an account or login if they already have one.
                        Role-based access control ensures that only authorized users can perform certain actions (e.g., librarians have access to administrative features).
                        Book Management:

                        Librarians can add new books to the system, including details such as title, author, ISBN, genre, and availability status.
                        Books can be updated or removed from the system as needed.
                        Search functionality allows users to find books based on various criteria, such as title, author, or genre.
                        Member Management:

                        Librarians can manage member accounts, including adding new members, updating member information, and deactivating accounts.
                        Members can view their borrowing history and current borrowed items.
                        Borrowing Transactions:

                        Members can borrow books by selecting available items from the library catalog.
                        The system tracks borrowing transactions, including due dates and overdue notifications.
                        Librarians can manage borrowing requests, approve or reject requests, and handle returns.
                        Dashboard and Reporting:

                        Librarians have access to a dashboard that provides an overview of library activities, such as total books in the system, number of active members, and recent transactions.
                        Reporting functionality allows librarians to generate reports on various metrics, such as most borrowed books, popular genres, and member activity.

                    <h2 className='about'> Development Process:</h2>
                    Requirement Analysis: Gathered requirements from stakeholders to define the scope and functionalities of the portal. Design: Created wireframes and UI mockups to visualize the user interface and interactions. Implementation: Developed frontend and backend modules iteratively, integrating components and testing functionality at each stage. Testing: Conducted unit tests, integration tests, and user acceptance tests to ensure the reliability and functionality of the portal.

                    <h2 className='about'>Challenges Faced:</h2>
                    Designing an intuitive user interface that provides a seamless experience for users. Implementing secure authentication and authorization mechanisms to protect user data. Optimizing database queries and ensuring efficient data retrieval for better performance. Handling concurrency and scalability issues to support a growing user base.

                   

                    <h2 className='about'>Conclusion:</h2> The Library Management System aims to modernize and optimize the operations of traditional libraries by leveraging web-based technologies and efficient management practices. With its intuitive interface and comprehensive features, the system empowers librarians to efficiently manage library resources while providing members with convenient access to a wide range of books and materials.

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

export default Library