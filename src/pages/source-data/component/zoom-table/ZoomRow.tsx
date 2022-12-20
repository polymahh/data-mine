import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import CategoryTag from "../data-table/CategoryTag";

interface Props {
  attribute: any;
}

const ZoomRow = ({ attribute }: Props) => {
  return (
    <>
      <Flex
        p={4}
        borderRight={"1px"}
        borderBottom={"1px"}
        borderColor={"tableBorder"}
        alignItems={"center"}
      >
        <Text
          transform={"rotate(180deg)"}
          sx={{
            "writing-mode": "tb-rl",
          }}
          fontWeight={600}
          letterSpacing={"1px"}
          opacity={"70%"}
        >
          {attribute.objectName}
        </Text>
      </Flex>
      <GridItem colSpan={3} borderBottom={"1px"} borderColor={"tableBorder"}>
        {attribute.att.map((obj: any) => (
          <Grid
            gridTemplateColumns={"1fr 1fr 1fr "}
            width={"full"}
            bg={"bgItemD"}
            fontSize={"12px"}
            opacity={"70%"}
          >
            <Text p={4}>
              {obj.properties["Attribute Name"].title[0]["plain_text"]}
            </Text>
            <Text p={4}>
              {obj.properties["Attribute Name"].title[0]["plain_text"]}
            </Text>
            <Text p={4}>obj.Aggregate</Text>
          </Grid>
        ))}
      </GridItem>
      <Flex
        borderBottom={"1px"}
        borderLeft={"1px"}
        borderColor={"tableBorder"}
        align={"center"}
        justify={"left"}
        px={2}
      >
        <Center pt={6} alignSelf={"flex-start"}>
          <CategoryTag name={"Health"} />
        </Center>
      </Flex>
    </>
  );
};
export default ZoomRow;
