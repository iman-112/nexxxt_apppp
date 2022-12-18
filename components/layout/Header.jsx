import { useState } from "react"
import Logo from "../ui/Logo"
import {FaUserAlt,FaShoppingCart ,FaSearch  } from "react-icons/fa"
import Search from "../ui/Search"
import { GiCancel, GiHamburgerMenu } from "react-icons/gi"
import { useRouter } from "next/router"
import Link from "next/link"
const Header = () => {
const [isSearchModal, setIsSearchModal] = useState(false);
const [isMenuModal, setIsMenuModal] = useState(false);

const router = useRouter();



  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent " : "bg-primary"}`}   id="main" >
     <div className="container mx-auto  flex justify-between text-link 
      items-center h-full">
       <Logo />
        <nav className={`sm:static absolute 
        top-0 left-0 sm:w-auto sm:h-auto w-full sm:text-white h-screen   sm:bg-transparent bg-primary  sm:flex hidden
        ${isMenuModal === true && " !grid place-content-center "} `}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center justify-end text-white">
          <li className="px-[5px] py-[20px] uppercase  hover:text-hover cursor-pointer">
            <Link href="/" onClick={() => setIsMenuModal(false)} className="text-[15px]">Ana Səhifə</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase  hover:text-hover cursor-pointer" >
            <Link href="/xidmetler  " onClick={() => setIsMenuModal(false)} className="text-[15px]" >Xidmətlər</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase  hover:text-hover cursor-pointer" >
            <Link href="/haqqimizda" onClick={() => setIsMenuModal(false)} className="text-[15px]">Haqqımızda</Link>
            </li  >
            <li className="px-[5px] py-[20px] uppercase  hover:text-hover cursor-pointer">
            <Link href="/elaqe" onClick={() => setIsMenuModal(false)} className="text-[15px]">əlaqə</Link>
            </li>
          </ul>
          {isMenuModal && (
          <button className='absolute  top-4 right-4 rounded-full  transition-all'
          onClick={() => setIsMenuModal(false)}
          >
              <GiCancel size={25} className=' transition-all hover:text-hover'/>
          </button>
    ) }
        </nav>
        <div className="flex gap-x-4 items-center">
     
  
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-hover transition-all cursor-pointer"  />
          </button>
          <Link href="https://api.whatsapp.com/send?phone=994514334365&text=Salam%20.%20" target="_blank" className="md:inline-block hidden ">
            <button className="btn-primary flex">
              
              Tələb et</button>
          </Link>
          <button className="sm:hidden inline-block" onClick={() => setIsMenuModal(true)}>
            <GiHamburgerMenu  className="text-xl hover:text-hover transition-all"/>
          </button>
        
        </div>
     </div>
      {isSearchModal &&   (
        <Search setIsSearchModal={setIsSearchModal} />
        
  )}
     </div>
   
  )
}

export default Header