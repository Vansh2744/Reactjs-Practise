import React, { useState } from "react";

const ListItems = ({ name }: { name: number }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Name:{name}</h3>
      <h4>Count:{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ListItems;
