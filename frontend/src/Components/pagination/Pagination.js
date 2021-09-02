import React, { useState } from 'react'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';

const Pagination = ({response, getCourses}) => {

    // const [currentPage, setcurrentPage] = useState(1)
    // const [pageNumbers, setpageNumbers] = useState([1,2,3])

    // console.log(currentPage)

   
    // const handlePlus = () =>{
    //     if(currentPage == 1){
    //         setcurrentPage(currentPage + 1)
    //         setpageNumbers([currentPage , currentPage + 1, currentPage + 2])
            
    //     }
    //     else{
    //         setcurrentPage(currentPage + 1)
    //         setpageNumbers([currentPage - 1 , currentPage , currentPage + 1])
    //     }
        
    // }

    // const handleMinus = () =>{
    //     setcurrentPage(currentPage - 1)
    //     setpageNumbers([currentPage - 1, currentPage, currentPage + 1])
    // }

    return (
        response && <Box bg="#F7F9FB" fontSize="4xl" textAlign="center">
                {response.previous && <button onClick={() => getCourses(response.previous.page)}>Prev</button>}
                {
                    Array.apply(null, {length: response.total}).map((_, index) => <button>{index + 1}</button>)
                }
                {response.next && <button onClick={() => getCourses(response.next.page)}>Next</button>}
        </Box>
    )
}

export default Pagination
