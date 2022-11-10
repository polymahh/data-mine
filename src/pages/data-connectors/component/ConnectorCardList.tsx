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
        minChildWidth="318px"
        spacing={8}
        width={"full"}
        justifyItems={"center"}
      >
        {children}
      </SimpleGrid>
    </>
  );
};
export default ConnectorCardList;
