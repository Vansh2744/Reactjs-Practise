import React, { useReducer } from "react";

const ReducerApp = () => {
  const counter = (state: any, action: any) => {
    if (action.type == "INC") {
      console.log(state);

      return { count: state.count + 1 };
    } else {
      console.log(state);

      return { count: state.count - 1 };
    }
  };
  const [state, dispatch] = useReducer(counter, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
};

export default ReducerApp;
