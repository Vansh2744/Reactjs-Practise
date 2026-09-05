import { useState } from "react";

export const useUsername = (initialname: string) => {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || initialname,
  );
  return [username, setUsername] as const;
};
