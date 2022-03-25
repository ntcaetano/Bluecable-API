import { createContext, ReactNode, useEffect, useState } from "react";

// type Tema = "dark" | "";

type AppContextData = {
  tema?: string;
  AlternarTema?: () => void;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider(props) {
  const [tema, setTema] = useState('dark')
  
  function AlternarTema() {
    const novoTema = tema === "" ? "dark" : ""
    setTema(novoTema);
    localStorage.setItem('tema', novoTema)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    setTema(temaSalvo)
  }, [])


  return (
    <AppContext.Provider
      value={{
        tema,
        AlternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
