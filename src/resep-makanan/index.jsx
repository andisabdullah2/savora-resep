import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./../components/Navbar"
import Footer from './../components/Footer';
import Section1Resep from "./section1";
import Section2Resep from "./section2";
import Section3Resep from "./section3";

  export default function Resep() {
    return (
      <>
      <Navbar/>
      <Section1Resep/>
      <Section2Resep/>
      <Section3Resep/>
      <Footer/>
      </>
    );
  }