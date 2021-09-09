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

const CourseDescription = () => {

    const course = {
        title : " Business and marketing outcomes",
        type : "article",
        description: "This article seeks to align the goals and understanding of designers and marketers, which helps them work together on the important business goal of creating value propositions.",
        insctructor: {
            name: 'Instrcutor Name',
            role: 'UX designer',
            residence: 'Sousse',
            join_year: '2021'
        }
    }

    return (
        <Flex>
            <Box>
                <img/>
            </Box>
            <Box>
                <Flex>
                    <Text>

                    </Text>
                    <img/>
                </Flex>
                <Text>

                </Text>
                <Text>

                </Text>
            </Box>
        </Flex>
    )
}

export default CourseDescription
