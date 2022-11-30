import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Description = () => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const responce = await import(`../../../assets/icons/oura_icon.png`);
        setIcon(responce.default);
      } catch (err) {
        setIcon(null);
      }
    };
    load();
  }, []);

  return (
    <Flex
      width={"full"}
      color={"whiteText"}
      justifyContent={"space-between"}
      alignItems={"Center"}
      direction={{ base: "column", lg: "row" }}
    >
      <Box p={12} bg={"bgItem"} borderRadius={"xl"} mr={{ base: 0, lg: 12 }}>
        <Avatar
          name={"Oura"}
          src={icon || ""}
          borderRadius={"2xl"}
          width={"120px"}
          height={"120px"}
        />
      </Box>
      <VStack
        alignItems={{ base: "center", lg: "start" }}
        gap={6}
        py={{ base: 14, lg: 4 }}
        pl={{ base: 0, lg: 12 }}
        borderLeft={{ base: "0px", lg: "1px" }}
      >
        <Text fontSize={"24px"} fontWeight={700}>
          About Oura
        </Text>
        <Text
          maxW={"530px"}
          fontSize={"18px"}
          textAlign={{ base: "center", lg: "left" }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Text>
      </VStack>
    </Flex>
  );
};
export default Description;
