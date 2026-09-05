import React from "react";

const Child1 = ({ count, setCount }) => {
  return (
    <div>
      <h2>Child1: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Child1;
