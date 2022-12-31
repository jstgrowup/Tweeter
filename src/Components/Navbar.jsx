import React from "react";
import {
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
  Flex,
  Image,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverBody,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/UserRedux/UserActions";
import { Logoutfunction } from "../utils/Logout";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();



  const {
    data: { img, username },
    token,
  } = useSelector((store) => store.user);
  const handleLogout = () => {
    return Logoutfunction(navigate, dispatch, logoutUser, toast);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex
        justify={"space-between"}
        w={"100%"}
        h={["80px", "80px", "100px", "100px"]}
        bg={useColorModeValue("#166FE6", "#166FE6")}
      >
        <HStack
          display={{ base: "none", md: "flex" }}
          bg={useColorModeValue("#166FE6", "#166FE6")}
          w={"100%"}
          h={"100px"}
          justifyContent={"space-between"}
          align={"center"}
        >
          <Flex height={"100%"} w={["17%", "15%", "13%", "7%", "5%"]}>
            <Image src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f426.svg" />
          </Flex>
          {/* <NavLink to={"/"}>
            <Button
              bg={useColorModeValue("white", "black")}
              color={useColorModeValue("black", "white")}
            >
              Create Account
            </Button>
          </NavLink>
          <NavLink to={"/signin"}>
            <Button
              bg={useColorModeValue("white", "black")}
              color={useColorModeValue("black", "white")}
            >
              Login
            </Button>
          </NavLink>
          <NavLink to={"/profile"}>
            <Button
              bg={useColorModeValue("white", "black")}
              color={useColorModeValue("black", "white")}
            >
              User Profile
            </Button>
          </NavLink>
          <NavLink to={"/timeline"}>
            <Button
              bg={useColorModeValue("white", "black")}
              color={useColorModeValue("black", "white")}
            >
              Timeline
            </Button>
          </NavLink> */}
          <Button
            bg={useColorModeValue("white", "black")}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                size={"lg"}
                variant={"none"}
                fontFamily={"sans-serif"}
                color={"white"}
                leftIcon={
                  img ? (
                    <Image src={img} boxSize={"10"} borderRadius={"full"} />
                  ) : (
                    <FaUserCircle
                      style={{ color: "white", fontSize: "1.5em" }}
                    />
                  )
                }
              >
                {username ? username : "user"}
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent bg={"#166FE6"} color={"white"}>
                <PopoverBody>
                  {token ? (
                    <VStack>
                      <Button
                        variant={"none"}
                        bg={"#166FE6"}
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </Button>
                      <Button
                        onClick={handleLogout}
                        variant={"none"}
                        bg={"#166FE6"}
                      >
                        Logout
                      </Button>
                    </VStack>
                  ) : (
                    <VStack>
                      <Button variant={"none"} onClick={() => navigate("/")}>
                        Log in
                      </Button>
                      <Button
                        variant={"none"}
                        onClick={() => navigate("/signup")}
                      >
                        Create an Account
                      </Button>
                    </VStack>
                  )}
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </HStack>
        <Flex
          height={["70px", "70px", "0px", "0px"]}
          align={"center"}
          justify={"flex-end"}
          bg={useColorModeValue("#166FE6", "#166FE6")}
        >
          <Button
            display={{ base: "flex", md: "none" }}
            variant={"none"}
            onClick={onOpen}
          >
            <HamburgerIcon boxSize={8} color={"white"} />
          </Button>
        </Flex>
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size={"full"}
          bg={useColorModeValue("#166FE6", "#166FE6")}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Box w={"full"} mb={3}>
                <Button
                  w={"full"}
                  size={"lg"}
                  as={NavLink}
                  to={"/signin"}
                  bg={"#166FE6"}
                  color={"white"}
                  letterSpacing={1}
                >
                  Login
                </Button>
              </Box>
              <Box w={"full"} mb={3}>
                <Button
                  w={"full"}
                  size={"lg"}
                  as={NavLink}
                  to={"/"}
                  bg={"#166FE6"}
                  color={"white"}
                  letterSpacing={1}
                >
                  Signup Page
                </Button>
              </Box>
              <Box w={"full"} mb={3}>
                <Button
                  w={"full"}
                  size={"lg"}
                  as={NavLink}
                  to={"/profile"}
                  bg={"#166FE6"}
                  color={"white"}
                  letterSpacing={1}
                  leftIcon={<FaUserAlt />}
                >
                  Profile
                </Button>
              </Box>
              <Box w={"full"} mb={3}>
                <Button
                  w={"full"}
                  size={"lg"}
                  as={NavLink}
                  to={"/timeline"}
                  bg={"#166FE6"}
                  color={"white"}
                  letterSpacing={1}
                >
                  Timeline
                </Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </div>
  );
}

export default Navbar;
