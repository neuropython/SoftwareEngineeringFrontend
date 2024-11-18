import { useState } from 'react'
import './styles/global.css'
import  Navbar  from './components/Navbar'
import  Footer  from './components/Footer'
import  ChatFooter  from './components/ChatFooter'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>        
        {/* <ChatFooter /> */}
        < Footer />
    </div>
  )
}

export default App
