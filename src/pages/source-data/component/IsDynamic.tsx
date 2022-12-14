import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoLayers } from "react-icons/io5";

interface Props {
  dynamic: string;
}

const IsDynamic = ({ dynamic }: Props) => {
  return (
    <Flex display={dynamic ? "flex" : "none"} alignItems={"center"} gap={2}>
      <Icon as={IoLayers} fill={"dynamicColor"} boxSize={"5"} />
      <Text color={"whiteText"}>Dynamic Data</Text>
    </Flex>
  );
};
export default IsDynamic;
