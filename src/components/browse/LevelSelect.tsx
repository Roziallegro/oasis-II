import {
  Menu,
  MenuButton,
  Icon,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import directory from "../../data/directory";

const LevelSelect = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          Level
        </MenuButton>
        <MenuList>
          {directory.map((building) => (
            <MenuItem key={building.name}>{building.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LevelSelect;
