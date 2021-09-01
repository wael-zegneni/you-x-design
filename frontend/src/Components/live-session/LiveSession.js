import React from 'react'
import { Box, Flex, Text, Alert, Stack, Avatar } from '@chakra-ui/react';
import liveLogo from '../../Assets/Images/liveLogo.png'
import clockIcon from '../../Assets/Images/clockIcon.png'
import enrollIcon from '../../Assets/Images/icon-enrollement.png'
import './liveSession.css'
import { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import moment from 'moment'


const LiveSession = ({ liveSession }) => {

    const DateDifference = (date1, date2) => {
        const diff = Math.abs(date2 - date1);

        const diffDays = Math.trunc(diff / (1000 * 60 * 60 * 24));
        const diffDaysMs = diffDays *1000*60*60*24 
        // const diffHoursMs = diffTime - diffDaysMs
        const diffHours = Math.trunc ((diff - (diffDaysMs)) / (1000*60*60))
        const diffHoursMs = (diffHours*1000*60*60) + diffDaysMs
        const diffMinMs = diff-diffHoursMs
        const diffMin = Math.ceil(diffMinMs /(1000*60))
        
        return {
            days : diffDays ,
            hours : diffHours,
            minutes : diffMin
        }
    }

    // const difference = DateDifference(liveSession.difference)
    console.log(Date.now())
    console.log(liveSession.endDate)
    console.log(liveSession.date)
    console.log(moment(Date.now()).toDate())
    console.log(moment(liveSession.endDate).toDate())
    console.log(moment(liveSession.date).toDate())
    const difference = DateDifference(moment(Date.now()).toDate(), moment(liveSession.endDate).toDate())
    // console.log(diffDays + " days");
    // console.log(current + "Curren date")
    // console.log(endDate + " end date")
    // console.log(diffHoursMs + "diff hours ms")
    // console.log(diffHours + "diff hours")
    // console.log(diffMinMs + "diff min ms")
    // console.log(diffTime + " milliseconds");
    // console.log(diffHoursMs)
    // console.log(diffMinMs)
    // console.log(diffMin)
    
    const { auth, signout } = useContext(AuthContext)
    return (
        <Box>
            <Text color="#072446"   fontSize="3xl" fontWeight="bolder"  mb="30px">
                Live Session
            </Text>
            <Box borderRadius="2xl" boxShadow="0px 0px 10px #DCDCDC	" ml='3px' height="400px" width={auth.isAuthenticated? '37vw' : '40vw'} className="workshop" >

                <Box height="17%" display="flex" justifyContent="flex-end" alignItems="flex-end" bg="#FCC509" borderTopLeftRadius="2xl" borderTopRightRadius="2xl">
                    <center className="liveLogo">
                        <img src={liveLogo} alt="liveSession" width="45px" mr="20px" left="47px" />
                        <Text fontSize="xs" fontWeight="bold">Live</Text>
                    </center>
                </Box>

                <Flex className="title">
                    <Text ml="28px" pb="10px" pt="12px" color="#072446" fontSize="3xl" fontWeight="bolder" fontFamily="Montserrat">
                        {liveSession.title}
                    </Text>
                </Flex>

                <Box ml="28px" pb="9%">
                    <Flex className="description" mb="-25px">
                        <Text fontSize="md" fontWeight="bold" fontFamily="Montserrat" lineHeight="97%">
                            {liveSession.description}
                        </Text>
                    </Flex>

                    <Flex justifyContent="space-between" alignItems="center" pt="20px">
                        <Box mr='10px' className="schedule">
                            <img src={clockIcon} alt="clock logo"  style={{objectFit:'cover'}}  />
                            <Box className="schedule-date" ml="20px" mb="5px">
                                <Text fontSize="sm" fontWeight="bolder" fontFamily="Montserrat">SCHEDULED FOR</Text>
                                <Text fontSize="xs">{moment(liveSession.date).format('dddd DD MMMM YYYY')}</Text>
                                <Text fontSize="xs">{moment(liveSession.date).format('HH.mm A')}</Text>
                            </Box>
                        </Box>
                        <Box  className="schedule" mr="20px">
                            <img src={enrollIcon} alt="clock logo" style={{objectFit:'cover'}} />
                            <Box className="schedule-date" ml="20px" >
                                <Text fontSize="sm" fontWeight="bolder" fontFamily="Montserrat">ENROLMENT ENDS IN</Text>
                                <Text fontSize="xs"> {difference.days} Days   {difference.hours} hours    {difference.minutes} minutes</Text>
                            </Box>
                        </Box>
                    </Flex>
                   
                        <Flex justifyContent='space-between  ' alignItems='flex-end' mt="10px">
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Avatar
                                    src={liveSession.instructor.avatar}
                                    alt={'Author'}
                                />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>{liveSession.instructor.userName}</Text>
                                    <Text color={'gray.500'}>{liveSession.instructor.career}</Text>
                                </Stack>
                            </Stack>

                            <Flex mr='30px' mb='7px' className='enroll-now' cursor='pointer' >
                                Enroll now <span style={{ marginLeft: 10 }}>&gt;</span>
                            </Flex>
                        </Flex>

                </Box>
            </Box>
        </Box>


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
