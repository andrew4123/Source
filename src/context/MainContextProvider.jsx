import { MainContext } from "./MainContext";
import { useState } from "react";

export function MainContextProvider({ children }) {
  const [data, setData] = useState({
    step: "phone",
    phoneString: "",
    passwordString: "",
    codeString: "",
  });

  return <MainContext.Provider value={{ data, setData }}>{children}</MainContext.Provider>;
}
