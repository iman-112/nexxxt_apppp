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
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[45px]  text-center text-primary"> Müştəri fikirləri</Title>

      <Slider {...settings}>
        <CustomerItem />

        <CustomerItem />
        <CustomerItem />

        <CustomerItem />
      </Slider>
    </div>
  );
};

export default Customers;
