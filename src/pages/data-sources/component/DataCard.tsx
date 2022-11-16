import { Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
}

const DataCard = ({ name }: Props) => {
  return (
    <VStack
      spacing={8}
      py={10}
      bgGradient="linear(to-t, bgItem, bgItemD)"
      borderRadius={"10px"}
      width={"205px"}
    >
      <Image src={"./gmail-icon.png"} mx={16} />
      <Text color={"whiteText"} fontSize={"lg"} fontWeight={600}>
        {name}
      </Text>
    </VStack>
  );
};
export default DataCard;
