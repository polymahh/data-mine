import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import Header from "./component/Header";
import theme from "./theme";
import "@fontsource/open-sans";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh">
        <Header />
      </VStack>
    </Box>
  </ChakraProvider>
);
