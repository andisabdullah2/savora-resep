import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./../components/Navbar";
import Footer from './../components/Footer';
import Section1 from "./section1";
// import Section2 from "./section2";



  export default function Kategori () {
    return (
      <>
      <Navbar/>
      <Section1/>
      {/* <Section2/> */}
      <Footer/>
      </>
    );
  }