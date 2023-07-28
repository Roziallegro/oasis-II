import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

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
        <Text whiteSpace="nowrap">
          {colorMode === "dark" ? "Light mode" : "Dark mode"}
        </Text>
      </HStack>
    </>
  );
};

export default ColourModeSwitch;
