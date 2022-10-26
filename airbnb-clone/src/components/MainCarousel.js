import "./MainCarousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { photos } from "./data";



const MainCarousel = () => {
    

    // const settings ={
    //     dots: false,
    //     fade: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 2.5,
    //     arrow: true,
    //     slidesToScroll: 1,
    //     className:"slides"
    // }
    const settings = {

        className:"slides",
        dots: true,
        infinite: false,
        arrow: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


  return (
    <div className="carousel_list">
        <h1> New this week</h1>
        <Slider {...settings}>
          <div>
          <img className='img_carousel' src={require("./image/image-1.png")} alt="img"/>
          </div>
          <div>
          <img className='img_carousel' src={require("./image/image-2.png")} alt="img"/>
          </div>
          <div>
          <img className='img_carousel' src={require("./image/image-3.png")} alt="img"/>
          </div>
          
        </Slider>
      </div>
  )
}

export default MainCarousel