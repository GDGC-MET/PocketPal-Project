import React from 'react'
import './How_It_Works.css'
import { hitFeatures } from '@/src/utils/data';
import Image from 'next/image';
const How_It_Works = ()=>{
    return(
        <div className="hiw-wrapper">
            <div className="container">
                <div className="hiw-container">
                    <div className="hiw-head">
                        <span className='tag'>
                            How It Works
                        </span>
                        <span className='title'>
                            Set a goal. build streaks. earn rewards!
                        </span>
                    </div>
                    <div className="hiw-features">
                        {
                            hitFeatures.map((feature,i)=>(
                                <div className='hiw-feature' key={i}>
                                    <div className="detail">
                                        <span className='des'>0{i+1}</span>
                                        <span className='sec-title'>{feature.title}</span>
                                        <span className='text'>{feature.des}</span>
                                    </div>
                                    <div className="icon">
                                        <Image src={feature.icon} alt={feature.icon} width={128} height={128} style={{translate:"50% 0rem"}}/>
                                     </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How_It_Works;