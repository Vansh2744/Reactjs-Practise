import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Counting from "./components/Counting";
import Header from "./components/Header";
import ReducerApp from "./components/ReducerApp";
import { useUsername } from "./components/CustomHook";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import ErrorBoundary from "./components/ErrorBoundary";
// import Profile from "./components/Profile";

const Profile = lazy(() => import("./components/Profile"));

function App() {
  const [count, setCount] = useState(0);
  // const [value, setValue] = useState(0);
  // const value = useRef(0);
  // const color = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   value.current = value.current + 1;
  // });

  // const calculateCube = (num: number) => {
  //   console.log("Cube Calculated");

  //   return num ** 3;
  // };

  // const result = useMemo(() => calculateCube(value), [value]);

  // const calculateFact = useCallback(() => {}, []);

  const [show, setShow] = useState(false);

  const [username, setUsername] = useUsername("Vansh");

  const handleSubmit = () => {
    const name = document.getElementById("name");
    console.log(name?.value);
  };

  return (
    <div>
      {/* <div>
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
      </button> */}

      {/* <div>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <h1>Cube: {result}</h1>
      </div>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div> */}

      {/* <div>
        <Header fact={calculateFact} />
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div> */}

      {/* <div>
        <ReducerApp />
      </div> */}
      {/* <div>
        <h1>{username}</h1>
        <button onClick={() => setUsername("Vansh")}>Change Name</button>
      </div>
      <div>
        <input type="text" name="name" id="name" />
        <button onClick={handleSubmit}>Submit</button>
      </div> */}

      {/* <Child1 count={count} setCount={setCount} />
      <Child2 count={count} /> */}

      {/* <button onClick={() => setShow((prev) => !prev)}>Show</button>
      <div>
        {show && (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Profile />
          </Suspense>
        )}
      </div> */}
      <ErrorBoundary>
        <Profile />
      </ErrorBoundary>
    </div>
  );
}

export default App;
