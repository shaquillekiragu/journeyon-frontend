import { Routes, Route } from "react-router-dom";
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
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPageV2  />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<PrivateRoute><Homepage /></PrivateRoute>} />
      <Route path="/diary" element={<PrivateRoute><DiaryPage /></PrivateRoute>} />
      <Route path="/progress" element={<PrivateRoute><ProgressPage /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
