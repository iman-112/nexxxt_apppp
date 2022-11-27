import Image from 'next/image';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import { GiCancel} from "react-icons/gi"

const Search = ({setIsSearchModal}) => {
  return (
    <div className='fixed w-screen h-screen  z-50 top-0 left-0 after:content-[" "] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 first-of-type:h-screen grid after:opacity-60 place-content-center'>
    <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false) }>
    <div className='w-full h-full grid place-content-center relative'>
    <div className="relative z-50 md:w-[600px] w-[370px] bg-white border p-10 rounded-3xl">
        <Title addClass="text-[40px] text-center"> Axtarış</Title>
        <input type="text"  placeholder='Search..' className='border-4 p-2 my-10 w-full' />
        <div>
            <ul >
                <li className='flex items-center justify-between p-1 hover:bg-primary hover:text-white transition-all cursor-pointer mb-2' >
                    <div className='relative flex '>
                        <Image src="/images/3.jpg"
                          alt='' 
                          width={48}
                          height={48}
                          />
                    </div>
                    <span className='font-bold'>
                        Web Saytların hazırlanması
                    </span>
                
                </li>
                <li className='flex items-center justify-between p-1 hover:bg-primary hover:text-white transition-all cursor-pointer mb-2' >
                    <div className='relative flex '>
                        <Image src="/images/3.jpg"
                          alt='' 
                          width={48}
                          height={48}
                          />
                    </div>
                    <span className='font-bold'>
                        Texniki Dəstək
                    </span>
                
                </li>
                <li className='flex items-center justify-between p-1 hover:bg-primary hover:text-white transition-all cursor-pointer mb-2' >
                    <div className='relative flex '>
                        <Image src="/images/3.jpg"
                          alt='' 
                          width={48}
                          height={48}
                          />
                    </div>
                    <span className='font-bold'>
      Web sayt Nədir?
                       </span>
                 
                </li>
                
            </ul>
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