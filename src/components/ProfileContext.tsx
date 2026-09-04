import React, { createContext } from "react";

export interface Profile {
  name: string;
  email: string;
}

export const profileContext = createContext<Profile | undefined>(undefined);

const ProfileContext = ({ children }: { children: any }) => {
  return (
    <profileContext.Provider
      value={{ name: "Vansh", email: "vansh@gmail.com" }}
    >
      {children}
    </profileContext.Provider>
  );
};

export default ProfileContext;
