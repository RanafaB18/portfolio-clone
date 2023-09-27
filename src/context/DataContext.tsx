import React, { Dispatch, SetStateAction, createContext, useState } from "react";

interface DataContextType {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}
export const DataContext = createContext<DataContextType | null>(null);

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return <DataContext.Provider value={{
    open,
    setOpen
  }}>
    { children }
  </DataContext.Provider>;
};

export default DataContextProvider;
