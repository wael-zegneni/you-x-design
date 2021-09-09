import React, { useContext } from 'react'
import logo from '../../Assets/Images/logo.jpg'
import searchLogo from '../../Assets/Images/searchLogo.jpg'
import Logo from '../../Assets/Icons/Logo';
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import { Link } from 'react-router-dom'
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import ProfileAvatar from '../profile-avatar/ProfileAvatar';
import SearchInput from '../search-input/SearchInput';
import { BsPersonFill } from 'react-icons/bs'
import { BiLogOutCircle } from 'react-icons/bi'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react"
import { AuthContext } from '../../Auth/AuthContext'


import './navbar.css'
import { Button } from '@chakra-ui/react';

const Navbar = () => {
    console.log("not working ???")
    const { auth, signout } = useContext(AuthContext)
    return (
        <Box className="navbar" width="100%" py="20px" position='relative' style={{ zIndex: 10 }}>
            <Link to = '/'>
            <img src={logo} alt="youXdesign" />
            </Link>
            <SearchInput/>
            <div style={{ display: "flex", alignItems: "center", alignSelf:'flex-end', marginLeft:"3em" }}>
                <ReactLanguageSelect className="langPicker" defaultLanguage="en" languages={["en", "fr", "ar"]} customLabels={{ "en": "EN", "fr": "FR", "ar": "AR" }} />
                {auth.isAuthenticated
                    ?
                    <ProfileAvatar avatar = {auth.user.avatar}/>
                    :
                    <Link to ='/login'>
                    <Text color="white" bg="#FCC509" fontSize="sm" px=" 25px" _hover={{transform:'scale(1.03)', transition:"0.2s"}} py="13px" cursor="pointer" borderRadius="3xl" fontWeight="bolder" textAlign="center" >Join our community</Text>
                    </Link>  
                } 
            </div>

        </Box>
    )
}

export default Navbar
