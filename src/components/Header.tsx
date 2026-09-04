import React, { memo } from "react";

const Header = ({ fact }) => {
  console.log("Header Rendered");

  return <div>Header</div>;
};

export default memo(Header);
