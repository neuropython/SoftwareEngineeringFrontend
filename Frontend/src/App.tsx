import { useState } from "react";
import "./styles/global.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ChatPage from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} /> 

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
