import { useState } from "react";

export const useUsername = (initialname: string) => {
  const [username, changeUsername] = useState(
    () => localStorage.getItem("username") || initialname,
  );

  const setUsername = (name: string) => {
    localStorage.setItem("username", name);
    changeUsername(name);
  };
  return [username, setUsername] as const;
};
