import { Flex, Text, VStack } from "@chakra-ui/react";

interface Props {
  docs: string;
  api: string;
}

const Links = ({ docs, api }: Props) => {
  return (
    <VStack color={"whiteText"} fontSize={"20px"} alignItems={"left"}>
      <Flex gap={2} alignItems={"center"}>
        Source Docs:{" "}
        <Text color={"linkText"} fontSize={"18px"}>
          {docs}
        </Text>
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        API:{" "}
        <Text color={"linkText"} fontSize={"18px"}>
          {api}
        </Text>
      </Flex>
    </VStack>
  );
};
export default Links;
