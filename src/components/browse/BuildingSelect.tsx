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

const BuildingSelect = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          Building
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

export default BuildingSelect;
