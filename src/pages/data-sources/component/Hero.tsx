import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      width={"full"}
      bgGradient="linear(to-r, bgDark, bgLight) "
      style={{ marginTop: "62px" }}
    >
      <Flex
        // maxW={"container.xl"}
        py={14}
        pl={[4, 4, 4, 32]}
        gap={8}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack color={"whiteText"} alignItems={"start"} minW={"350px"}>
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
        <Image
          src="./data_source_graphic.png"
          pr={[2, 4, 8, 24]}
          objectFit={"scale-down"}
        />
      </Flex>
    </Box>
  );
};
export default Hero;
