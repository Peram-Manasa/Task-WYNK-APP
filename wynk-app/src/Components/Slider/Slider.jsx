import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
     arrows: true
 }

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="containerSlide__each-slide">
                    <div>
                        <img src="https://chaibisket.com/wp-content/uploads/2019/12/ok-manchi.jpg" alt="img1" />
                        
                    </div>
                </div>
                <div className="containerSlide__each-slide">
                    <div>
                        <img src="https://i.ytimg.com/vi/g8tdp1Tdjfw/maxresdefault.jpg" alt="img2" />
                    </div>
                </div>
                <div className="containerSlide__each-slide">
                    <div>
                        <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8edf620545fb1588a685eaf9f3bdd1759f407e119cea48c58db7a721609f972e._SX1080_.jpg" alt="img3" />
                    </div>
                </div>
                
                
            </Slide>
        </div>
    )
}

export default Slideshow;