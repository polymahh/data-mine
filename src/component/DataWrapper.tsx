import { Box, HStack, VStack } from "@chakra-ui/react";
import DataToggle from "./DataToggle";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";
import SearchInput from "./SearchInput";
import ShowingCategories from "./ShowingCategories";
import Sortby from "./Sortby";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const DataWrapper = ({ children }: Props) => {
  return (
    <>
      <DataToggle />
      <Box width={"full"}>
        <HStack
          // maxW={"container.xl"}
          // mx={"auto"}
          py={"8"}
          px={"12"}
          spacing={"10"}
          align={"start"}
        >
          <Sidebar />
          <VStack alignItems={"start"} spacing={8} width={"full"}>
            <SearchInput />
            <ShowingCategories />
            <Sortby />
            {/* data sources */}
            {children}
          </VStack>
        </HStack>
      </Box>
    </>
  );
};
export default DataWrapper;
