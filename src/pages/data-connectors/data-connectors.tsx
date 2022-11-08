import { Box, VStack } from "@chakra-ui/react";
import DataWrapper from "../../component/DataWrapper";
import Header from "../../component/Header";
import Hero from "./component/Hero";

const DataConnectors = () => {
  return (
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataWrapper tabIndex={1}>
          <div>connectors</div>
        </DataWrapper>
      </VStack>
    </Box>
  );
};
export default DataConnectors;
