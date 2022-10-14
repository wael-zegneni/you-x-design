import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import CandidateCard from '../candidate-card/CandidateCard'

import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import './CandidateSwiper.css'

const CandidateSwiper = ({ candidateList }) => {
    console.log(candidateList)
    return (
        <Box cursor='move' style={{ marginTop: '5em', marginBottom:"5em" , marginLeft:'-0.4vw' }} >
            <Text color="#072446"
            fontSize="3xl"
            fontWeight="bolder"
            ml="1vw"
            mb="2em"
            mt="1em" >
                New access Requests
            </Text>
            <Swiper watchSlidesProgress={true}  watchSlidesVisibility={true} freeMode={true}  breakpoints={{
                "640": {
                    "slidesPerView": 2.5,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 3,
                    "spaceBetween": 30
                },
                "1024": {
                    "slidesPerView": 3.2,
                    "spaceBetween": 10
                },
                "1440": {
                    "slidesPerView": 3.6,
                    "spaceBetween": 10
                },"1920": {
                    "slidesPerView": 4.3,
                    "spaceBetween": 10
                },
                "2560": {
                    "slidesPerView": 4.6,
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