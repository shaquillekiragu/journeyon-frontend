import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserProvider from "./contexts/UserContext";
import { ProgressProvider } from "./contexts/ProgressContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </UserProvider>
  </BrowserRouter>
);
