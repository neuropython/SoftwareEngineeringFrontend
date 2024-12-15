import "./styles/global.css";
import Navbar from "./components/bars/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ChatPage from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import LoginBar from "./components/bars/loginBar/LoginBar";
import { AuthProvider } from "./api/AuthContext";
import { UserProvider } from "./api/UserContext";


function App() {

  return (
      <div>
        <UserProvider>
        <AuthProvider>
        <LoginBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} /> 
        </Routes>
        </AuthProvider>
        </UserProvider>
      </div>
  );
}


export default App;
