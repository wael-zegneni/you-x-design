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
import {useToast} from "@chakra-ui/react"
import axios from 'axios'

const CourseDetails = () => {
    return (
        <div>
            <Navbar/>
            <Text py="10" px="100" fontSize="2xl" fontWeight="bold" color="#072446" bg="#F7F9FB" my="70">About this course</Text>
            <Text py="10" px="100" fontSize="2xl" fontWeight="bold" color="#072446" bg="#F7F9FB" my="70">Instructor</Text>
            <Text py="10" px="100" fontSize="2xl" fontWeight="bold" color="#072446" bg="#F7F9FB" my="70">Review</Text>
            <Text py="10" px="100" fontSize="2xl" fontWeight="bold" color="#072446" bg="#F7F9FB" my="70">Recommended for you</Text>


        </div>
    )
}

export default CourseDetails
