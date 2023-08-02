import {
  Menu,
  MenuButton,
  Icon,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import defaultLevel from "../../data/defaultLevel";
import { Directory } from "../../hooks/useDirectory";

interface Props {
  selectedDirectory: Directory | null;
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
}

const LevelSelect = ({
  selectedDirectory,
  selectedLevel,
  onSelectLevel,
}: Props) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={{ base: 3, lg: 4 }} as={BsChevronDown} />}
        >
          <Box textStyle="h5">{selectedLevel ? selectedLevel : "Level"}</Box>
        </MenuButton>
        <MenuList>
          {selectedDirectory
            ? selectedDirectory.levels.map((level) => (
                <MenuItem onClick={() => onSelectLevel(level)} key={level}>
                  <Box textStyle="h5">{level}</Box>
                </MenuItem>
              ))
            : defaultLevel.map((level) => (
                <MenuItem onClick={() => onSelectLevel(level)} key={level}>
                  <Box textStyle="h5">{level}</Box>
                </MenuItem>
              ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LevelSelect;
