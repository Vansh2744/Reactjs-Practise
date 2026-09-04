import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounted Interval");

    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => {
      clearInterval(interval);
      console.log("Cleared Interval");
    };
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default UseEffectExample;
