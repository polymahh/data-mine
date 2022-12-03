import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
import { fetchData } from "../../utils/fetcher";
import BreadCrumbs from "./component/BreadCrumbs";
import DataAttributes from "./component/DataAttributes";
import Description from "./component/Description";
import SimilarDataSources from "./component/SimilarDataSources";

const SourceData = () => {
  const param = useParams();
  const [filtred, setFiltred] = useState<any>(null);
  const { categories, handleDataSources, handleCategories, dataSources } =
    useContext(DataContext);

  const getDataSources = async () => {
    const data = await fetchData(
      "https://prifina-data-mine.vercel.app/data-sources"
    );
    handleDataSources(data);
  };

  useEffect(() => {
    if (categories) {
      const val =
        categories &&
        categories
          .map((cat: any) =>
            cat.items.find((item: any) =>
              item.Name.title[0].plain_text
                .toLowerCase()
                .trim()
                .replace(/ /g, "-")
                .includes(param.name)
            )
          )
          .find((item: any) => item);
      setFiltred(val);
      console.log(filtred);
    } else {
      getDataSources();
    }
  }, [categories, param.name]);

  useEffect(() => {
    handleCategories();
  }, [dataSources]);

  console.log(filtred);

  const name = filtred?.Name.title[0].plain_text;
  const category = filtred?.Categories.multi_select[0].name;

  return categories ? (
    filtred ? (
      <VStack alignItems={"start"} py={8} px={[4, 6, 10, 10, 12, 20]}>
        <BreadCrumbs name={name} category={category} />
        <Heading color={"whiteText"} pl={20} pb={14}>
          {name}
        </Heading>
        <VStack
          alignItems={"start"}
          width={"full"}
          px={{ base: 0, xl: 20 }}
          spacing={14}
        >
          <Description
            name={name}
            description={
              filtred?.Description.rich_text[0]?.plain_text || "Coming Soon ..."
            }
          />
          <DataAttributes />
          {categories && (
            <>
              <Text
                color={"whiteText"}
                textAlign={"left"}
                width={"full"}
                fontSize={"24px"}
              >
                Similar Data Sources
              </Text>

              <SimilarDataSources category={category} />
            </>
          )}
        </VStack>
      </VStack>
    ) : (
      <Text color={"whiteText"} p={4}>
        Not Found
      </Text>
    )
  ) : (
    <Text color={"whiteText"} p={4}>
      Loading ...
    </Text>
  );
};
export default SourceData;
