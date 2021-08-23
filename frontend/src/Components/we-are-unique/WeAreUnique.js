import React from 'react'
import './we-are-unique.css'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';


const WeAreUnique = () => {
    return (
        <Box className="wauBg">
            <Flex alignItems='center' justify="space-between">
                <Box>
                    <Text fontSize="4xl" fontWeight="bold" color="#072446">
                        WE ARE UNIQUE !
                    </Text>
                    <Text fontSize="l" width="60vw" fontWeight="400" color="#8F7070" mt="5px">
                        Learn the basics of UX UI design
                    </Text>
                    <Text fontSize="l" width="60vw" color="#8F7070">
                        and develop your professional career with qualified experts.
                    </Text>
                </Box>
                <Text mr="10vw" fontSize="2xl" color="#FCC509" cursor="pointer" fontWeight="bold">
                    Explore our courses <span style={{marginLeft:'30px'}}>{'>'}</span>
                </Text>
            </Flex>
        </Box>
    )
}

export default WeAreUnique
