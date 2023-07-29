import { Box, Center, HStack, Stack } from "@chakra-ui/react";

import BuildingSelect from "./BuildingSelect";
import LevelSelect from "./LevelSelect";

const Heading = () => {
  return (
    <>
      <Center>
        <Stack>
          <Center>
            <Box textStyle="h3">Browse by:</Box>
          </Center>
          <HStack>
            <BuildingSelect />
            <LevelSelect />
            <BuildingSelect />
          </HStack>
        </Stack>
      </Center>
    </>
  );
};

export default Heading;
