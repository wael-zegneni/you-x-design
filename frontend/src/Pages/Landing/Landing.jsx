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
import CourseSwiper from "../../Components/course-swiper/CourseSwiper";
import { AuthContext } from "../../Auth/AuthContext";
import FilterBy from "../../Components/filter-by/FilterBy";
import LiveSession from "../../Components/live-session/LiveSession";
import CourseCardList from "../../Components/course-card-list/CourseCardList";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import Layout from "../../Components/layout/Layout";
import Welcome from "../../Components/welcome/Welcome";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const [workshopList, setworkshopList] = useState([]);
  const [liveSession, setliveSession] = useState();
  const [courseList, setcourseList] = useState([]);
  const [InstructorList, setInstructorList] = useState([]);
  const [testimonialList, settestimonialList] = useState([]);
  const { auth } = useContext(AuthContext);

  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get("api/v1/workshop/");
    console.log(res.data);
    setworkshopList(res.data);
  }, []);
  // useEffect(async () => {
  //   const res = await axios.get('api/v1/workshop/livesession')
  //   console.log (res.data[0])
  //   setliveSession(res.data[0])

  // }, [])
  useEffect(() => {
    if (!auth.isAuthenticated) {
      history.push("/login");
    }
  }, []);
  useEffect(async () => {
    const res = await axios.get("api/v1/workshop/");
    console.log(res.data);
    const res2 = await axios.get("api/v1/workshop/livesession");
    console.log(res2.data[0]);
    let filtered = await res.data.filter(function (el) {
      return el._id != res2.data[0]._id;
    });
    console.log(filtered);
    setliveSession(res2.data[0]);
    setworkshopList(filtered);
    // const res = await axios.get('api/v1/workshop/')
    // console.log (res.data)
    // setworkshopList (res.data)
  }, []);

  useEffect(async () => {
    const res = await axios.get("api/v1/course/");
    console.log(res.data);
    setcourseList(res.data);
  }, []);
  useEffect(async () => {
    const res = await axios.get("api/v1/user/instructors/");
    console.log(res.data);
    setInstructorList(res.data);
  }, []);
  useEffect(async () => {
    const res = await axios.get("api/v1/comment/testimonials");
    console.log(" testimonials" + res.data);
    settestimonialList(res.data);
  }, []);
  console.log(auth);

  return (
    <Layout>
      <Welcome />
      <Box ml="2.2vw">
        <Flex justify="space-around" mt="3.2em">
          <LiveSession liveSession={liveSession} />
          <WorkshopSwiper workshopList={workshopList} />
        </Flex>
        <CourseSwiper courseList={courseList} />
        <Flex alignItems="center" justifyContent="space-between" my="20px" mt="3em">
          <Text
            color="#072446"
            fontSize="3xl"
            fontWeight="bolder"
            ml="1vw"
            mt="1em"
          >
            Our Most Popular Courses
          </Text>
          <FilterBy />
        </Flex>
        <CourseCardList courseList={courseList} />
        <Text
            color="#072446"
            fontSize="3xl"
            fontWeight="bolder"
            ml="1vw"
            mb="30px"
            mt="3em"
          >
            Our Instructors
          </Text>
          <InstructorSwiper InstructorList={InstructorList} />
      </Box>
      <Footer style={{zIndex: 999, width:'100%'}} />
    </Layout>
  );
};

export default Landing;
