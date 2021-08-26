import React from 'react'
import { Box, Flex, Text, Alert } from '@chakra-ui/react';
import liveLogo from '../../Assets/Images/liveLogo.png'
import clockIcon from '../../Assets/Images/clockIcon.png'
import './workshop.css'
import moment from 'moment'

const Workshop = ({ workshop }) => {


    return (
        <Box borderRadius="2xl" boxShadow="0px 0px 10px #DCDCDC	" width="470px" height="330px"  className="workshop">

            <Flex mt="25px" mb="5%" pt="6%" className="title">
                <Alert borderLeftColor="#FCC509" borderLeftWidth="12px" color="#072446" status="warning" fontSize="3xl" fontWeight="bolder" fontFamily="Montserrat" variant="left-accent" bg="none">
                    {workshop.title}
                </Alert>

                <center className="liveLogo">
                    <img src={liveLogo} alt="liveSession" width="60px" mr="20px" left="47px" />
                    <Text fontSize="sm" fontWeight="bold">Live</Text>
                </center>
            </Flex>
            <Box ml="28px" pb="8%">
                <Flex className="description">
                    <Text flex="0.9" mb="6%" fontSize="l" fontWeight="bold" fontFamily="Montserrat">
                        {workshop.description}
                    </Text>
                </Flex>

                <Flex justifyContent="space-between" alignItems="center">
                    <Box mr='10px' className="schedule">
                        <img src={clockIcon} alt="clock logo" height="30px !important" width="50px" />
                        <Box className="schedule-date" ml="20px" >
                            <Text fontWeight="600" fontFamily="Montserrat">SCHEDULED FOR</Text>
                            <Text fontSize="xs">{moment(workshop.date).format('dddd DD MMMM YYYY')}</Text>
                            <Text fontSize="xs">{moment(workshop.date).format('HH.mm A')}</Text>
                        </Box>
                    </Box>
                    <Flex mr='30px' mb='7px' className='enroll-now' cursor='pointer' >
                        Enroll now <span style={{ marginLeft: 10 }}>&gt;</span>
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )
}

Workshop.defaultProps = {
    workshop: {
        workshopTitle: "Adobe XD tutorial",
        description: "You'll learn how to use Adobe XD and all the essential features and techniques that someone should know.",
        date: "Thursday 05 august 2021",
        time: "10:30 AM"
    }
}

export default Workshop
