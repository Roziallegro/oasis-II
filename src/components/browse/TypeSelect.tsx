import {
  Menu,
  MenuButton,
  Icon,
  Button,
  MenuList,
  MenuItem,
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
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          {selectedType ? selectedType : "Type"}
        </MenuButton>
        <MenuList>
          {type.map((type) => (
            <MenuItem onClick={() => onSelectType(type)} key={type}>
              {type}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default TypeSelect;
