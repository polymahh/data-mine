import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  GridItem,
  Text,
} from "@chakra-ui/react";

interface Props {
  attribute: any;
}

const TableRow = ({ attribute }: Props) => {
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
        {attribute.attributeDescription}
      </Text>
      <Text
        p={4}
        display={{ base: "none", lg: "block" }}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
      >
        {attribute.dataCategory}
      </Text>
      <GridItem display={{ base: "block", lg: "none" }} colSpan={2}>
        <Accordion allowMultiple>
          <AccordionItem borderColor={"tableBorder"}>
            <h2>
              <AccordionButton fontSize={"12px"}>
                <Box flex="1" textAlign="left">
                  {attribute.sourceAttribute}
                </Box>
                <Box flex="1" textAlign="left">
                  {attribute.prifinaAttribute}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text pb={4} color={"#FFFFFF80"}>
                Attribute Description
              </Text>
              <Text pb={4}>{attribute.attributeDescription}</Text>
              <Flex justify={"space-between"}>
                <Text color={"#FFFFFF80"}>Data Category</Text>
                <Text>{attribute.dataCategory}</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
    </>
  );
};
export default TableRow;
