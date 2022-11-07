import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import Header from "./component/Header";
import theme from "./theme";
import "@fontsource/open-sans";
import Hero from "./component/Hero";
import DataToggle from "./component/DataToggle";
import DataContent from "./component/DataContent";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataToggle />
        <DataContent />
      </VStack>
    </Box>
  </ChakraProvider>
);
