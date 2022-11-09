import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      width={"full"}
      bgGradient="linear(to-r, bgLight, bgDark)"
      style={{ marginTop: "62px" }}
    >
      <Flex
        // maxW={"container.xl"}
        pr={[4, 10, 12, 40]}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Image
          src="./data_connectors_graphic.png"
          py={16}
          alignSelf={"start"}
        />

        <VStack
          color={"whiteText"}
          alignItems={"flex-start"}
          pl={[4, 10, 12]}
          pt={10}
        >
          <Heading
            size="2xl"
            fontSize="56px"
            fontWeight={300}
            textAlign={"left"}
            lineHeight={"0.9"}
          >
            <span style={{ fontWeight: "700" }}>RICH </span>HASSLE
            <br />
            FREE
            <span style={{ fontWeight: "700" }}> USER DATA</span>
          </Heading>
          <Text
            fontSize="2xl"
            noOfLines={4}
            color={"primary"}
            fontWeight={600}
            textAlign={"left"}
          >
            WITH PRIFINA DATA SOURCES
          </Text>
          <Text
            fontSize="lg"
            fontWeight={600}
            color={"grayText"}
            textAlign={"left"}
            maxW={"400px"}
          >
            Prifina helps users retreive, agregate and organize thier personal
            data in one loction. For developers this means you can build on
            incredibly rich sets of data combined in near limitless ways
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};
export default Hero;
