import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Navbar from "../../Components/navbar/Navbar";
import WeAreUnique from "../../Components/we-are-unique/WeAreUnique";
import Testimonial from "../../Components/testimonial/Testimonial";
import InstructorCard from "../../Components/instructor-card/InstructorCard";
import Pagination from "../../Components/pagination/Pagination";
import Footer from "../../Components/footer/Footer";
import TestimonyList from "../../Components/testimony-list/TestimonyList";
import JoinCommunityCard from "../../Components/join-community-card/JoinCommunityCard";
import InstructorSwiper from "../../Components/instructor-swiper/InstructorSwiper";
import WorkshopSwiper from "../../Components/workshops-swiper/WorkshopSwiper";
import { AuthContext } from "../../Auth/AuthContext";
import FilterBy from "../../Components/filter-by/FilterBy";
import LiveSession from "../../Components/live-session/LiveSession";
import CourseCardList from "../../Components/course-card-list/CourseCardList";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import Layout from "../../Components/layout/Layout";
import { useHistory } from "react-router-dom";


const AllCourses = () => {
    const [courseList, setCourseList] = useState([])
    const [page, setpage] = useState(1)
    const [results, setresults] =useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        const res = await axios.get(`/api/v1/course/courses?page=${page}`)
        setCourseList(res.data)
        setresults(res.data.results)
    }, [])

    return (
        <Box>
            <Navbar/>
            <CourseCardList courseList={results}/>
            <Pagination/>
        </Box>
    )
}

export default AllCourses
