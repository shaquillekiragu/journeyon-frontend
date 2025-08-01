import { Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import DiaryPage from "./pages/DiaryPage";
import ProgressPage from "./pages/ProgressPage";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import { useAuth } from "./contexts/UserContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <UserProvider>
      <ProgressProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={isLoggedIn ? <Homepage /> : <ErrorPage />}
          />
          <Route
            path="/diary"
            element={isLoggedIn ? <DiaryPage /> : <ErrorPage />}
          />
          <Route
            path="/progress"
            element={isLoggedIn ? <ProgressPage /> : <ErrorPage />}
          />
        </Routes>
      </ProgressProvider>
    </UserProvider>
  );
}

export default App;
