import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react"

const ProfileAvatar = () => {
    return (
        <Menu>
            <MenuButton >
                Your Cats
            </MenuButton>
            <MenuList>
                <MenuItem command="⌘T">
                    New Tab
                </MenuItem>
                <MenuItem command="⌘N">
                    New Window
                </MenuItem>
                <MenuItem command="⌘⇧N">
                    Open Closed Tab
                </MenuItem>
                <MenuItem command="⌘O">
                    Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default ProfileAvatar
