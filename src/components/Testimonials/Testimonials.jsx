import React from 'react';
import './Testimonials.css'
import SlickSlider from './SlickSlider';
const Testimonials= ()=>{
    return(
        <div className="t-wrapper">
            <div className="container">
                <div className="t-container">
                    <div className="t-head">
                        <span className='tag'>Testimonials</span>
                        <span className='title'>We are community-based.<br></br>app By the youth, for the youth!</span>
                        <span className='desc'>This is what our community members have to say about us</span>
                    </div>
                </div>
                <SlickSlider/>
            </div>
        </div>
    )
}

export default Testimonials;