import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { CategoryList } from "./CategoryList";
import { Flex } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // any props that come into the component
}

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={"bgItem"} color={"whiteText"}>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody pb={12}>
          <VStack spacing={6}>
            <Button variant="square">PLATFORM</Button>
            <Button variant="square" border="1px">
              DATA MINE
            </Button>
            <Button variant="square">YOUR DATA</Button>
            <Button variant="square">SLACK</Button>
          </VStack>
          <hr
            style={{
              border: "solid 1px white",
              width: "99%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <CategoryList />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileMenu;