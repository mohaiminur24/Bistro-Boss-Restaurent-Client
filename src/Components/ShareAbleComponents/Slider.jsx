import React from 'react';
import sl01 from "../../assets/home/01.jpg"
import sl02 from "../../assets/home/02.jpg"
import sl03 from "../../assets/home/03.png"
import sl04 from "../../assets/home/04.jpg"
import sl05 from "../../assets/home/05.png"
import sl06 from "../../assets/home/06.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Style.css"


const Slider = () => {
    return (
        <div>
            <Carousel showArrows={true} onChange={true} autoPlay={true} infiniteLoop={true} showThumbs={true} emulateTouch={true}>
                <div>
                    <img src={sl01} />
                </div>
                <div>
                    <img src={sl02} />
                </div>
                <div>
                    <img src={sl03} />
                </div>
                <div>
                    <img src={sl04} />
                </div>
                <div>
                    <img src={sl05} />
                </div>
                <div>
                    <img src={sl06} />
                </div>
            </Carousel>  
        </div>
    );
};

export default Slider;