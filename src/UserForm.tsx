import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/user/currentUserSlice";

const UserForm = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="text"
        placeholder="Enter Id"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter Email"
      />
      <button onClick={() => dispatch(setUser({ id, email }))}>Set User</button>
    </div>
  );
};

export default UserForm;
