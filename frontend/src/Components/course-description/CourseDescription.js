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
import Layout from "../../Components/layout/Layout";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import { AuthContext } from "../../Auth/AuthContext";
import { useToast } from "@chakra-ui/react"
import axios from 'axios'
import {BiBookmark} from 'react-icons/bi'

const CourseDescription = ({ course }) => {


    return (
        <Flex px="100"  bg="#FCFCFC" justifyContent="space-between" flexWrap="wrap" py='5'>
            <Box flex="0.4" height="350px" bg="blue" borderRadius="15px">
                <img style={{ height: '100%', objectFit: 'cover', borderRadius:'15px'}} src={course.thumbnail} />
            </Box>
            <Box flex="0.5" mt="5">
                <Flex alignItems="flex-start" justifyContent="space-between">
                    <Text flex='0.9' fontSize="4xl" lineHeight="1.1" fontWeight="bolder">
                        {course.title}
                    </Text>
                    <BiBookmark style={{marginTop:'10px'}} fontSize="35px" flex="0.1"/>
                </Flex>
                <Text fontSize="lg" pt='2' color="#2167B8" fontWeight="bold">
                    {course.type}
                </Text>
                <Text pt='6' fontWeight="600" lineHeight="2" fontSize="xl">
                    {course.description}
                </Text>
            </Box>
        </Flex>
    )
}

export default CourseDescription
