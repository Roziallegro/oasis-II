import { Box, Center, HStack, Stack } from "@chakra-ui/react";

import BuildingSelect from "./BuildingSelect";
import LevelSelect from "./LevelSelect";
import TypeSelect from "./TypeSelect";
import { Directory } from "../../hooks/useDirectory";

interface Props {
  selectedDirectory: Directory | null;
  onSelectDirectory: (directory: Directory, selectedLevel: string) => void;
  selectedLevel: string;
  onSelectLevel: (selectedLevel: string) => void;
  selectedType: string;
  onSelectType: (selectedType: string) => void;
}

const Heading = ({
  selectedDirectory,
  onSelectDirectory,
  selectedLevel,
  onSelectLevel,
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
              onSelectDirectory={(selectedDirectory, selectedLevel) =>
                onSelectDirectory(selectedDirectory, selectedLevel)
              }
            />
            <LevelSelect
              selectedDirectory={selectedDirectory}
              selectedLevel={selectedLevel}
              onSelectLevel={(selectedLevel) => onSelectLevel(selectedLevel)}
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
