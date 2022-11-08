import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box width={"full"} bgGradient="linear(to-r, bgDark, bgLight)">
      <HStack maxW={"container.xl"} pl={32} m={"auto"}>
        <VStack color={"whiteText"} alignItems={"flex-start"} pr={16}>
          <Heading
            size="2xl"
            noOfLines={2}
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
          >
            Prifina helps users retreive, agregate and organize thier personal
            data in one loction. For developers this means you can build on
            incredibly rich sets of data combined in near limitless ways
          </Text>
        </VStack>
        <Image src="./data_source_graphic.png" />
      </HStack>
    </Box>
  );
};
export default Hero;
