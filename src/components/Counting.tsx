import React, { useState } from "react";
import ListItems from "./ListItems";

const Counting = () => {
  const [items, setItems] = useState([12, 34, 56, 78]);

  return (
    <div>
      <div>
        {items.map((item) => (
          <ListItems key={item} name={item} />
        ))}
      </div>
      <button onClick={() => setItems([10, ...items])}>Main Increment</button>
    </div>
  );
};

export default Counting;
