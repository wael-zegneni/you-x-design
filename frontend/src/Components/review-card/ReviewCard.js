import React, { useContext } from "react";
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import {
    Heading,
    Flex,
    Text,
    Box,
    Grid,
    GridItem,
    WrapItem,
    Avatar,
    Progress,
    Center
} from "@chakra-ui/react";
import Layout from "../../Components/layout/Layout";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import { AuthContext } from "../../Auth/AuthContext";
import { useToast } from "@chakra-ui/react"
import axios from 'axios'
import { BiBookmark } from 'react-icons/bi'

const ReviewCard = ({ rating }) => {
    return (
        <Flex bg="#FCFCFC" ml="1vw" >
            <Center flexDirection="column" mr="10" justifyContent="center" flex="0.2">
                <Text fontSize="5.5em" lineHeight="1" color="#D58F26" fontWeight="bold">{rating.average}</Text>
                <ReactStars count={5} value={rating.average} size={30} edit={false} color2={'#ffd700'} />
                <Text fontSize="1.1em" lineHeight="1" color="#D58F26" fontWeight="bold">Course Rating</Text>
            </Center>
            <Box flex="0.5" >
                <Flex alignItems="center">
                    <Progress value={rating.five / rating.total * 100} mr="5" size="md" width="60%" bg="#CEC9C9" colorScheme="gray" />
                    <ReactStars count={5} value={5} size={28} edit={false} color2={'#ffd700'} />
                    <Text ml="5" fontSize="sm" color="#D58F26" fontWeight="bold"> {(rating.five / rating.total * 100).toFixed(0)} %</Text>
                </Flex>
                <Flex alignItems="center">
                    <Progress value={rating.four / rating.total * 100} mr="5" size="md" width="60%" bg="#CEC9C9" colorScheme="gray" />
                    <ReactStars count={5} value={4} size={28} edit={false} color2={'#ffd700'} />
                    <Text ml="5" fontSize="sm" color="#D58F26" fontWeight="bold"> {(rating.four / rating.total * 100).toFixed(0)} %</Text>
                </Flex>
                <Flex alignItems="center">
                    <Progress value={rating.three / rating.total * 100} mr="5" size="md" width="60%" bg="#CEC9C9" colorScheme="gray" />
                    <ReactStars count={5} value={3} size={28} edit={false} width="30%" color2={'#ffd700'} />
                    <Text ml="5" fontSize="sm" color="#D58F26" fontWeight="bold"> {(rating.three / rating.total * 100).toFixed(0)} %</Text>
                </Flex>
                <Flex alignItems="center">
                    <Progress value={rating.two / rating.total * 100} mr="5" size="md" width="60%" bg="#CEC9C9" colorScheme="gray" />
                    <ReactStars count={5} value={2} size={28} edit={false} color2={'#ffd700'} />
                    <Text ml="5" fontSize="sm" color="#D58F26" fontWeight="bold"> {(rating.two / rating.total * 100).toFixed(0)} %</Text>
                </Flex>
                <Flex  alignItems="center">
                    <Progress value={rating.one / rating.total * 100} mr="5"  size="md" width="60%" bg="#CEC9C9" colorScheme="gray" />
                    <ReactStars count={5} value={1} size={28} edit={false} color2={'#ffd700'} />
                    <Text ml="5" fontSize="sm" color="#D58F26" fontWeight="bold"> {(rating.one / rating.total * 100).toFixed(0)} %</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default ReviewCard
