import React from 'react'
import './Footer.css'
const Footer=()=>{
    return(
        <div className="f-wrapper">
            <div className="container">
                <div className="f-container">
                    <span className='f-title'>Download the app today!</span>
                    <span className='join-button'>Playstore/Appstore App</span>
                    <hr/>
                    <div className="f-menu">
                        <span>Home</span>
                        <span>What We Do</span>
                        <span>How It Works</span>
                        <span>Who We Invest In</span>
                        <span>Testimonials</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;