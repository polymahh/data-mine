import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const DataToggle = () => {
  return (
    <Box width={"full"}>
      <Tabs
        variant="unstyled"
        color={"whiteText"}
        bgGradient="linear(to-r, bgLight 40%, primary 70%)"
        m="auto"
      >
        <TabList maxW={"container.xl"} mx={"auto"}>
          <Tab
            px={10}
            fontSize={"lg"}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
          >
            DATA SOURCES
          </Tab>
          <Tab
            px={8}
            fontSize={"lg"}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
          >
            DATA CONNECTORS
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
export default DataToggle;
