import React from 'react'
import './How_We_Differ.css'
import { ourDiffFeatures } from '@/src/utils/data';
import Image from 'next/image';
const How_We_Differ = ()=>{
    return(
        <div className="hwd-wrapper">
            <div className="container">
                <div className="hwd-container">
                    <div className="hwd-head">
                        <span className='tag'>How We Differ</span>
                        <span className='title'>Save your money, before spending it!</span>
                        <span className='text'>We offer you alerts and notifications based on your set preferences before you even spend your money! Check how much you saved over the past month and earn rewards accoardingly!</span>
                    </div>
                    <div className="hwd-features">
                        {
                            ourDiffFeatures.map((feature,i)=>(
                                <div key={i} className='hwd-feature'>
                                    <Image src={feature.icon} alt={feature.icon} width={128} height={128}/>
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How_We_Differ;