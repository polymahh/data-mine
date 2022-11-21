import {
  Box,
  Flex,
  Heading,
  Hide,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

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
        pl={4}
        gap={[14, 14, 0, 12, 48]}
        direction={["column-reverse", "column-reverse", "row"]}
        justifyContent={{ base: "space-between", xl: "center" }}
        alignItems={"center"}
        overflow={"hidden"}
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
        <Box boxSize="auto" mr={[0, 0, "-25%", "-15%", 0]}>
          <Image
            src="./data_source_graphic.png"
            height={["full", "350px", "300px", "300px", "300px", "full"]}
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default Hero;
