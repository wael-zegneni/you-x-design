import React, { useContext } from "react";
import {
    Heading,
    Flex,
    Text,
    Box,
    Grid,
    chakra,
    useColorModeValue,
    VisuallyHidden,
    GridItem,
    WrapItem,
    Avatar,
    Stack
} from "@chakra-ui/react";
import Layout from "../../Components/layout/Layout";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import { AuthContext } from "../../Auth/AuthContext";
import { useToast } from "@chakra-ui/react"
import axios from 'axios'
import { BiBookmark } from 'react-icons/bi'
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Instructor from "../../Assets/Icons/Instructor";


const SocialButton = ({ children, label, href, }) => {
    return (
        <chakra.button
            bg="#072446"
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const InstructorDescription = ({ instructor }) => {
    return (
        <Flex px="100" bg="#FCFCFC" justifyContent="space-between" flexWrap="wrap" py='5'>
            <Flex flex="0.4" borderRadius="15px">
                <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Box ml="15px">
                    <Text fontSize="1.6vw" fontWeight="bold" >{instructor.name}</Text>
                    <Text fontSize="1.1vw" fontWeight="600">{instructor.role}, {instructor.residence}</Text>
                    <Text fontSize="1vw" color="#707070">Member since {instructor.join_year}</Text>
                    <Stack direction={'row'} spacing={6} mt="10px">
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaFacebook fill="white" />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaLinkedin fill="white" />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram fill="white" />
                        </SocialButton>
                    </Stack>
                </Box>
            </Flex>
            <Box flex="0.5" mt="3" >
                <Text flex='0.9' fontSize="1.1vw" lineHeight="1.4" fontWeight="600">
                    {instructor.bio}
                </Text>
            </Box>
        </Flex>
    )
}

export default InstructorDescription
