// import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import { Router, Route, BrowserRouter, Switch, useLocation } from "react-router-dom";
import Home from './Pages/Home/Home';
import AuthContextProvider from './Auth/AuthContext'
import Navbar from "./Components/navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Pages/Profile/Profile";
import Login from "./Components/login/Login";
import Landing from "./Pages/Landing/Landing";
import { useContext, useEffect } from "react";
import { AuthContext } from './Auth/AuthContext';
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import Candidate from "./Components/candidate/Candidate";
import AllCourses from "./Pages/All-courses/AllCourses";
import Saved from "./Pages/Saved-courses/Saved"

function App() {
  const {pathname} = useLocation()
  const { loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  }, [])

  return (
      <>

        {/* {(pathname.includes("login") || pathname.includes("candidate")) || <Navbar/> }  */}
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/candidate" component={Candidate} />
          <PrivateRoute exact path ="/dashboard" component={Landing} />
          <Route exact path="/allcourses" component={AllCourses}/>
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/course" component={CourseDetails}/>
          <PrivateRoute exact path="/savedcourses" component={Saved}/>
        </Switch>
      </>
  );
}

export default App;