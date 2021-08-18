import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import CourseCard from '../../Components/course-card/CourseCard'
import './home.css'

const Home = () => {
    return (
        <div className="body">
            <Navbar/>
            <CourseCard/>
          
        </div>
        
    )
}

export default Home
