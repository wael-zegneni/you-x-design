import React from 'react'
import { Box, Flex, Text  } from '@chakra-ui/react';
import liveLogo from '../../Assets/Images/liveLogo.png'
import './workshop.css'


const Workshop = () => {

    var workshop = {
        workshopTitle : "Adobe XD tutorial",
        description : "You'll learn how to use Adobe XD and all the essential features and techniques that someone should know.",
        date: "Thursday 05 august 2021",
        time : "10:30 AM"
    }

    return (
        <Box bg="red" maxWidth="430px" maxHeight="350px" minHeight="280px" width="max-content">
            <Flex alignItems="center">
                <Text flex="0.7">{workshop.workshopTitle}</Text>
                <Flex flex="0.3">
                    <center>
                        <img src={liveLogo} alt="liveSession" width="45px"/>
                        <Text>Live</Text>
                    </center>
                </Flex>
            </Flex>
            <Flex>
                <Text flex="0.7">
                You'll learn how to use Adobe XD and all the essential features and techniques that someone should know.
                </Text>
            </Flex>
            <Flex>
                <Flex>
                    <img alt="clock logo"/>
                    <Box>
                        <Text>SCHEDULED FOR</Text>
                        <Text>{workshop.date}</Text>
                        <Text>{workshop.time}</Text>
                    </Box>
                </Flex>
                <Flex mr='10px' mb='7px' className='enroll-now' cursor='pointer'>
                        View details <span style={{ marginLeft: 10 }}>></span>
                </Flex>

            </Flex>
        </Box>
    )
}

export default Workshop
