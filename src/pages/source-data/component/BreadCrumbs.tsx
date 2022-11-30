import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const BreadCrumbs = () => {
  return (
    <Flex alignItems={"center"} color={"breadcrumb"}>
      <Icon as={IoArrowBack} fontSize={"3xl"} mr={10} color={"whiteText"} />
      <Text>Data Source</Text>
      <Icon as={IoChevronForward} />
      <Text>Health and Fitness</Text>
      <Icon as={IoChevronForward} />
      <Text color={"whiteText"}>Oura</Text>
    </Flex>
  );
};
export default BreadCrumbs;
