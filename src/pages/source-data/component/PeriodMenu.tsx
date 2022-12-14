import { Tab, TabList, Tabs } from "@chakra-ui/react";

const periodArr = ["Day", "Week", "Month", "Year"];

const PeriodMenu = () => {
  return (
    <Tabs borderBottomColor={"#130C45"}>
      <TabList>
        {periodArr.map((tab) => (
          <Tab
            w={"120px"}
            px={8}
            mb={-1}
            _selected={{ borderBottom: "6px solid #6AD9C1" }}
            _hover={{
              backgroundColor: "catHover",
              borderBottom: "6px solid #ffffff",
            }}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
export default PeriodMenu;
