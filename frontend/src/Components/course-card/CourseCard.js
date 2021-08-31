import React , {useEffect, useState }from 'react'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import './courseCard.css'
import articleLogo from '../../Assets/Images/articleLogo.png'
import workshopLogo from '../../Assets/Images/workshopLogo.png'
import moment from 'moment'

const CourseCard = ({cardData}) => {
    
    
    const [imgUrl,setimgUrl]=useState()
    useEffect( async () => {
        setimgUrl (cardData.thumbnail.replace(/\\/g, "/"))
        
      }, [])
      
      console.log(imgUrl)
    return (
        <Center py={6}  _hover={{ transform: "translateY(-10px)" }} ml="1vw" mr="1vw" transition="0.3s">
            <Box  width={'24vw'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'xl'} rounded={'xl'} p={6} overflow={'hidden'}>
                <Box h={'18vw'} overflow={"hidden"} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} style={{backgroundImage: `url(${imgUrl})`,backgroundSize:'cover'  , backgroundRepeat:'no-repeat'}}>
                    {/* <img src={cardData.thumbnail} layout={'cover'} alt='img' style={{backgroundSize:"cover"}}  /> */}
                    {/* 'https://lh3.googleusercontent.com/proxy/bZ-B6bR6kqpy0Hl4NTm7ekPwXT96HRE81rHz1WGt1dEJ-ttqyhxTe1SRamNo9IZsF4usF17ER-83ojGXPDHhz1nvJxaeXY7osSIiegT2F7_6ybFjKQESoS8VplVv' */}
                </Box>
                <Stack >
                    <Flex>
                        <Flex direction="column" flex="0.7">
                            <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'l'} fontFamily={'montserrat'}>{cardData.title}</Heading>
                            <Text fontFamily={'montserrat'} mt='5px'>  Published on {moment(cardData.date).format('MMM DD,YYYY')}</Text>
                        </Flex>
                        <Flex flex="0.3" justify="flex-end" >
                            {
                                cardData.type === 'article' ?
                                    <div className="courseType">
                                        <center>
                                            <img src={articleLogo} alt="articleLogo" />
                                            <Text fontFamily={'montserrat'} fontSize={'xs'} mt='5px' className="courseType__text">Article</Text>
                                        </center> 
                                    </div>
                                    :
                                    <div className="courseType">
                                        <center>
                                            <img src={workshopLogo} alt="articleLogo" />
                                            <Text fontFamily={'montserrat'} fontSize={'xs'} mt='5px' className="courseType__text">Workshop</Text>
                                        </center>
                                    </div>
                            }
                        </Flex>
                    </Flex>
                </Stack>
                <Flex justifyContent='space-between' alignItems='flex-end'>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            // src={cardData.instructor.instructorPicture}
                            src = {cardData.instructor.avatar}
                            alt={'Author'}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            {/* <Text fontWeight={600}>{cardData.instructor.instructorName}</Text> */}
                            <Text fontWeight={600}>{cardData.instructor.userName}</Text>
                            {/* <Text color={'gray.500'}>{cardData.instructor.instructorRole}</Text> */}
                            <Text color={'gray.500'}>{cardData.instructor.career}</Text>
                        </Stack>
                    </Stack>

                    <Flex mr='10px' mb='7px' className='view-details' cursor='pointer'>
                        View details <span style={{ marginLeft: 10 }}></span>
                    </Flex>
                </Flex>

            </Box>
        </Center>

    )
}
CourseCard.defaultProps={
    cardData : {
        thumbnailUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        courseName: 'Business and marketing outcomes',
        courseType: 'Workshop',
        studentsCount: 45,
        instructor: {
            instructorName: 'Instructor Name',
            instructorRole: 'UX Designer',
            instructorPicture: 'https://avatars0.githubusercontent.com/u/1164541?v=4'
        }
    }
}

export default CourseCard
