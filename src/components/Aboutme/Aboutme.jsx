import React from 'react'
import { Link } from 'react-router-dom'
function Aboutme() {
  return (
    <div className='bikerentalportal'>
    <h1 className='title d-flex text-center'>MERN STACK DEVELOPER</h1>
    

    <h2 className='about'>Dedicated, Fervent, and Enthusiastic Fresher</h2> 
<div className='intro'><span className='start'>Hello there! I'm thrilled to introduce myself as a dedicated, fervent, and enthusiastic fresher ready to embark on an exciting journey as a MERN Full Stack Developer. With a burning passion for coding and a </span>relentless drive to learn and grow, I'm eager to contribute to innovative projects and make a meaningful impact in the tech industry.</div>

<h2 className='about'>Aspiring to Kickstart a Rewarding Career</h2> 
<div className='intro'><span className='start'>My goal is clear: to kickstart a rewarding career where I can leverage my skills and knowledge to create robust, scalable, and user-friendly web applications. I believe in the power of technology to solve</span> real-world problems and enhance the way we live and work. As a MERN Full Stack Developer, I'm committed to staying updated with the latest trends and technologies to deliver cutting-edge solutions.</div>



    <h2 className='about'>Technologies</h2>
    <h3 className="tech">Frontend :</h3> ReactJS <br></br><h3 className="tech">Backend :</h3> Node.js<br></br><h3 className="tech">Database:</h3>MongoDB with Mongoose schema Authentication : JWT (JSON Web Tokens) <h3 className="tech">Version Control :</h3> Git<br></br>

    <h2 className='about'>Why MERN Full Stack Development?</h2>
    MERN (MongoDB, Express.js, React.js, Node.js) stack development resonates deeply with me because of its versatility, efficiency, and flexibility. From handling database management with MongoDB to building dynamic user interfaces with React.js, and powering server-side logic with Node.js and Express.js, the MERN stack offers a comprehensive toolkit to bring ideas to life seamlessly.


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
  )
}

export default Aboutme