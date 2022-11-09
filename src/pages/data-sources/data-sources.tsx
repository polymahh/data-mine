import { Box, Text, VStack } from "@chakra-ui/react";
import DataWrapper from "../../component/DataWrapper";
import Header from "../../component/Header";
import Hero from "./component/Hero";
import { useEffect, useContext } from "react";
import DataContext from "../../contexts/DataContext";
import CateoryCardList from "./component/CateoryCardList";
import DataCard from "./component/DataCard";

const DataSources = () => {
  const { setTabIndex } = useContext(DataContext);

  useEffect(() => {
    setTabIndex(0);
  }, []);
  return (
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataWrapper>
          <CateoryCardList>
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
          </CateoryCardList>
        </DataWrapper>
      </VStack>
    </Box>
  );
};
export default DataSources;
