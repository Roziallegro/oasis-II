import { Box, Center, VStack } from "@chakra-ui/react";
import Study from "../../assets/study";

const Home = () => {
  return (
    <>
      <Center>
        <VStack>
          <Study />
          <Box textStyle="h1">Find an available study</Box>
          <Box textStyle="h1">space just for you</Box>
          <Box textStyle="h3">at a click of a button!</Box>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
