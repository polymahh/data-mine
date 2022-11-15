import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import DataCard from "./DataCard";
const CategoryContainner = ({ category }: any) => {
  return (
    <>
      <Text color={"whiteText"} textAlign={"center"} width={"full"}>
        {category.name}
      </Text>
      <SimpleGrid
        minChildWidth="205px"
        spacing={8}
        width={"full"}
        justifyItems={"left"}
      >
        {category.items.map((item: any) => (
          <DataCard name={item.Name.title[0].plain_text} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CategoryContainner;
