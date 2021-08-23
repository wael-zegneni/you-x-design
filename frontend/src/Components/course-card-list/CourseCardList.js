import React from 'react'
import Workshop from '../workshop/Workshop';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import CourseCard from '../course-card/CourseCard';

const CourseCardList = ({ courseList }) => {
    return (
        <Flex width="90vw" ml="5vw" justifyContent="space-around" wrap="wrap">
            {
                courseList.map((el) => (
                    <CourseCard cardData={el} /> 
                ))
            }
        </Flex>
    )
}

CourseCardList.defaultProps = {
    courseList: [
        {
            thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
            thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
            thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            courseName: 'Business and marketing outcomes',
            courseType: 'Workshop',
            studentsCount: 45,
            instructor: {
                instructorName: 'Instructor Name',
                instructorRole: 'UX Designer',
                instructorPicture: 'https://avatars0.githubusercontent.com/u/1164541?v=4'
            }
        }
        ,
        {
            thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            courseName: 'Business and marketing outcomes',
            courseType: 'Workshop',
            studentsCount: 45,
            instructor: {
                instructorName: 'Instructor Name',
                instructorRole: 'UX Designer',
                instructorPicture: 'https://avatars0.githubusercontent.com/u/1164541?v=4'
            }
        }
        ,
        {
            thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
            thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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

export default CourseCardList
