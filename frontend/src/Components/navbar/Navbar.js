import React, { useContext } from 'react'
import logo from '../../Assets/Images/logo.jpg'
import searchLogo from '../../Assets/Images/searchLogo.jpg'
import Logo from '../../Assets/Icons/Logo';
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import { Link } from 'react-router-dom'
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import ProfileAvatar from '../profile-avatar/ProfileAvatar';
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
    const { auth, signout } = useContext(AuthContext)
    return (
        <Box className="navbar" style={{ zIndex: 10 }}>
            <img src={logo} alt="youXdesign" />
            <div className="searchBar">
                <input type='text' />
                <img src={searchLogo} alt="searchLogo" />
            </div>
            <ProfileAvatar/>
            <div style={{ display: "flex" }}>
                <ReactLanguageSelect className="langPicker" defaultLanguage="en" languages={["en", "fr", "ar"]} customLabels={{ "en": "EN", "fr": "FR", "ar": "AR" }} />
                {auth.isAuthenticated
                    ?
                    <Link to='/' variant="solid" onClick={signout} >Sign out</Link>
                    :
                    <ProfileAvatar/>
                }
            </div>

        </Box>
    )
}

export default Navbar
