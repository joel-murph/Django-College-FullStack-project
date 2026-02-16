
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hostel from './Pages/Hostel'
import Placements from './Pages/Placements'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
