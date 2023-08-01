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
import defaultLevel from "../../data/defaultLevel";
import { Directory } from '../../hooks/useDirectory'

interface Props {
  directory: Directory | null;
  onSelectLevel: (level: string) => void;
}

const LevelSelect = ({ directory, onSelectLevel }: Props) => {
let levels = ''

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon boxSize={4} as={BsChevronDown} />}
        >
          {level ? level : "Level"}
        </MenuButton>
        <MenuList>
          {if (directory.name === building) 
          directory.map((location) => 
          (if (location.name === building)
            levels = location.levels
            levels.map ((level) => (<MenuItem key={level}>{level}</MenuItem>)))
          )
          else {defaultLevel.map}}

        </MenuList>
      </Menu>
    </>
  );
};

export default LevelSelect;
