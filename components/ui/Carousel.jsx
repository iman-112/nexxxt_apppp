import Image from "next/image";
import React from "react";
import Title from "../ui/Title";
import Slider from "react-slick"
import Link from "next/link"

import {FaWhatsapp} from "react-icons/fa"
const Carousel = () => {

  const settings = {
    dots:false,
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
        <Title addClass="text-5xl">Rəqəmsal marketinqi sınayın</Title>
        <p className="text-sm sm:w-2/5 w-full">
         Rəqəmsal marketinqin günü gündən böyüdüyü və inkişaf  etdiyi bir zamanda onlayn qalmaq şərt halına gəldi. Bu yolda sizlərə  biznesiniz üçün daha çox sıxlıq , görünürlük və satış qazandıracağıq.
        </p>
        <Link href="https://api.whatsapp.com/send?phone=994514334365&text=Salam%20.%20" target="_blank">
        <button className="btn-primary flex">
          <FaWhatsapp size={20} className="rounded-full bg-green-500 text-white mr-1 mt-[2px]"/>
          Tələb et</button>
          </Link>
      </div>
      </d>
      <div>
      <div className=" mt-48  container mx-auto text-white  flex flex-col items-start gap-y-8  ">
        <Title addClass="text-5xl">Əhəmiyyətli nəticələr əldə edin</Title>
        <p className="text-sm sm:w-2/5 w-full">
          Biznesinizdə müştəri bazanızı böyütmək , Markanızı dahada iləri səviyyələrə qaldırmaq və ən əsasıda müştəri axtarışına yoxda müştərinin sizi axtarıb tapmasına səbəb yaradın. Bu platformda bu nəticəyə gəlmək dahada ilham vericidir.
        </p>
        <Link href="https://api.whatsapp.com/send?phone=994773114834&text=Salam%20.%20" target="_blank">
        <button className="btn-primary flex">
          <FaWhatsapp size={20} className="rounded-full bg-green-500 text-white mr-1 mt-[2px]"/>
          Tələb et</button>
          </Link>
      </div>
      </div>

        </Slider>
      
    </div>
  );
};

export default Carousel;