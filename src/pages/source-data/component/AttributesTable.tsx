import { Grid, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export const AttributesTable = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr minmax(auto, 540px) 1fr",
      }}
      width={"full"}
      bg={"bgItemD"}
    >
      <TableHead />
      <TableRow />
    </Grid>
  );
};
