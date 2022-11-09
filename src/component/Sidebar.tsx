import { CategoryList } from "./CategoryList";
import { VStack, Button, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack
      alignItems={"start"}
      bg={"bgItem"}
      p={"6"}
      borderRadius={"8px"}
      display={["none", "none", "flex"]}
    >
      <CategoryList />
    </VStack>
  );
};
export default Sidebar;
