import { createContext, useState } from "react";
import { ReactNode } from "react";

const DataContext = createContext<any>({});

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export function DataProvider({ children }: Props) {
  const [dataSources, setDataSources] = useState(null);

  const handleDataSources = (data: any) => {
    setDataSources(data);
  };

  return (
    <DataContext.Provider
      value={{
        dataSources,
        handleDataSources,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
