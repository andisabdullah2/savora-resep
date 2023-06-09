import TopIklan from "./topiklan";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarauselBeranda from "./carausel";
import Bahan from "./bahan";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3Beranda from "./section3";
import Navbar from "./../components/Navbar"
import Footer from './../components/Footer';

  export default function Home() {
    return (
      <>
      <Navbar/>
      <TopIklan/>
      <CarauselBeranda/>
      <Bahan/>
      <Section1/>
      <Section2/>
      <Section3Beranda/>
      <Footer/>
      </>
    );
  }