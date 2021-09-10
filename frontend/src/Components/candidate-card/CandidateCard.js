import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';
import { resolveMotionValue } from 'framer-motion';
// bg="#F7F9FB"
const CandidateCard = ({candidate}) => {
    console.log(candidate)
    return (
        <Box borderRadius="3xl" width="280px" py="1em"  pl="20px" bg="#F7F9FB"  pl="25px" >           
                <img style={{borderRadius:"9999px", height:"150px", width:"150px", objectFit:"cover"}} align='center' alt="instructor" src='https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp'/>
                <Box align ='center' pl="20px"> 
                    <Text fontSize="2xl" fontWeight="bolder" color="#1E1E1E">{candidate.name}</Text>
                    <Text fontSize="md" fontWeight="600" color="#1E1E1E" py="10px">{candidate.job}</Text> 
                </Box>
            
        </Box>
    )
}
export default CandidateCard