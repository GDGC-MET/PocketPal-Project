import { useState } from 'react'
import React from 'react'
import './Navbar.css'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { Link } from 'react-scroll';
const Navbar = ()=>{
    const [navStyle, setNavStyle] = useState("");
    const {scrollYProgress} = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
        if(latest > 0.2){
            setNavStyle("sticky");
        }else{
            setNavStyle("");
        }
    });
    return(
        <div className={`n-wrapper ${navStyle}`}>
            <div className="container">
                <div className='n-container'>
                    {/*left side*/}
                    <div className="n-logo">
                        <span>POCKETPAL</span>
                    </div>
                    {/*right side*/}
                    <div className="n-right">
                        <div className="n-menu">
                            <Link to="wwd-wrapper" spy={true} smooth={true} offset={30}>
                                <span>What we do</span>
                            </Link>
                            
                            <Link to="hwd-wrapper" spy={true} smooth={true} offset={50}>
                                <span>How We Differ</span>
                            </Link>

                            <Link to="hiw-wrapper" spy={true} smooth={true} offset={50}>
                                <span>How it works</span>
                            </Link>

                            <Link to="wwi-wrapper" spy={true} smooth={true}>
                                <span>Who we invest in</span>
                            </Link>

                            <Link to="t-wrapper" spy={true} smooth={true} offset={50}>
                                <span>Testimonials</span>
                            </Link>
                        </div>
                        <a href="https://pocketpal-dashboard.vercel.app/" className="fund-button">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;