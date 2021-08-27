import axios from 'axios'
import React, { useState } from 'react'
import { Button, useToast } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
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
        <Box className="join_container">
            <Box className="join_box-right">
                <form className="join_login-form" onSubmit={handleSubmit} enctype="multipart/form-data">
                    <Flex direction="column" justifyContent="space-around" style={{display: page==1? "block" : "none"}}>
                        <Box>
                            <Text fontWeight="bold" fontSize="3xl" color='red' align="center">Enter your</Text>
                            <Text fontWeight="bold" fontSize="3xl" color='red' align="center">personal information</Text>
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
                                <button className="join_button" onClick={(e) => setpage(page + 1)}>
                                    Next <span style={{ marginLeft: 15 }}>{'>'}</span>
                                </button>

                            </Flex>
                        </div>
                    </Flex>


                    <Flex direction="column" justifyContent="center" height="90vh" style={{display: page==2? "block" : "none"}}>
                        <Box mb="5vh">
                            <Text fontWeight="bold" fontSize="3xl" color='red' align="center">Enter your</Text>
                            <Text fontWeight="bold" fontSize="3xl" color='red' align="center">education information</Text>
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
                                <div className="join_input-trans">
                                    <input className="join_input" type="file" accept="application/pdf" autoComplete="off" placeholder=" " onChange={handleChangeFile} name="cv"></input>
                                    <label className="join_label">cv</label>
                                </div>
                                <Flex alignSelf="flex-end" justifyContent="space-around" width="100%" mt="16vh" bg="red">
                                    <button className="join_button"  onClick={(e) => setpage(page - 1)}>
                                        <span style={{ marginRight: 15 }}>{'<'}</span> previous
                                    </button>
                                    <button className="join_button">
                                        Next <span style={{ marginLeft: 15 }}>{'>'}</span>
                                    </button>
                                </Flex>

                            </Flex>
                        </div>


                    </Flex>




                    <h2>Enter your Contact details</h2>
                    <div className="join_input-trans">
                        <input className="join_input" type="email" autoComplete="off" placeholder=" " onChange={handleChange} name="email"></input>
                        <label className="join_label">Email</label>
                    </div>
                    <div className="join_input-trans">
                        <input className="join_input" type="tel" pattern="[0-9]{8}" autoComplete="off" placeholder=" " onChange={handleChange} name="phone"></input>
                        <label className="join_label">Phone Number</label>
                    </div>
                    <h2>Enter your social links</h2>
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

                    <br />
                    <div className="join_button">
                        <button className="join_button" type="submit">Submit</button>
                    </div>



                </form>
            </Box>
        </Box>
    )

}
export default Candidate