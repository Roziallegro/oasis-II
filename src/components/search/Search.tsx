import { Box, Center, VStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { useState } from "react";

import SearchSvg from "../assets/search";

interface Query {
  searchText: string;
}

const Search = () => {
  //const [query, setQuery] = useState<Query>({} as Query);

  return (
    <>
      <Center>
        <VStack>
          <Box width="100%">
            <SearchInput onSearch={(searchText) => console.log(searchText)} />
          </Box>
          <br />
          <SearchSvg />
        </VStack>
      </Center>
    </>
  );
};

export default Search;
