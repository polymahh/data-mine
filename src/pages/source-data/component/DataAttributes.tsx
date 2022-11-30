import { Text, VStack } from "@chakra-ui/react";
import { AttributesTable } from "./AttributesTable";

const DataAttributes = () => {
  return (
    <VStack width={"full"} alignItems={"start"} color={"whiteText"}>
      <Text>Data Attributes (42)</Text>
      <AttributesTable />
    </VStack>
  );
};
export default DataAttributes;
