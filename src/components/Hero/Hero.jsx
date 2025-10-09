'use client';
import React from 'react'
import './Hero.css'
import { HeroData } from '@/src/utils/data';
import {motion} from 'framer-motion';
const Hero= () =>{
    const variants = (delay) => ({
        initial : {
            y:"18rem"
        },
        animate : {
            y:"0rem",
            transition : {
                type:"spring",
                damping: 25,
                duration : 2.5,
                delay
            }
        }
    }
    );

    const imgvariants = () =>({
        initial:{
            y:"18rem"
        },
        animate:{
            y:"0rem",
            transition: {
                type:"spring",
                duration:2,
                stiffness:30,
            },
        },
    });

    return(
        <div className="h-wrapper">
            <div className="container">

                <img src="hero/hero-arrow.png" alt="arrow" className='h-arrow'></img>
                <div className="h-container">
                    {/*left side*/}
                    <div className="h-left">
                        <div className="image-row">
                            {
                                HeroData.slice(0,3).map((person, i)=>(
                                    <div className="person-pill" key={i}>
                                        <motion.div 
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={variants(person.delay)}
                                        style={{ backgroundColor : person.bg}}
                                        className="person-pill-bg">
                                            <motion.img
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={" imgvariants"}
                                            src={person.src} alt={person.src}/>
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>  
                        
                        <div className="image-row">
                            {
                                HeroData.slice(3,6).map((person, i)=>(
                                    <div className="person-pill" key={i}>
                                        <motion.div 
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={variants(person.delay)}
                                        style={{ backgroundColor : person.bg}}
                                        className="person-pill-bg">
                                            <motion.img src={person.src} alt={person.src}/>
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                    {/*right side*/}
                    <div className="h-right">
                            <div className="h-title">
                                <span>Redefine How</span>
                                <span>You Save Your</span>
                                <span>Pocket Money</span>
                            </div>
                        <div className="h-desc">
                            PocketPal is a fun expense tracker and subscription manager for the youth!
                        </div>
                        <a href="https://pocketpal-dashboard-kmux.vercel.app/" className='join-button'>Get to the subscription tracker</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;