import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image2 from "../Images/HomePageImage1.png";

const Home = () => {
  return (
    <div>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "#FF7A57",
                  zIndex: -1,
                }}
              >
                Hello I'm
              </Text>
              <br />{" "}
              <Text color={"#FF7A57"} as={"span"}>
                Shivam Chaudhary
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              I am an experienced software developer with a passion for building
              engaging web applications.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"#FF7A57"}
                color={"white"}
                _hover={{
                  bg: "gray.400",
                }}
              >
                Resume
              </Button>
              <Button rounded={"full"}>Contact</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={Image2} />
        </Flex>
      </Stack>
    </div>
  );
};
export default Home;
