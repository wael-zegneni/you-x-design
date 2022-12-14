import React, { useContext } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiBookmark,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import{ImBooks} from "react-icons/im";

import { useLocation } from 'react-router';

import { BsChatSquare } from "react-icons/bs"

import {FaComment, FaUserTie,FaUsers } from 'react-icons/fa';

import Navbar from '../navbar/Navbar';

import {Link} from 'react-router-dom'
import {AuthContext} from '../../Auth/AuthContext'

let LinkItems = []



export default function Layout({
  children,
}) {
  
const {auth} = useContext(AuthContext)

if (auth.user.role == 'admin') {
  LinkItems = [
  { name: 'DashBoard', icon: FiHome, lien: "/dashboard" },
  { name: 'Instructors', icon: FaUserTie,lien: "#" },  
  { name: 'Students', icon: FaUsers,lien: "#" },
  { name: 'Courses', icon: ImBooks,lien: "/allcourses" },
  { name: 'Settings', icon: FiSettings, lien: "#" },
  { name: 'Chat', icon: BsChatSquare,lien: "#" },
  
];
}else{
  LinkItems = [
    { name: 'DashBoard', icon: FiHome, lien: "/dashboard" },
    { name: 'Saved', icon: FiBookmark, lien: "/savedcourses" },
    { name: 'Settings', icon: FiSettings, lien: "#" },
    { name: 'Chat', icon: BsChatSquare,lien: "#" },
  ];
} 

  const {pathname} = useLocation()
  const { isOpen, onClose } = useDisclosure();
  
  return (
    <Box minH="100vh" bg={'#FEFEFE'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        bg="#072446"
        overflowX={"hidden"}
        pt="15vh"
      />
      <Drawer
        overFlow={"hidden"}
        autoFocus={false} 
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent overFlow={"hidden"}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Navbar  />

      <Box ml={{ base: 0, md: 60 }} pt="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#FEFEFE')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      h="full"
      pos="fixed"
      overFlow={"hidden"}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} lien={link.lien}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children,lien, ...rest }) => {
  const { pathname } = useLocation()
  return (
    <Link to={lien} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        mr='-1.4'
        borderTopLeftRadius="3xl"
        borderBottomLeftRadius="3xl"
        role="group"
        cursor="pointer"
        bg={pathname.includes(children.toLowerCase()) ? "#FEFEFE" : 'transparent'}
        color={pathname.includes(children.toLowerCase()) ? "#FCC509" : '#FEFEFE'}
        fontWeight="600"
        _hover={{
          bg: !pathname.includes(children.toLowerCase())? "transparent" : '#FEFEFE',
          color: !pathname.includes(children.toLowerCase())? '#FCC509' : '#FCC509'
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            _groupHover={{
              color: '#FCC509',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};