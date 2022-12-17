import { Flex, Text, VStack } from "@chakra-ui/react";

interface Props {
  docs: string;
  api: string;
}

const Links = ({ docs, api }: Props) => {
  return (
    <VStack
      color={"whiteText"}
      fontSize={"20px"}
      alignItems={"left"}
      width={"full"}
    >
      <Flex
        gap={2}
        alignItems={"center"}
        justifyContent={["center", "left"]}
        flexWrap={["wrap", "nowrap"]}
      >
        <Text whiteSpace={"nowrap"}>Source Docs: </Text>
        <Text noOfLines={1} color={"linkText"} fontSize={"18px"}>
          {docs}
        </Text>
      </Flex>
      <Flex
        gap={2}
        alignItems={"center"}
        justifyContent={["center", "left"]}
        flexWrap={["wrap", "nowrap"]}
      >
        API:{" "}
        <Text noOfLines={1} color={"linkText"} fontSize={"18px"}>
          {api}
        </Text>
      </Flex>
    </VStack>
  );
};
export default Links;
