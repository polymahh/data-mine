import { Button, HStack, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";

const Sortby = () => {
  const { tabIndex } = useContext(DataContext);

  return (
    <HStack color={"whiteText"} spacing={6}>
      <Text fontSize="xl" fontWeight={600}>
        Sort By
      </Text>
      <Tabs bg={"bgItem"} borderBottom={"2px solid #4A4A4A"}>
        <TabList>
          <Tab
            mb={-1}
            _selected={{ borderBottom: "4px solid #ffffff" }}
            _hover={{
              backgroundColor: "bgDark",
              borderBottom: "4px solid #ffffff",
            }}
          >
            All
          </Tab>
          <Tab
            mb={-1}
            _selected={{ borderBottom: "4px solid #ffffff" }}
            _hover={{
              backgroundColor: "bgDark",
              borderBottom: "4px solid #ffffff",
            }}
          >
            Recently updated
          </Tab>
          <Tab
            mb={-1}
            _selected={{ borderBottom: "4px solid #ffffff" }}
            _hover={{
              backgroundColor: "bgDark",
              borderBottom: "4px solid #ffffff",
            }}
          >
            New
          </Tab>
          <Tab
            mb={-1}
            _selected={{ borderBottom: "4px solid #ffffff" }}
            _hover={{
              backgroundColor: "bgDark",
              borderBottom: "4px solid #ffffff",
            }}
          >
            Upcoming
          </Tab>
        </TabList>
      </Tabs>
      <Button
        px={10}
        variant="outline"
        borderColor={"primary"}
        color={"primary"}
        _hover={{ borderColor: "hover", color: "hover" }}
        _active={{ borderColor: "active", color: "active" }}
      >
        {tabIndex ? "Request Connector" : "Request Data Source"}
      </Button>
    </HStack>
  );
};
export default Sortby;
