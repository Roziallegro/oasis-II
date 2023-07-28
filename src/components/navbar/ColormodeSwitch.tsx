import { Box, HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColourModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Box textStyle="h4">
          {colorMode === "dark" ? "Light mode" : "Dark mode"}
        </Box>
      </HStack>
    </>
  );
};

export default ColourModeSwitch;
