
// importing workshop component
import Workshop from '../workshop/Workshop';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import './workshopSwiper.css'

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";



const WorkshopSwiper = ({ workshopList }) => {
    return (
        <div style={{ marginTop: '65px', marginLeft: "30px" }}>
            <Text color="#072446" fontSize="3xl" fontWeight="bolder" mb="10px" >
                Upcoming
            </Text>
            <Swiper watchSlidesProgress={true} watchSlidesVisibility={true} freeMode={true} className="mySwiper" breakpoints={{
                "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 0.8,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 1.1,
                    "spaceBetween": 50
                },
                "1440": {
                    "slidesPerView": 1.5,
                    "spaceBetween": 50
                },"1920": {
                    "slidesPerView": 1.8,
                    "spaceBetween": 50
                },
                "2560": {
                    "slidesPerView": 2.7,
                    "spaceBetween": 50
                }
            }}>
                {workshopList.map((el) => (
                    <SwiperSlide><Workshop workshop={el} /></SwiperSlide>
                ))}
            </Swiper>
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
