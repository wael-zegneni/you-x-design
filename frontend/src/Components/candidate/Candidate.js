import axios from 'axios'
import React, { useState } from 'react'
import { Button, useToast } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
    Box,
    chakra,
    Container,
    Flex,
    Text
} from '@chakra-ui/react';

import "./candidate.css"


const Candidate = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        job: "",
        age: "",
        cv: "",
        residence: "",
        bio: "",
        school: "",
        degree: "",
        email: "",
        phone: "",
        facebook: "",
        linkedin: "",
        instagram: "",
    })

    const [page, setpage] = useState(1)
    console.log(page)


    const toast = useToast();
    const history = useHistory();

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleChangeFile = e => {
        setCredentials({ ...credentials, cv: e.target.files[0] })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData()
        Object.keys(credentials).map(key => formData.append(key, credentials[key]))
        for (const [key, value] of formData.entries()) {
        }
        try {
            const res = await axios.post('api/v1/candidate', formData)
            toast({
                title: "successfull",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            //history.push('/')

        } catch (error) {
            // error.response.data.errors.map(el => toast({
            //     title: el.msg,
            //     status: "error",
            //     duration: 4000,
            //     isClosable: true,
            // }))
            console.log("hello")

        }


    }

    return (
        <Flex className="join_container">
            <Link to="/">
                <Box position="absolute" top='1em' left='1em' fontSize="3em" cursor="pointer" >
                    <FaChevronLeft fill='white' />
                </Box>
            </Link>

            <Flex display="flex" direction="column" height="100%" width="50%" alignItems="center" justifyContent="center">
                <Text fontSize="5xl" color="#FEFEFE" fontWeight="bold">
                    Join our
                </Text>
                <Text fontSize="5xl" color="#FEFEFE" fontWeight="bold">
                    instructors team!
                </Text>
            </Flex>

            <Box className="join_box-right">
                <form className="join_login-form" onSubmit={handleSubmit} enctype="multipart/form-data">
                    <Flex direction="column" justifyContent="flex-end !important" style={{ display: page == 1 ? "flex" : "none" }} height="83vh" >
                        <Box>
                            <Text fontWeight="bold" fontSize="3xl" mt="5vh" color='#1E1E1E' align="center">Enter your</Text>
                            <Text fontWeight="bold" fontSize="3xl" mb="2vh" color='#1E1E1E' align="center">personal information</Text>
                        </Box>

                        <div className="join_inputs">
                            <Flex direction="column" justifyContent="space-around">
                                <div className="join_input-trans" height="15px">
                                    <input className="join_input" height="15px" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="name"></input>
                                    <label className="join_label">Full Name</label>
                                </div>
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="job"></input>
                                    <label className="join_label">Job Title </label>
                                </div>
                                <div className="join_input-trans">
                                    <input className="join_input" type="number" autoComplete="off" placeholder=" " onChange={handleChange} name="age"></input>
                                    <label className="join_label">Age</label>
                                </div>
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="residence"></input>
                                    <label className="join_label">Residence</label>
                                </div>
                                <div className="join_input-trans">
                                    <textarea style={{ overflow: 'hidden', resize: 'none', paddingTop: 20 }} className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="bio"></textarea>
                                    <label className="join_label">Short Bio</label>
                                </div>
                                <Flex justifyContent="space-around" width="100%" ml="45px" height="max-content">
                                    <Text fontsize="17px">

                                    </Text>
                                    <button style={{ display: 'flex' }} className="join_button" onClick={(e) => setpage(page + 1)}>
                                        Next <span style={{ marginLeft: 15, marginTop: '6px', fontSize: '14px' }}><FaChevronRight /></span>
                                    </button>
                                </Flex>


                            </Flex>
                        </div>
                    </Flex>


                    <Flex direction="column" justifyContent="flex-end !important" style={{ display: page == 2 ? "flex" : "none" }} height="80vh"  >
                        <Box mb="5vh">
                            <Text fontWeight="bold" fontSize="3xl" mt="2vh" color='#1E1E1E' align="center">Enter your</Text>
                            <Text fontWeight="bold" fontSize="3xl" mb="2vh" color='#1E1E1E' align="center">education information</Text>
                        </Box>
                        <div className="join_inputs">
                            <Flex direction="column" justifyContent="space-around">
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="school"></input>
                                    <label className="join_label">School</label>
                                </div>
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="degree"></input>
                                    <label className="join_label">Degree</label>
                                </div>
                                <Text>
                                    <input className='join_upload_input' type="file" style={{ position: 'relative', top: '26px', width: '227px', left: '-70px', cursor: 'pointer', opacity: '0' }} position="relative" top="15px" accept="application/pdf" autoComplete="off" onChange={handleChangeFile} name="cv" />
                                    <Text className="join_upload_text" ml="6%" fontSize="l" width='max-content' fontWeight="bold" color='#2167b8' _hover={{ color: '#707070' }} >Upload Your CV</Text>
                                </Text>
                                <Flex alignSelf="flex-end" justifyContent="space-around" width="100%" mt="15.4vh">
                                    <button className="join_button" style={{ display: 'flex' }} onClick={(e) => setpage(page - 1)}>
                                        <span style={{ marginRight: 15, marginTop: '6px', fontSize: '14px' }}><FaChevronLeft /></span> previous
                                    </button>
                                    <button style={{ display: 'flex' }} className="join_button" onClick={(e) => setpage(page + 1)}>
                                        Next <span style={{ marginLeft: 15, marginTop: '6px', fontSize: '14px' }}><FaChevronRight /></span>
                                    </button>
                                </Flex>

                            </Flex>
                        </div>
                    </Flex>


                    <Flex direction="column" justifyContent="flex-end !important" style={{ display: page == 3 ? "flex" : "none" }} height="80vh" >
                        <Box>
                            <Box mb="5vh">
                                <Text fontWeight="bold" fontSize="3xl" mt="2vh" color='#1E1E1E' align="center">Enter your</Text>
                                <Text fontWeight="bold" fontSize="3xl" mb="2vh" color='r#1E1E1Eed' align="center">Contact details</Text>
                            </Box>
                            <div className="join_inputs">
                                <Flex direction="column" justifyContent="space-around">
                                    <div className="join_input-trans">
                                        <input className="join_input" type="email" autoComplete="off" placeholder=" " onChange={handleChange} name="email"></input>
                                        <label className="join_label">Email</label>
                                    </div>
                                    <div className="join_input-trans">
                                        <input className="join_input" type="tel" pattern="[0-9]{8}" autoComplete="off" placeholder=" " onChange={handleChange} name="phone"></input>
                                        <label className="join_label">Phone Number</label>
                                    </div>

                                </Flex>
                            </div>
                        </Box>
                        <Flex justifyContent="space-around" width="100%" mt="24vh" >
                            <button className="join_button" style={{ display: 'flex' }} onClick={(e) => setpage(page - 1)}>
                                <span style={{ marginRight: 15, marginTop: '6px', fontSize: '14px' }}><FaChevronLeft /></span> previous
                            </button>
                            <button style={{ display: 'flex' }} className="join_button" onClick={(e) => setpage(page + 1)}>
                                Next <span style={{ marginLeft: 15, marginTop: '6px', fontSize: '14px' }}><FaChevronRight /></span>
                            </button>
                        </Flex>
                    </Flex>


                    <Flex direction="column" justifyContent="flex-end !important" style={{ display: page == 4 ? "flex" : "none" }} height="80vh" >
                        <Box>
                            <Box mb="5vh">
                                <Text fontWeight="bold" fontSize="3xl" mt="2vh" color='#1E1E1E' align="center">Enter your</Text>
                                <Text fontWeight="bold" fontSize="3xl" mb="2vh" color='#1E1E1E' align="center">social links</Text>
                            </Box>
                            <div className="join_inputs">
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="facebook"></input>
                                    <label className="join_label">Facebook account</label>
                                </div>
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="linkedin"></input>
                                    <label className="join_label">LinkedIn account</label>
                                </div>
                                <div className="join_input-trans">
                                    <input className="join_input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="instagram"></input>
                                    <label className="join_label">Instagram account</label>
                                </div>
                            </div>
                        </Box>
                        <Flex justifyContent="space-around" width="100%" mt="16vh" >
                            <button className="join_button" style={{ display: 'flex' }} onClick={(e) => setpage(page - 1)}>
                                <span style={{ marginRight: 15, marginTop: '6px', fontSize: '14px' }}><FaChevronLeft /></span> previous
                            </button>
                            <button type="submit" className="join_button" >
                                submit
                            </button>
                        </Flex>
                    </Flex>
                </form>
            </Box>
        </Flex>
    )

}
export default Candidate