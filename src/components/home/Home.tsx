import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import Study from "../assets/study";
import MenuContainer from "./MenuContainer";

const Home = () => {
  return (
    <>
      <Center>
        <VStack>
          <Study />
          <Box textStyle="h1">Find an available study</Box>
          <Box textStyle="h1">space just for you</Box>
          <Box textStyle="h3">at a click of a button!</Box>
          <br />
          <HStack>
            <MenuContainer
              iconName="browse"
              buttonHeader="Browse"
              buttonDescription="study spaces"
            />
            <MenuContainer
              iconName="search"
              buttonHeader="Search"
              buttonDescription="for specific space"
            />
          </HStack>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
