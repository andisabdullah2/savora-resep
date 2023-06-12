import { useState } from 'react'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./beranda/index";
import Resep from './resep-makanan';
import Tips from "./tips/index"
import Detail from "./detail"
import DetailTips from "./details-tips"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resep-makanan" element={<Resep />} />
    <Route path="/tips" element={<Tips />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/detail-tips" element={<DetailTips />} />

 </Routes>
  )
}

export default App