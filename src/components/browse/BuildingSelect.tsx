import {
  Menu,
  MenuButton,
  Icon,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { Directory } from "../../hooks/useDirectory";
import useDirectory from "../../hooks/useDirectory";

interface Props {
  selectedDirectory: Directory | null;
  onSelectDirectory: (directory: Directory, selectedLevel: string) => void;
}

const BuildingSelect = ({ selectedDirectory, onSelectDirectory }: Props) => {
  const { data } = useDirectory();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          {selectedDirectory ? selectedDirectory.name : "Building"}
        </MenuButton>
        <MenuList>
          {data.map((directory) => (
            <MenuItem
              onClick={() => onSelectDirectory(directory, "")}
              key={directory.name}
            >
              {directory.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default BuildingSelect;
