import Link from 'next/link'
import React from 'react'
import { GiNetworkBars } from 'react-icons/gi'

const Logo = () => {
  return (
    < >
   
    <Link href="/" className='text-[2rem] font-caveot font-bold flex items-center'> CansWeb   <span className="text-[11px] text-slate-400 pointer-events-none ml-1 items-end mt-3">v1.4.8</span>  </Link> 
    
    </>
  )
}

export default Logo