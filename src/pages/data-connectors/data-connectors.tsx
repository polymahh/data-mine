import { Box, Text, VStack } from "@chakra-ui/react";
import DataWrapper from "../../component/DataWrapper";
import Header from "../../component/Header";
import Hero from "./component/Hero";
import { useEffect, useContext } from "react";
import DataContext from "../../contexts/DataContext";
import ConnectorCard from "./component/ConnectorCard";
import ConnectorCardList from "./component/ConnectorCardList";

const DataConnectors = () => {
  const { setTabIndex } = useContext(DataContext);

  useEffect(() => {
    setTabIndex(1);
  }, []);
  return (
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataWrapper>
          <ConnectorCardList>
            <ConnectorCard />
            <ConnectorCard />
            <ConnectorCard />
          </ConnectorCardList>
        </DataWrapper>
      </VStack>
    </Box>
  );
};
export default DataConnectors;
