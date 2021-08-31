import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';
import { resolveMotionValue } from 'framer-motion';
import Insta from '../../Assets/Icons/Insta';
import Facebook from '../../Assets/Icons/Facebook';
import LinkedIn from '../../Assets/Icons/LinkedIn'
// bg="#F7F9FB"
const InstructorCard = ({instructor}) => {
    console.log(instructor)
    return (
        <Box borderRadius="3xl" width="570px" py="1em"  pl="20px" bg="#F7F9FB"  pl="25px" >
            <Flex>
                <img style={{borderRadius:"9999px", height:"190px", width:"190px", objectFit:"cover"}} alt="instructor" src={instructor.avatar}/>
                <Box pl="20px"> 
                    <Text fontSize="2xl" fontWeight="bolder" color="#1E1E1E">{instructor.userName}</Text>
                    <Text fontSize="md" fontWeight="600" color="#1E1E1E" py="10px">{instructor.career}</Text>
                    <Text fontSize="sm" pt="5px" fontWeight="500" color="#1E1E1E">{instructor.bio} </Text>
                    <Flex pt="15px" alignItems="center" justify="space-between" wrap="wrap">
                        <Flex className="contact_icons" >
                            <a href={instructor.facebook} alt="icon" target="_blank"><Facebook cursor="pointer"/></a>
                            <a href={instructor.instagram} alt="icon" target="_blank"><Insta cursor="pointer"/></a>
                            <a href={instructor.linkedIn} alt="icon" target="_blank"><LinkedIn cursor="pointer"/></a>
                        </Flex>
                        <Text color="white" bg="#072446" cursor="pointer" fontSize="sm" px="15px" py="5px" ml="30px" borderRadius="3xl">View Profile</Text>
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
