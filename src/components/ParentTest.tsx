import React, { type ReactNode } from "react";

const ParentTest = ({ children }: { children: ReactNode }) => {
  return <h1>{children}</h1>;
};

export default ParentTest;
