import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import "./Card.css";
import { CardMockData } from './data';


const Card = () => {

    const settings = {
        dots: false,
        infinite: false,
        arrow: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

        <div className='List'>
            <h2>Top sellers</h2>
            <Slider {...settings} >
                {CardMockData.map((item) => (
                    <div className='card'>
                        <div className='card_top'>
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className='card_bottom'>
                            <div className='rating'>
                                <span><StarIcon /></span>
                                <span>{item.rating}</span>
                                <span>{item.visits}</span>
                                <span>{item.country}</span>
                            </div>
                            <p>{item.description}</p>
                            <div className='price'>{item.price}</div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>



    )
}

export default Card