import React from 'react'
import Student from '../../Assets/Icons/Student'
import Instructor from '../../Assets/Icons/Instructor'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';
import './joinCommunityCard.css'

const JoinCommunityCard = ({heading, role, text}) => {
    return (
        <Flex className="JoinCommunityCard"  direction="column" alignItems="center" justifyContent="space-around" py="15px" borderRadius="3xl">
            <Text fontSize="3xl" fontWeight="bolder">
                {heading}
            </Text>
            {
                role === 'student'?
                <Student/>:
                <Instructor/>
            }
            <Text>{text}</Text>
            <Text cursor="pointer" bg="#FCC509" fontSize="md" px="30px" py="10px" borderRadius="3xl" transition='0.3s' fontWeight="bold" color="white" _hover={{transform:'scale(1.1, 1.1)'}} >Sign up</Text>

        </Flex>
    )
}

JoinCommunityCard.defaultProps={
    heading: 'As Student',
    role: 'student',
    text: 'Get started with your immersive learning experience'
}

export default JoinCommunityCard
