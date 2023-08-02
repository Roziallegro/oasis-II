import { useNavigate } from "react-router-dom";
import { Box, Button, HStack, Image } from "@chakra-ui/react";

import ColourModeSwitch from "./ColormodeSwitch";
import logo from "../assets/study logo.png";

const Navbar = () => {
  let navigate = useNavigate();
  const routeSearch = () => {
    navigate("search");
  };
  const routeBrowse = () => {
    navigate("browse");
  };

  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize="50px" objectFit="contain" />
        <Box>
          <HStack justifyContent="space-around">
            <Button onClick={routeBrowse} variant="link">
              <Box textStyle="h4"> Browse </Box>
            </Button>
            <Button onClick={routeSearch} variant="link">
              <Box textStyle="h4"> Search </Box>
            </Button>
            <ColourModeSwitch />
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
