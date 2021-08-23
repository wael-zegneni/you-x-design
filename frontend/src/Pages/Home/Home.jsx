import React, { useContext } from "react";
import WeAreUnique from "../../Components/we-are-unique/WeAreUnique";
import WorkshopSwiper from "../../Components/workshops-swiper/WorkshopSwiper";
import { AuthContext } from "../../Auth/AuthContext";
import FilterBy from "../../Components/filter-by/FilterBy";
import LiveSession from "../../Components/live-session/LiveSession";
import CourseCardList from "../../Components/course-card-list/CourseCardList";
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import "./home.css";

const Home = () => {
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
      <div >
        <WeAreUnique />
        <Box ml="2.5vw">
          <Flex justify="space-between" mt="3em">
            <LiveSession />
            <WorkshopSwiper  />
          </Flex>
          <Flex>
            <Text
              color="#072446"
              fontSize="3xl"
              fontWeight="bolder"
              ml="1vw"
              mb="30px"
            >
              Our Most Popular Courses
            </Text>
            <FilterBy/>
          </Flex>
          <CourseCardList />
        </Box>
      </div>
    );
  }
};

export default Home;
