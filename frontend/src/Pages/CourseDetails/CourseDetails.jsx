import React, { useContext } from "react";
import {
  Heading,
  Flex,
  Text,
  Box,
  Grid,
  GridItem,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import ReviewCard from "../../Components/review-card/ReviewCard";
import Layout from "../../Components/layout/Layout";
import CourseDescription from "../../Components/course-description/CourseDescription";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import CourseSwiper from '../../Components/course-swiper/CourseSwiper'
import InstructorDescription from "../../Components/instructor-description/InstructorDescription";
import { AuthContext } from "../../Auth/AuthContext";
import {useToast} from "@chakra-ui/react"
import axios from 'axios'
import './courseDetails.css'

const CourseDetails = ({id}) => {
    const data = {

        thumbnail: 'https://i2.wp.com/slbuddy.com/wp-content/uploads/2020/08/Free-Online-Business-Courses-with-Certificates.jpg?resize=960%2C600&ssl=1',
        title : " Business and marketing outcomes",
        type : "Article",
        description: "This article seeks to align the goals and understanding of designers and marketers, which helps them work together on the important business goal of creating value propositions.",
        instructor: {
            name: 'Instrcutor Name',
            role: 'UX designer',
            residence: 'Sousse',
            join_year: '2021',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae est id faucibus in ac libero.cahoncus consequat turpis ut mollis. Ut vulputate suscipitemper. Fusce nec diam lla felis, a fermentum nibh aliquet a. Donec vel facilisis nisl, vel suscipit ',
            saved: false
        },
        rating:{
            one:1,
            two: 2,
            three:2,
            four: 4,
            five: 3,
            total: 14,
            average: 3.6
        }
        
    }


    const course = {
        title: data.title,
        type : data.type,
        description: data.description,
        thumbnail: data.thumbnail,
        saved: data.saved
    }

    console.log(course)

    const instructor = {
        name: data.instructor.name,
        role: data.instructor.role,
        residence: data.instructor.residence,
        join_year: data.instructor.join_year,
        bio: data.instructor.bio
    }
    return (
        <div >
            <Navbar/>
            <Box bg="#FCFCFC" >
            <Text py="10" px="2.8em" fontSize="2.5vw" fontWeight="bold" color="#072446" bg="#F7F9FB" mt="70" mb="70">About this course</Text>
            <CourseDescription course={course} />
            <Text py="10" px="2.8em" fontSize="2.5vw" fontWeight="bold" color="#072446" bg="#F7F9FB" mt="90" mb="70">Instructor</Text>
            <InstructorDescription instructor = {instructor}  />
            <Text py="10" px="2.8em" fontSize="2.5vw" fontWeight="bold" color="#072446" bg="#F7F9FB" mt="90" mb="70">Review</Text>
            <ReviewCard  rating={data.rating}/>
            <Text py="10" px="2.8em" fontSize="2.5vw" fontWeight="bold" color="#072446" bg="#F7F9FB" mt="90" mb="70">Recommended for you</Text>
            <CourseSwiper style={{marginLeft: '4vw !important'}}/>
            </Box>


        </div>
    )
}

export default CourseDetails
