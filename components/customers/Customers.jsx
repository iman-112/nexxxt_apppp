import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
const Customers = () => {

  function NextBtn (props){
  const  { onClick} = props ;
    return(
      <button className="text-white absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full" onClick={onClick}><IoIosArrowForward/></button>

    )
  }
  function PrevBtn (props){
    const  { onClick} = props ;
      return(
        <button className="text-white absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full mr-4 " onClick={onClick}><IoIosArrowBack/></button>
  
      )
    }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    arrows:true,
    nextArrow: <NextBtn/ >,
    prevArrow: <PrevBtn /> ,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slideToShow:1,
          arrows:false,
        }
      }
    ]
  };
  return (
    <div className="container mx-auto mb-20 mt-12 ">
      <Title addClass="text-[45px]  text-center text-primary"> Web saytın ərsəyə gəlməsi</Title>

      <Slider {...settings}>
        <div className="mx-2">
      <div className="mt-5 mx-2 xs:text-center ">
      <div className="p-6 bg-primary text-white rounded-[5px]">
      <span className="text-lg font-semibold">1. Addım</span>
        <p className="mt-4">
         Müştərinin bizimlə əlaqəyə keçməsi  yaxud əlaqə yaratmaq istəyi ,qarşılıqlı ünsiyyətin yaradılaraq müştərinin istəyini tərəfimizdən aydınlaşdırmaq.
        </p>
     
     
      </div>
</div>
</div>
<div className="mx-2">
      <div className="mt-5 mx-2 xs:text-center ">
      <div className="p-6 bg-primary h-[140px] text-white rounded-[5px]">
      <span className="text-lg font-semibold">2.Addım</span>
        <p className="mt-4">
         Müştəriyə məhsulun planını  və qiymətini  təqdim etmək.
       
        </p>
     
     
      </div>
</div>
</div> <div className="mx-2 ">
      <div className="mt-5 mx-2 xs:text-center  ">
      <div className="p-6 bg-primary h-[140px] text-white rounded-[5px]">
      <span className="text-lg font-semibold">3.Addim</span>
        <p className="mt-4">
         Komandanın qoyulan planla məhsulu işləməsi və müştərinin razılıqı ilə canlıya alınması.
        </p>
     
     
      </div>
</div>
</div>
      </Slider>
    </div>
  );
};

export default Customers;
