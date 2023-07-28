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
        <Image src={logo} boxSize="55px" objectFit="contain" />
        <Box>
          <HStack justifyContent="space-around">
            <Button onClick={routeBrowse} variant="link">
              Browse
            </Button>
            <Button onClick={routeSearch} variant="link">
              Search
            </Button>
            <ColourModeSwitch />
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
