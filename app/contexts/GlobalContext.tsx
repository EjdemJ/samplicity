"use client";

import { createContext, useState } from "react";

interface GlobalContextType {
  name: string;
  isLoggedIn: boolean;
}

export const GlobalContext = createContext<GlobalContextType>({
  name: "Samplicity",
  isLoggedIn: false,
});

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Samplicity");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider value={{ name, isLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
