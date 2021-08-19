import React, { useContext } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import CourseCard from '../../Components/course-card/CourseCard'
import { AuthContext } from '../../Auth/AuthContext'
import './home.css'
import { Heading } from '@chakra-ui/react'

const Home = () => {
    const { auth } = useContext(AuthContext)
    console.log(auth)
    if(auth.isAuthenticated){
        return (
        <div>
            <h1>CONNECTED!!!!</h1>
            <Heading>{auth.user.userName}</Heading>
        </div>
        )
    } else {
        return (
            <div className="body">
                <CourseCard/>
            
            </div>
            
        )

    }
}

export default Home
