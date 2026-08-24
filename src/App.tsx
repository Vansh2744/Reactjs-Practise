import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen">
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          IncrementbyAmount
        </button>
      </div>
    </>
  );
}

export default App;
