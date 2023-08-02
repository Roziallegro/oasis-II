import { Box, Center, Stack, SimpleGrid } from "@chakra-ui/react";

import BuildingSelect from "./BuildingSelect";
import LevelSelect from "./LevelSelect";
import TypeSelect from "./TypeSelect";
import CapacitySelect from "./CapacitySelect";
import { Directory } from "../../hooks/useDirectory";

interface Props {
  selectedDirectory: Directory | null;
  onSelectDirectory: (directory: Directory, selectedLevel: string) => void;
  selectedLevel: string;
  onSelectLevel: (selectedLevel: string) => void;
  selectedType: string;
  onSelectType: (selectedType: string) => void;
  selectedCapacity: string;
  onSelectCapacity: (selectedCapacity: string) => void;
}

const Heading = ({
  selectedDirectory,
  onSelectDirectory,
  selectedLevel,
  onSelectLevel,
  selectedType,
  onSelectType,
  selectedCapacity,
  onSelectCapacity,
}: Props) => {
  return (
    <>
      <Center>
        <Stack>
          <Center>
            <Box textStyle="h3">Browse by:</Box>
          </Center>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={3}>
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
            <CapacitySelect
              selectedCapacity={selectedCapacity}
              onSelectCapacity={(selectedCapacity) =>
                onSelectCapacity(selectedCapacity)
              }
            />
          </SimpleGrid>
        </Stack>
      </Center>
    </>
  );
};

export default Heading;
