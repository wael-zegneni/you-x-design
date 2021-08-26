import React from "react";
import Brackets from "../../Assets/Icons/Brackets";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";

const Testimonial = ({ avatar, name, comment }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"23vw"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"3xl"}
        overflow={"visible"}
        Height={"22vw"}
      >
        <Flex justify={"center"} mt={-12} position='relative' >
          <Brackets/>
          <Avatar
            size={"2xl"}
            src={
              avatar
            }
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Flex spacing={0} align={"center"} mb={5} direction="column"  >
            <Heading fontSize={"1.8vw"} fontWeight={500}>
              {name}
            </Heading>
            <Text color={"#1E1E1E"} mt="15px" fontSize="1vw" fontWeight="500" noOfLines={3}>"{comment}"</Text>
          </Flex>

        </Box>
      </Box>
    </Center>
  );
};

Testimonial.defaultProps = {
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name: 'John Doe',
  comment: 'In this courses I was able to apply all my knowledge using Design Thinking as a guide to connect concepts  .'
}

export default Testimonial;
