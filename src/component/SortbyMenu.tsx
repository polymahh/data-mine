import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { IoChevronDown } from "react-icons/io5";
import DataContext from "../contexts/DataContext";

const sortArr = ["All", "Recently Updated", "New", "Upcoming"];

const SortbyMenu = () => {
  const { sortby, setSortby } = useContext(DataContext);

  return (
    <Menu>
      <MenuButton
        display={{ base: "flex", "2xl": "none" }}
        width={"185px"}
        textAlign={"left"}
        as={Button}
        px={4}
        py={2}
        transition="all 0.2s"
        bg={"bgItem"}
        _focus={{ outline: "none", bg: "bgItem" }}
        _hover={{ bg: "bgItem" }}
        _expanded={{ bg: "bgItem" }}
        rightIcon={<IoChevronDown />}
      >
        {sortby}
        <Text
          top={"-4"}
          position={"absolute"}
          fontSize={"10px"}
          fontWeight={"600"}
        >
          SORT BY
        </Text>
      </MenuButton>
      <MenuList bg={"bgItem"} border={"none"} zIndex={200} p={4}>
        {sortArr.map((item) => (
          <MenuItem
            _focus={{ bg: "bgItem" }}
            _hover={{ bg: "bgLight", border: "1px" }}
            onClick={() => setSortby(item)}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortbyMenu;
