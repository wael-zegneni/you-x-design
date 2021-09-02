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
    const [page, setpage] = useState(1)
    const [results, setresults] =useState([])
    const [totalPages, settotalPages] = useState(0)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        const res = await axios.get(`/api/v1/course/courses?page=${page}`)
        setCourseList(res.data)
        setresults(res.data.results)
        settotalPages(res.data.total)
        console.log(res.data)

    }, [])

    return (
        <Box>
            <Navbar/>
            <CourseCardList courseList={results}/>
            <Pagination totalPages={totalPages}/>
        </Box>
    )
}

export default AllCourses
