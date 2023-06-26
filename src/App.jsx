import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./beranda/index";
import Resep from './resep-makanan';
import Tips from "./tips/index"
import Detail from "./detail"
import DetailTips from "./details-tips"
import TentangKami from "./tentang-kami";
import Kategori from './bahan-makanan';
import KategoriMakanan from './kategori-makanan';
import NaikBeratBadan from './naikberatbadan';

function App() {

  return (
    
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path="/resep-makanan" element={<Resep />} />
    <Route path="/tips" element={<Tips />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/detail-tips" element={<DetailTips />} />
    <Route path="/tentang-kami" element={<TentangKami />} />
    <Route path="/ayam" element={<Kategori />} />
    <Route path="/kategori-makanan" element={<KategoriMakanan />} />
    <Route path="/naik-berat-badan" element={<NaikBeratBadan />} />

    </Routes>
  )
}

export default App