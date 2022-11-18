import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const SearchInput = () => {
  const [focus, setFocus] = useState(false);
  const location = useLocation();

  const tabIndex = location.pathname.includes("/data-connectors") ? 1 : 0;

  return (
    <Flex
      gap={4}
      width={"full"}
      direction={["column", "row"]}
      justify={"center"}
    >
      <InputGroup _hover={{ color: "searchText" }}>
        <InputLeftElement
          pointerEvents="none"
          display={{ base: "none", xl: "flex" }}
          children={
            <Icon
              as={IoSearchSharp}
              fontSize={"2xl"}
              color={focus ? "primary" : "searchText"}
              mt={3}
            />
          }
        />
        <Input
          borderRadius={{ base: "lg", xl: "lg" }}
          px={[4, 4, 4, 4, 12]}
          py={6}
          color={"searchText"}
          type={"text"}
          borderColor={"searchBorder"}
          bg={"bgDark"}
          _hover={{ borderColor: "hover" }}
          focusBorderColor={"primary"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder="Search for data attributes, categories or apps"
        />
        <InputRightElement
          pointerEvents="none"
          children={
            <Icon
              as={IoClose}
              fontSize={"2xl"}
              color={focus ? "primary" : "bgDark"}
              mr={{ base: 28, xl: 4 }}
              mt={3}
            />
          }
        />
        <InputRightAddon
          display={{ base: "flex", xl: "none" }}
          py={6}
          bg={"primary"}
          borderColor={"primary"}
          children={
            <Icon as={IoSearchSharp} fontSize={"2xl"} color={"bgLight"} />
          }
        />
      </InputGroup>
      <Button
        px={10}
        alignSelf={"center"}
        bg="primary"
        width={"fit-content"}
        _hover={{ bg: "hover" }}
        _active={{ bg: "active" }}
        display={{ base: "none", xl: "flex" }}
      >
        {tabIndex ? "Search Connectors" : "Search data sources"}
      </Button>
    </Flex>
  );
};
export default SearchInput;
