// import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import { Router, Route, BrowserRouter, Switch, useLocation } from "react-router-dom";
import Home from './Pages/Home/Home';
import AuthContextProvider from './Auth/AuthContext'
import Navbar from "./Components/navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Components/profile/Profile";
import Login from "./Components/login/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from './Auth/AuthContext';
import Candidate from "./Components/candidate/Candidate";

function App() {
  const {pathname} = useLocation()
  const { loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  }, [])

  return (
      <>

        {pathname.includes("login") || <Navbar/> }
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/candidate" component={Candidate} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </>
  );
}

export default App;