import { Grid, GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Browse from "./components/browse/Browse";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <Grid templateAreas={`"header" "main"`} gap="5">
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
