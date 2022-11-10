import { SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const CateoryCardList = ({ children }: Props) => {
  return (
    <>
      <Text color={"whiteText"} textAlign={"center"} width={"full"}>
        Category name
      </Text>
      <SimpleGrid
        minChildWidth="205px"
        spacing={8}
        width={"full"}
        justifyItems={"center"}
      >
        {children}
      </SimpleGrid>
    </>
  );
};
export default CateoryCardList;
