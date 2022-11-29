import Link from 'next/link'
import React from 'react'
import { TbArrowMerge } from 'react-icons/tb'

const Logo = () => {
  return (
    <>
    <Link href="/" className='text-[2rem] font-caveot font-bold'>CansWeb   <span className="text-sm text-slate-400 pointer-events-none">v1.4.6</span>  </Link> 
    
    </>
  )
}

export default Logo