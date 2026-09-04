import React, { memo, useContext } from "react";
import { profileContext, type Profile } from "./ProfileContext";

const Header = ({ fact }) => {
  const { name, email } = useContext(profileContext) as Profile;
  console.log("Header Rendered");

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default memo(Header);
