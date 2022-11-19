import { CategoryList } from "./CategoryList";
import { VStack, Button, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack
      alignItems={"start"}
      bg={"bgItem"}
      p={"6"}
      mt={8}
      borderRadius={"8px"}
      display={{ base: "none", "2xl": "flex" }}
      position={"-webkit-sticky"}
      style={{
        zIndex: 80,
        position: "sticky",
        top: "80px",
      }}
    >
      <CategoryList />
    </VStack>
  );
};
export default Sidebar;
