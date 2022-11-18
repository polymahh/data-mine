import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const DataToggle = () => {
  let navigate = useNavigate();

  const location = useLocation();

  return (
    <Box
      width={"full"}
      position={"-webkit-sticky"}
      style={{
        zIndex: 90,
        position: "sticky",
        top: "62px",
      }}
    >
      <Tabs
        defaultIndex={location.pathname.includes("/data-connectors") ? 1 : 0}
        variant="unstyled"
        color={"whiteText"}
        bgGradient={{
          base: "linear(to-r, bgLight 80%, primary 95%)",
          xl: "linear(to-r, bgLight 40%, primary 70%)",
        }}
      >
        <TabList
        // maxW={"container.xl"} mx={"auto"}
        >
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
