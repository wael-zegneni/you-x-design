import React from 'react'
import './login.css'
import { useState } from 'react'
import googleLogo from '../../Assets/Images/google.png'
import facebookLogo from '../../Assets/Images/facebook.png'
import linkedLogo from '../../Assets/Images/linkedIn.png'
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react"

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

    const [position, setPosition] = useState(true)
    const axios = require('axios').default;

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
                        <form className="login-form">
                            <h1>Login</h1>
                            <div className="inputs">
                                <div className="input-trans">
                                    <input className="input" type="email" autoComplete="off" placeholder=" "></input>
                                    <label className="label">Email</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input" type="password" autoComplete="off" placeholder=" "></input>
                                    <label className="label">Password</label>
                                </div>
                            </div>

                            <a href="">Forgot Password ?</a>
                            <br />
                            <div className="button">
                                <button>Login</button>
                            </div>
                            <FormFooter />
                        </form>
                        :
                        <form className="login-form">
                            <Heading pt="4">Create Account</Heading>
                            <div className="inputs-signup">
                                <div className="input-trans">
                                    <input className="input input1" type="text" autoComplete="off" placeholder=" "></input>
                                    <label className="label">Username</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input input1" type="email" autoComplete="off" placeholder=" "></input>
                                    <label className="label">Email</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input input1" type="tel" autoComplete="off" placeholder=" "></input>
                                    <label className="label">Mobile number</label>
                                </div>
                                <div className="input-trans">
                                    <input className="input input1" type="tel" autoComplete="off" placeholder=" "></input>
                                    <label className="label">Password</label>
                                </div>
                            </div>

                           
                            <div className="button button1">
                                <button>Sign Up</button>
                            </div>

                            <FormFooter />
                        </form>
                }
            </div>
        </div>
    )
}

export default Login
