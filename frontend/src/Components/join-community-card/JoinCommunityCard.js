import React from 'react'
import Student from '../../Assets/Icons/Student'
import Instructor from '../../Assets/Icons/Instructor'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';
import './joinCommunityCard.css'

const JoinCommunityCard = ({heading, role, text}) => {
    return (
        <Flex className="JoinCommunityCard"  direction="column" alignItems="center" justifyContent="space-around" py="15px" >
            <Text fontSize="3xl" fontWeight="bolder">
                {heading}
            </Text>
            {
                role === 'student'?
                <Student/>:
                <Instructor/>
            }
            <Text>{text}</Text>
            <Text bg="#FCC509" fontSize="md" px="30px" py="10px" borderRadius="3xl" fontWeight="bold" color="white" >Sign up</Text>

        </Flex>
    )
}

JoinCommunityCard.defaultProps={
    heading: 'As Student',
    role: 'student',
    text: 'Get started with your immersive learning experience'
}

export default JoinCommunityCard
