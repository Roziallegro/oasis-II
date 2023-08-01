import {
  Menu,
  MenuButton,
  Icon,
  Button,
  MenuList,
  MenuItem,
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
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          {selectedLevel ? selectedLevel : "Level"}
        </MenuButton>
        <MenuList>
          {selectedDirectory
            ? selectedDirectory.levels.map((level) => (
                <MenuItem onClick={() => onSelectLevel(level)} key={level}>
                  {level}
                </MenuItem>
              ))
            : defaultLevel.map((level) => (
                <MenuItem onClick={() => onSelectLevel(level)} key={level}>
                  {level}
                </MenuItem>
              ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LevelSelect;
