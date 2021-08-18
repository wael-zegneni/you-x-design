// import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import { Router, Route, BrowserRouter, Switch, useLocation } from "react-router-dom";
import Home from './Pages/Home/Home';
import SignUp from './Pages/Sign-up/SignUp'
import AuthContextProvider from './Auth/AuthContext'
import Navbar from "./Components/navbar/Navbar";

function App() {
  const {pathname} = useLocation()
  return (
      <AuthContextProvider>
        {!pathname.includes("login") && <Navbar/>}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignUp} />
        </Switch>
      </AuthContextProvider>
  );
}

export default App;