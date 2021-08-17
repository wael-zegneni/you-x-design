import Workshop from './Components/workshop/Workshop';
import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      {/* <Container maxW="8xl">
        <SimpleGrid columns={{md: 2, lg: 3}} spacing="40px">
          <Workshop/>
        </SimpleGrid>

      </Container> */}
      <Login />
    </div>
  );
}

export default App;
