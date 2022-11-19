import { Avatar, Text, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  img: string;
}

const DataCard = ({ name, img }: Props) => {
  return (
    <VStack
      spacing={8}
      py={8}
      bgGradient="linear(to-t, bgItem, bgItemD)"
      borderRadius={"10px"}
      width={"205px"}
      height={"195px"}
      _hover={{ cursor: "pointer" }}
    >
      <Avatar name={name} src={img} borderRadius={"lg"} />
      <Text
        width={"full"}
        px={4}
        color={"whiteText"}
        fontSize={"lg"}
        fontWeight={600}
        noOfLines={2}
      >
        {name}
      </Text>
    </VStack>
  );
};
export default DataCard;
