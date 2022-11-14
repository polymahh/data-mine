import { Box, VStack } from "@chakra-ui/react";
import DataWrapper from "../../component/DataWrapper";
import Header from "../../component/Header";
import Hero from "./component/Hero";
import { useEffect, useContext } from "react";
import DataContext from "../../contexts/DataContext";
import CateoryCardList from "./component/CateoryCardList";
import DataCard from "./component/DataCard";
import { fetchData } from "../../utils/fetcher";

const DataSources = () => {
  const { dataSources, handleDataSources } = useContext(DataContext);

  const getDataSources = async () => {
    const data = await fetchData("http://localhost:8000/data-sources");
    handleDataSources(data);
  };

  useEffect(() => {
    if (dataSources == null) {
      getDataSources();
    } else console.log("data is here");
  }, []);

  useEffect(() => {
    console.log(dataSources);
  }, [dataSources]);

  return (
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataWrapper>
          <CateoryCardList />
        </DataWrapper>
      </VStack>
    </Box>
  );
};
export default DataSources;
