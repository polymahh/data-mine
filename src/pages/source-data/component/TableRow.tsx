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

const TableRow = () => {
  return (
    <>
      <Text p={4} display={{ base: "none", lg: "block" }}>
        rmssd_5min
      </Text>
      <Text p={4} display={{ base: "none", lg: "block" }}>
        HRV_5_rmssd
      </Text>
      <Text p={4} display={{ base: "none", lg: "block" }}>
        The average HRV "calculated using rMSSD method" for each beginning 5
        minutes of the sleep period, the first period starting from
        sleep.bedtime_start.
      </Text>
      <Text p={4} display={{ base: "none", lg: "block" }}>
        Health
      </Text>
      <GridItem display={{ base: "block", lg: "none" }} colSpan={2}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  rmssd_5min
                </Box>
                <Box flex="1" textAlign="left">
                  HRV_5_rmssd
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text p={4}>Attribute Description</Text>
              <Text p={4}>
                The average HRV "calculated using rMSSD method" for each
                beginning 5 minutes of the sleep period, the first period
                starting from sleep.bedtime_start.
              </Text>
              <Flex justify={"space-between"}>rmssd_5min</Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
    </>
  );
};
export default TableRow;
