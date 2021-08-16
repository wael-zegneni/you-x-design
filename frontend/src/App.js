import Home from "./Pages/Home/Home"; 
import CourseCard from "./Components/course-card/CourseCard";
import {Container, Flex, HStack, SimpleGrid} from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <Container maxW="8xl">
        <SimpleGrid columns={{md: 2, lg: 3}} spacing="40px">
          <CourseCard/>
        </SimpleGrid>

      </Container>

    
    </div>
  );
}

export default App;
