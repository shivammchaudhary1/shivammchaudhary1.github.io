import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Image3 from "../Images/AboutMeImage1.jpg";

const AboutMe = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"600px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={Image3}
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#FF7A57",
                zIndex: -1,
              }}
            >
              About Me
            </Text>
            <br />
          </Heading>
          <Text color={"gray.800"} textAlign={"justify"}>
            I'm a passionate Full Stack Web Developer with a strong proficiency
            in JavaScript, ReactJS, ExpressJS, NodeJS, Data Structures, and
            Algorithms. With over 1200 hours of coding experience, I'm an
            adaptable team player who is goal-oriented and solutions-focused. My
            ultimate aim is to utilize my skillset and experience to create a
            significant impact in the software industry and help achieve
            organizational goals.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};
export default AboutMe;
