import { Box, HStack } from "@chakra-ui/react";
import DataToggle from "./DataToggle";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  tabIndex: number;
  // any props that come into the component
}

const DataWrapper = ({ children, tabIndex }: Props) => {
  return (
    <>
      <DataToggle tabIndex={tabIndex} />
      <Box width={"full"}>
        <HStack maxW={"container.xl"} mx={"auto"} py={"8"} px={"12"}>
          <Sidebar />
          {/* data sources */}
          {children}
        </HStack>
      </Box>
    </>
  );
};
export default DataWrapper;
