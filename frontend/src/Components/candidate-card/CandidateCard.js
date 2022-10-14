import React from 'react'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs'

const CandidateCard = ({ candidate }) => {
    return (
        <Flex direction="column" my="2px" ml="5px" boxShadow="1px 1px 4px #D3D3D3" alignItems="center" borderRadius="3xl" width="18vw" py="1em" bg="#F7F9FB"   >
            <Flex position="relative">
                <img style={{ borderRadius: "9999px", height: "8vw", width: "8vw", objectFit: "cover" }} align='center' alt="instructor" src='https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp' />
                <BsChevronRight   style={{position:"absolute", right:"-4vw", fontSize:"1.5vw", fontWeight:"bolder", cursor:"pointer"}}  />
            </Flex>
            <Box align='center' pt="5" >
                <Text fontSize="1.5vw" fontWeight="bolder" color="#1E1E1E">{candidate.name}</Text>
                <Text fontSize="0.9vw" fontWeight="600" color="#1E1E1E" py="10px">{candidate.job}</Text>
            </Box>

        </Flex>
    )
}
export default CandidateCard