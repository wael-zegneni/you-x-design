import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import CandidateCard from '../candidate-card/CandidateCard'

import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import './CandidateSwiper.css'

const CandidateSwiper = ({ candidateList }) => {
    console.log(candidateList)
    return (
        <Box cursor='move' style={{ marginTop: '65px', marginLeft:'-0.4vw' }} >
            <Text color="#072446"
            fontSize="3xl"
            fontWeight="bolder"
            ml="1vw"
            mb="15px"
            mt="1em" >
                New access Requests
            </Text>
            <Swiper watchSlidesProgress={true}  watchSlidesVisibility={true} freeMode={true} className="course_swiper" breakpoints={{
                "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 1,
                    "spaceBetween": 30
                },
                "1024": {
                    "slidesPerView": 3.1,
                    "spaceBetween": 10
                },
                "1440": {
                    "slidesPerView": 3.1,
                    "spaceBetween": 10
                },"1920": {
                    "slidesPerView": 3.1,
                    "spaceBetween": 10
                },
                "2560": {
                    "slidesPerView": 3.1,
                    "spaceBetween": 10
                }
            }}>
                {candidateList.map((el) => (
                    <SwiperSlide><CandidateCard candidate={el} swiper={true} /></SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}
export default CandidateSwiper