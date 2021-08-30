import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Flex,
    Text,
} from "@chakra-ui/react";

import Testimonial from '../testimonial/Testimonial';


const TestimonyList = ({ testimonyList }) => {
    console.log(testimonyList)
    return (
        <Flex justifyContent="space-evenly">
            {
                testimonyList.map((el) => (
                    <Testimonial avatar={el.user.avatar} name={el.user.userName} comment={el.content} />
                ))
            }
        </Flex>
    )
}

TestimonyList.defaultProps = {
    testimonyList: [{
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'John Doe',
        comment: 'In this courses I was able to apply all my knowledge using Design Thinking as a guide to connect concepts .'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'John Doe',
        comment: 'In this courses I was able to apply all my knowledge using Design Thinking as a guide to connect concepts .'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'John Doe',
        comment: 'In this courses I was able to apply all my knowledge using Design Thinking as a guide to connect concepts .'
    }]
}

export default TestimonyList
