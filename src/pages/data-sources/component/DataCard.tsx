import { Image, Text, VStack } from "@chakra-ui/react";

const DataCard = () => {
  return (
    <VStack
      spacing={8}
      py={10}
      bgGradient="linear(to-t, bgItem, bgLight)"
      borderRadius={"10px"}
      width={"205px"}
    >
      <Image src={"./gmail-icon.png"} mx={16} />
      <Text color={"whiteText"} fontSize={"lg"} fontWeight={600}>
        Gmail
      </Text>
    </VStack>
  );
};
export default DataCard;
