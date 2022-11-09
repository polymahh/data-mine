import { SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const ConnectorCardList = ({ children }: Props) => {
  return (
    <>
      <SimpleGrid minChildWidth="205px" spacing={8} width={"full"}>
        {children}
      </SimpleGrid>
    </>
  );
};
export default ConnectorCardList;
