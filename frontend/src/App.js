// import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import { Router, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import SignUp from './Pages/Sign-up/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;