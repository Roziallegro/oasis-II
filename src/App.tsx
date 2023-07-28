import { useState } from "react";
import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import ColourModeSwitch from "./components/ColormodeSwitch";
import { Route, Routes } from "react-router-dom";

import logo from "./assets/study logo.png";
import Home from "./components/home/Home";
import Browse from "./components/browse/Browse";

function App() {
  return (
    <>
      <Grid templateAreas={`"header" "main"`} gap="10">
        <GridItem area={"header"}>
          <HStack justifyContent="space-between">
            <Image src={logo} boxSize="55px" objectFit="contain" />
            <ColourModeSwitch />
          </HStack>
        </GridItem>
        <GridItem area={"main"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
