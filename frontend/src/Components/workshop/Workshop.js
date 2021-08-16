import React from 'react'
import { Box, Flex, Text, Alert, AlertIcon } from '@chakra-ui/react';
import liveLogo from '../../Assets/Images/liveLogo.png'
import yellowRectangle from '../../Assets/Images/yellowRectangle.png'
import clockIcon from '../../Assets/Images/clockIcon.png'
import './workshop.css'


const Workshop = () => {

    var workshop = {
        workshopTitle: "Adobe XD tutorial",
        description: "You'll learn how to use Adobe XD and all the essential features and techniques that someone should know.",
        date: "Thursday 05 august 2021",
        time: "10:30 AM"
    }

    return (
        <Box borderRadius="2xl" boxShadow="0px 0px 10px #DCDCDC	" maxWidth="480px" width="max-content">

            <Flex  mt="30px"  mb="8%">
                <Alert borderLeftColor="#FCC509" borderLeftWidth="12px" color="#072446" status="warning" fontSize="3xl" fontWeight="bolder" fontFamily="Montserrat" variant="left-accent" bg="none">
                    {workshop.workshopTitle}
                </Alert>

                <center className="liveLogo">
                    <img src={liveLogo} alt="liveSession" width="60px" mr="20px" left="47px" />
                    <Text fontSize="sm" fontWeight="bold">Live</Text>
                </center>
            </Flex>
            <Box ml="28px">
                <Flex>
                    <Text flex="0.8" mb="8%" fontSize="l" fontWeight="bold" fontFamily="Montserrat">
                        You'll learn how to use Adobe XD and all the essential features and techniques that someone should know.
                    </Text>
                </Flex>

                <Flex mb="10%" justifyContent="space-between" alignItems="center">
                    <Box mr='10px' className="schedule">
                        <img src={clockIcon} alt="clock logo" height="30px !important" width="50px" />
                        <Box className="schedule-date" ml="20px" >
                            <Text fontWeight="600"  fontFamily="Montserrat">SCHEDULED FOR</Text>
                            <Text fontSize="xs">{workshop.date}</Text>
                            <Text fontSize="xs">{workshop.time}</Text>
                        </Box>
                    </Box>
                    <Flex mr='30px' mb='7px' className='enroll-now' cursor='pointer' >
                        Enroll now <span style={{ marginLeft: 10 }}>></span>
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )
}

export default Workshop
