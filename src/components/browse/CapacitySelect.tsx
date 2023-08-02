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
          rightIcon={<Icon boxSize={{ base: 3, lg: 4 }} as={BsChevronDown} />}
        >
          <Box textStyle="h5">
            {selectedCapacity ? selectedCapacity : "Capacity"}
          </Box>
        </MenuButton>
        <MenuList>
          {capacity.map((capacity) => (
            <MenuItem onClick={() => onSelectCapacity(capacity)} key={capacity}>
              <Box textStyle="h5">{capacity}</Box>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default CapacitySelect;
