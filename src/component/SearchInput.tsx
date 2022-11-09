import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
} from "@chakra-ui/react";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  const { tabIndex } = useContext(DataContext);

  return (
    <Flex
      gap={4}
      width={"full"}
      direction={["column", "row"]}
      justify={"center"}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Icon
              as={IoSearchSharp}
              fontSize={"2xl"}
              color={"primary"}
              mt={3}
            />
          }
        />
        <Input
          py={6}
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
        alignSelf={"center"}
        bg="primary"
        width={"fit-content"}
        _hover={{ bg: "hover" }}
        _active={{ bg: "active" }}
      >
        {tabIndex ? "Search Connectors" : "Search data sources"}
      </Button>
    </Flex>
  );
};
export default SearchInput;
