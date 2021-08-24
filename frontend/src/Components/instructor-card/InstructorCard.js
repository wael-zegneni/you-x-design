import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';
import { resolveMotionValue } from 'framer-motion';
import Insta from '../../Assets/Icons/Insta';
import Facebook from '../../Assets/Icons/Facebook';
import LinkedIn from '../../Assets/Icons/LinkedIn'

const InstructorCard = ({instructor}) => {
    return (
        <Box borderRadius="3xl" width="36vw" pl="20px" bg="#F7F9FB" px="10px" py="10px">
            <Flex>
                <Avatar src={instructor.picture} size="2xl"/>
                <Box pl="20px"> 
                    <Text fontSize="2xl" fontWeight="bolder" color="#1E1E1E">{instructor.name}</Text>
                    <Text fontSize="md" fontWeight="600" color="#1E1E1E" py="10px">{instructor.role}</Text>
                    <Text fontSize="sm" pt="5px" fontWeight="500" color="#1E1E1E">{instructor.bio} </Text>
                    <Flex pt="15px" alignItems="center" justifyContent="space-between">
                        <Flex >
                            <a href={instructor.facebook} alt="icon"><Facebook/></a>
                            <a href={instructor.instagram} alt="icon"><Insta/></a>
                            <a href={instructor.linkedIn} alt="icon"><LinkedIn/></a>
                        </Flex>
                        <Text color="white" bg="#072446" fontSize="sm" py="5px" px="10px" borderRadius="3xl">View Profile</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

InstructorCard.defaultProps = {
    instructor : {
        picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
        name: 'Instructor Name',
        role: 'UX Designer',
        bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
        facebook: 'https://www.facebook.com/Presidence.tn/',
        instagram: 'https://www.instagram.com/cristiano/',
        linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
    }
}

export default InstructorCard