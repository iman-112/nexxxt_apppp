import React, { useState } from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { Formik, useFormik } from 'formik';
import { reservationSchema } from "../schema/reservation";
import {BsCheck} from "react-icons/bs"
const Reservation = () => {
  const onSubmit = async( values , actions) =>{
      await new Promise((resolve) => setTimeout(resolve,4000));
      actions.resetForm()
  }



  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullname: "",
        phoneNumber: "",
        email: "",
        xidmet: "",
        elaveistek: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id:1,
      name:"fullname",
      type:"text",
      placeholder:"Adiniz",
      value: values.fullname,
      errorMessage: errors.fullname,
      touched: touched.fullname,
    },
    {
      id:2,
      name:"phoneNumber",
      type:"number",
      placeholder:"Telefon Nomresi",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,

    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Elektron adres",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,

    },
    {
      id:4,
      name:"xidmet",
      type:"text",
      placeholder:"Yararlanmaq istediyiniz xidmet",
      value: values.xidmet,
      errorMessage: errors.xidmet,
      touched: touched.xidmet,

    },
    {
      id:5,
      name:"elaveistek",
      type:"text",
      placeholder:"istediyiniz xidmet haqqinda",
      value: values.elaveistek,
      errorMessage: errors.elaveistek,
      touched: touched.elaveistek,

    },
  ]

const [ isSending , setisSending] = useState(false);
const [ isSend , setisSend ] = useState(false)


const handleClick = () =>{
  setisSending(true);
  setTimeout(() =>{
    setisSending(false);
    setisSend(true)
    setTimeout(() =>{
      setisSend(false)
    }, 1700)
  }, 2000)
} 
  return (
    <div className="container mx-auto py-12">
      <div >
      <form onSubmit={handleSubmit} className="text-center">
        <Title addClass="text-[40px] mb-10 text-primary"> Istək göndər </Title>
        <div className="w-80 lg:w-2/4 mx-auto flex flex-col gap-y-3 " >
         {inputs.map((input) => (
          <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
         ))}
        </div>
        <button type="submit"  
        className=" gap-[16px] mt-2 text-[#f9f9f9] bg-primary border rounded-lg p-0 w-[260px] h-[65px] text-lg cursor-pointer transition-all pointer-events-none opacity-70"


        disabled= {isSending || isSend}
        onClick={handleClick}
       > <span className="sub-rail"></span>
       <span className="sub-icon"></span>
       <span >
       {
        isSending 
        ? 'Göndərilir...'
        : isSend 
        ?' Uğurla göndərildi  ' 
        : 'İndi göndər'
       } </span>
       
       </button>
      </form>
      </div>
    
    </div>
  );
};

export default Reservation;
