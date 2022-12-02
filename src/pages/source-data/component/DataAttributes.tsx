import { Flex, Text, VStack } from "@chakra-ui/react";
import { AttributesTable } from "./data-table/AttributesTable";

const DataAttributes = () => {
  return (
    <VStack width={"full"} alignItems={"start"} color={"whiteText"}>
      <Flex fontSize={"lg"} p={4} pt={0} gap={2}>
        <Text>Data Attributes</Text>
        <Text color={"primary"}>(32)</Text>
      </Flex>

      <AttributesTable />
    </VStack>
  );
};
export default DataAttributes;
