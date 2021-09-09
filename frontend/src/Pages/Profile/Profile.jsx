import React, { useContext, useState } from "react";
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
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Profile = () => {
  const [avatared, setavatared] = useState();
  console.log(avatared);
  
  const { auth, reloadUser } = useContext(AuthContext);
  const [photo, setphoto] = useState({
    avatar: "",
  });
  console.log(photo)
  const user = auth.user;
  const toast = useToast();
  const handleRemovePhoto = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `api/v1/user/removePic?id=${auth.user._id}`
      );
      reloadUser(auth.user._id);
      toast({
        title: "profile picture removed",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handlechange = async e => {
    e.preventDefault()
    setavatared(true)
    console.log(e.target.files[0])
    setphoto({avatar : e.target.files[0]})
  }
  const handleSubmit = async e  => {
    e.preventDefault();
    const formData = new FormData()
        Object.keys(photo).map(key => formData.append(key, photo[key]))
        for (const [key, value] of formData.entries()) {
          console.log('key:'+ key + 'value' + value )
        }
    try {
      const res = await axios.patch(
        `api/v1/user/updatepic?id=${user._id}`,formData
      )
      reloadUser(auth.user._id);
      setavatared(false)
      toast({
        title: "photo updated !",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      console.log(error)
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
              <Box width="14em" color="white" height="78px">
                <form enctype="multipart/form-data" onSubmit={handleSubmit}>
                  <input
                    onChange={handlechange}
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
                      display: avatared && "none",
                    }}
                    position="relative"
                    top="15px"
                    accept="image/*"
                    autoComplete="off"
                    name="avatar"
                  />

                  <Text
                    onChange={(e) => console.log('e.target.files[0]')}
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
                    style={{ display: avatared ? "none" : "block" }}
                  >
                    Update Profile Photo
                  </Text>
                  <br />
                  <button
                    type="submit"
                    style={{
                      color: "#FCC509",
                      display: avatared ? "block" : "none",
                      fontWeight: "bolder",
                      textAlign: "center",
                      width: "100%",
                    }}
                    
                  >
                    Confirm
                  </button>
                </form>
              </Box>
              <Text
                textAlign="center"
                style={{ display: avatared ? "none" : "block" }}
                color="#FCC509"
                cursor="pointer"
                fontSize="sm"
                mr="5px"
                fontWeight="600"
                my="3"
                onClick={handleRemovePhoto}
              >
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
              <Box w="100%" h="10" fontSize="xl">
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
              <Box w="100%" h="10" fontSize="xl">
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
              <Box w="100%" h="10" fontSize="xl">
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
