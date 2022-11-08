import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  const { tabIndex } = useContext(DataContext);

  return (
    <HStack width={"full"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={IoSearchSharp} color={"primary"} />}
        />
        <Input
          color={"searchText"}
          type={"text"}
          borderColor={"searchBorder"}
          bg={"bgDark"}
          _hover={{ borderColor: "hover" }}
          focusBorderColor={"primary"}
          placeholder="Search for data attributes, categories or apps"
        />
      </InputGroup>
      <Button
        px={10}
        bg="primary"
        _hover={{ bg: "hover" }}
        _active={{ bg: "active" }}
      >
        {tabIndex ? "Search Connectors" : "Search data sources"}
      </Button>
    </HStack>
  );
};
export default SearchInput;
