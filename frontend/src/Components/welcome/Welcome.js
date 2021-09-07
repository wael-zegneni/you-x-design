import React from 'react'
import './welcome.css'
import { Box, Text, Flex} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import {Link} from 'react-router-dom'


const Welcome = ({userName}) => {
    return (
        <Box className="wauBg">
            <Flex  justify="space-between" alignItems="center">
                <Box  width="max-content">
                    <Text fontSize="4xl" fontWeight="bold" width="max-content" color="#072446">
                        Hello {userName}
                    </Text>
                    <Text fontSize="l" width="60vw" width="max-content" color="#8F7070">
                        What do you want to learn today?
                    </Text>
                </Box>
                {/* <Link tp ='/allcourses'>
                <Flex  width="250px" mr="3em" fontSize="xl"  color="#FCC509" cursor="pointer" fontWeight="bold" alignContent="center">
                    
                    Explore our courses <FaChevronRight style={{marginTop:"6px", marginLeft:"20px"}}/>
                    
                </Flex>
                </Link> */}
                <Text mr="10vw" fontSize="2xl" color="#FCC509" cursor="pointer" fontWeight="bold">
                  <Link to='/allcourses'>  
                 Explore our courses  <span style={{marginLeft:'30px'}}>{'>'}</span>
                 </Link>
                </Text>
            </Flex>
        </Box>
    )
}

Welcome.defaultProps ={
    userName: 'Moez'
}

export default Welcome
