import { HStack, Button, chakra, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="bgDark" width={"full"}>
      <HStack
        justifyContent={"space-between"}
        px={[2, 4, 4, 16]}
        py={4}
        maxW={"container.xl"}
        m="auto"
      >
        <chakra.img src="logo.png" />
        <HStack as={"nav"} spacing={5}>
          <Button variant="square">PLATFORM</Button>
          <Button variant="square" border="1px">
            DATA MINE
          </Button>
          <Button variant="square">YOUR DATA</Button>
          <Button variant="square">SLACK</Button>
        </HStack>
      </HStack>
    </Box>
  );
};
export default Header;
