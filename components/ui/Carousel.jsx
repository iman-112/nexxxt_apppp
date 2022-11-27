import Image from "next/image";
import React from "react";
import Title from "../ui/Title";
import Slider from "react-slick"

const Carousel = () => {

  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1, 
    slidesToScrool:1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:7000,


  }
  return (
    <div className="h-screen  w-full  -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="relative h-full w-full ">
          <Image 
            src="/images/vector.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            
          />
        </div>
      </div>
        <Slider {...settings}>
      <d iv>
      <div className=" mt-48 container mx-auto text-white  flex flex-col items-start gap-y-8  ">
        <Title addClass="text-5xl">Lorem, ipsum dolor.</Title>
        <p className="text-sm sm:w-2/5 w-full">
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <button className="btn-primary">Tələb et</button>
      </div>
      </d>
      <div>
      <div className=" mt-48  container mx-auto text-white  flex flex-col items-start gap-y-8  ">
        <Title addClass="text-5xl">Lorem, ipsum dolor.</Title>
        <p className="text-sm sm:w-2/5 w-full">
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <button className="btn-primary">Tələb et</button>
      </div>
      </div>

        </Slider>
      
    </div>
  );
};

export default Carousel;