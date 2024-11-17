import { useState } from 'react'
import './styles/global.css'
import  Navbar  from './components/Navbar'
import  Footer  from './components/Footer'
import  ChatFooter  from './components/ChatFooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <ChatFooter />
        < Footer />
    </div>
  )
}

export default App
