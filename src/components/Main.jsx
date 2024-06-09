import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Services from "./Services";
import Photos from "./Photos";
import Footer from "./Footer";
import Details from "./Details";
import Carousels from "./Carousel";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Carousels />
      <Details />
      <Services />
      <Photos />
      <Footer />
    </>
  );
};

export default Main;
