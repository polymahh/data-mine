import { Flex, Text, VStack } from "@chakra-ui/react";
import { fetchData } from "../../../utils/fetcher";
import { AttributesTable } from "./data-table/AttributesTable";
import { useEffect, useRef, useState } from "react";

interface Props {
  sourceID: string;
}

const DataAttributes = ({ sourceID }: Props) => {
  const mounted = useRef(true);
  const [attributes, setAttributes] = useState<any>(null);

  const getAttributes = async () => {
    const data = await fetchData(
      `https://prifina-data-mine.vercel.app/data-sources/${sourceID}`
    );
    setAttributes(data.results);
  };

  useEffect(() => {
    if (mounted.current && attributes == null) {
      mounted.current = false;
      getAttributes();
    } else console.log("attributes are here");
  }, []);

  return (
    <VStack width={"full"} alignItems={"start"} color={"whiteText"}>
      <Flex fontSize={"lg"} p={4} pt={0} gap={2}>
        {attributes == null && <Text>Loading Data Attributes ... </Text>}

        {attributes && attributes[0] && (
          <>
            <Text>Data Attributes</Text>
            <Text color={"primary"}>({attributes.length})</Text>
          </>
        )}
        {attributes && !attributes[0] && <Text>No Attributes Availabale</Text>}
      </Flex>

      {attributes && <AttributesTable attributes={attributes} />}
    </VStack>
  );
};
export default DataAttributes;
