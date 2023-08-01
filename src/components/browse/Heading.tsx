import { Box, Center, HStack, Stack } from "@chakra-ui/react";

import BuildingSelect from "./BuildingSelect";
import LevelSelect from "./LevelSelect";
import TypeSelect from "./TypeSelect";
import { Directory } from "../../hooks/useDirectory";

interface Props {
  selectedDirectory: Directory | null;
  onSelectDirectory: (directory: Directory) => void;
  level: string;
  selectedType: string;
  onSelectType: (selectedType: string) => void;
}

const Heading = ({
  selectedDirectory,
  onSelectDirectory,
  level,
  selectedType,
  onSelectType,
}: Props) => {
  return (
    <>
      <Center>
        <Stack>
          <Center>
            <Box textStyle="h3">Browse by:</Box>
          </Center>
          <HStack>
            <BuildingSelect
              selectedDirectory={selectedDirectory}
              onSelectDirectory={(selectedDirectory) =>
                onSelectDirectory(selectedDirectory)
              }
            />
            <TypeSelect
              selectedType={selectedType}
              onSelectType={(selectedType) => onSelectType(selectedType)}
            />
          </HStack>
        </Stack>
      </Center>
    </>
  );
};

export default Heading;
