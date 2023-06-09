import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./../components/Navbar"
import Footer from './../components/Footer';
import CarouselTips from "./carousel";
import Section1Tips from "./section1";

  export default function Resep() {
    return (
      <>
      <Navbar/>
      <CarouselTips/>
      <Section1Tips/>
      <Footer/>
      </>
    );
  }