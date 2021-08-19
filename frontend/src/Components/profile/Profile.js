import { Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthContext'


const Profile=() => {
    const { auth } = useContext(AuthContext)

    return (
        <div>
            <h1> Profile</h1>   
            <Heading>{auth.user.userName}</Heading>
        </div>
    )
}

export default Profile