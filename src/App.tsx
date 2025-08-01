import { Routes, Route, Navigate } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import { DataProvider } from "./contexts/DataContext";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import DiaryPage from "./pages/DiaryPage";
import ProgressPage from "./pages/ProgressPage";
import "./App.css";
import { useAuth } from "./contexts/UserContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <UserProvider>
      <DataProvider>
        <ProgressProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/home"
              element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />}
            />
            <Route
              path="/diary"
              element={isLoggedIn ? <DiaryPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/progress"
              element={isLoggedIn ? <ProgressPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </ProgressProvider>
      </DataProvider>
    </UserProvider>
  );
}

export default App;
