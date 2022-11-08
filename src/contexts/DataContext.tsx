import { createContext, useState } from "react";
import { ReactNode } from "react";

const DataContext = createContext<any>({});

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export function DataProvider({ children }: Props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DataContext.Provider
      value={{
        tabIndex,
        setTabIndex,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
