import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import AboutSection from './components/AboutSection'
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

    </>
  )
}

export default App
