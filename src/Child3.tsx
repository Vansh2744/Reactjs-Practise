import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Child3 = () => {
  const data = useContext(UserContext);

  return (
    <>
      <h1>{data?.company}</h1>
    </>
  );
};

export default Child3;
