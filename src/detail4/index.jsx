import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./../components/Navbar"
import Footer from './../components/Footer';
import Details from "./details";

  export default function Resep() {
    return (
      <>
      <Navbar/>
      <Details/>
      <Footer/>
      </>
    );
  }