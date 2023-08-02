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
          rightIcon={<Icon boxSize={{ base: 3, lg: 4 }} as={BsChevronDown} />}
        >
          <Box textStyle="h5">
            {selectedDirectory ? selectedDirectory.name : "Building"}
          </Box>
        </MenuButton>
        <MenuList>
          {data.map((directory) => (
            <MenuItem
              onClick={() => onSelectDirectory(directory, "")}
              key={directory.name}
            >
              <Box textStyle="h5">{directory.name}</Box>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default BuildingSelect;
