import CategoryContainner from "./CategoryContainner";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import { isTemplateSpan } from "typescript";

const categories: any[] = [
  { name: "All", items: [] },
  { name: "Appliances", items: [] },
  { name: "Blogging", items: [] },
  { name: "Calenders", items: [] },
  { name: "Clocks", items: [] },
  { name: "Cloud Storage", items: [] },
  { name: "Communication", items: [] },
  { name: "Entertainment", items: [] },
  { name: "Finance", items: [] },
  { name: "Games", items: [] },
  { name: "Health and Fitness", items: [] },
  { name: "Location and Navigation", items: [] },
  { name: "Security", items: [] },
];

const setCategories = (dataSources: [any], category?: string) => {
  dataSources.map((source: any) => {
    source.Categories.multi_select.map((item: any) =>
      categories.map((cat) => {
        if (cat.name == item.name) {
          cat.items.push(source);
        }
      })
    );
  });
};

const CateoryCardList = () => {
  const { dataSources } = useContext(DataContext);

  useEffect(() => {
    if (dataSources) {
      setCategories(dataSources);
      console.log(categories);
    }
  }, [dataSources]);

  return (
    <VStack width={"full"}>
      {categories.map(
        (category) =>
          category.items.length && <CategoryContainner category={category} />
      )}
    </VStack>
  );
};
export default CateoryCardList;
