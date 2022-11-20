import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";

interface Props {
  category: string;
}
export function CategoryButton({ category }: Props) {
  const { selectedCategory, setSelectedCategory, handleCategories } =
    useContext(DataContext);
  return (
    <Button
      key={category}
      variant={"select"}
      fontWeight={"400"}
      border={selectedCategory.includes(category) ? "1px" : "none"}
      onClick={() => {
        if (category === "All") {
          setSelectedCategory(["All"]);
        } else {
          if (!selectedCategory.includes(category)) {
            const arr = selectedCategory.filter(
              (item: string) => item !== "All"
            );
            arr.push(category);
            setSelectedCategory(arr);
          }
        }
      }}
    >
      {category}
    </Button>
  );
}
