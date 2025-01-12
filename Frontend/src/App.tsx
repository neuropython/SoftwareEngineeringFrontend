import "./styles/global.css";
import Navbar from "./components/bars/navbar/Navbar";
import ChatPage from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoginBar from "./components/bars/loginBar/LoginBar";
import { AuthProvider } from "./api/AuthContext";
import { UserProvider } from "./api/UserContext";
import { ErrorProvider } from './components/popups/ErrorContext';


function App() {

  return (
      <div>
        <ErrorProvider>
        <UserProvider>
        <AuthProvider>
        <LoginBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        </AuthProvider>
        </UserProvider>
        </ErrorProvider>
      </div>
  );
}


export default App;
