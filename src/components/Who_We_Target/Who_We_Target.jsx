import React from 'react'
import './Who_We_Target.css'
import { whoWeInvest } from '@/src/utils/data';
const Who_We_Target = ()=>{
    return(
        <div className="wwi-wrapper">
            <div className="container">
                <div className="wwi-container">
                    <div className="wwi-left">
                        <div className="wwi-head">
                            <span className='tag'>Who We Target</span>
                            <span className='title'>The Gen Z</span>
                        </div>
                        <div className="wwi-features">
                            {
                                whoWeInvest.map((feature,i)=>(
                                    <div className='wwi-feature' key={i}>
                                        <span className='des'>{feature.title}</span>
                                        <span className='text'>{feature.des}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="wwi-right">
                        <img src="Pally new.png" alt='an image comes here'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Who_We_Target;   