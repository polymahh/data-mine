import { Heading, Text, VStack } from "@chakra-ui/react";
import BreadCrumbs from "./component/BreadCrumbs";
import DataAttributes from "./component/DataAttributes";
import Description from "./component/Description";

const SourceData = () => {
  return (
    <VStack alignItems={"start"} py={8} px={[4, 6, 10, 10, 12, 20]}>
      <BreadCrumbs />
      <Heading color={"whiteText"} pl={20} pb={14}>
        Oura
      </Heading>
      <VStack alignItems={"start"} width={"full"} px={{ base: 0, xl: 20 }}>
        <Description />
        <DataAttributes />
      </VStack>
    </VStack>
  );
};
export default SourceData;
