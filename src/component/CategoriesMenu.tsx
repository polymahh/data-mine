import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import CategoryIcon from "../assets/CategoryIcon";
import { CategoryButton } from "./CategoryButton";

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
  return (
    <Flex flexGrow={"2"} display={{ base: "flex", "2xl": "none" }}>
      <Menu closeOnSelect={false}>
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
        <MenuList bg={"bgItem"} border={"none"} zIndex={200} p={4}>
          {categories.map((category, idx) => (
            <MenuItem key={idx} _focus={{ bg: "bgItem" }} textOverflow={"clip"}>
              <CategoryButton category={category} />
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default CategoriesMenu;
