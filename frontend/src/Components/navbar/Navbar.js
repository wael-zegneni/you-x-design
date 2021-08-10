import React from 'react'
import logo from '../../Assets/Images/logo.jpg'
import searchLogo from '../../Assets/Images/searchLogo.jpg'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';


import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="youXdesign" />
            <div className="searchBar">
                <input type='text' />
                <img src={searchLogo} alt="searchLogo" />
            </div>
            <ReactLanguageSelect className="langPicker" defaultLanguage="en" languages={["en", "fr", "ar"]} customLabels={{"en": "EN", "fr": "FR", "ar": "AR"}} />
            <h1>Join our community</h1>
        </div>
    )
}

export default Navbar
