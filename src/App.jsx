import { useState } from 'react'
import  CollapsibleExample  from './Components/NavBar'
import Home from './pages/Home'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CollapsibleExample/>
    <Home/>
    </>
  )
}

export default App
