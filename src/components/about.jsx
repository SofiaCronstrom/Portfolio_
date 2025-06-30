import * as React from "react"
import '../style/about.css'
const About = () => {

  return (

   <header className="wrapper-about">
      
       <div className="text-container">
       <div className="profile-container">
            <div className="index-box">
                <h1 className="index-name">SOFIA CRONSTRÖM<br/></h1>
                <h2 className="index-header">Frontend developer</h2>
            </div>
        </div>
         <div className="text-head">
              <p className="me-text">
              A curious and creative frontend developer who thrives on finding smart, user-friendly solutions.
              <br/>
              I combine technical skills with a strong customer focus and enjoys working at the intersection of design and functionality. 
              <br/>
              With a passion for innovation and continuous learning, I approach every project with dedication and fresh ideas. 
              </p>

          </div>
        </div>
    </header> 

  )
}

export default About;