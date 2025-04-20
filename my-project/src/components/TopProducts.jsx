import React from 'react';
import Img1 from "../assets/shirt.png";
import Img2 from "../assets/shirt2.png";
import Img3 from "../assets/shirt3.png";
import {FaStar} from "react-icons/fa";


const ProductsData = [
    {
        id:1,
        img:Img1,
        title : "Casual Wear",
        description : "Stay comfy, look stylish — perfect for everyday vibes"
    },

    {
        id:2,
        img:Img2,
        title : "Printed Shirt",
        description : "Add a splash of personality with bold and fun prints"
    },

    {
        id:3,
        img:Img3,
        title : "Women Shirt",
        description : "Chic, comfy, and made to match your everyday style"
    },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for You!!</p>
                <h1 data-aos= "fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     numquam ex sit repellat voluptatibus? 
                      minima aspernatur quis odio tempore!</p>
            </div>
            {/* Body Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map( (data) => (
                        <div className='rounded-2xl bg-white dark:bg-gray-800 
                        hover:bg-black/80 dark:hover:bg-primary hover:text-white
                        relative shadow-xl duration-300 group max-w-[300px]'>
                            {/* Image section  */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="shirtimage"
                                className='max-w-[140px] block mx-auto transform 
                                -translate-y-20 group-hover:scale-105 duration-300
                                drop-shadow-md' />
                            </div>

                            {/* Details Section */}
                            <div className='p-4 text-center'>
                                {/* start ratings */}
                                <div className='w-full flex items-center justify-center gap-1'> 
                                    <FaStar className= "text-yellow-500" />
                                    <FaStar className= "text-yellow-500" />
                                    <FaStar className= "text-yellow-500" />
                                    <FaStar className= "text-yellow-500" />
                                </div> 
                                <h1 className='text-xl font-bold'>{data.title}</h1> 
                                <p
                                className='text-gray-500 group-hover:text-white duration-300 
                                text-sm line-clamp-2'>{data.description}</p>
                                <button 
                                 className='bg-primary hover:scale-105 duration-300 text-white py-2 px-4 
                                 rounded-full mt-4 group-hover:bg-white 
                                 group-hover:text-primary' 
                                //  onClick={handleOrderPopup}
                                >
                                     Order Now</button>

                            </div>

                        </div>

                    ))
                }


            </div>



        </div>
      
    </div>
  )
}

export default TopProducts;
