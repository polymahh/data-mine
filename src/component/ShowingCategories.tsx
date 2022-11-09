import { HStack, Text } from "@chakra-ui/react";

const ShowingCategories = () => {
  return (
    <HStack color={"whiteText"} fontSize={"sm"}>
      <Text>Showing results for:</Text>
      <Text color={"primary"}>All Categories</Text>
    </HStack>
  );
};
export default ShowingCategories;
