import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Text,
    Image,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import React from 'react'
import { useSelector } from "react-redux";

const ProfileModal = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { me } = useSelector(state => state.user);
    if (!me) return null;

    const user = me;
    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
            )}
            <Modal size={['md', 'lg']} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent h={["390px","420px"]} w={["300px","420px"]}>
                    <ModalHeader
                        fontSize={[ "30px", "40px" ]}
                        fontFamily="Work sans"
                        display="flex"
                        justifyContent="center"
                    >
                        {user.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Image
                            borderRadius="full"
                            boxSize={[ "120px", "150px" ]}
                            src={user.pic.url}
                            alt={user.name}
                        />
                        <Text
                            fontSize={{ base: "23px", md: "30px" }}
                            fontFamily="Work sans"
                        >
                            Email: {user.email}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal
