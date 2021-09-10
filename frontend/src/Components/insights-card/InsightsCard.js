import './InsightsCard.css'
import { FaUserTie, FaUsers } from 'react-icons/fa'
import { ImBooks } from "react-icons/im"
import { Flex, Text, Box, Icon } from "@chakra-ui/react";


const InsightCard = ({ type, count }) => {
    if (type == 'student') {
        return (
            <Flex className="insightCard" borderRadius="2xl"  width="23%" bg="#F7F9FB" px="25px" alignItems="center" justifyContent="space-around" py="15px" borderRadius="2xl">
                <Icon
                    mr="4"
                    fontSize="7vw"
                    color="#FCC509"
                    as={FaUsers}
                />
                <Flex alignItems="center" direction="column" justifyContent="space-around"  borderRadius="3xl">
                    <Text fontSize="3.8vw" lineHeight='1.2' color='#072446' fontWeight="bolder">
                        {count}
                    </Text>
                    <Text color='#1E1E1E'>students</Text>
                </Flex>
            </Flex>
        )
    }
    else if (type == 'instructor') {
        return (
           
                <Flex className="insightCard" borderRadius="2xl" width="23%" bg="#F7F9FB" px="25px" alignItems="center" justifyContent="space-around" py="15px" borderRadius="2xl">
                    <Icon
                        mr="4"
                        fontSize="6vw"
                        color="#FCC509"
                        as={FaUserTie}
                    />
                    <Flex alignItems="center" direction="column" justifyContent="space-around" py="15px" >
                        <Text fontSize="3.8vw" lineHeight='1.2' color='#072446' fontWeight="bolder">
                            {count}
                        </Text>
                        <Text color='#1E1E1E'>instructors</Text>
                    </Flex>
                </Flex>
        
        )
    }
    else if (type == 'course') {
        return (
       
                <Flex className="insightCard" borderRadius="2xl" width="23%" bg="#F7F9FB" px="25px" alignItems="center" justifyContent="space-around" py="15px" borderRadius="2xl">
                    <Icon
                        mr="4"
                        fontSize="7vw"
                        color="#FCC509"
                        as={ImBooks}
                    />
                    <Flex alignItems="center" direction="column" justifyContent="space-around" py="15px" borderRadius="3xl">
                        <Text fontSize="3.8vw" lineHeight='1.2' color='#072446' fontWeight="bolder">
                            {count}
                        </Text>
                        <Text color='#1E1E1E'>courses</Text>
                    </Flex>
                </Flex>
 
        )
    }
}
export default InsightCard