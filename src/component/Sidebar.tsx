import { VStack, Button, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack
      alignItems={"start"}
      bg={"bgItem"}
      p={"6"}
      borderRadius={"8px"}
      display={["none", "none", "flex"]}
    >
      <Text color={"whiteText"} fontSize="24px" textAlign={"left"}>
        Categories
      </Text>
      <Button variant={"select"} fontWeight={"400"}>
        All
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Appliances
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Blogging
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Calebders
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Clocks
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Cloud Storage
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Communication
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Entertainment
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Finance
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Games
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Health and Fitness
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Location and Navigation
      </Button>
      <Button variant={"select"} fontWeight={"400"}>
        Security
      </Button>
    </VStack>
  );
};
export default Sidebar;
