import { createContext, useState } from "react";
import { ReactNode } from "react";
import Sortby from "../component/Sortby";

const initialCategories: any[] = [
  { name: "Appliances", items: [] },
  { name: "Blogging", items: [] },
  { name: "Calenders", items: [] },
  { name: "Clocks", items: [] },
  { name: "Cloud Storage", items: [] },
  { name: "Communication", items: [] },
  { name: "Entertainment", items: [] },
  { name: "Finance", items: [] },
  { name: "Games", items: [] },
  { name: "Health and Fitness", items: [] },
  { name: "Location and Navigation", items: [] },
  { name: "Security", items: [] },
];

const DataContext = createContext<any>({});

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export function DataProvider({ children }: Props) {
  const [dataSources, setDataSources] = useState(null);
  const [categories, setCategories] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState(["All"]);
  const [sortby, setSortby] = useState("New");

  const handleDataSources = (data: any) => {
    setDataSources(data);
  };

  const handleCategories = () => {
    if (dataSources && categories == null) {
      [...dataSources].map((source: any) => {
        source.Categories.multi_select.map((item: any) =>
          initialCategories.map((cat) => {
            if (cat.name == item.name) {
              cat.items.push(source);
            }
          })
        );
      });

      setCategories(initialCategories);
    }
    if (categories !== null && selectedCategory[0] !== "All") {
      console.log(selectedCategory);

      const filteredCategory = initialCategories.filter((category) =>
        selectedCategory.includes(category.name)
      );
      setCategories(filteredCategory);
    }
    if (categories !== null && selectedCategory[0] === "All") {
      setCategories(initialCategories);
    }
  };

  // const handleSortby = () => {
  //   if (dataSources !== null) {
  //     [...dataSources].map((item: any) => {
  //       console.log(new Date(item["Last edit at"].last_edited_time));
  //     });
  //   }
  // };

  return (
    <DataContext.Provider
      value={{
        dataSources,
        handleDataSources,
        categories,
        handleCategories,
        selectedCategory,
        setSelectedCategory,
        sortby,
        setSortby,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
