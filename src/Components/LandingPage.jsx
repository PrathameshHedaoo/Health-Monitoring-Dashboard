import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
    <div className="mainContainer">
    <div className="landingText">
    <div className="Heading">
        <h1>Health Monitoring Dashboard</h1>
    </div>
    
        <p>Introducing our Health Monitoring Dashboard, a React.js prototype designed for individuals like Sunita Sharma (65+ years). 
        This interactive platform prioritizes elder care by offering real-time vital signs monitoring, personalized medication reminders, 
        an intuitive appointment tracker, and an activity log for maintaining a healthy lifestyle. Easily accessible and user-friendly, 
        the dashboard empowers seniors and caregivers to proactively manage health, ensuring a holistic approach to well-being. 
        Stay connected to your loved one's health journey effortlessly with our comprehensive solution. 
        Experience a new era of elderly care technology, where simplicity meets effectiveness.</p>
        
      <Link to= '/Dashboard' className='Link'> View Dashboard </Link>
    </div>
    </div>
    </>
  )
}

export default LandingPage
