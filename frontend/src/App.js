// import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import { Router, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import SignUp from './Pages/Sign-up/SignUp'
import {AuthContext} from './Auth/AuthContext'
import { useState } from "react";

function App() {
  const [userCredentials,setUserCredentials]= useState({
    user :'',
    token :'',
  })
  return (
    <BrowserRouter>
    <AuthContext.Provider value ={{userCredentials, setUserCredentials}}>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/signup" component={SignUp} />
    </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;