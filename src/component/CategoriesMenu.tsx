import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoList } from "react-icons/io5";
import CategoryIcon from "../assets/CategoryIcon";

const categories = [
  "All",
  "Appliances",
  "Blogging",
  "Calenders",
  "Clocks",
  "Cloud Storage",
  "Communication",
  "Entertainment",
  "Finance",
  "Games",
  "Health and Fitness",
  "Location and Navigation",
  "Security",
];

const CategoriesMenu = () => {
  const [category, setCategory] = useState("ALl");
  return (
    <Flex flexGrow={"2"} display={{ base: "flex", "2xl": "none" }}>
      <Menu>
        <MenuButton
          as={Button}
          mr={4}
          px={0}
          py={2}
          transition="all 0.2s"
          bg={"bgItem"}
          _focus={{ outline: "none", bg: "bgItem" }}
          _hover={{ bg: "bgItem" }}
          _expanded={{ bg: "bgItem" }}
        >
          <CategoryIcon color={"whiteText"} boxSize={6} />
        </MenuButton>
        <MenuList bg={"bgItem"} border={"none"} zIndex={200}>
          {categories.map((cat, idx) => (
            <MenuItem
              key={idx}
              _focus={{ bg: "bgLight" }}
              _hover={{ bg: "bgLight" }}
              onClick={() => setCategory(cat)}
              textOverflow={"clip"}
            >
              {cat}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default CategoriesMenu;
