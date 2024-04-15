import React from 'react'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'
function ShoppingCart() {
    return (
        <>
            <div className='bikerentalportal'>
                    <h1 className='title d-flex text-center'>Shopping Cart</h1>
                    <Link className="link" to ='https://kalangiam-redux-shopping-cart.netlify.app/' target='_blank'><i><b>Go to project</b></i></Link>
                   
                    {/* Demo admin email address : admin@gmail.com password : 123 */}

                    

                    <h2 className='about'>About the Project</h2> 
                <div className='intro'><span className='start'>The Online Shopping Cart Website is a web-based platform designed to facilitate online shopping for users. It provides a user-friendly interface for browsing products, adding items to a </span>cart, and completing the purchase process. The website aims to offer a seamless shopping experience with features such as product search, category navigation, cart management, and secure payment processing.</div>

                   <h2 className='about'>Objectives</h2> 
                    <ol className='list'>
                    <li>Provide users with a convenient and intuitive platform for online shopping.</li>
                    <li>Ensure a smooth and secure checkout process to increase conversion rates and customer satisfaction.</li>
                    <li>Enable easy management of products, orders, and user accounts for administrators.</li>
                    <li>Implement responsive design principles to ensure compatibility with various devices and screen sizes.</li>
                    </ol>
                    <h2 className='about'>Technologies Used :</h2>
                    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

                    <h2 className='about'> Features: </h2>
                    User Authentication and Account Management:

Users can register for an account or login if they already have one.
Account management functionality allows users to update their profile information, view order history, and manage saved addresses.
Product Catalog:

The website displays a catalog of products organized into categories for easy navigation.
Each product listing includes details such as name, description, price, and images.
Product Search and Filtering:

Users can search for products using keywords or browse by category.
Filtering options allow users to narrow down search results based on criteria such as price range, brand, or popularity.
Shopping Cart Management:

Users can add products to their shopping cart, view the contents of the cart, and adjust quantities or remove items as needed.
The shopping cart maintains state across sessions, allowing users to resume shopping later if they leave the website.
Checkout Process:

The checkout process guides users through the steps required to complete their purchase, including entering shipping and billing information.
Users can choose from multiple payment methods, such as credit card, PayPal, or other online payment gateways.
The system calculates taxes, shipping fees, and discounts automatically and provides a summary of the total order before payment.
Order Management:

Users receive confirmation emails after placing an order, containing details such as order number, items purchased, and total amount.
Admin users have access to an order management interface where they can view and process orders, update order statuses, and generate invoices.

                   

                    <h2 className='about'>Challenges Faced:</h2>
                    Designing an intuitive user interface that provides a seamless experience for users. Implementing secure authentication and authorization mechanisms to protect user data. Optimizing database queries and ensuring efficient data retrieval for better performance. Handling concurrency and scalability issues to support a growing user base.

                    

                    <h2 className='about'>Conclusion:</h2> The Online Shopping Cart Website aims to meet the growing demand for convenient online shopping solutions by offering a user-friendly platform with essential features for browsing, selecting, and purchasing products. With its robust technology stack and user-centric design, the website provides a seamless shopping experience for both customers and administrators alike.

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

export default ShoppingCart