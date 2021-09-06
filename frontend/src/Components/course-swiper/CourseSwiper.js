
// importing workshop component
import Workshop from '../workshop/Workshop';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import './course-swiper.css'

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import CourseCard from '../course-card/CourseCard';



const CourseSwiper = ({ courseList }) => {
    console.log(courseList)
    return (
        <Box cursor='move' style={{ marginTop: '65px', marginLeft:'-0.4vw' }} >
            <Text color="#072446"
            fontSize="3xl"
            fontWeight="bolder"
            ml="1vw"
            mb="15px"
            mt="1em" >
                New Course
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
                {courseList.map((el) => (
                    <SwiperSlide><CourseCard cardData={el} swiper={true} /></SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}


CourseSwiper.defaultProps = {
    courseList: [
        {
            thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            courseName: 'Business and marketing outcomes',
            courseType: 'Workshop',
            studentsCount: 45,
            instructor: {
                instructorName: 'Instructor Name',
                instructorRole: 'UX Designer',
                instructorPicture: 'https://avatars0.githubusercontent.com/u/1164541?v=4'
            }
        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            courseName: 'Business and marketing outcomes',
            courseType: 'Workshop',
            studentsCount: 45,
            instructor: {
                instructorName: 'Instructor Name',
                instructorRole: 'UX Designer',
                instructorPicture: 'https://avatars0.githubusercontent.com/u/1164541?v=4'
            }
        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            courseName: 'Business and marketing outcomes',
            courseType: 'Workshop',
            studentsCount: 45,
            instructor: {
                instructorName: 'Instructor Name',
                instructorRole: 'UX Designer',
                instructorPicture: 'https://avatars0.githubusercontent.com/u/1164541?v=4'
            }
        }
    ]
}

export default CourseSwiper
