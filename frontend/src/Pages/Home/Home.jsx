import React, { useContext } from "react";
import WeAreUnique from "../../Components/we-are-unique/WeAreUnique";
import WorkshopSwiper from "../../Components/workshops-swiper/WorkshopSwiper";
import { AuthContext } from "../../Auth/AuthContext"
import LiveSession from "../../Components/live-session/LiveSession";
import CourseCardList from "../../Components/course-card-list/CourseCardList";
import {
    Heading,
    Flex,
} from "@chakra-ui/react";
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
            <div>
                <WeAreUnique  />
                <Flex justify="space-between" mt="3em">
                    <LiveSession />
                    <WorkshopSwiper   />
                </Flex>
                <CourseCardList/>
            </div>
        );
    }
};

export default Home;
