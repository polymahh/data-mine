import { Box, HStack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const DataContent = () => {
  return (
    <Box width={"full"}>
      <HStack maxW={"container.xl"} mx={"auto"} py={"8"} px={"14"}>
        <Sidebar />
        <Box color={"whiteText"}>data</Box>
      </HStack>
    </Box>
  );
};
export default DataContent;
