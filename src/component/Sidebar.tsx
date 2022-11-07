import { VStack, Button, Heading, Text, Box } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack alignItems={"start"} bg={"bgItem"} p={"6"} borderRadius={"8px"}>
      <Text color={"whiteText"} fontSize="24px" textAlign={"left"}>
        Categories
      </Text>
      <Button variant={"select"}>All</Button>
      <Button variant={"select"}>Appliances</Button>
      <Button variant={"select"}>Blogging</Button>
      <Button variant={"select"}>Calebders</Button>
      <Button variant={"select"}>Clocks</Button>
      <Button variant={"select"}>Cloud Storage</Button>
      <Button variant={"select"}>Communication</Button>
      <Button variant={"select"}>Entertainment</Button>
      <Button variant={"select"}>Finance</Button>
      <Button variant={"select"}>Games</Button>
      <Button variant={"select"}>Health and Fitness</Button>
      <Button variant={"select"}>Location and Navigation</Button>
      <Button variant={"select"}>Security</Button>
    </VStack>
  );
};
export default Sidebar;
