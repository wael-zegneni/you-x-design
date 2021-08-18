// import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import { Router, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import SignUp from './Pages/Sign-up/SignUp'
import {AuthContext} from './Auth/AuthContext'

function App() {
  return (
    <BrowserRouter>
    <AuthContext.Provider value ="test">
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/signup" component={SignUp} />
    </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;