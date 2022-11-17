import { createContext, useState } from "react";
import { ReactNode } from "react";

const initialCategories: any[] = [
  { name: "All", items: [] },
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

    console.log(categories);
  };

  return (
    <DataContext.Provider
      value={{
        dataSources,
        handleDataSources,
        categories,
        handleCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
