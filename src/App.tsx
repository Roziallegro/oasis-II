import { useState } from "react";
import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import ColourModeSwitch from "./components/ColormodeSwitch";

import logo from "./assets/study logo.png";

function App() {
  return (
    <>
      <Grid templateAreas={`"header" "main"`} gap="1">
        <GridItem area={"header"}>
          <HStack justifyContent="space-between">
            <Image src={logo} boxSize="55px" objectFit="contain" />
            <ColourModeSwitch />
          </HStack>
        </GridItem>
        <GridItem bg="blue.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
