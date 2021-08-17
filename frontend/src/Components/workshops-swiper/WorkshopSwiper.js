import React, { useRef, useState } from "react";

// importing workshop component
import Workshop from '../workshop/Workshop';

import './workshopSwiper.css'

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";



const WorkshopSwiper = ({ workshopList }) => {
    return (
        <div >
            <Swiper watchSlidesProgress={true} watchSlidesVisibility={true} freeMode={true} slidesPerView={1.5} className="mySwiper">
                {workshopList.map((el) => (
                    <SwiperSlide><Workshop workshop={el} /></SwiperSlide>
                ))}
            </Swiper>
            <Workshop />
        </div>
    )
}

WorkshopSwiper.defaultProps = {
    workshopList: [
        {
            workshopTitle: "Adobe XD tutorial",
            description: "You'll learn how to use Adobe XD and all the essential features and techniques that someone should know.",
            date: "Thursday 05 august 2021",
            time: "13:30 AM"
        },
        {
            workshopTitle: "Adobe photoshop tuto",
            description: "el cours hedha haja wow",
            date: "Friday 11 june 2024",
            time: "10:59 AM"
        },
        {
            workshopTitle: "Adobe XD tutorial",
            description: "Wallah hedha khir meli 9ablou",
            date: "Thursday 24 august 2021",
            time: "10:30 AM"
        }
    ]
}

export default WorkshopSwiper
