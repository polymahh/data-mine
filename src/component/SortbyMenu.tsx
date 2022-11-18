import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const SortbyMenu = () => {
  const [sortby, setSortby] = useState("All");
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
      </MenuButton>
      <MenuList bg={"bgItem"} border={"none"} zIndex={200}>
        <MenuItem
          _focus={{ bg: "bgLight" }}
          _hover={{ bg: "bgLight" }}
          onClick={() => setSortby("All")}
        >
          All
        </MenuItem>
        <MenuItem
          _focus={{ bg: "bgLight" }}
          _hover={{ bg: "bgLight" }}
          onClick={() => setSortby("Recently Updated")}
        >
          Recently Updated
        </MenuItem>
        <MenuItem
          _focus={{ bg: "bgLight" }}
          _hover={{ bg: "bgLight" }}
          onClick={() => setSortby("New")}
        >
          New
        </MenuItem>
        <MenuItem
          _focus={{ bg: "bgLight" }}
          _hover={{ bg: "bgLight" }}
          onClick={() => setSortby("Upcoming")}
        >
          Upcoming
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default SortbyMenu;
