import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import './we-are-unique.css'
import { Box, Text, Flex } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const WeAreUnique = () => {
    const { auth, signout } = useContext(AuthContext)
    return ( 
        <Box className="wauBg" bg={auth.isAuthenticated? "#FCFCFC": '#F7F9FB'}>
            <Flex alignItems='center' justify="space-between"  >
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
                  <Link to='/allcourses'>  
                 Explore our courses  <span style={{marginLeft:'30px'}}>{'>'}</span>
                 </Link>
                </Text>
            </Flex>
        </Box>
    )
}

export default WeAreUnique
