import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Logo = () => {
  return (
    < >
   


   <Link href="/" >
    <div   className='relative'> 
      
    <Image src="/images/cans-logo.png"  alt="" height={100} width={130} className="pointer-events-none"  />  
 
      </div>  
   
      </Link>
   

    
    </>
  )
}

export default Logo