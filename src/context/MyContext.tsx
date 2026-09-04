import { createContext, type ReactNode } from "react";

export const MyData = createContext({ name: "", email: "" });

const MyContext = ({ children }: { children: ReactNode }) => {
  return (
    <MyData.Provider value={{ name: "Vansh", email: "vansh@gmail.com" }}>
      {children}
    </MyData.Provider>
  );
};

export default MyContext;
