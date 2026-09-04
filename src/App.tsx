import React, { useEffect, useRef, useState } from "react";
import Counting from "./components/Counting";

function App() {
  const [count, setCount] = useState(0);
  const value = useRef(0);
  const color = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    value.current = value.current + 1;
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
      <div ref={color}>
        <h1>{value.current}</h1>
      </div>
      <button
        onClick={() => {
          if (color.current) {
            color.current.style.backgroundColor = "cyan";
          }
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
