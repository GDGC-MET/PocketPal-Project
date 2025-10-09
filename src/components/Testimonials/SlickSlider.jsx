import { testimonialsData } from '@/src/utils/data';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick'
const SlickSlider= ()=>{
    const Settings ={
        dots: true,
        infinite : true,
        speed : 1000,
        slidesToShow : 3,
        slidesToScroll : 1,
        initialSlide : 0,
        touchMove : true,
        useCSS : true
    }
    return(
        <Slider {...Settings}>
            {
                testimonialsData.map((comment,i)=>(
                    <div key={i} className='comment'>
                        <div className="c-content">
                            <Image src={"/apos.svg"} className="apos-slider" alt="apos" width={40} height={30}></Image>
                        </div>
                        <span className='c-content'>{comment.comment}</span>

                        <div className="c-info">
                            <div className="c-avatar">
                                {comment.name[0]}
                            </div>
                            <div className="c-person">
                                <span>{comment.name}</span>
                                <span>{comment.profession}</span>
                            </div>
                         </div>
                    </div>
                ))
            }
        </Slider>
    )
}

export default SlickSlider;