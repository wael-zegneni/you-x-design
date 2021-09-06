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
    Avatar
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { BsPersonFill } from 'react-icons/bs'
import { BiLogOutCircle } from 'react-icons/bi'
import { AuthContext } from '../../Auth/AuthContext'
import { useContext } from 'react'



const ProfileAvatar = ({ avatar }) => {
    const { auth, signout } = useContext(AuthContext)

    const test = () => {
        console.log("object")
    }
    return (
        <Menu>
            <MenuButton >
                <Avatar src={avatar} />
            </MenuButton>
            <MenuList>
                <Link to="/profile">
                    <MenuItem icon={<BsPersonFill />}>
                        View profile
                    </MenuItem>
                </Link>
                <Link to='/' variant="solid" onClick={signout} >
                    <MenuItem icon={<BiLogOutCircle />} >
                        Sign out
                    </MenuItem>
                </Link>

            </MenuList>
        </Menu>
    )
}

ProfileAvatar.defaultProps = {
    avatar: 'http://ojodepeza.com/proyectos/wp-content/uploads/2015/01/martin-schoeller-barack-obama-portrait-up-close-and-personal.jpg'
}

export default ProfileAvatar
