import { Flex, Text } from "@chakra-ui/react";
import CategoryTag from "../data-table/CategoryTag";

interface Props {
  attribute: any;
}

const ZoomRow = ({ attribute }: Props) => {
  return (
    <>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.sourceAttribute}
      </Text>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.prifinaAttribute}
      </Text>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.Aggregate}
      </Text>
      <Flex
        display={{ base: "none", lg: "flex" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
        align={"center"}
        justify={"center"}
        px={2}
      >
        <CategoryTag name={attribute.dataCategory} />
      </Flex>
    </>
  );
};
export default ZoomRow;
