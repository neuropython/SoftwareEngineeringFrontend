import { useState } from 'react'
import './styles/global.css'
import  Navbar  from './components/Navbar'
import  Footer  from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />

        < Footer />
    </div>
  )
}

export default App
