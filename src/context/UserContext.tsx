import { createContext } from "react";

interface UserType {
  name: string;
  role: string;
  company: string;
}

export const UserContext = createContext<UserType | undefined>(undefined);
