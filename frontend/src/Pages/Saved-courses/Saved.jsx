import React, { useContext } from "react";
import "./saved.css";
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
  import Layout from "../../Components/layout/Layout";
  import Footer from "../../Components/footer/Footer";
  import { AuthContext } from "../../Auth/AuthContext";
  import axios from 'axios';
  import Pagination from '../../Components/pagination/Pagination'
  import CourseCardList from "../../Components/course-card-list/CourseCardList";
  import { useState, useEffect } from "react";
  import FilterBy from '../../Components/filter-by/FilterBy'

const Saved = () =>{
    const {auth} = useContext(AuthContext)
    const [courseList, setCourseList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCourses = async (page = 1) => {
        setIsLoading(true)
        const res = await axios.get(`/api/v1/user?id=${auth.user._id}`)
        setCourseList(res.data.saved)
        setIsLoading(false)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getCourses()
    }, [])

    return(
        <Layout>
            <Box display="flex" justifyContent="flex-end" my="20px" mt="40px" py="50px">
                <Flex alignItems="Left" justifyContent="space-between" width="95%" >
                    <Text fontSize="2.6vw" fontWeight="bold" >
                        My saved courses
                    </Text>                  
                </Flex>
            </Box>
            <CourseCardList style={{marginLeft:'10px'}} courseList={courseList} isLoading={isLoading}/>
            {/* <Pagination response={courseList} getCourses={getCourses}/> */}
        </Layout>

    )
}
export default Saved;