import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Tab.css";

const Tab = () => {

    const settings = {
        dots: false,
        fade: false,
        arrow: true,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 124,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: false,
              dots: false,
              arrow: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
        <div className='menu'>
            <div className='static_tab' style={{spacing:2}}>
                <button className='extended'>Dates</button>
                <button className='extended'>Group size</button>
                <button className='extended'>More filters</button>
            </div>
            <div className='responsive_tab'>
            <div>
        
        <Slider {...settings}>
          <div>
          <button className='extended'>Great for groups</button>
          </div>
          <div>
          <button className='extended'>Family-friendly</button>
          </div>
          <div>
          <button className='extended'>Animals</button>
          </div>
          <div>
          <button className='extended'>Arts & writing</button>
          </div>
          <div>
          <button className='extended'>Baking</button>
          </div>
          <div>
          <button className='extended'>Cooking</button>
          </div>
          <div>
          <button className='extended'>Dance</button>
          </div>
          <div>
          <button className='extended'>Drinks</button>
          </div>
          <div>
          <button className='extended'>Entertainment</button>
          </div>
          <div>
          <button className='extended'>Fitness</button>
          </div>
          <div>
          <button className='extended'>History & culture</button>
          </div>
          <div>
          <button className='extended'>Magic</button>
          </div>
          <div>
          <button className='extended'>Music</button>
          </div>
          <div>
          <button className='extended'>Social impact</button>
          </div>
          <div>
          <button className='extended'>wellness</button>
          </div>
          <div>
          <button className='extended'>Olympaian</button>
          </div>
          <div>
          <button className='extended'>Accessibility</button>
          </div>
        </Slider>
      </div>
            </div>
        </div>
        </>
    )
        
}

export default Tab