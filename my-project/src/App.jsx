import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay:100
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      
      <>
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
      <Subscribe />
      < Product />
      <Testimonial />
      <Footer />
      </>
    </div>
  )
}

export default App
