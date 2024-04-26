import React, {useState} from 'react'
import Image from 'next/image';
import { SliderData } from './SliderData'
const Slider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

  return (
    <div id ='gallery'>
       
        <div>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index} className = ''>
                        <Image 
                            src={slide.image} 
                            alt= '/' 
                            width='1440' 
                            height='600' 
                            objectFit='cover'
                        />
                    </div>
                );
                
            })}
        </div>
        
    </div>
  );
};

export default Slider;