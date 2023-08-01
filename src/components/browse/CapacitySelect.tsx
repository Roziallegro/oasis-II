import {
  Menu,
  MenuButton,
  Icon,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import capacity from "../../data/capacity";

interface Props {
  selectedCapacity: string;
  onSelectCapacity: (capacity: string) => void;
}

const CapacitySelect = ({ selectedCapacity, onSelectCapacity }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          {selectedCapacity ? selectedCapacity : "Capacity"}
        </MenuButton>
        <MenuList>
          {capacity.map((capacity) => (
            <MenuItem onClick={() => onSelectCapacity(capacity)} key={capacity}>
              {capacity}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default CapacitySelect;
