import './InsightsCard.css'
import {FaUserTie,FaUsers } from 'react-icons/fa'
import{ImBooks} from "react-icons/im"
import {Flex, Text, Box, Icon } from "@chakra-ui/react";


const InsightCard = ({type, count }) => {
    if (type == 'student'){
    return (
        <Box borderRadius="3xl" width="300px" py="1em"  pl="20px" bg="#F7F9FB"  pl="25px" >
        <Flex className="insightCard"   alignItems="center" justifyContent="space-around" py="15px" borderRadius="3xl">
            <Icon
            mr="4"
            fontSize="100"
            color="#FCC509"
            as={FaUsers}
          />
           <Flex alignItems="center" direction="column" justifyContent="space-around" py="15px" borderRadius="3xl">
            <Text fontSize="3xl" fontWeight="bolder">
                {count}
            </Text>
            <Text>students</Text>   
            </Flex>         
        </Flex>
        </Box>
    )}
     else if (type=='instructor'){
         return(
            <Box borderRadius="3xl" width="300px" py="1em"  pl="20px" bg="#F7F9FB"  pl="25px" >
            <Flex className="insightCard"   alignItems="center" justifyContent="space-around" py="15px" borderRadius="3xl">           
            <Icon
            mr="4"
            fontSize="100"
            color="#FCC509"
            as={FaUserTie}
          />
            <Flex alignItems="center" direction="column" justifyContent="space-around" py="15px" borderRadius="3xl">
            <Text fontSize="3xl" fontWeight="bolder">
                {count}
            </Text>
            <Text>instructors</Text>  
            </Flex>          
        </Flex>
        </Box>
         )
     }
     else if (type =='course'){
         return(
            <Box borderRadius="3xl" width="300px" py="1em"  pl="20px" bg="#F7F9FB"  pl="25px" >
            <Flex className="insightCard"   alignItems="center" justifyContent="space-around" py="15px" borderRadius="3xl">
            <Icon
            mr="4"
            fontSize="100"
            color="#FCC509"
            as={ImBooks}
          />
            <Flex alignItems="center" direction="column" justifyContent="space-around" py="15px" borderRadius="3xl">
            <Text fontSize="3xl" fontWeight="bolder">
                {count}
            </Text>
            <Text>courses</Text>   
            </Flex>         
        </Flex> 
        </Box>
         )
     }
}
export default InsightCard