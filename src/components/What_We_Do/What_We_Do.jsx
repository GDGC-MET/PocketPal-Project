import React from 'react'
import './What_We_Do.css'
import { features } from '@/src/utils/data';
import Image from 'next/image';
import {motion} from 'framer-motion';
const What_We_Do = () =>{
    return(
        <div className="wwd-wrapper">
            <div className="container">
                <div className="wwd-container">
                    <div className="wwd-head">
                        <span className='tag'>What We Do</span>
                        <span className='title'>We help youth track expenses, manage subscriptions, and build smart money habits through a simple, easy-to-use financial app.</span>
                        <span className='desc'>Here is how it all comes around</span>
                    </div>
                    <div className="wwd-blocks">
                        <div className="wwd-block">
                            <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='sec-title'>Expense Tracker</motion.span>
                            <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                             className='text'>Our Smart expense tracker lets you set a saving goal and save accoardingly</motion.span>
                            <div className="block-features">
                                {
                                    features.slice(0,3).map((feature,i)=>(
                                        <div className='block-feature' key={i}>
                                            <Image src={feature.icon} alt={feature.src} width={60} height={60} />
                                            <span>{feature.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="wwd-block">
                        <span className='sec-title'>Subscription Manager</span>
                            <span className='text'>Our Subscription Manager keeps track of all your subscriptions and notifes you before due</span>
                            <div className="block-features">
                                {
                                    features.slice(3,6).map((feature,i)=>(
                                        <div className='block-feature' key={i}>
                                            <Image src={feature.icon} alt={feature.src} width={60} height={60} />
                                            <span>{feature.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="wwd-support">
                        <div>
                            <span className='sec-title'>Community Driven Approach</span>
                        </div>
                        <div>
                            <span className='text'>
                                Our discord server is a vibrant and free-to-join community for all PocketPal users to interact with each other and share their achievements!
                            </span>
                            <span className='join-button'>Join The Server!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default What_We_Do;