import { Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import WelcomePage from "./pages/WelcomePage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import DiaryPage from "./pages/DiaryPage";
import ProgressPage from "./pages/ProgressPage";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";
import LoginPageV2 from "./pages/LoginPageV2";

function App() {
  return (
    <UserProvider>
      <ProgressProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </ProgressProvider>
    </UserProvider>
  );
}

export default App;
