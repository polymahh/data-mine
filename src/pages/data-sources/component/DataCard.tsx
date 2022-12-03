import { StatusBadge } from "../../../component/StatusBadge";
import { Avatar, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  status: any;
}

const DataCard = ({ name, status }: Props) => {
  const [icon, setIcon] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const responce = await import(
          `../../../assets/icons/${name
            .toLowerCase()
            .trim()
            .replace(/ /g, "-")}_icon.png`
        );
        setIcon(responce.default);
      } catch (err) {
        setIcon(null);
      }
    };
    load();
  }, [name]);
  return (
    <VStack
      spacing={8}
      pt={10}
      bgGradient="linear(to-t, bgItem, bgItemD)"
      borderRadius={"10px"}
      width={"205px"}
      minW={"205px"}
      height={"195px"}
      _hover={{
        cursor: "pointer",
        background: "bgItem",
        boxShadow: " inset 0px 0px 0px 1px  #6AD9C1",
      }}
      position={"relative"}
      overflow={"hidden"}
      onClick={() =>
        navigate(
          `/data-sources/${name.toLowerCase().trim().replace(/ /g, "-")}`
        )
      }
    >
      <Avatar
        name={name}
        src={icon || ""}
        borderRadius={"2xl"}
        width={"60px"}
        height={"60px"}
      />
      <Text
        width={"full"}
        px={4}
        color={"whiteText"}
        fontSize={"lg"}
        fontWeight={600}
        noOfLines={2}
        textAlign={"center"}
      >
        {name}
      </Text>
      <StatusBadge status={status ? status.name : "Requested"} />
    </VStack>
  );
};
export default DataCard;
