import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./beranda/index";
import Resep from './resep-makanan';
import Tips from "./tips/index"
import Detail from "./detail"
import Detail2 from "./detail2"
import Detail3 from "./detail3"
import Detail4 from "./detail4"
import Detail5 from "./detail5"
import Detail6 from "./detail6"
import Detail7 from "./detail7"
import Detail8 from "./detail8"
import DetailTips from "./details-tips"
import TentangKami from "./tentang-kami";
import Kategori from './bahan-makanan';
import KategoriMakanan from './kategori-makanan';
import NaikBeratBadan from './naikberatbadan';
import KategoriMinuman from './kategori-minuman/sectionminuman';
import KategoriMakananPembuka from './makanan-pembuka';

function App() {

  return (
    
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path="/resep-makanan" element={<Resep />} />
    <Route path="/tips" element={<Tips />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/detail2" element={<Detail2 />} />
    <Route path="/detail3" element={<Detail3 />} />
    <Route path="/detail4" element={<Detail4 />} />
    <Route path="/detail5" element={<Detail5 />} />
    <Route path="/detail6" element={<Detail6 />} />
    <Route path="/detail7" element={<Detail7 />} />
    <Route path="/detail8" element={<Detail8 />} />
    <Route path="/detail-tips" element={<DetailTips />} />
    <Route path="/tentang-kami" element={<TentangKami />} />
    <Route path="/ayam" element={<Kategori />} />
    <Route path="/kategori-makanan" element={<KategoriMakanan />} />
    <Route path="/naik-berat-badan" element={<NaikBeratBadan />} />
    <Route path="/sectionminuman" element={<KategoriMinuman/>} />
    <Route path="/section" element={<KategoriMakananPembuka/>} />
    </Routes>
  )
}

export default App