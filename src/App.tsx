import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import DiaryPage from "./pages/DiaryPage";
import ProgressPage from "./pages/ProgressPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </>
  );
}

export default App;
