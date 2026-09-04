import React, { useEffect, useRef, useState } from "react";
import Counting from "./components/Counting";

function App() {
  const [count, setCount] = useState(0);
  const value = useRef(0);

  useEffect(() => {
    value.current += 1;
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
      <div>
        <h1>{value.current}</h1>
      </div>
    </div>
  );
}

export default App;
