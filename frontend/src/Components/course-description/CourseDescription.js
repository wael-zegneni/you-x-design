import React, { useContex, useState } from "react";
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
import Navbar from "../../Components/navbar/Navbar";
import { AuthContext } from "../../Auth/AuthContext";
import { useToast } from "@chakra-ui/react"
import axios from 'axios'
import { BsBookmark } from 'react-icons/bs'
import { BsBookmarkFill } from "react-icons/bs";

const CourseDescription = ({ course }) => {

    const [saved, setSaved] = useState(true)

    const handleSaved = () =>{
        setSaved(!saved)
        // request in here !! 
    }

    return (
        <Flex px="100" bg="#FCFCFC" justifyContent="space-between" flexWrap="wrap" py='5'>
            <Box flex="0.5" height="350px" borderRadius="15px">
                <img style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }} src={course.thumbnail} />
            </Box>
            <Box flex="0.5" mt="5">
                <Flex alignItems="flex-start" justifyContent="space-between">
                    <Text flex='0.9' fontSize="2vw" lineHeight="1.1" fontWeight="bolder">
                        {course.title}
                    </Text>
                    {
                        saved ?
                            <BsBookmark cursor="pointer" style={{ marginTop: '10px' }} fontSize="35px" flex="0.1" onClick = {handleSaved} />
                            :
                            <BsBookmarkFill cursor="pointer" style={{ marginTop: '10px' }} fontSize="35px" flex="0.1" onClick = {handleSaved}/>
                    }
                </Flex>
                <Text fontSize="1.1vw" pt='2' color="#2167B8" fontWeight="bold">
                    {course.type}
                </Text>
                <Text pt='6' fontWeight="500" lineHeight="1.8" fontSize="1.3vw">
                    {course.description}
                </Text>
            </Box>
        </Flex>
    )
}

export default CourseDescription
