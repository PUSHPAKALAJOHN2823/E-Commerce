import React from 'react';
import Image1 from '../assets/women.png';
import Image2 from '../assets/shopping.png';
import Image3 from '../assets/sale.png';
import Slider from "react-slick";


const ImageList = [
    {
        id: 1,
        img : Image1,
        title : "Upto 50% off on Stylish Women's Wear",
        description : " We believe every woman deserves to feel fabulous. Our online dress store features carefully curated designs that blend comfort with class. With easy browsing, secure checkout, and responsive support—we make shopping a breeze!"
    },

    {
        id: 2,
        img : Image2,
        title : "Family Fashion for Everyone – Shop Together & Save More!",
        description : " Discover a wide range of stylish outfits for women, men, and kids – all in one place! From everyday essentials to festive wear, our family-friendly collection brings comfort, quality, and style to your wardrobe. Enjoy seamless shopping, secure checkout, and great deals for the whole family!"
    },

    {
        id:3,
        img : Image3,
        title: "This Week Only – Flat 70% Off Storewide!",
        description: "Don't miss out on our biggest sale of the season! Enjoy up to 70% off on a wide range of fashion for women, men, and kids. Limited time offer – shop your favorites before they're gone!"

    }


]


const Hero = () => {

    var settings = {
        dots : false,
        arrows : false,
        infinite : true,
        speed :800,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 4000,
        cssEase : "ease-in-out",
        pauseOnHover : false,
        pauseOnFocus : true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-200 flex justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200'>
        {/*Background Pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 
        absolute -top-1/2 right-0 rounded-3xl rotate-45  -z-9' >
        </div>

        {/*Hero Section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((data) => (
                    <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/*text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 
                    sm:pt-0 text-center sm:text-left order-2
                     sm:order-1 relative z-10'>
                        <h1 
                        data-aos = "zoom-out"
                        data-aos-duration = "500"
                        data-aos-delay = "true"
                        className='text-5xl sm:text-6xl lg:text-7xl 
                        font-bold'>
                            {data.title}
                        </h1>
                        <p 
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className='text-sm'>{data.description}</p>
                        <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300">
                        <button 
                         className='bg-gradient-to-r from-primary to-secondary
                         hover:scale-105 duration-200 text-white py-2 px-4 
                         rounded-full'> Order Now</button>
                        </div>                
                    </div>
                    {/* image section */}
                    <div className='order-1 sm:order-2'>
                        <div className='relative z-10'>
                            <img src={data.img} alt="" 
                            className='w-[300px] h-[300px] sm:h-[450px] 
                            sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                        </div>
                    </div>
                </div>
                </div>
                ))}
            
            </Slider>
            
        </div>
      
    </div>
  )
}

export default Hero;
