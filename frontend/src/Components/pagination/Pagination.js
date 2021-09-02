import React, { useState } from 'react'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';

const Pagination = () => {

    const [totalPages, settotalPages] = useState(0)
    const [currentPage, setcurrentPage] = useState(0)

    return (
        <Box bg="#F7F9FB">
            {currentPage}
        </Box>
    )
}

export default Pagination
