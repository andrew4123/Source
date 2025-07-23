import { MainContext } from "./MainContext";

export function MainContextProvider({ children }) {
  const id = {};

  return <MainContext.Provider value={{ id }}>{children}</MainContext.Provider>;
}
