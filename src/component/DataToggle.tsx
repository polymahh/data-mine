import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";

const DataToggle = () => {
  const { tabIndex, setTabIndex } = useContext(DataContext);

  let navigate = useNavigate();

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
            onClick={() => navigate("/data-sources")}
          >
            DATA SOURCES
          </Tab>
          <Tab
            px={8}
            fontSize={"lg"}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
            onClick={() => navigate("/data-connectors")}
          >
            DATA CONNECTORS
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
export default DataToggle;
