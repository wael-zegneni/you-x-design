import WorkshopSwiper from './Components/workshops-swiper/WorkshopSwiper';
import CourseCard from './Components/course-card/CourseCard'
import {SimpleGrid} from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
        <SimpleGrid columns={{md: 2, lg: 3}} spacing="40px">
          <WorkshopSwiper/>
        </SimpleGrid>
        <CourseCard/>
    
    </div>
  );
}

export default App;
