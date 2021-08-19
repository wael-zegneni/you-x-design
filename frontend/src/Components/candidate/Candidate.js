import axios from 'axios'
import React, {useState} from 'react'
import {useToast } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'


const Candidate = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        job: "",
        age: "",
        residence: "",
        bio: "",
        school: "",
        degree: "",
        email: "",
        phone:"",
        facebook: "",
        linkedin: "",
        instagram: "",
    })

    const handleChange  = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const toast = useToast();
    const history = useHistory();
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('api/v1/candidate',credentials)
            console.log(res.data)
            toast({
                title: "successfull",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            history.push('/')
            
        } catch (error) {
            error.response.data.errors.map(el => toast({
                title: el.msg,
                status: "error",
                duration: 4000,
                isClosable: true,
            }))
        }
         

    }

    return (
        <div className="container">
        <div className="box-right">
        <form className="login-form" onSubmit={handleSubmit}>
                            <h1>Enter your personal information</h1>                       
                            <div className="inputs">
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="name"></input>
                                    <label className="label">Full Name</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="job"></input>
                                    <label className="label">Job Title </label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="age"></input>
                                    <label className="label">Age</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="residence"></input>
                                    <label className="label">Residence</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="bio"></input>
                                    <label className="label">Short Bio</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="school"></input>
                                    <label className="label">School</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="degree"></input>
                                    <label className="label">Degree</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="email" autoComplete="off" placeholder=" " onChange={handleChange} name="email"></input>
                                    <label className="label">Email</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="tel" autoComplete="off" placeholder=" " onChange={handleChange} name="phone"></input>
                                    <label className="label">Phone Number</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="facebook"></input>
                                    <label className="label">Facebook account</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="linkedin"></input>
                                    <label className="label">LinkedIn account</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="text" autoComplete="off" placeholder=" " onChange={handleChange} name="instagram"></input>
                                    <label className="label">Instagram account</label>
                                </div>
                            </div>                           
                            <br />
                            <div className="button">
                                <button type="submit">Submit</button>
                            </div>
                            
                        </form>
                        </div>
                        </div>
    )
            
}
export default Candidate