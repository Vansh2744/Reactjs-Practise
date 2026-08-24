import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const CurrentUser = () => {
  const id = useSelector((state: RootState) => state.currentUser.id);
  const email = useSelector((state: RootState) => state.currentUser.email);
  return (
    <div>
      <h3>ID: {id}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default CurrentUser;
