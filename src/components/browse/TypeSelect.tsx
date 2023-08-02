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

import type from "../../data/type";

interface Props {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const TypeSelect = ({ selectedType, onSelectType }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={{ base: 3, lg: 4 }} as={BsChevronDown} />}
        >
          <Box textStyle="h5">{selectedType ? selectedType : "Type"}</Box>
        </MenuButton>
        <MenuList>
          {type.map((type) => (
            <MenuItem onClick={() => onSelectType(type)} key={type}>
              <Box textStyle="h5">{type}</Box>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default TypeSelect;
