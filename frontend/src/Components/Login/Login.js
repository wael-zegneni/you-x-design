import React, { useContext, useEffect } from 'react'
import './login.css'
import { useState } from 'react'
import googleLogo from '../../Assets/Images/google.png'
import facebookLogo from '../../Assets/Images/facebook.png'
import linkedLogo from '../../Assets/Images/linkedIn.png'
import { Avatar, Flex, Heading, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { AuthContext } from '../../Auth/AuthContext'
import { Link } from 'react-router-dom'


const FormFooter = () => (
    <Flex position="absolute" bottom="20px" w="100%" wrap="wrap" left="50%" transform="translate(-50%, 0%)" align="center" justify="center">
        <Text mr="2">Or login with</Text>
        <Flex className="login-options" align="center" wrap="wrap">
            <Avatar _hover={{cursor: "pointer"}} size="sm" src={googleLogo}  name="Google" bg="transparent" mr="2"/>
            <Avatar _hover={{cursor: "pointer"}} size="sm" src={facebookLogo}  name="Facebook" bg="transparent" mr="2"/>
            <Avatar _hover={{cursor: "pointer"}} size="sm" src={linkedLogo}  name="LinkedIn" bg="transparent"/>
        </Flex>
    </Flex>
)

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [position, setPosition] = useState(true)
    const [registreCredentials, setRegisterCredentials] = useState({
        name: "",
        RegisterEmail:"",
        phone:"",
        RegisterPassword:""
    })
    const toast = useToast()
    const { login, auth } = useContext(AuthContext)
    const handleLoginChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleLoginSubmit = async e => {
        e.preventDefault();
        await login(credentials)
    }
    
    const handleRegisterChange = e =>{
        setRegisterCredentials({...registreCredentials, [e.target.name]: e.target.value})
    }
    const handleRegisterSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("api/v1/auth/register", registreCredentials)
            console.log(res.data)
            toast({
                title: "successfull",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        } catch (error) {
            console.log(error)
            console.log(error.response.data.errors)
            error.response.data.errors.map(el => toast({
                title: el.msg,
                status: "error",
                duration: 4000,
                isClosable: true,
            }))
        }
    }

    useEffect(() => {
        if(auth.error){
            toast({
                title: auth.error,
                status: "error",
                duration: 4000,
                isClosable: true,
              })
        }
    }, [auth.error])

    return (
        <div className="container">

            <div className="greeting">
                <div className="welcome">
                    <h1>Join us !</h1>
                    <div className="redirect">
                        <h3>Already have an account?</h3>
                        <h4 onClick={() => setPosition(true)}>Login</h4>
                    </div>
                </div>
                <div className="welcome">
                    <h1>Welcome back !</h1>
                    <div className="redirect">
                        <h3>Don't have an account?</h3>
                        <h4 onClick={() => setPosition(false)}>Sign up</h4>
                    </div>
                </div>
            </div>

            <div className={position ? "box-left" : "box-right"}>
                {
                    position ?
                        <form className="login-form" onSubmit={handleLoginSubmit}>
                            <h1>Login</h1>
                            {auth.isLogginIn && <h1>LOADING... </h1>}
                            <div className="inputs">
                                <div className="input-trans">
                                    <input className="input" type="email" autoComplete="off" placeholder=" " onChange={handleLoginChange} name="email"></input>
                                    <label className="label">Email</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="password" autoComplete="off" placeholder=" " onChange={handleLoginChange} name="password"></input>
                                    <label className="label">Password</label>
                                </div>
                            </div>

                            <a href="">Forgot Password ?</a>
                            <br />
                            <div className="button">
                                <button type="submit">Login</button>
                            </div>
                            <FormFooter />
                        </form>
                        :
                        <form className="login-form" onSubmit={handleRegisterSubmit}>
                            <Heading pt="4">Create Account</Heading>
                            <div className="inputs-signup">
                                <div className="input-trans">
                                    <input className="input input1" type="text" autoComplete="off" placeholder=" " name="name" onChange={handleRegisterChange}></input>
                                    <label className="label">Username</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input input1" type="email" autoComplete="off" placeholder=" " name ="RegisterEmail" onChange={handleRegisterChange}></input>
                                    <label className="label">Email</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input input1" type="tel" autoComplete="off" placeholder=" " name="phone" onChange={handleRegisterChange}></input>
                                    <label className="label">Mobile number</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input input1" type="password" autoComplete="off" placeholder=" " name ="RegisterPassword" onChange={handleRegisterChange}></input>
                                    <label className="label">Password</label>
                                </div>
                            </div>

                           
                            <div className="button button1">
                                <button type="submit">Sign Up</button>
                            </div>

                            <FormFooter />
                        </form>
                        
                }
                <Link to="/"><h1 className="h1">home</h1></Link> 
            </div>
        </div>
    )
}

export default Login
