import React, { useState } from 'react'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';

const Pagination = ({response, getCourses}) => {
    console.log(Array.apply(null, {length: response.total}).slice(response.page-1, response.page + 1) )

    const [currentPage, setcurrentPage] = useState(1)

    return (
        response && <Box bg="#F7F9FB" fontSize="4xl" textAlign="center">
                {response.previous && <button onClick={() => getCourses(response.previous.page)}>-</button>}
                {
                    Array.apply(null, {length: response.total}).map((_, index) => <button>{index + 1}</button>)
                }
                {response.next && <button onClick={() => getCourses(response.next.page)}>+</button>}
        </Box>
    )
}

export default Pagination
