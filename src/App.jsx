import { useState } from 'react'
import  CollapsibleExample  from './Components/NavBar'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SoftwareDevelopment from './Components/software-development';
import  Contact from './pages/contact.jsx';
import Aboutus from './Components/About_us.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
   
    <Router>
    <CollapsibleExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus ' element={<Aboutus/>}/>
        <Route path='/contact' element={< Contact/>}/>
        <Route path="/software-development" element={<SoftwareDevelopment />} />
      </Routes>
    </Router> 
    </>
  )
}

export default App
