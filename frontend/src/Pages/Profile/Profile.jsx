import React, { useContext } from "react";
import "./profile.css";
import {
  Heading,
  Flex,
  Text,
  Box,
  Grid,
  GridItem,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import Layout from "../../Components/layout/Layout";
import Footer from "../../Components/footer/Footer";
import { AuthContext } from "../../Auth/AuthContext";
import {useToast} from "@chakra-ui/react"
import axios from 'axios'

const Profile = () => {
  // const user = {
  //   avatar:
  //     "https://pyxis.nymag.com/v1/imgs/3c3/54b/d6e10a19a66822da8bc30bef7b37b3b2f7-obama-interview-lede.2x.h600.w512.jpg",
  //   userName: "wael",
  //   email: "wael@gmail.com",
  //   phone: "24445983",
  // };
  const {auth, reloadUser} = useContext(AuthContext)
  console.log(auth)
  const user = auth.user
  const toast = useToast()
  const handleRemovePhoto = async e => {
      e.preventDefault();
      try {
        const res = await axios.patch(`api/v1/user/removePic?id=${auth.user._id}`)
        reloadUser(auth.user._id)
            toast({
                title: "profile picture removed",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
      } catch (error) {
        console.log(error)
        toast({
          title: error,
          status: "error",
          duration: 9000,
          isClosable: true,
      })

      }
  }
  return (
    <Layout>
      <Box height="71vh" alignContent="center">
        <Flex height="100%">
          <Flex
            flex="1"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <img
              width="190px"
              style={{
                borderRadius: "999px",
                objectFit: "cover",
                height: "190px",
              }}
              name="Segun Adebayo"
              src={user.avatar}
              alt="profile"
            />{" "}
            <Box mt="3">
              <Text width='14em' color="white" height="78px">
                <input
                  color="white"
                  className="join_upload_input"
                  type="file"
                  style={{
                    position: "relative",
                    top: "39px",
                    width: "227px",
                    left: "-44px",
                    cursor: "pointer",
                    opacity: "0",
                  }}
                  position="relative"
                  top="15px"
                  accept="image/*"
                  autoComplete="off"
                  name="avatar"
                />
                <Text
                  className="join_upload_text"
                  ml="0%"
                  px="6"
                  borderRadius="3xl"
                  py="3"
                  fontSize="l"
                  width="max-content"
                  backgroundColor="#FCC509"
                  fontWeight="bold"
                  color="white"
                  _hover={{ color: "white !important" }}
                >
                  Update Profile Photo
                </Text>
              </Text>
              <Text textAlign="center" color="#FCC509" cursor="pointer" fontSize="sm" mr="5px" fontWeight="600" my="3" onClick={handleRemovePhoto}>
                Remove Profile Photo
              </Text>
            </Box>
          </Flex>
          <Flex
            ml="3em"
            flex="1"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Text
              alignSelf="flex-start"
              fontSize="4xl"
              fontWeight="bolder"
              mb="2em"
              color="#072446"
              borderBottom="#FCC509 5px solid"
            >
              Personal Information
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Box
                w="100%"
                h="10"
                fontSize="xl"
                color="#1E1E1E"
                fontWeight="bold"
              >
                Username:
              </Box>
              <Box ml="25px" w="100%" h="10" fontSize="xl">
                {user.userName}
              </Box>
              <Box
                w="100%"
                color="#1E1E1E"
                h="10"
                fontSize="xl"
                fontWeight="bold"
              >
                Email:
              </Box>
              <Box ml="25px" w="100%" h="10" fontSize="xl">
                {user.email}
              </Box>
              <Box
                w="100%"
                color="#1E1E1E"
                h="10"
                fontSize="xl"
                fontWeight="bold"
              >
                Mobile Number:
              </Box>
              <Box ml="25px" w="100%" h="10" fontSize="xl">
                {user.phone}
              </Box>
            </Grid>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Profile;
