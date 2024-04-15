import React from 'react'
import './BikeRentalPortal.css'
import { Link } from 'react-router-dom'
function BlogHolder() {
    return (
        <>
            <div className='bikerentalportal'>
                    <h1 className='title d-flex text-center'>Blog Holder Admin Panel</h1>
                    <Link className="link" to ='https://kalangiam-bike-rental-portal.netlify.app/' target='_blank'><i><b>Go to project</b></i></Link>
                   
                    {/* Demo admin email address : admin@gmail.com password : 123 */}

                    

                    <h2 className='about'>About the Project</h2> 
                <div className='intro'><span className='start'>Developed an admin panel using React for managing blog posts, implementing CRUD operations (Create, Read, Update, Delete) efficiently. Provided administrators with seamless control over content</span> management</div>

                   <h2 className='about'>Objectives</h2> 
                    <ol className='list'>
                    📋 📌 Blog Component: This component is where all CRUD (Create, Read, Update, Delete) operations related to blog posts are handled. It allows administrators to perform the CRUD operations
                    </ol>
                    <h2 className='about'>Technologies Used :</h2>
                    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

                    <h2 className='about'>Create : </h2>
                  Admins can create new blog posts by filling out a form with title, content, and possibly other metadata.

                    <h2 className='about'> Retrieve: </h2>
                   All existing blog posts are displayed in a 📅 table Admins can view the details of individual posts by clicking on them.

                    <h2 className='about'> Update: </h2>
                  Admins can edit the content of existing blog posts. This likely involves displaying a pre-filled form with the current data and allowing admins to make changes.


                    <h2 className='about'>Delete: </h2>
                    Admins can remove blog posts from the system. This action might be triggered by clicking a delete button next to each post or through a confirmation dialog.

            </div>
        </>
    )
}

export default BlogHolder