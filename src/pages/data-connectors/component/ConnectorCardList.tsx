import { SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const ConnectorCardList = ({ children }: Props) => {
  return (
    <>
      <SimpleGrid
        minChildWidth={{ base: "full", xl: "318px" }}
        columnGap={4}
        spacingY={8}
        width={"full"}
        justifyItems={{ base: "center", xl: "left" }}
        px={4}
      >
        {children}
      </SimpleGrid>
    </>
  );
};
export default ConnectorCardList;
