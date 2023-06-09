import { useState } from 'react'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./beranda/index";
import Resep from './resep-makanan';
import Tips from "./tips/index"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resep-makanan" element={<Resep />} />
    <Route path="/tips" element={<Tips />} />
 </Routes>
  )
}

export default App