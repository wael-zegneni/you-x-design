import React, { useContext } from 'react'
import searchLogo from '../../Assets/Images/searchLogo.jpg'
import 'react-languages-select/css/react-languages-select.css';
import { useDisclosure } from "@chakra-ui/react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    InputGroup,
    Input,
    InputRightElement,
    Box,
    ModalBody,
} from "@chakra-ui/react"
import '../navbar/navbar.css'


const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <div className="searchBar" onClick={onOpen}>
                <input type='text' />
                <img src={searchLogo} alt="searchLogo" />
            </div>
            <div>

            </div>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <InputGroup>
                            <Input placeholder="" borderRadius="3xl" focusBorderColor="red" />
                            <InputRightElement children={<img width="20px" src={searchLogo} alt="searchLogo" />} />
                        </InputGroup>
                    </ModalHeader>
                    <ModalBody>
                        <Box className="courses" >
                            
                        </Box>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>

    )
}

export default SearchInput
