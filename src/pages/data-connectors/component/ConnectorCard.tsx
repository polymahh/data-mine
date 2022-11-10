import { Flex, Image, SimpleGrid, Text, VStack, Wrap } from "@chakra-ui/react";
import ConnectorTag from "./ConnectorTag";

const DataCard = () => {
  return (
    <VStack
      spacing={4}
      p={8}
      pt={14}
      bgGradient="linear(to-t, bgItem, bgLight)"
      borderRadius={"10px"}
      alignItems={"start"}
      width={"318px"}
    >
      <Wrap spacing={4}>
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
      </Wrap>
      <Text color={"whiteText"} fontSize={"lg"} fontWeight={600}>
        Prifina/routePurchaseRate
      </Text>
      <Text color={"whiteText"} fontSize={"md"}>
        Compare historical purchace data,
        <br />
        location and GPS and ratings data.
      </Text>
      <Wrap spacing={2} minH={"100px"} justifyContent={"end"}>
        <ConnectorTag text={"Health and Fitness"} />
      </Wrap>
    </VStack>
  );
};
export default DataCard;
