import React, { useReducer, useState } from "react";

const UseReducerExample = () => {
  //   const countReducer = (state:any, action:any) => {
  //     if (action.type == "increment") {
  //       return state + 1;
  //     } else if (action.type == "decrement") {
  //       return state - 1;
  //     } else if (action.type == "reset") {
  //       return 0;
  //     } else {
  //       return state;
  //     }
  //   };

  //   const [count, dispatch] = useReducer(countReducer, 0);

  const usersReducer = (state: any, action: any) => {
    if (action.type == "insert") {
      return [...state, { ...action.item, id: state.length + 1 }];
    } else if (action.type == "delete") {
      return state.filter((item: any) => item.id != action.item.id);
    } else {
      return [];
    }
  };

  const [users, dispatch] = useReducer(usersReducer, []);

  const [item, setItem] = useState({
    name: "",
    email: "",
    age: "",
  });
  const hangeChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      {/* <h4>{count}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button> */}
      <div>
        <input
          name="name"
          placeholder="Name"
          value={item.name}
          onChange={hangeChange}
          type="text"
        />
        <input
          name="email"
          placeholder="Email"
          value={item.email}
          onChange={hangeChange}
          type="text"
        />
        <input
          placeholder="Age"
          name="age"
          value={item.age}
          onChange={hangeChange}
          type="text"
        />
        <button onClick={() => dispatch({ type: "insert", item })}>
          Insert
        </button>
      </div>
      <div className="flex flex-col gap-20">
        {users.map((item: any) => (
          <div className="flex gap-10">
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.age}</p>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "delete", item: { id: item.id } })
              }
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseReducerExample;
