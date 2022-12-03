import DataContext from "../../../contexts/DataContext";
import DataCard from "../../data-sources/component/DataCard";
import { useState, useContext, useEffect, useRef } from "react";
import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

interface Props {
  category: string;
}

const SimilarDataSources = ({ category }: Props) => {
  const [scrollX, setScrollX] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const refScroll = useRef<any>();

  const { categories } = useContext(DataContext);

  const similarDataSources = categories.find(
    (cat: any) => cat.name === category
  );
  useEffect(() => {
    if (
      refScroll.current.scrollWidth >
      refScroll.current.clientWidth + scrollX
    ) {
      setIsScroll(true);
    } else setIsScroll(false);
  });

  return (
    <Flex width={"full"} position={"relative"}>
      <VStack
        position={"absolute"}
        top={0}
        right={0}
        width={"20%"}
        height={"full"}
        bgGradient="linear(to-l, bgLight 10%, #00000001)"
        justify={"center"}
        align={"end"}
        display={isScroll ? "flex" : "none"}
        zIndex={200}
      >
        <IconButton
          borderRadius={"full"}
          aria-label="scroll"
          icon={<Icon as={IoChevronForward} />}
          onClick={() => {
            if (
              scrollX + refScroll.current.clientWidth <
              refScroll.current.scrollWidth
            ) {
              refScroll.current.scrollBy(200, 0);
              setScrollX((prev) => prev + 200);
            } else setIsScroll(false);
          }}
        />
      </VStack>
      <VStack
        position={"absolute"}
        top={0}
        left={0}
        width={"20%"}
        height={"full"}
        bgGradient="linear(to-r, bgLight 10%, #00000001)"
        justify={"center"}
        align={"start"}
        display={scrollX ? "flex" : "none"}
        zIndex={200}
      >
        <IconButton
          borderRadius={"full"}
          aria-label="scroll"
          icon={<Icon as={IoChevronBack} />}
          onClick={() => {
            refScroll.current.scrollBy(-200, 0);
            setScrollX((prev) => prev - 200);
          }}
        />
      </VStack>
      <Flex
        ref={refScroll}
        gap={8}
        overflowX={"scroll"}
        p={2}
        pr={20}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {similarDataSources &&
          similarDataSources.items.map((item: any) => (
            <DataCard
              name={item.Name.title[0].plain_text}
              status={item.Status_.select}
            />
          ))}
      </Flex>
    </Flex>
  );
};
export default SimilarDataSources;
