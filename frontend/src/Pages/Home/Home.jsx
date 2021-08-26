import React, { useContext } from "react";
import { useState, useEffect } from "react";
import WeAreUnique from "../../Components/we-are-unique/WeAreUnique";
import Testimonial from "../../Components/testimonial/Testimonial";
import InstructorCard from "../../Components/instructor-card/InstructorCard";
import Footer from "../../Components/footer/Footer";
import TestimonyList from "../../Components/testimony-list/TestimonyList";
import JoinCommunityCard from "../../Components/join-community-card/JoinCommunityCard";
import InstructorSwiper from "../../Components/instructor-swiper/InstructorSwiper";
import WorkshopSwiper from "../../Components/workshops-swiper/WorkshopSwiper";
import { AuthContext } from "../../Auth/AuthContext";
import FilterBy from "../../Components/filter-by/FilterBy";
import LiveSession from "../../Components/live-session/LiveSession";
import CourseCardList from "../../Components/course-card-list/CourseCardList";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [workshopList, setworkshopList] = useState([])
  const [liveSession, setliveSession] = useState()
  const [courseList, setcourseList] = useState([])
  const [InstructorList, setInstructorList] = useState([])

useEffect(async () => {
  const res = await axios.get('api/v1/workshop/')
  console.log (res.data)
  setworkshopList(res.data)
}, [])
useEffect(async () => {
  const res = await axios.get('api/v1/workshop/livesession')
  console.log (res.data[0])
  setliveSession(res.data[0])

}, [])
useEffect(async () => {
  const res = await axios.get('api/v1/course/')
  console.log(res.data)
  setcourseList(res.data)
}, [])
useEffect(async () => {
  const res = await axios.get('api/v1/user/instructors/')
  console.log(res.data)
  setInstructorList(res.data)
}, [])

  const { auth } = useContext(AuthContext);
  console.log(auth);
  if (auth.isAuthenticated) {
    return (
      <div>
        <h1>CONNECTED!!!!</h1>
        <Heading>{auth.user.userName}</Heading>
      </div>
    );
  } else {
    return (
      <div>
        <WeAreUnique />
        <Box ml="2.5vw">
          <Flex justify="space-between" mt="3em">
            <LiveSession liveSession={liveSession} />
            <WorkshopSwiper workshopList={workshopList} />
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" my="20px">
            <Text
              color="#072446"
              fontSize="3xl"
              fontWeight="bolder"
              ml="1vw"
              mb="15px"
              mt="1em"
            >
              Our Most Popular Courses
            </Text>
            <FilterBy />
          </Flex>
          <CourseCardList courseList={courseList} />
        </Box>
        <Text
          color="#072446"
          fontSize="3xl"
          fontWeight="bolder"
          ml="3.5vw"
          mb="30px"
          mt="3em"
        >
          Our Instructors
        </Text>
        <InstructorSwiper  InstructorList = { InstructorList }/>
        <Text
          color="#072446"
          fontSize="3xl"
          fontWeight="bolder"
          ml="3.5vw"
          mb="30px"
          mt="3em"
        >
          Join our community
        </Text>
        <Flex justify="space-around">
          <JoinCommunityCard
            heading={"As Student"}
            role={"student"}
            text={"Get started with your immersive learning experience"}
          />
          <JoinCommunityCard
            heading={"As Instructor"}
            role={"instructor"}
            text={"become a part of our instructor team"}
          />
        </Flex>
        <Text
          color="#072446"
          fontSize="3xl"
          fontWeight="bolder"
          ml="3.5vw"
          mb="3em"
          mt="3em"
        >
          Testimonials
        </Text>
        <TestimonyList/>
        <Footer />
      </div>
    );
  }
};

export default Home;
