import React from 'react'
import './login.css'
import { useState } from 'react'
import googleLogo from '../../Assets/Images/google.png'
import facebookLogo from '../../Assets/Images/facebook.png'
import linkedLogo from '../../Assets/Images/linkedIn.png'



const Login = () => {

    const [position, setPosition] = useState(true)

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
                            <div className="alternative">
                                <h4>Or login with</h4>
                                <div className="login-options">
                                    <a href="facebook.com"><img src={googleLogo} width="50px" style={{ paddingBottom: '2px' }} /></a>
                                    <a href="facebook.com"><img src={facebookLogo} width="90px" /></a>
                                    <a href="facebook.com"><img src={linkedLogo} width="47px" style={{ paddingBottom: '4px' }} /></a>
                                </div>
                            </div>
                        </form>
                        :
                        <form className="login-form">
                            <h2 >Create Account</h2>
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

                            <div className="alternative alternative1">
                                <h4>Or login with</h4>
                                <div className="login-options">
                                    <a href="facebook.com"><img src={googleLogo} width="50px" style={{ paddingBottom: '2px' }} /></a>
                                    <a href="facebook.com"><img src={facebookLogo} width="90px" /></a>
                                    <a href="facebook.com"><img src={linkedLogo} width="47px" style={{ paddingBottom: '4px' }} /></a>
                                </div>
                            </div>
                        </form>
                }
            </div>
        </div>
    )
}

export default Login
