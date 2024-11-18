import { useState } from 'react'
import './styles/global.css'
import  Navbar  from './components/Navbar'
import  Footer  from './components/Footer'
import ChatPage from './pages/ChatPage'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        </Routes>        
        < Footer />
    </div>
  )
}

export default App