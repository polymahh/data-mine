import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";

const DataToggle = () => {
  const { tabIndex, setTabIndex } = useContext(DataContext);

  return (
    <Box width={"full"}>
      <Tabs
        defaultIndex={tabIndex}
        variant="unstyled"
        color={"whiteText"}
        bgGradient="linear(to-r, bgLight 40%, primary 70%)"
        m="auto"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList maxW={"container.xl"} mx={"auto"}>
          <Tab
            px={10}
            fontSize={"lg"}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
          >
            <Link to="/data-sources">DATA SOURCES</Link>
          </Tab>
          <Tab
            px={8}
            fontSize={"lg"}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
          >
            <Link to="/data-connectors">DATA CONNECTORS</Link>
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
export default DataToggle;
