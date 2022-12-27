import Image from 'next/image';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import { GiCancel} from "react-icons/gi"
import {FaWhatsapp} from "react-icons/fa"
import Link from 'next/link';
import {FiPhoneCall , FiMail} from "react-icons/fi"
const Search = ({setIsSearchModal}) => {
  return (
    <div className='fixed w-screen h-screen  z-50 top-0 left-0 after:content-[" "] after:w-screen after:h-screen after:bg-primary after:absolute after:top-0 after:left-0 first-of-type:h-screen grid after:opacity-60 place-content-center'>
    <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false) }>
    <div className='w-full h-full grid place-content-center relative'>
    <div className="relative z-50 md:w-[600px] w-[370px] bg-white border p-10 rounded-3xl text-primary">
        <Title addClass="text-[40px] text-center text-primary p-5 text-primary"> Əlaqə</Title>
        <div className=" w-full flex flex-col h-max">
        <Link href="/" className='text-center mb-2  rounded-md border-2 p-2 text-white hover:border-hover bg-primary  transition-all cursor pointer relative '>
        
          <span className='text-[20px] sm:text-[25px] '> 
          <FaWhatsapp className='absolute bottom-3 left-1' /> 
          WhatsApp </span>
        </Link>
        <Link href="/" className='text-center mb-2  rounded-md border-2 p-2 text-white hover:border-hover bg-primary  transition-all cursor pointer relative '>
          <span className='text-[20px] sm:text-[25px] '>  
          <FiPhoneCall className='absolute bottom-3 left-1' /> Tel: 051-43343-65 </span>
        </Link>
        <Link href="/" className='text-center mb-2  rounded-md border-2 p-2 text-white hover:border-hover bg-primary  transition-all cursor pointer relative '>
          <span className='text-[20px] sm:text-[25px] '> 
          <FiMail className='absolute bottom-3 left-1' />  
          canssweb@gmail.com</span>
        </Link>
       
        
        </div>
        <div>
            
            <button className='absolute  top-4 right-4 rounded-full  transition-all'
            onClick={() => setIsSearchModal(false)}
            >
                <GiCancel size={25} className=' transition-all hover:text-hover'/>
            </button>
        </div>
  </div>
    </div>
  </OutsideClickHandler>
    </div>
  )
}

export default Search