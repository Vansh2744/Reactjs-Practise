import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MyContext from "./context/MyContext.tsx";
import ProfileContext from "./components/ProfileContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ProfileContext>
    <App />
  </ProfileContext>,
);
