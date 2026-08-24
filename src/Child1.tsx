import React, { useContext } from "react";
import Child2 from "./Child2";
import { UserContext } from "./context/UserContext";

const Child1 = () => {
  const data = useContext(UserContext);
  return (
    <>
      <h1 className="">{data?.name}</h1>
    </>
  );
};

export default Child1;
