import React from 'react'
import { Box, Flex, Text, Alert, Stack, Avatar } from '@chakra-ui/react';
import liveLogo from '../../Assets/Images/liveLogo.png'
import clockIcon from '../../Assets/Images/clockIcon.png'
import './liveSession.css'


const LiveSession = ({ liveSession }) => {


    return (
        <div style={{marginLeft:"2vw"}}>
            <Text color="#072446" fontSize="3xl" fontWeight="bolder" ml="22px" mb="20px">
                Live Session
            </Text>
            <Box borderRadius="2xl" boxShadow="0px 0px 10px #DCDCDC	" height="400px" width="44vw" className="workshop" ml="20px">

                <Box height="17%" display="flex" justifyContent="flex-end" alignItems="flex-end" bg="#FCC509" borderTopLeftRadius="2xl" borderTopRightRadius="2xl">
                    <center className="liveLogo">
                        <img src={liveLogo} alt="liveSession" width="50px" mr="20px" left="47px" />
                        <Text fontSize="sm" fontWeight="bold">Live</Text>
                    </center>
                </Box>

                <Flex className="title">
                    <Text ml="28px" pb="10px" pt="12px" color="#072446" fontSize="4xl" fontWeight="bolder" fontFamily="Montserrat">
                        {liveSession.workshopTitle}
                    </Text>
                </Flex>

                <Box ml="28px" pb="9%">
                    <Flex className="description" mb="-25px">
                        <Text fontSize="l" fontWeight="bold" fontFamily="Montserrat" lineHeight="97%">
                            {liveSession.description}
                        </Text>
                    </Flex>

                    <Flex justifyContent="space-between" alignItems="center">
                        <Box mr='10px' className="schedule">
                            <img src={clockIcon} alt="clock logo" height="30px !important" width="50px" />
                            <Box className="schedule-date" ml="20px" mb="5px">
                                <Text fontWeight="600" fontFamily="Montserrat">SCHEDULED FOR</Text>
                                <Text fontSize="xs">{liveSession.date}</Text>
                                <Text fontSize="xs">{liveSession.time}</Text>
                            </Box>
                        </Box>
                        <Box  className="schedule" mr="20px">
                            <img src={clockIcon} alt="clock logo" height="30px !important" width="50px" />
                            <Box className="schedule-date" ml="20px" >
                                <Text fontWeight="600" fontFamily="Montserrat">ENROLMENT ENDS IN</Text>
                                <Text fontSize="xs">{liveSession.date}</Text>
                            </Box>
                        </Box>
                    </Flex>
                   
                        <Flex justifyContent='space-between  ' alignItems='flex-end' mt="10px">
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Avatar
                                    src={liveSession.instructor.instructorPicture}
                                    alt={'Author'}
                                />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>{liveSession.instructor.instructorName}</Text>
                                    <Text color={'gray.500'}>{liveSession.instructor.instructorRole}</Text>
                                </Stack>
                            </Stack>

                            <Flex mr='30px' mb='7px' className='enroll-now' cursor='pointer' >
                                Enroll now <span style={{ marginLeft: 10 }}>&gt;</span>
                            </Flex>
                        </Flex>

                </Box>
            </Box>
        </div>


    )
}

LiveSession.defaultProps = {
    liveSession: {
        workshopTitle: "Adobe XD tutorial",
        description: "You'll explore the process of UX design and learn how to empathize with users and understand their pain points.",
        date: "Thursday 05 august 2021",
        time: "10:30 AM",
        instructor: {
            instructorPicture: 'https://www.villard.biz/assets/Uploads/projects/portrait-o.jpg',
            instructorName: 'Instructor name',
            instructorRole: 'UX Designer',
        }
    }
}

export default LiveSession
