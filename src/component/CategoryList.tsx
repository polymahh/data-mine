import { Button, Text } from "@chakra-ui/react";
import React from "react";

const categories = [
  "All",
  "Appliances",
  "Blogging",
  "Calenders",
  "Clocks",
  "Cloud Storage",
  "Communication",
  "Entertainment",
  "Finance",
  "Games",
  "Health and Fitness",
  "Location and Navigation",
  "Security",
];
export function CategoryList() {
  return (
    <>
      <Text color={"whiteText"} fontSize="24px" textAlign={"left"}>
        Categories
      </Text>
      {categories.map((category) => (
        <Button key={category} variant={"select"} fontWeight={"400"}>
          {category}
        </Button>
      ))}
    </>
  );
}
