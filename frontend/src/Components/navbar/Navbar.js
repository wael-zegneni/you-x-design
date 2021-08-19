import React, { useContext } from 'react'
import logo from '../../Assets/Images/logo.jpg'
import searchLogo from '../../Assets/Images/searchLogo.jpg'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthContext'


import './navbar.css'
import { Button } from '@chakra-ui/react';

const Navbar = () => {
    const { auth, signout } = useContext(AuthContext)
    console.log(auth)
    return (
        <div className="navbar">
            <img src={logo} alt="youXdesign" />
            <div className="searchBar">
                <input type='text' />
                <img src={searchLogo} alt="searchLogo" />
            </div>
            <ReactLanguageSelect className="langPicker" defaultLanguage="en" languages={["en", "fr", "ar"]} customLabels={{"en": "EN", "fr": "FR", "ar": "AR"}} />
            {auth.isAuthenticated ? <Button variant="solid" onClick={signout}>Sign out</Button> : <Link to="/login"><h1 className="h1">Join our community</h1></Link> }
        </div>
    )
}

export default Navbar
