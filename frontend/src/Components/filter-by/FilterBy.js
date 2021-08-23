import React from 'react'
import { useState } from 'react'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex, MenuOptionGroup, Menu, MenuButton, MenuList, MenuItemOption, MenuDivider } from '@chakra-ui/react';
import './filterBy.css'

const FilterBy = () => {

    const [opened, setOpened] = useState(false)

    return (
        <Menu closeOnSelect={false} >
            <MenuButton 
            mr='2vw'
                colorScheme="red"
                py='5px '
                transition="0s"
                borderRadius="md"
                borderWidth="2px"
                width="161.9px"
                height="max-content"
                onClick={() => setOpened(!opened)}
                >
                Filter By
                <span style={{marginLeft:"30px"}}>{opened? "<" : ">"}</span>
            </MenuButton>
            <MenuList  minWidth="120px" >
                <MenuOptionGroup  title="Category" type="checkbox" >
                    <MenuItemOption value="Basic UX">Basic UX</MenuItemOption>
                    <MenuItemOption value="Advanced UX">Advanced UX</MenuItemOption>
                    <MenuItemOption value="LeaderShip">LeaderShip</MenuItemOption>
                </MenuOptionGroup>

                <MenuDivider width='80%' ml="10%" />

                <MenuOptionGroup title="Type" type="checkbox">
                    <MenuItemOption value="Training">Training</MenuItemOption>
                    <MenuItemOption value="Workshop">Workshop</MenuItemOption>
                    <MenuItemOption value="Article">Article</MenuItemOption>
                </MenuOptionGroup>

                <MenuDivider width='80%' ml="10%" />

                <MenuOptionGroup title="Language" type="checkbox">
                    <MenuItemOption value="English">English</MenuItemOption>
                    <MenuItemOption value="French">French</MenuItemOption>
                    <MenuItemOption value="Arabic">Arabic</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}

export default FilterBy
