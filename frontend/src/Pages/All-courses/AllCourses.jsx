import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Pagination from "../../Components/pagination/Pagination";
import CourseCardList from "../../Components/course-card-list/CourseCardList";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import Layout from "../../Components/layout/Layout";
import { useHistory } from "react-router-dom";


const AllCourses = () => {
    const [courseList, setCourseList] = useState([])
    const [results, setresults] =useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCourses = async (page = 1) => {
        setIsLoading(true)
        const res = await axios.get(`/api/v1/course/courses?page=${page}`)
        setCourseList(res.data)
        setIsLoading(false)
        setresults(res.data.results)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getCourses()
    }, [])

    return (
        <Box>
            <Navbar/>
            <CourseCardList courseList={results} isLoading={isLoading}/>
            <Pagination response={courseList} getCourses={getCourses}/>
        </Box>
    )
}

export default AllCourses
